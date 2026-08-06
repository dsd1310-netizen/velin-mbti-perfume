// Appends VELIN pop-up visit applications to a Google Sheet.
// Auth is done by hand-signing a JWT with the service account's private key
// (RSA-SHA256) and exchanging it for an access token — this avoids pulling in
// the full `googleapis` package for a single append call. Requires three env
// vars set in the Vercel project: GOOGLE_SERVICE_ACCOUNT_EMAIL,
// GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID.

const crypto = require('crypto');

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SHEET_RANGE = '신청내역!A:F';
const REGIONS = ['동구', '중구', '서구', '유성구', '대덕구', '대전 외 지역'];
const PHONE_RE = /^010-\d{4}-\d{4}$/;

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function getAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  if (!email || !privateKey) throw new Error('missing google service account credentials');

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

  const { name, age, phone, region, consent, website } = body;

  // Honeypot: bots that fill hidden fields get a fake success, no sheet write.
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const ageNum = Number(age);

  if (!trimmedName || trimmedName.length > 40) {
    res.status(400).json({ ok: false, error: '이름을 확인해주세요.' });
    return;
  }
  if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
    res.status(400).json({ ok: false, error: '나이를 확인해주세요.' });
    return;
  }
  if (typeof phone !== 'string' || !PHONE_RE.test(phone)) {
    res.status(400).json({ ok: false, error: '전화번호 형식을 확인해주세요. (010-0000-0000)' });
    return;
  }
  if (!REGIONS.includes(region)) {
    res.status(400).json({ ok: false, error: '지역을 선택해주세요.' });
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
        values: [[timestamp, trimmedName, ageNum, phone, region, '동의']],
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
