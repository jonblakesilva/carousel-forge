import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    quote,
    name,
    handle,
    avatarBase64,
    bgStyle = 'dark',
    format = 'square',
  } = req.body;

  if (!quote) return res.status(400).json({ error: 'Quote text required' });

  // Social media correct dimensions
  const dims: Record<string, { w: number; h: number; label: string }> = {
    square:   { w: 1080, h: 1080, label: 'Instagram / Facebook (1:1)' },
    portrait: { w: 1080, h: 1350, label: 'Instagram Portrait (4:5)' },
    twitter:  { w: 1200, h: 628,  label: 'Twitter / LinkedIn (1.91:1)' },
    story:    { w: 1080, h: 1920, label: 'Instagram / TikTok Story (9:16)' },
  };
  const { w, h } = dims[format] || dims.square;

  const schemes: Record<string, { bg: string; text: string; sub: string; accent: string; line: string }> = {
    dark:   { bg: '#1a1714', text: '#ffffff', sub: 'rgba(255,255,255,0.5)', accent: '#ffffff', line: 'rgba(255,255,255,0.08)' },
    light:  { bg: '#f8f7f4', text: '#1a1a1a', sub: '#666666', accent: '#1a1a1a', line: 'rgba(0,0,0,0.08)' },
    green:  { bg: '#1B4332', text: '#ffffff', sub: 'rgba(255,255,255,0.55)', accent: '#D4A017', line: 'rgba(212,160,23,0.15)' },
    gold:   { bg: '#0f2d22', text: '#D4A017', sub: 'rgba(212,160,23,0.55)', accent: '#D4A017', line: 'rgba(212,160,23,0.1)' },
    navy:   { bg: '#0a1628', text: '#ffffff', sub: 'rgba(255,255,255,0.5)', accent: '#4a9eff', line: 'rgba(74,158,255,0.1)' },
    charcoal: { bg: '#2a2a2a', text: '#ffffff', sub: 'rgba(255,255,255,0.5)', accent: '#ffffff', line: 'rgba(255,255,255,0.06)' },
  };
  const c = schemes[bgStyle] || schemes.dark;

  // Scale everything relative to 1080x1080 base
  const scale = Math.min(w, h) / 1080;
  const fs = (n: number) => Math.round(n * scale);

  // Font size based on quote length
  const qLen = quote.length;
  const quoteFontSize = fs(
    qLen > 250 ? 32 :
    qLen > 180 ? 38 :
    qLen > 120 ? 44 :
    qLen > 80  ? 52 :
    qLen > 50  ? 60 : 68
  );

  const padH = fs(format === 'twitter' ? 80 : 88);
  const padV = fs(format === 'twitter' ? 56 : 88);
  const avatarSize = fs(format === 'twitter' ? 56 : 72);
  const nameFontSize = fs(format === 'twitter' ? 22 : 24);
  const handleFontSize = fs(format === 'twitter' ? 16 : 17);
  const topBarH = fs(4);

  const avatarHtml = avatarBase64
    ? `<img src="data:image/jpeg;base64,${avatarBase64}" style="width:${avatarSize}px;height:${avatarSize}px;border-radius:50%;object-fit:cover;flex-shrink:0;border:${fs(2)}px solid ${c.line};" />`
    : `<div style="width:${avatarSize}px;height:${avatarSize}px;border-radius:50%;background:${c.accent}22;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:${fs(28)}px;color:${c.accent};font-weight:700;">${(name || 'J').charAt(0).toUpperCase()}</div>`;

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; -webkit-font-smoothing:antialiased; }
body { width:${w}px; height:${h}px; overflow:hidden; background:${c.bg}; }
</style>
</head>
<body>
<div style="width:${w}px;height:${h}px;background:${c.bg};display:flex;flex-direction:column;justify-content:center;padding:${padV}px ${padH}px;font-family:'Inter',system-ui,sans-serif;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Top accent bar -->
  <div style="position:absolute;top:0;left:0;right:0;height:${topBarH}px;background:${c.accent};opacity:0.6;"></div>

  <!-- Author row -->
  <div style="display:flex;align-items:center;gap:${fs(18)}px;margin-bottom:${fs(format==='twitter'?32:48)}px;">
    ${avatarHtml}
    <div style="display:flex;flex-direction:column;gap:${fs(3)}px;">
      <div style="font-size:${nameFontSize}px;font-weight:700;color:${c.text};letter-spacing:-0.3px;line-height:1.2;">${name || 'Jonathan Blake'}</div>
      ${handle ? `<div style="font-size:${handleFontSize}px;font-weight:500;color:${c.sub};">${handle.startsWith('@') ? handle : '@' + handle}</div>` : ''}
    </div>
  </div>

  <!-- Quote -->
  <div style="font-size:${quoteFontSize}px;font-weight:700;color:${c.text};line-height:${format === 'twitter' ? 1.3 : 1.35};letter-spacing:-0.5px;max-width:${w - padH * 2}px;">
    ${quote}
  </div>

  <!-- Bottom divider line -->
  <div style="position:absolute;bottom:${padV}px;left:${padH}px;right:${padH}px;height:1px;background:${c.line};"></div>

</div>
</body>
</html>`;

  res.status(200).json({ html, width: w, height: h, label: dims[format]?.label });
}
