export interface CardData {
  type: 'cover' | 'lesson' | 'example' | 'quote' | 'cta' | 'checklist' | 'myth' | 'stat' | 'step' | 'problem' | 'solution' | 'hot-take' | 'story' | 'quick-win' | 'infographic';
  slideNumber?: number;
  totalSlides?: number;
  headline?: string;
  subheadline?: string;
  body?: string;
  bullets?: string[];
  checks?: string[];
  lesson?: string;
  lessonLabel?: string;
  quote?: string;
  author?: string;
  tag?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaUrl?: string;
  brandName?: string;
  myth?: string;
  truth?: string;
  stat?: string;
  statLabel?: string;
  stepNumber?: number;
  infoItems?: { label: string; value: string; desc?: string }[];
}

export function generateCardHTML(card: CardData, bgColor = '#F5F0E8', inkColor = '#0D0D0D', logoBase64 = ''): string {
  const accent = inkColor === '#F5F0E8' ? '#C8A96E' : inkColor;
  const mutedColor = inkColor === '#F5F0E8' ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
  const invertBg = inkColor;
  const invertInk = bgColor;

  const baseStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Oswald:wght@300;400;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width:1080px; height:1080px; background:${bgColor}; font-family:'EB Garamond',Georgia,serif; color:${inkColor}; overflow:hidden; position:relative; }
    .card { width:1080px; height:1080px; position:relative; display:flex; flex-direction:column; padding:68px; background:${bgColor}; }
    .border-outer { position:absolute; inset:20px; border:2px solid ${inkColor}; pointer-events:none; z-index:10; opacity:0.9; }
    .border-inner { position:absolute; inset:27px; border:0.5px solid ${inkColor}; pointer-events:none; z-index:10; opacity:0.4; }
    .content { position:relative; z-index:5; flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:16px; }
    .content-left { position:relative; z-index:5; flex:1; display:flex; flex-direction:column; justify-content:center; padding:16px 0; }
    .eyebrow { font-family:'Oswald',sans-serif; font-size:13px; letter-spacing:0.35em; text-transform:uppercase; color:${mutedColor}; margin-bottom:18px; }
    .headline { font-family:'Playfair Display',serif; font-weight:900; font-size:78px; line-height:0.93; letter-spacing:-0.02em; text-transform:uppercase; color:${inkColor}; margin-bottom:22px; }
    .headline.xl { font-size:92px; }
    .headline.lg { font-size:78px; }
    .headline.md { font-size:62px; }
    .headline.sm { font-size:48px; }
    .headline.xs { font-size:38px; }
    .subhead { font-family:'EB Garamond',serif; font-size:22px; font-style:italic; line-height:1.45; color:${inkColor}; opacity:0.7; max-width:720px; margin-bottom:28px; }
    .body-text { font-family:'EB Garamond',serif; font-size:21px; line-height:1.6; color:${inkColor}; opacity:0.8; max-width:800px; }
    .divider { display:flex; align-items:center; gap:12px; margin:18px auto; width:100%; max-width:480px; }
    .divider-line { flex:1; height:1px; background:${inkColor}; opacity:0.3; }
    .divider-diamond { width:7px; height:7px; background:${inkColor}; transform:rotate(45deg); flex-shrink:0; opacity:0.6; }
    .divider-wide { max-width:700px; }
    .tag { font-family:'Oswald',sans-serif; font-size:10px; letter-spacing:0.4em; text-transform:uppercase; border:1px solid ${inkColor}; opacity:0.5; padding:5px 14px; display:inline-block; margin-bottom:20px; }
    .slide-counter { position:absolute; bottom:38px; right:54px; font-family:'Oswald',sans-serif; font-size:12px; letter-spacing:0.15em; color:${inkColor}; opacity:0.3; z-index:20; }
    .brand-footer { position:absolute; bottom:32px; left:54px; z-index:20; display:flex; align-items:center; gap:10px; }
    .brand-logo { height:32px; width:auto; opacity:0.5; object-fit:contain; }
    .brand-text { font-family:'Oswald',sans-serif; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:${inkColor}; opacity:0.35; }
    .ghost-num { font-family:'Playfair Display',serif; font-size:240px; font-weight:900; line-height:0.8; color:${inkColor}; opacity:0.04; position:absolute; right:32px; bottom:48px; z-index:1; pointer-events:none; user-select:none; }

    /* BULLETS */
    .bullets { list-style:none; text-align:left; max-width:720px; width:100%; margin:0 auto 20px; }
    .bullets li { font-family:'EB Garamond',serif; font-size:22px; line-height:1.4; padding:11px 0; border-bottom:0.5px solid ${inkColor}; border-bottom-opacity:0.1; display:flex; align-items:flex-start; gap:14px; color:${inkColor}; }
    .bullets li { border-bottom: 0.5px solid ${mutedColor}; }
    .bullets li:last-child { border-bottom:none; }
    .bullet-mark { font-family:'Oswald',sans-serif; font-size:12px; letter-spacing:0.1em; color:${inkColor}; opacity:0.4; margin-top:5px; flex-shrink:0; }

    /* CHECKLIST */
    .checks { list-style:none; text-align:left; max-width:720px; width:100%; margin:0 auto; }
    .checks li { font-family:'EB Garamond',serif; font-size:22px; line-height:1.35; padding:10px 0; border-bottom:0.5px solid ${mutedColor}; display:flex; align-items:flex-start; gap:16px; color:${inkColor}; }
    .checks li:last-child { border-bottom:none; }
    .check-box { width:22px; height:22px; border:1.5px solid ${inkColor}; flex-shrink:0; margin-top:2px; display:flex; align-items:center; justify-content:center; opacity:0.6; }
    .check-mark { font-size:13px; color:${inkColor}; }

    /* LESSON BOX */
    .lesson-box { background:${invertBg}; color:${invertInk}; padding:22px 36px; max-width:720px; width:100%; margin:18px auto 0; }
    .lesson-label { font-family:'Oswald',sans-serif; font-size:10px; letter-spacing:0.4em; text-transform:uppercase; color:${invertInk}; opacity:0.5; margin-bottom:8px; }
    .lesson-text { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; line-height:1.25; color:${invertInk}; }

    /* QUOTE */
    .pull-quote { font-family:'Playfair Display',serif; font-size:50px; font-weight:700; font-style:italic; line-height:1.15; color:${inkColor}; max-width:840px; position:relative; }
    .quote-mark { font-family:'Playfair Display',serif; font-size:200px; line-height:0; color:${inkColor}; opacity:0.06; position:absolute; top:80px; left:-56px; }
    .quote-author { font-family:'Oswald',sans-serif; font-size:15px; letter-spacing:0.22em; text-transform:uppercase; color:${inkColor}; opacity:0.5; margin-top:24px; }

    /* MYTH / TRUTH */
    .myth-block { background:${invertBg}; color:${invertInk}; padding:28px 40px; max-width:800px; width:100%; margin-bottom:16px; text-align:left; }
    .myth-label { font-family:'Oswald',sans-serif; font-size:10px; letter-spacing:0.4em; text-transform:uppercase; color:${invertInk}; opacity:0.5; margin-bottom:10px; }
    .myth-text { font-family:'EB Garamond',serif; font-size:24px; line-height:1.3; color:${invertInk}; text-decoration:line-through; opacity:0.7; }
    .truth-block { border:2px solid ${inkColor}; padding:28px 40px; max-width:800px; width:100%; text-align:left; }
    .truth-label { font-family:'Oswald',sans-serif; font-size:10px; letter-spacing:0.4em; text-transform:uppercase; color:${inkColor}; opacity:0.5; margin-bottom:10px; }
    .truth-text { font-family:'EB Garamond',serif; font-size:24px; line-height:1.3; color:${inkColor}; font-weight:600; }

    /* STAT */
    .stat-number { font-family:'Playfair Display',serif; font-size:180px; font-weight:900; line-height:0.85; color:${inkColor}; letter-spacing:-0.04em; }
    .stat-label { font-family:'Oswald',sans-serif; font-size:20px; letter-spacing:0.2em; text-transform:uppercase; color:${inkColor}; opacity:0.5; margin-top:16px; margin-bottom:28px; }

    /* STEP */
    .step-num-large { font-family:'Playfair Display',serif; font-size:140px; font-weight:900; line-height:1; color:${inkColor}; opacity:0.08; position:absolute; top:52px; left:52px; }
    .step-of { font-family:'Oswald',sans-serif; font-size:13px; letter-spacing:0.25em; text-transform:uppercase; color:${inkColor}; opacity:0.35; margin-bottom:20px; }

    /* PROBLEM / SOLUTION */
    .ps-label { font-family:'Oswald',sans-serif; font-size:11px; letter-spacing:0.45em; text-transform:uppercase; padding:6px 18px; border:1px solid ${inkColor}; display:inline-block; margin-bottom:20px; opacity:0.5; }
    .ps-body { font-family:'EB Garamond',serif; font-size:26px; line-height:1.5; color:${inkColor}; max-width:760px; text-align:center; }

    /* HOT TAKE */
    .hot-take-bar { width:60px; height:4px; background:${inkColor}; margin:0 auto 28px; }
    .hot-take-text { font-family:'Playfair Display',serif; font-size:56px; font-weight:900; line-height:1.05; color:${inkColor}; max-width:820px; font-style:italic; }
    .hot-take-proof { font-family:'EB Garamond',serif; font-size:20px; font-style:italic; color:${inkColor}; opacity:0.6; max-width:680px; margin-top:24px; line-height:1.5; }

    /* STORY */
    .story-body { font-family:'EB Garamond',serif; font-size:26px; line-height:1.65; color:${inkColor}; max-width:820px; text-align:left; }
    .story-callout { border-left:3px solid ${inkColor}; padding-left:28px; margin-top:24px; }

    /* QUICK WIN */
    .qw-number { font-family:'Playfair Display',serif; font-size:100px; font-weight:900; color:${inkColor}; opacity:0.08; position:absolute; top:56px; right:56px; line-height:1; }
    .qw-time { font-family:'Oswald',sans-serif; font-size:11px; letter-spacing:0.35em; text-transform:uppercase; color:${inkColor}; opacity:0.4; margin-bottom:12px; }

    /* CTA */
    .cta-box { border:2px solid ${inkColor}; padding:22px 52px; display:inline-block; font-family:'Oswald',sans-serif; font-size:17px; letter-spacing:0.25em; text-transform:uppercase; margin-top:28px; color:${inkColor}; }
    .cta-box-filled { background:${inkColor}; color:${bgColor}; padding:22px 52px; display:inline-block; font-family:'Oswald',sans-serif; font-size:17px; letter-spacing:0.25em; text-transform:uppercase; margin-top:28px; }
  `;

  const brandFooter = logoBase64
    ? `<div class="brand-footer"><img class="brand-logo" src="${logoBase64}" alt="logo" /></div>`
    : card.brandName
      ? `<div class="brand-footer"><span class="brand-text">${card.brandName}</span></div>`
      : '';
  const footer = `
    ${card.slideNumber && card.totalSlides ? `<div class="slide-counter">${card.slideNumber} / ${card.totalSlides}</div>` : ''}
    ${brandFooter}
  `;

  const divider = `<div class="divider"><div class="divider-line"></div><div class="divider-diamond"></div><div class="divider-line"></div></div>`;
  const dividerWide = `<div class="divider divider-wide"><div class="divider-line"></div><div class="divider-diamond"></div><div class="divider-line"></div></div>`;

  const headlineSize = (text: string) => {
    const l = text.length;
    if (l < 20) return 'xl';
    if (l < 35) return 'lg';
    if (l < 55) return 'md';
    if (l < 80) return 'sm';
    return 'xs';
  };

  let body = '';

  // ── COVER ──
  if (card.type === 'cover') {
    const hs = headlineSize(card.headline || '');
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.tag ? `<div class="tag">${card.tag}</div>` : ''}
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <h1 class="headline ${hs}">${card.headline || ''}</h1>
        ${divider}
        ${card.subheadline ? `<p class="subhead">${card.subheadline}</p>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── LESSON ──
  } else if (card.type === 'lesson') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      ${card.slideNumber ? `<div class="ghost-num">${card.slideNumber}</div>` : ''}
      <div class="content">
        ${card.tag ? `<div class="tag">${card.tag}</div>` : ''}
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <h2 class="headline md">${card.headline || ''}</h2>
        ${divider}
        ${card.bullets?.length ? `<ul class="bullets">${card.bullets.map(b => `<li><span class="bullet-mark">›</span><span>${b}</span></li>`).join('')}</ul>` : ''}
        ${card.lesson ? `<div class="lesson-box"><div class="lesson-label">${card.lessonLabel || 'The Lesson'}</div><div class="lesson-text">${card.lesson}</div></div>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── CHECKLIST ──
  } else if (card.type === 'checklist') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.tag ? `<div class="tag">${card.tag}</div>` : ''}
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <h2 class="headline sm">${card.headline || ''}</h2>
        ${divider}
        ${card.checks?.length ? `<ul class="checks">${card.checks.map(c => `<li><div class="check-box"><span class="check-mark">✓</span></div><span>${c}</span></li>`).join('')}</ul>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── MYTH / TRUTH ──
  } else if (card.type === 'myth') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <div class="myth-block">
          <div class="myth-label">The Myth</div>
          <div class="myth-text">${card.myth || ''}</div>
        </div>
        <div style="height:16px"></div>
        <div class="truth-block">
          <div class="truth-label">The Truth</div>
          <div class="truth-text">${card.truth || ''}</div>
        </div>
      </div>
      ${footer}
    </div>`;

  // ── STAT ──
  } else if (card.type === 'stat') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <div class="stat-number">${card.stat || ''}</div>
        <div class="stat-label">${card.statLabel || ''}</div>
        ${dividerWide}
        ${card.body ? `<p class="body-text" style="max-width:720px;text-align:center;">${card.body}</p>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── STEP ──
  } else if (card.type === 'step') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="step-num-large">${card.stepNumber || card.slideNumber || ''}</div>
      <div class="content">
        <div class="step-of">Step ${card.stepNumber || card.slideNumber} of ${card.totalSlides || '?'}</div>
        <h2 class="headline md">${card.headline || ''}</h2>
        ${divider}
        ${card.body ? `<p class="body-text" style="max-width:720px;text-align:center;">${card.body}</p>` : ''}
        ${card.bullets?.length ? `<ul class="bullets" style="margin-top:16px">${card.bullets.map(b => `<li><span class="bullet-mark">›</span><span>${b}</span></li>`).join('')}</ul>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── PROBLEM ──
  } else if (card.type === 'problem') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <div class="ps-label">The Problem</div>
        <h2 class="headline md" style="margin-bottom:24px">${card.headline || ''}</h2>
        ${divider}
        ${card.body ? `<p class="ps-body">${card.body}</p>` : ''}
        ${card.bullets?.length ? `<ul class="bullets" style="margin-top:16px;text-align:left;max-width:680px">${card.bullets.map(b => `<li><span class="bullet-mark">›</span><span>${b}</span></li>`).join('')}</ul>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── SOLUTION ──
  } else if (card.type === 'solution') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <div class="ps-label">The Solution</div>
        <h2 class="headline md" style="margin-bottom:24px">${card.headline || ''}</h2>
        ${divider}
        ${card.body ? `<p class="ps-body">${card.body}</p>` : ''}
        ${card.lesson ? `<div class="lesson-box" style="margin-top:24px"><div class="lesson-label">${card.lessonLabel || 'The Fix'}</div><div class="lesson-text">${card.lesson}</div></div>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── HOT TAKE ──
  } else if (card.type === 'hot-take') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <div class="hot-take-bar"></div>
        <p class="hot-take-text">${card.headline || ''}</p>
        ${divider}
        ${card.body ? `<p class="hot-take-proof">${card.body}</p>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── STORY ──
  } else if (card.type === 'story') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content-left" style="padding:48px 60px 0; justify-content:center">
        ${card.eyebrow ? `<div class="eyebrow" style="text-align:left;margin-bottom:14px">${card.eyebrow}</div>` : ''}
        ${card.headline ? `<h2 class="headline sm" style="text-align:left;margin-bottom:20px">${card.headline}</h2>` : ''}
        ${dividerWide}
        <p class="story-body">${card.body || ''}</p>
        ${card.lesson ? `<div class="story-callout"><p style="font-family:'EB Garamond',serif;font-size:22px;font-style:italic;color:${inkColor};opacity:0.75">${card.lesson}</p></div>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── QUICK WIN ──
  } else if (card.type === 'quick-win') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      ${card.slideNumber ? `<div class="qw-number">${card.slideNumber}</div>` : ''}
      <div class="content">
        ${card.tag ? `<div class="tag">${card.tag}</div>` : ''}
        <div class="qw-time">${card.eyebrow || 'Quick Win'}</div>
        <h2 class="headline md">${card.headline || ''}</h2>
        ${divider}
        ${card.body ? `<p class="body-text" style="max-width:720px;text-align:center">${card.body}</p>` : ''}
        ${card.lesson ? `<div class="lesson-box" style="margin-top:20px"><div class="lesson-label">${card.lessonLabel || 'Do This Now'}</div><div class="lesson-text">${card.lesson}</div></div>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── QUOTE ──
  } else if (card.type === 'quote') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        ${divider}
        <div style="position:relative;padding:0 60px">
          <span class="quote-mark">"</span>
          <p class="pull-quote">${card.quote || ''}</p>
        </div>
        ${card.author ? `<p class="quote-author">— ${card.author}</p>` : ''}
        ${divider}
      </div>
      ${footer}
    </div>`;

  // ── EXAMPLE / CASE STUDY ──
  } else if (card.type === 'example') {
    const hs = headlineSize(card.headline || '');
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.tag ? `<div class="tag">${card.tag}</div>` : ''}
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <h2 class="headline ${hs}" style="margin-bottom:16px">${card.headline || ''}</h2>
        ${divider}
        ${card.body ? `<p class="body-text" style="max-width:740px;text-align:center;margin-bottom:20px">${card.body}</p>` : ''}
        ${card.lesson ? `<div class="lesson-box"><div class="lesson-label">${card.lessonLabel || 'Why It Worked'}</div><div class="lesson-text">${card.lesson}</div></div>` : ''}
      </div>
      ${footer}
    </div>`;

  // ── INFOGRAPHIC ──
  } else if (card.type === 'infographic') {
    const items = card.infoItems || [];
    const cols = items.length > 4 ? 3 : items.length > 2 ? 2 : 1;
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <h2 class="headline sm" style="margin-bottom:16px">${card.headline || ''}</h2>
        ${dividerWide}
        <div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:16px;width:100%;max-width:860px;margin-top:8px">
          ${items.map(item => `
            <div style="border:1px solid ${inkColor};border-opacity:0.2;padding:20px 18px;text-align:center;background:${inkColor};background-opacity:0.04;">
              <div style="font-family:'Playfair Display',serif;font-size:42px;font-weight:900;color:${inkColor};line-height:1;margin-bottom:8px">${item.value}</div>
              <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:${inkColor};opacity:0.5;margin-bottom:6px">${item.label}</div>
              ${item.desc ? `<div style="font-family:'EB Garamond',serif;font-size:16px;font-style:italic;color:${inkColor};opacity:0.5;line-height:1.35">${item.desc}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
      ${footer}
    </div>`;

  // ── CTA ──
  } else if (card.type === 'cta') {
    body = `<div class="card">
      <div class="border-outer"></div><div class="border-inner"></div>
      <div class="content">
        ${card.eyebrow ? `<div class="eyebrow">${card.eyebrow}</div>` : ''}
        <h2 class="headline md">${card.headline || ''}</h2>
        ${divider}
        ${card.body ? `<p class="subhead" style="max-width:680px">${card.body}</p>` : ''}
        ${card.ctaText ? `<div class="cta-box-filled">${card.ctaText}</div>` : ''}
        ${card.ctaUrl ? `<p style="font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:0.2em;margin-top:14px;opacity:0.4;text-transform:uppercase">${card.ctaUrl}</p>` : ''}
      </div>
      ${footer}
    </div>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${baseStyles}</style></head><body>${body}</body></html>`;
}
