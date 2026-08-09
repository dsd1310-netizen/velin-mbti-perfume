// Appends VELIN pop-up visit applications to a Google Sheet.
// Auth is done by hand-signing a JWT with the service account's private key
// (RSA-SHA256) and exchanging it for an access token — this avoids pulling in
// the full `googleapis` package for a single append call. Requires two env
// vars set in the Vercel project: GOOGLE_SERVICE_ACCOUNT_JSON (the entire
// downloaded service-account key file, pasted as-is — JSON.parse resolves the
// escaped newlines inside `private_key` on its own, so there's no manual
// `\n`-replacement step to get wrong) and GOOGLE_SHEET_ID.

const crypto = require('crypto');

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SHEET_RANGE = '신청내역!A:F';
const PHONE_RE = /^010\d{8}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function loadServiceAccount() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('missing GOOGLE_SERVICE_ACCOUNT_JSON');
  const parsed = JSON.parse(raw);
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is missing client_email/private_key');
  }
  return parsed;
}

async function getAccessToken() {
  const { client_email: email, private_key: privateKey } = loadServiceAccount();

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: email,
    scope: SHEETS_SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  const signature = signer
    .sign(privateKey)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  const jwt = `${unsigned}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error('failed to obtain google access token');
  const data = await res.json();
  return data.access_token;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method not allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const { name, phone, pickupDate, pickupTime, consent, website } = body;

  // Honeypot: bots that fill hidden fields get a fake success, no sheet write.
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  const trimmedName = typeof name === 'string' ? name.trim() : '';

  if (!trimmedName || trimmedName.length > 40) {
    res.status(400).json({ ok: false, error: '이름을 확인해주세요.' });
    return;
  }
  const phoneDigits = typeof phone === 'string' ? phone.replace(/\D/g, '') : '';
  if (!PHONE_RE.test(phoneDigits)) {
    res.status(400).json({ ok: false, error: '전화번호를 확인해주세요. (예: 010-0000-0000)' });
    return;
  }
  const formattedPhone = `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 7)}-${phoneDigits.slice(7, 11)}`;
  const todayStr = new Date().toISOString().slice(0, 10);
  if (typeof pickupDate !== 'string' || !DATE_RE.test(pickupDate) || pickupDate < todayStr) {
    res.status(400).json({ ok: false, error: '수령 가능 날짜를 확인해주세요.' });
    return;
  }
  if (typeof pickupTime !== 'string' || !TIME_RE.test(pickupTime)) {
    res.status(400).json({ ok: false, error: '수령 가능 시간을 확인해주세요.' });
    return;
  }
  if (consent !== true) {
    res.status(400).json({ ok: false, error: '개인정보 수집·이용에 동의해주세요.' });
    return;
  }

  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    console.error('GOOGLE_SHEET_ID is not set');
    res.status(500).json({ ok: false, error: '잠시 후 다시 시도해주세요.' });
    return;
  }

  try {
    const accessToken = await getAccessToken();
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(SHEET_RANGE)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const timestamp = new Date().toISOString();

    const sheetRes = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[timestamp, trimmedName, formattedPhone, pickupDate, pickupTime, '동의']],
      }),
    });

    if (!sheetRes.ok) {
      console.error('sheets append failed:', await sheetRes.text());
      throw new Error('sheets append failed');
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: '잠시 후 다시 시도해주세요.' });
  }
};
