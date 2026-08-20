// ===== VELIN — MBTI Perfume Collection Data & Interactions =====

const MBTI_DATA = [
  // NT — 분석가
  { code: 'INTJ', group: 'NT', name: 'OBSIDIAN', nameKr: '옵시디언 · 전략가의 밤',
    desc: '불필요한 말은 없다. 차가운 나무향 속에 감춰진 명료한 확신, 밤을 지배하는 설계자를 위한 향.',
    top: '베르가못, 클로브', mid: '히노키, 클라리세이지', base: '시더우드, 오크모스' },
  { code: 'INTP', group: 'NT', name: 'CIPHER', nameKr: '사이퍼 · 논리 속의 여백',
    desc: '정답보다 질문을 사랑하는 사람. 서늘하고 투명한 아쿠아 우디가 사유의 공간을 넓힌다.',
    top: '라임, 베르가못', mid: '유칼립투스, 아쿠아', base: '베티버, 시더우드' },
  { code: 'ENTJ', group: 'NT', name: 'IMPERIUM', nameKr: '임페리움 · 지휘관의 결',
    desc: '방향을 정하고 앞서 걷는 사람. 묵직한 스파이스와 뿌리 깊은 나무향이 카리스마를 완성한다.',
    top: '자몽, 클로브', mid: '블랙페퍼, 제라늄', base: '오크모스, 패츌리' },
  { code: 'ENTP', group: 'NT', name: 'PARADOX', nameKr: '패러독스 · 발상의 스파크',
    desc: '예측 불가능함이 매력이 되는 사람. 통통 튀는 시트러스와 스파이시함이 균형을 이룬다.',
    top: '라임, 만다린', mid: '블랙페퍼, 버베나', base: '시더우드, 머스크' },

  // NF — 외교관
  { code: 'INFJ', group: 'NF', name: 'AURORA VEIL', nameKr: '오로라 베일 · 조용한 통찰',
    desc: '말없이 깊이 헤아리는 사람. 은은한 화이트 플로럴 아래 따뜻한 앰버가 위로를 건넨다.',
    top: '복숭아, 만다린', mid: '화이트로즈, 아이리스', base: '앰버, 샌달우드' },
  { code: 'INFP', group: 'NF', name: 'MOONFIG', nameKr: '문피그 · 몽상가의 정원',
    desc: '감정의 결을 소중히 여기는 이상주의자. 달콤한 무화과와 부드러운 바닐라가 여린 세계를 그린다.',
    top: '복숭아, 자몽', mid: '무화과, 프리지아', base: '바닐라, 오리스콘크리트' },
  { code: 'ENFJ', group: 'NF', name: 'LUMEN', nameKr: '루멘 · 곁을 밝히는 사람',
    desc: '타인을 먼저 살피는 다정한 리더. 햇살 같은 시트러스 플로럴이 온기를 전한다.',
    top: '만다린, 자몽', mid: '네롤리, 오렌지플라워', base: '앰버, 머스크' },
  { code: 'ENFP', group: 'NF', name: 'WILDFLOWER SPARK', nameKr: '와일드플라워 스파크 · 즉흥의 리듬',
    desc: '호기심 가득한 자유로운 영혼. 발랄한 과일향과 화사한 플로럴이 즉흥적인 매력을 그린다.',
    top: '블랙체리, 자몽', mid: '일랑일랑, 히야신스', base: '머스크, 바닐라' },

  // SJ — 관리자
  { code: 'ISTJ', group: 'SJ', name: 'ARCHIVE', nameKr: '아카이브 · 변하지 않는 결',
    desc: '약속을 지키는 사람의 향. 단정한 우디와 부드러운 바닐라가 신뢰감을 쌓는다.',
    top: '베르가못, 클로브', mid: '제라늄, 클라리세이지', base: '샌달우드, 바닐라' },
  { code: 'ISFJ', group: 'SJ', name: 'QUIET HEARTH', nameKr: '콰이엇 허스 · 말없는 헌신',
    desc: '곁에서 묵묵히 지키는 다정함. 따뜻한 가루향의 바닐라와 헬리오트로핀이 포근하게 감싼다.',
    top: '복숭아, 만다린', mid: '프리지아, 제라늄', base: '바닐라, 헬리오트로핀' },
  { code: 'ESTJ', group: 'SJ', name: 'CORNERSTONE', nameKr: '코너스톤 · 체계의 중심',
    desc: '원칙과 실행력으로 조직을 이끄는 사람. 견고한 우디 앰버가 신뢰를 완성한다.',
    top: '자몽, 클로브', mid: '블랙페퍼, 클라리세이지', base: '시더우드, 앰버' },
  { code: 'ESFJ', group: 'SJ', name: 'GATHER', nameKr: '개더 · 함께의 온도',
    desc: '모두를 살뜰히 챙기는 사람. 달콤한 플로럴과 따뜻한 머스크가 환대의 분위기를 만든다.',
    top: '만다린, 블랙체리', mid: '오렌지플라워, 히야신스', base: '바닐라, 머스크' },

  // SP — 탐험가
  { code: 'ISTP', group: 'SP', name: 'MECHANICA', nameKr: '메카니카 · 손끝의 감각',
    desc: '몸으로 부딪히며 배우는 사람. 시원한 아쿠아틱과 그린 우디가 실용적인 감성을 담는다.',
    top: '라임, 히노키', mid: '아쿠아, 유칼립투스', base: '베티버, 파인우드' },
  { code: 'ISFP', group: 'SP', name: 'SILENT BLOOM', nameKr: '사일런트 블룸 · 고요한 감각',
    desc: '조용히 아름다움을 알아보는 예술가. 부드러운 베리와 로즈가 섬세한 감성을 그린다.',
    top: '복숭아, 라임', mid: '블랙베리, 화이트로즈', base: '오리스콘크리트, 머스크' },
  { code: 'ESTP', group: 'SP', name: 'RUSH', nameKr: '러시 · 지금 이 순간',
    desc: '망설임 없이 뛰어드는 사람. 짜릿한 시트러스와 베리가 즉각적인 에너지를 전한다.',
    top: '라임, 블랙체리', mid: '블랙커런트, 오션', base: '머스크, 파인우드' },
  { code: 'ESFP', group: 'SP', name: 'SUNCATCH', nameKr: '선캐치 · 무대 위의 반짝임',
    desc: '존재만으로 분위기를 밝히는 사람. 화사한 트로피컬 플로럴이 경쾌한 즐거움을 담는다.',
    top: '자몽, 만다린', mid: '일랑일랑, 오렌지플라워', base: '바닐라, 앰버' },
];

const GROUP_META = {
  NT: { label: '분석가', sub: 'ANALYSTS',   bg1: '#2c3a2c', bg2: '#1a2419', accent: '#c9a86a' },
  NF: { label: '외교관', sub: 'DIPLOMATS',  bg1: '#4a2a35', bg2: '#2e1a22', accent: '#e3b8b0' },
  SJ: { label: '관리자', sub: 'SENTINELS',  bg1: '#4a3a22', bg2: '#2e2416', accent: '#e0c48f' },
  SP: { label: '탐험가', sub: 'EXPLORERS',  bg1: '#173a3d', bg2: '#10262a', accent: '#9adbd6' },
};

const DATA_BY_CODE = Object.fromEntries(MBTI_DATA.map(item => [item.code, item]));

// 기질군 조합(순서 무관) 10가지 — 16×16 = 120가지 궁합 결과의 헤드라인/문구를 여기서 전부 커버한다.
const PAIR_COPY = {
  'NT-NT': { title: '전략가들의 밀도', blurb: '말보다 논리로 통하는 두 사람. 정제된 우디와 앰버가 서로의 결을 짙게 덧그린다.' },
  'NF-NT': { title: '이성과 다정함의 접점', blurb: '냉철함과 다정함이 서로를 알아보는 관계. 시더우드의 단단함에 화이트 플로럴이 스며든다.' },
  'NT-SJ': { title: '설계와 실행의 결', blurb: '방향을 정하는 사람과 그 결을 지키는 사람. 흔들림 없는 우디 앰버가 신뢰를 쌓는다.' },
  'NT-SP': { title: '질서와 즉흥의 스파크', blurb: '치밀한 계획과 예측 불가능한 순간이 부딪히는 사이. 시트러스의 스파크가 묵직한 우디를 깨운다.' },
  'NF-NF': { title: '다정함의 배가', blurb: '말하지 않아도 서로를 헤아리는 두 사람. 부드러운 플로럴이 겹겹이 쌓여 오래 남는다.' },
  'NF-SJ': { title: '온기와 신뢰의 결', blurb: '곁에 있는 것만으로 안심이 되는 관계. 따뜻한 바닐라와 앰버가 편안하게 감싼다.' },
  'NF-SP': { title: '감성과 자유의 리듬', blurb: '즉흥적인 에너지에 다정함이 스며드는 사이. 발랄한 과일향에 부드러운 머스크가 생기를 더한다.' },
  'SJ-SJ': { title: '변하지 않는 약속', blurb: '한번 맺은 신뢰를 지키는 두 사람. 단정한 우디와 바닐라가 두 배로 단단해진다.' },
  'SJ-SP': { title: '안정과 모험의 균형', blurb: '지키는 사람과 뛰어드는 사람, 팽팽하지만 서로를 완성하는 사이. 안정적인 우디에 시트러스가 긴장감을 더한다.' },
  'SP-SP': { title: '즉흥의 폭발', blurb: '망설임 없이 서로에게 뛰어드는 두 사람. 짜릿한 시트러스와 베리가 강렬한 에너지로 터진다.' },
};
function pairKey(gA, gB) { return [gA, gB].sort().join('-'); }
function firstWord(str) { return str.split(',')[0].trim(); }

function renderCards(filter = 'all') {
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = MBTI_DATA.map(item => `
    <button type="button" class="mbti-card" data-group="${item.group}" data-code="${item.code}">
      <span class="code">${item.code}</span>
      <h3 class="name">${item.name}</h3>
      <p class="name-kr">${item.nameKr}</p>
      <p class="desc">${item.desc}</p>
      <div class="card-notes">
        <div><b>TOP</b>${item.top}</div>
        <div><b>MID</b>${item.mid}</div>
        <div><b>BASE</b>${item.base}</div>
      </div>
    </button>
  `).join('');
  applyFilter(filter);
}

function applyFilter(filter) {
  document.querySelectorAll('.mbti-card').forEach(card => {
    const show = filter === 'all' || card.dataset.group === filter;
    card.classList.toggle('is-hidden', !show);
  });
}

// ===== Scent Finder Modal =====

function renderPickerGrid() {
  const grid = document.getElementById('pickerGrid');
  grid.innerHTML = MBTI_DATA.map(item => `
    <button type="button" class="picker-btn" data-code="${item.code}">${item.code}</button>
  `).join('');
}

let lastFocusedEl = null;

function getFocusable(container) {
  return Array.from(container.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'))
    .filter(el => !el.disabled && el.offsetParent !== null);
}

function trapFocus(e, modal) {
  if (e.key !== 'Tab') return;
  const focusable = getFocusable(modal);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function openModal(id = 'scentModal') {
  lastFocusedEl = document.activeElement;
  const modal = document.getElementById(id);
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const focusable = getFocusable(modal);
  (focusable[0] || modal).focus();
}

function closeModal(id = 'scentModal') {
  document.getElementById(id).classList.remove('is-open');
  document.body.style.overflow = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}

function showPickerStep() {
  document.getElementById('stepPicker').hidden = false;
  document.getElementById('stepResult').hidden = true;
}

async function showResultStep(code) {
  document.getElementById('stepPicker').hidden = true;
  document.getElementById('stepResult').hidden = false;
  await drawResultCard(code, currentFormat);
}

// ===== Compatibility ("궁합") Modal =====

function renderCompatPickers() {
  const html = MBTI_DATA.map(item => `
    <button type="button" class="picker-btn" data-code="${item.code}">${item.code}</button>
  `).join('');
  document.getElementById('compatPickerA').innerHTML = html;
  document.getElementById('compatPickerB').innerHTML = html;
}

function showCompatPickerStep() {
  document.getElementById('compatStepPicker').hidden = false;
  document.getElementById('compatStepResult').hidden = true;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split('');
  let line = '';
  let curY = y;
  for (const ch of words) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line !== '') {
      ctx.fillText(line, x, curY);
      line = ch;
      curY += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, curY);
  return curY;
}

const LAYOUTS = {
  square: {
    H: 1080,
    eyebrowY: 100, eyebrowFont: 26,
    codeY: 226, codeFont: 110,
    groupY: 284, groupFont: 26,
    nameGap: 150, nameFont: 96,
    krGap: 224, krFont: 42,
    descGap: 288, descFont: 36, descLineHeight: 48,
    notesFallbackGap: 460, notesLabelFont: 30, notesValueFont: 30,
    notesLineHeight: 38, notesLabelGap: 46, notesTopGap: 42, notesDividerBottom: 80,
    footerNameOffset: 58, footerNameFont: 30,
    footerHandleOffset: 26, footerHandleFont: 20,
  },
  story: {
    H: 1920,
    eyebrowY: 140, eyebrowFont: 30,
    codeY: 300, codeFont: 130,
    groupY: 372, groupFont: 30,
    nameGap: 190, nameFont: 112,
    krGap: 280, krFont: 48,
    descGap: 360, descFont: 40, descLineHeight: 54,
    notesFallbackGap: 560, notesLabelFont: 34, notesValueFont: 34,
    notesLineHeight: 44, notesLabelGap: 52, notesTopGap: 48, notesDividerBottom: 90,
    footerNameOffset: 96, footerNameFont: 36,
    footerHandleOffset: 54, footerHandleFont: 23,
  },
};

async function drawResultCard(code, format = 'square') {
  const item = DATA_BY_CODE[code];
  const meta = GROUP_META[item.group];
  const layout = LAYOUTS[format] || LAYOUTS.square;
  const canvas = document.getElementById('resultCanvas');
  canvas.width = 1080;
  canvas.height = layout.H;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }

  // Measure how tall the content block will actually be (description/notes wrap
  // differently per item), then vertically center that block above the footer —
  // otherwise short descriptions leave a large empty gap on the tall 9:16 canvas.
  ctx.font = `400 ${layout.descFont}px "Noto Sans KR", sans-serif`;
  const descLines = measureWrappedLineCount(ctx, item.desc, W * 0.72);
  ctx.font = `400 ${layout.notesValueFont}px "Noto Sans KR", sans-serif`;
  const noteColW = W / 3 - 56;
  const noteLines = Math.max(
    measureWrappedLineCount(ctx, item.top, noteColW),
    measureWrappedLineCount(ctx, item.mid, noteColW),
    measureWrappedLineCount(ctx, item.base, noteColW)
  );
  // Shrink the perfume-name font just enough for long names (e.g. "WILDFLOWER
  // SPARK") to fit on one line without spilling past the canvas edges.
  const nameMaxWidth = W * 0.86;
  let nameFontSize = layout.nameFont;
  ctx.font = `600 ${nameFontSize}px "Playfair Display", serif`;
  while (ctx.measureText(item.name).width > nameMaxWidth && nameFontSize > layout.nameFont * 0.5) {
    nameFontSize -= 2;
    ctx.font = `600 ${nameFontSize}px "Playfair Display", serif`;
  }
  const descEndFromGroup = layout.descGap + (descLines - 1) * layout.descLineHeight;
  const notesYFromGroup = Math.max(descEndFromGroup + 50, layout.notesFallbackGap);
  const contentBottom = layout.groupY + notesYFromGroup
    + layout.notesDividerBottom + (noteLines - 1) * layout.notesLineHeight;
  const contentTop = layout.eyebrowY - layout.eyebrowFont;
  const footerTop = H - layout.footerNameOffset - layout.footerNameFont * 0.5;
  const yOffset = Math.max(0, (footerTop - (contentBottom - contentTop)) / 2 - contentTop);

  const eyebrowY = layout.eyebrowY + yOffset;
  const codeY = layout.codeY + yOffset;
  const groupY = layout.groupY + yOffset;

  // Background
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, meta.bg1);
  bg.addColorStop(1, meta.bg2);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Soft accent glow
  const glow = ctx.createRadialGradient(W * 0.85, H * 0.08, 40, W * 0.85, H * 0.08, W * 0.6);
  glow.addColorStop(0, hexToRgba(meta.accent, 0.28));
  glow.addColorStop(1, hexToRgba(meta.accent, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Orbit ellipse decoration
  ctx.save();
  ctx.translate(W * 0.5, H * 0.4);
  ctx.rotate(-0.1);
  ctx.strokeStyle = hexToRgba('#f6ece1', 0.18);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, W * 0.62, H * 0.21, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  drawSpark(ctx, W * 0.88, H * 0.15, 24, meta.accent);
  drawSpark(ctx, W * 0.1, H * 0.58, 15, '#f6ece1');

  // Eyebrow
  ctx.fillStyle = meta.accent;
  ctx.font = `600 ${layout.eyebrowFont}px "Noto Sans KR", sans-serif`;
  ctx.textAlign = 'center';
  ctx.letterSpacing = '4px';
  ctx.fillText('YOUR VELIN SCENT', W / 2, eyebrowY);
  ctx.letterSpacing = '0px';

  // MBTI code
  ctx.fillStyle = '#f6ece1';
  ctx.font = `700 ${layout.codeFont}px "Playfair Display", serif`;
  ctx.fillText(item.code, W / 2, codeY);

  // group label
  ctx.fillStyle = hexToRgba('#f6ece1', 0.62);
  ctx.font = `500 ${layout.groupFont}px "Noto Sans KR", sans-serif`;
  ctx.fillText(`${meta.label} · ${meta.sub}`, W / 2, groupY);

  // Perfume name
  ctx.fillStyle = '#f6ece1';
  ctx.font = `600 ${nameFontSize}px "Playfair Display", serif`;
  ctx.fillText(item.name, W / 2, groupY + layout.nameGap);

  // Korean name
  ctx.fillStyle = meta.accent;
  ctx.font = `400 ${layout.krFont}px "Jua", sans-serif`;
  ctx.fillText(item.nameKr, W / 2, groupY + layout.krGap);

  // Description (wrapped, centered)
  ctx.fillStyle = hexToRgba('#f6ece1', 0.86);
  ctx.font = `400 ${layout.descFont}px "Noto Sans KR", sans-serif`;
  ctx.textAlign = 'center';
  const descEndY = drawWrappedCentered(ctx, item.desc, W / 2, groupY + layout.descGap, W * 0.72, layout.descLineHeight);

  // Notes pyramid
  const notesY = Math.max(descEndY + 50, groupY + layout.notesFallbackGap);
  ctx.strokeStyle = hexToRgba('#f6ece1', 0.18);
  ctx.beginPath();
  ctx.moveTo(W * 0.1, notesY - layout.notesTopGap);
  ctx.lineTo(W * 0.9, notesY - layout.notesTopGap);
  ctx.stroke();
  drawNotesPyramid(ctx, W, notesY, meta, item, layout);

  // Footer / watermark
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f6ece1';
  ctx.font = `700 ${layout.footerNameFont}px "Playfair Display", serif`;
  ctx.fillText('VELIN', W / 2, H - layout.footerNameOffset);
  ctx.fillStyle = hexToRgba('#f6ece1', 0.6);
  ctx.font = `400 ${layout.footerHandleFont}px "Noto Sans KR", sans-serif`;
  ctx.fillText('@_velin_office', W / 2, H - layout.footerHandleOffset);
}

async function drawCompatCard(codeA, codeB) {
  const a = DATA_BY_CODE[codeA], b = DATA_BY_CODE[codeB];
  const gmA = GROUP_META[a.group], gmB = GROUP_META[b.group];
  const pair = PAIR_COPY[pairKey(a.group, b.group)];
  const layout = LAYOUTS.square;
  const canvas = document.getElementById('compatCanvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }

  // Background — blend of both groups' palettes
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, gmA.bg1);
  bg.addColorStop(0.4, gmA.bg2);
  bg.addColorStop(0.6, gmB.bg2);
  bg.addColorStop(1, gmB.bg1);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W * 0.5, H * 0.06, 40, W * 0.5, H * 0.06, W * 0.7);
  glow.addColorStop(0, hexToRgba(gmA.accent, 0.22));
  glow.addColorStop(1, hexToRgba(gmA.accent, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Orbit ellipse decoration
  ctx.save();
  ctx.translate(W * 0.5, H * 0.42);
  ctx.strokeStyle = hexToRgba('#f6ece1', 0.18);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, W * 0.64, H * 0.24, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  drawSpark(ctx, W * 0.86, H * 0.14, 22, gmA.accent);
  drawSpark(ctx, W * 0.13, H * 0.62, 14, '#f6ece1');

  ctx.textAlign = 'center';

  // Eyebrow
  ctx.fillStyle = gmA.accent;
  ctx.font = '600 24px "Noto Sans KR", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('YOUR VELIN DUO', W / 2, 130);
  ctx.letterSpacing = '0px';

  // Codes
  ctx.fillStyle = '#f6ece1';
  ctx.font = '700 58px "Playfair Display", serif';
  ctx.fillText(`${a.code}  ×  ${b.code}`, W / 2, 208);

  // Group label
  ctx.fillStyle = hexToRgba('#f6ece1', 0.62);
  ctx.font = '500 22px "Noto Sans KR", sans-serif';
  const groupLabel = a.group === b.group ? `${gmA.label} · ${gmA.label}` : `${gmA.label} × ${gmB.label}`;
  ctx.fillText(groupLabel, W / 2, 246);

  // Headline
  ctx.fillStyle = a.group === b.group ? gmA.accent : '#f6ece1';
  ctx.font = '400 52px "Jua", sans-serif';
  ctx.fillText(pair.title, W / 2, 384);

  // Blurb
  ctx.fillStyle = hexToRgba('#f6ece1', 0.86);
  ctx.font = '400 27px "Noto Sans KR", sans-serif';
  const blurbEndY = drawWrappedCentered(ctx, pair.blurb, W / 2, 444, W * 0.68, 38);

  // Duo name
  const duoY = blurbEndY + 56;
  ctx.fillStyle = '#f6ece1';
  ctx.font = '600 34px "Playfair Display", serif';
  ctx.fillText(`${a.name} × ${b.name}`, W / 2, duoY);

  // Notes pyramid — blended first note from each person per layer
  const notesY = duoY + 96;
  ctx.strokeStyle = hexToRgba('#f6ece1', 0.18);
  ctx.beginPath();
  ctx.moveTo(W * 0.1, notesY - layout.notesTopGap);
  ctx.lineTo(W * 0.9, notesY - layout.notesTopGap);
  ctx.stroke();
  const blended = {
    top: `${firstWord(a.top)} · ${firstWord(b.top)}`,
    mid: `${firstWord(a.mid)} · ${firstWord(b.mid)}`,
    base: `${firstWord(a.base)} · ${firstWord(b.base)}`,
  };
  drawNotesPyramid(ctx, W, notesY, gmA, blended, layout);

  // Footer / watermark
  ctx.fillStyle = '#f6ece1';
  ctx.font = `700 ${layout.footerNameFont}px "Playfair Display", serif`;
  ctx.fillText('VELIN', W / 2, H - layout.footerNameOffset);
  ctx.fillStyle = hexToRgba('#f6ece1', 0.6);
  ctx.font = `400 ${layout.footerHandleFont}px "Noto Sans KR", sans-serif`;
  ctx.fillText('@_velin_office', W / 2, H - layout.footerHandleOffset);
}

function drawNotesPyramid(ctx, W, y, meta, item, layout) {
  const cols = [
    { label: 'TOP', val: item.top },
    { label: 'MIDDLE', val: item.mid },
    { label: 'BASE', val: item.base },
  ];
  const colW = W / 3;
  cols.forEach((col, i) => {
    const cx = colW * i + colW / 2;
    if (i > 0) {
      ctx.strokeStyle = hexToRgba('#f6ece1', 0.14);
      ctx.beginPath();
      ctx.moveTo(colW * i, y - layout.notesTopGap);
      ctx.lineTo(colW * i, y + layout.notesDividerBottom);
      ctx.stroke();
    }
    ctx.textAlign = 'center';
    ctx.fillStyle = meta.accent;
    ctx.font = `700 ${layout.notesLabelFont}px "Playfair Display", serif`;
    ctx.fillText(col.label, cx, y);
    ctx.fillStyle = hexToRgba('#f6ece1', 0.85);
    ctx.font = `400 ${layout.notesValueFont}px "Noto Sans KR", sans-serif`;
    drawWrappedCentered(ctx, col.val, cx, y + layout.notesLabelGap, colW - 56, layout.notesLineHeight);
  });
}

function drawWrappedCentered(ctx, text, cx, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let lines = [];
  let line = '';
  words.forEach(word => {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, cx, y + i * lineHeight));
  return y + (lines.length - 1) * lineHeight;
}

function measureWrappedLineCount(ctx, text, maxWidth) {
  const words = text.split(' ');
  let lineCount = 1;
  let line = '';
  words.forEach(word => {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lineCount++;
      line = word;
    } else {
      line = test;
    }
  });
  return lineCount;
}

function drawSpark(ctx, cx, cy, size, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = hexToRgba(color, 0.9);
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI / 4) * i;
    const r = i % 2 === 0 ? size : size * 0.32;
    const x = Math.cos(angle) * r, y = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function downloadCanvasImage(code, format) {
  const canvas = document.getElementById('resultCanvas');
  const link = document.createElement('a');
  link.download = `VELIN_${code}_${format}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function canvasToBlob(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

async function shareResultImage(code, format) {
  const item = DATA_BY_CODE[code];
  const canvas = document.getElementById('resultCanvas');
  const blob = await canvasToBlob(canvas);
  if (!blob) return;
  const file = new File([blob], `VELIN_${code}_${format}.png`, { type: 'image/png' });
  const shareData = {
    files: [file],
    title: `VELIN | ${item.code} ${item.name}`,
    text: `내 MBTI 시그니처 향수는 ${item.name}(${item.nameKr})! VELIN에서 당신의 향도 찾아보세요.`,
  };

  if (navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  } else if (navigator.share) {
    try {
      await navigator.share({ title: shareData.title, text: shareData.text, url: location.href });
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  }
}

function downloadCompatImage(codeA, codeB) {
  const canvas = document.getElementById('compatCanvas');
  const link = document.createElement('a');
  link.download = `VELIN_DUO_${codeA}_${codeB}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

async function shareCompatImage(codeA, codeB) {
  const a = DATA_BY_CODE[codeA], b = DATA_BY_CODE[codeB];
  const canvas = document.getElementById('compatCanvas');
  const blob = await canvasToBlob(canvas);
  if (!blob) return;
  const file = new File([blob], `VELIN_DUO_${codeA}_${codeB}.png`, { type: 'image/png' });
  const shareData = {
    files: [file],
    title: `VELIN | ${a.code} × ${b.code} 궁합 향`,
    text: `우리 궁합 향은 ${a.name} × ${b.name}! VELIN에서 당신의 궁합도 확인해보세요.`,
  };

  if (navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  } else if (navigator.share) {
    try {
      await navigator.share({ title: shareData.title, text: shareData.text, url: location.href });
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  }
}

// ===== Apply ("신청") Modal =====

function showApplyForm() {
  document.getElementById('applyStepForm').hidden = false;
  document.getElementById('applyStepDone').hidden = true;
  document.getElementById('applyError').hidden = true;
}

let currentCode = null;
let currentFormat = 'square';
let compatCodeA = null;
let compatCodeB = null;

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderPickerGrid();
  renderCompatPickers();

  // Hero "내 향수 찾기" button opens picker
  document.getElementById('findScentBtn').addEventListener('click', () => {
    openModal();
    showPickerStep();
  });

  // Modal close (X button + overlay click)
  const overlay = document.getElementById('scentModal');
  document.getElementById('modalClose').addEventListener('click', () => closeModal());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  const compatOverlay = document.getElementById('compatModal');
  document.getElementById('compatModalClose').addEventListener('click', () => closeModal('compatModal'));
  compatOverlay.addEventListener('click', (e) => {
    if (e.target === compatOverlay) closeModal('compatModal');
  });

  const applyOverlay = document.getElementById('applyModal');
  document.getElementById('applyModalClose').addEventListener('click', () => closeModal('applyModal'));
  applyOverlay.addEventListener('click', (e) => {
    if (e.target === applyOverlay) closeModal('applyModal');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (overlay.classList.contains('is-open')) closeModal();
    if (compatOverlay.classList.contains('is-open')) closeModal('compatModal');
    if (applyOverlay.classList.contains('is-open')) closeModal('applyModal');
  });

  // Picker grid → show result
  document.getElementById('pickerGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.picker-btn');
    if (!btn) return;
    currentCode = btn.dataset.code;
    showResultStep(currentCode);
  });

  // 16-collection grid cards → open modal directly at result step
  document.getElementById('cardGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.mbti-card');
    if (!card) return;
    currentCode = card.dataset.code;
    openModal();
    showResultStep(currentCode);
  });

  // Format toggle (1:1 square / 9:16 story)
  const formatToggle = document.getElementById('formatToggle');
  formatToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.format-btn');
    if (!btn || btn.dataset.format === currentFormat) return;
    currentFormat = btn.dataset.format;
    formatToggle.querySelectorAll('.format-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    if (currentCode) drawResultCard(currentCode, currentFormat);
  });

  // Result step actions
  document.getElementById('saveImageBtn').addEventListener('click', () => {
    if (currentCode) downloadCanvasImage(currentCode, currentFormat);
  });

  const shareBtn = document.getElementById('shareBtn');
  if (navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener('click', () => {
      if (currentCode) shareResultImage(currentCode, currentFormat);
    });
  }

  document.getElementById('backToPickerBtn').addEventListener('click', showPickerStep);

  // Compat: hero-level entry point
  document.getElementById('findMatchBtn').addEventListener('click', () => {
    openModal('compatModal');
    showCompatPickerStep();
  });

  // Compat: each grid keeps its own single selection
  function updateCompatGoBtn() {
    document.getElementById('compatGoBtn').disabled = !(compatCodeA && compatCodeB);
  }
  document.getElementById('compatPickerA').addEventListener('click', (e) => {
    const btn = e.target.closest('.picker-btn');
    if (!btn) return;
    compatCodeA = btn.dataset.code;
    document.getElementById('compatPickerA').querySelectorAll('.picker-btn').forEach(b => b.classList.toggle('is-active', b === btn));
    updateCompatGoBtn();
  });
  document.getElementById('compatPickerB').addEventListener('click', (e) => {
    const btn = e.target.closest('.picker-btn');
    if (!btn) return;
    compatCodeB = btn.dataset.code;
    document.getElementById('compatPickerB').querySelectorAll('.picker-btn').forEach(b => b.classList.toggle('is-active', b === btn));
    updateCompatGoBtn();
  });

  document.getElementById('compatGoBtn').addEventListener('click', async () => {
    if (!compatCodeA || !compatCodeB) return;
    document.getElementById('compatStepPicker').hidden = true;
    document.getElementById('compatStepResult').hidden = false;
    await drawCompatCard(compatCodeA, compatCodeB);
  });

  document.getElementById('compatBackBtn').addEventListener('click', showCompatPickerStep);

  document.getElementById('compatSaveBtn').addEventListener('click', () => {
    if (compatCodeA && compatCodeB) downloadCompatImage(compatCodeA, compatCodeB);
  });

  const compatShareBtn = document.getElementById('compatShareBtn');
  if (navigator.share) {
    compatShareBtn.hidden = false;
    compatShareBtn.addEventListener('click', () => {
      if (compatCodeA && compatCodeB) shareCompatImage(compatCodeA, compatCodeB);
    });
  }

  // Apply: hero-level entry point
  document.getElementById('applyBtn').addEventListener('click', () => {
    openModal('applyModal');
    showApplyForm();
  });

  // Can't ask for a pickup date before today.
  document.getElementById('applyDate').min = new Date().toISOString().slice(0, 10);

  document.getElementById('applyDoneBtn').addEventListener('click', () => closeModal('applyModal'));

  const applyForm = document.getElementById('applyForm');
  const applyErrorEl = document.getElementById('applyError');
  const applySubmitBtn = document.getElementById('applySubmitBtn');

  applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    applyErrorEl.hidden = true;

    if (!applyForm.reportValidity()) return;

    const name = document.getElementById('applyName').value.trim();
    const phoneDigits = document.getElementById('applyPhone').value.replace(/\D/g, '');
    const pickupDate = document.getElementById('applyDate').value;
    const pickupTime = document.getElementById('applyTime').value;
    const consent = document.getElementById('applyConsent').checked;
    const website = document.getElementById('applyWebsite').value;

    if (!/^010\d{8}$/.test(phoneDigits)) {
      applyErrorEl.textContent = '전화번호를 확인해주세요. (예: 010-0000-0000)';
      applyErrorEl.hidden = false;
      return;
    }
    const phone = `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 7)}-${phoneDigits.slice(7, 11)}`;
    if (!consent) {
      applyErrorEl.textContent = '개인정보 수집·이용에 동의해주세요.';
      applyErrorEl.hidden = false;
      return;
    }

    applySubmitBtn.disabled = true;
    applySubmitBtn.textContent = '신청 중...';

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, pickupDate, pickupTime, consent, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || '잠시 후 다시 시도해주세요.');

      document.getElementById('applyStepForm').hidden = true;
      document.getElementById('applyStepDone').hidden = false;
      applyForm.reset();
    } catch (err) {
      applyErrorEl.textContent = err.message || '잠시 후 다시 시도해주세요.';
      applyErrorEl.hidden = false;
    } finally {
      applySubmitBtn.disabled = false;
      applySubmitBtn.textContent = '신청하기';
    }
  });

  // Filter buttons
  const filterBar = document.getElementById('filterBar');
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    applyFilter(btn.dataset.filter);
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navOverlay = document.getElementById('navOverlay');

  function openNav() {
    mainNav.classList.add('is-open');
    navToggle.classList.add('is-open');
    navOverlay.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', '메뉴 닫기');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navOverlay.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '메뉴 열기');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('is-open')) closeNav(); else openNav();
  });
  navOverlay.addEventListener('click', closeNav);
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) closeNav();
  });

  // Header scroll state
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
