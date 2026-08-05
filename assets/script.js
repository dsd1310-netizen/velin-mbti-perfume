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
    top: '라임, 자몽', mid: '아쿠아, 유칼립투스', base: '베티버, 파인우드' },
  { code: 'ISFP', group: 'SP', name: 'SILENT BLOOM', nameKr: '사일런트 블룸 · 고요한 감각',
    desc: '조용히 아름다움을 알아보는 예술가. 부드러운 베리와 로즈가 섬세한 감성을 그린다.',
    top: '복숭아, 라임', mid: '블랙베리, 화이트로즈', base: '오리스콘크리트, 머스크' },
  { code: 'ESTP', group: 'SP', name: 'RUSH', nameKr: '러시 · 지금 이 순간',
    desc: '망설임 없이 뛰어드는 사람. 짜릿한 시트러스와 베리가 즉각적인 에너지를 전한다.',
    top: '라임, 블랙체리', mid: '블랙커런트, 버베나', base: '머스크, 파인우드' },
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

function openModal() {
  document.getElementById('scentModal').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('scentModal').classList.remove('is-open');
  document.body.style.overflow = '';
}

function showPickerStep() {
  document.getElementById('stepPicker').hidden = false;
  document.getElementById('stepResult').hidden = true;
}

async function showResultStep(code) {
  document.getElementById('stepPicker').hidden = true;
  document.getElementById('stepResult').hidden = false;
  await drawResultCard(code);
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

async function drawResultCard(code) {
  const item = DATA_BY_CODE[code];
  const meta = GROUP_META[item.group];
  const canvas = document.getElementById('resultCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }

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

  // Orbit ellipse decoration (framing the bottle)
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
  ctx.font = '600 24px "Noto Sans KR", sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '4px';
  ctx.fillText('YOUR VELIN SCENT', W / 2, 96);
  ctx.letterSpacing = '0px';

  // MBTI code
  ctx.fillStyle = '#f6ece1';
  ctx.font = '700 54px "Playfair Display", serif';
  ctx.fillText(item.code, W / 2, 160);

  // group label
  ctx.fillStyle = hexToRgba('#f6ece1', 0.62);
  ctx.font = '500 22px "Noto Sans KR", sans-serif';
  ctx.fillText(`${meta.label} · ${meta.sub}`, W / 2, 196);

  // Bottle illustration — the visual centerpiece
  const bottle = drawBottle(ctx, W / 2, 320, meta);

  // Perfume name
  ctx.fillStyle = '#f6ece1';
  ctx.font = '600 62px "Playfair Display", serif';
  ctx.fillText(item.name, W / 2, bottle.bottomY + 54);

  // Korean name
  ctx.fillStyle = meta.accent;
  ctx.font = '600 28px "Noto Serif KR", serif';
  ctx.fillText(item.nameKr, W / 2, bottle.bottomY + 94);

  // Description (wrapped, centered)
  ctx.fillStyle = hexToRgba('#f6ece1', 0.86);
  ctx.font = '400 26px "Noto Sans KR", sans-serif';
  ctx.textAlign = 'center';
  const descEndY = drawWrappedCentered(ctx, item.desc, W / 2, bottle.bottomY + 136, W * 0.72, 36);

  // Notes pyramid
  const notesY = Math.max(descEndY + 50, bottle.bottomY + 230);
  ctx.strokeStyle = hexToRgba('#f6ece1', 0.18);
  ctx.beginPath();
  ctx.moveTo(W * 0.1, notesY - 34);
  ctx.lineTo(W * 0.9, notesY - 34);
  ctx.stroke();
  drawNotesPyramid(ctx, W, notesY, meta, item);

  // Footer / watermark
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f6ece1';
  ctx.font = '700 30px "Playfair Display", serif';
  ctx.fillText('VELIN', W / 2, H - 58);
  ctx.fillStyle = hexToRgba('#f6ece1', 0.6);
  ctx.font = '400 20px "Noto Sans KR", sans-serif';
  ctx.fillText('@_velin_office', W / 2, H - 26);
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
}

function drawBottle(ctx, cx, topY, meta) {
  const bodyW = 250, bodyH = 360, radius = 26;
  const bodyX = cx - bodyW / 2, bodyY = topY;
  const capW = 104, capH = 50;
  const neckW = 54, neckH = 28;
  const neckY = bodyY - neckH;
  const capY = neckY - capH;

  // ground shadow
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.28)';
  ctx.beginPath();
  ctx.ellipse(cx, bodyY + bodyH + 16, bodyW * 0.42, 20, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // cap
  roundRectPath(ctx, cx - capW / 2, capY, capW, capH, 10);
  ctx.fillStyle = '#17170f';
  ctx.fill();
  roundRectPath(ctx, cx - capW / 2, capY, capW, capH * 0.42, 10);
  ctx.fillStyle = 'rgba(255,255,255,0.10)';
  ctx.fill();

  // neck
  ctx.fillStyle = 'rgba(246,236,225,0.32)';
  ctx.fillRect(cx - neckW / 2, neckY, neckW, neckH + 4);

  // body — clip to glass silhouette and paint liquid inside
  roundRectPath(ctx, bodyX, bodyY, bodyW, bodyH, radius);
  ctx.save();
  ctx.clip();

  const liquidTop = bodyY + bodyH * 0.14;
  const liquidGrad = ctx.createLinearGradient(0, liquidTop, 0, bodyY + bodyH);
  liquidGrad.addColorStop(0, hexToRgba(meta.accent, 0.92));
  liquidGrad.addColorStop(1, hexToRgba(meta.bg2, 0.96));
  ctx.fillStyle = liquidGrad;
  ctx.fillRect(bodyX, liquidTop, bodyW, bodyH);

  ctx.fillStyle = 'rgba(246,236,225,0.14)';
  ctx.fillRect(bodyX, bodyY, bodyW, liquidTop - bodyY);

  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.fillRect(bodyX, liquidTop - 2, bodyW, 3);

  // diagonal glass highlight streak
  ctx.save();
  ctx.translate(bodyX + bodyW * 0.26, 0);
  ctx.rotate(-0.22);
  ctx.fillStyle = 'rgba(255,255,255,0.14)';
  ctx.fillRect(-20, bodyY - 40, 40, bodyH + 80);
  ctx.restore();

  ctx.restore(); // release clip

  // glass outline
  roundRectPath(ctx, bodyX, bodyY, bodyW, bodyH, radius);
  ctx.strokeStyle = 'rgba(246,236,225,0.5)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // brand monogram plate
  const plateW = 116, plateH = 60;
  const plateY = bodyY + bodyH * 0.56;
  roundRectPath(ctx, cx - plateW / 2, plateY, plateW, plateH, 8);
  ctx.fillStyle = 'rgba(18,18,14,0.3)';
  ctx.fill();
  roundRectPath(ctx, cx - plateW / 2, plateY, plateW, plateH, 8);
  ctx.strokeStyle = 'rgba(246,236,225,0.4)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#f6ece1';
  ctx.font = '700 24px "Playfair Display", serif';
  ctx.textAlign = 'center';
  ctx.fillText('VELIN', cx, plateY + plateH / 2 + 8);

  return { bottomY: bodyY + bodyH + 26 };
}

function drawNotesPyramid(ctx, W, y, meta, item) {
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
      ctx.moveTo(colW * i, y - 32);
      ctx.lineTo(colW * i, y + 66);
      ctx.stroke();
    }
    ctx.textAlign = 'center';
    ctx.fillStyle = meta.accent;
    ctx.font = '700 22px "Playfair Display", serif';
    ctx.fillText(col.label, cx, y);
    ctx.fillStyle = hexToRgba('#f6ece1', 0.85);
    ctx.font = '400 22px "Noto Sans KR", sans-serif';
    drawWrappedCentered(ctx, col.val, cx, y + 36, colW - 56, 28);
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

function downloadCanvasImage(code) {
  const canvas = document.getElementById('resultCanvas');
  const link = document.createElement('a');
  link.download = `VELIN_${code}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function canvasToBlob(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

async function shareResultImage(code) {
  const item = DATA_BY_CODE[code];
  const canvas = document.getElementById('resultCanvas');
  const blob = await canvasToBlob(canvas);
  if (!blob) return;
  const file = new File([blob], `VELIN_${code}.png`, { type: 'image/png' });
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

let currentCode = null;

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderPickerGrid();

  // Hero "내 향수 찾기" button opens picker
  document.getElementById('findScentBtn').addEventListener('click', () => {
    openModal();
    showPickerStep();
  });

  // Modal close (X button + overlay click)
  const overlay = document.getElementById('scentModal');
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
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

  // Result step actions
  document.getElementById('saveImageBtn').addEventListener('click', () => {
    if (currentCode) downloadCanvasImage(currentCode);
  });

  const shareBtn = document.getElementById('shareBtn');
  if (navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener('click', () => {
      if (currentCode) shareResultImage(currentCode);
    });
  }

  document.getElementById('backToPickerBtn').addEventListener('click', showPickerStep);

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
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
  });
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mainNav.classList.remove('is-open'));
  });

  // Header scroll state
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
