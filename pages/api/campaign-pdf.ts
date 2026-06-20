import type { NextApiRequest, NextApiResponse } from 'next';
import { logError } from '../../lib/errorLog';

async function getBrowser() {
  if (process.env.NODE_ENV === 'production' || process.env.NETLIFY || process.env.VERCEL) {
    const chromium = await import('@sparticuz/chromium');
    const puppeteer = await import('puppeteer-core');
    return puppeteer.default.launch({
      args: chromium.default.args,
      defaultViewport: chromium.default.defaultViewport,
      executablePath: await chromium.default.executablePath(),
      headless: true,
    });
  } else {
    try {
      const puppeteer = await import('puppeteer');
      return (puppeteer as any).default.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    } catch {
      const puppeteer = await import('puppeteer-core');
      return puppeteer.default.launch({
        headless: true,
        executablePath: process.env.CHROME_PATH || '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }
  }
}

function esc(s: any): string {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildBriefHTML(campaign: any, meta: { niche: string; month: string; offerTypeName: string; brandName: string }): string {
  const gold = '#C8A96E';
  const ink = '#1a1714';
  const muted = '#666';

  const valueStackRows = (campaign.valueStack || []).map((v: any) => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:${gold};font-weight:700;white-space:nowrap;">${esc(v.perceivedValue)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;">
        <div style="font-weight:700;color:${ink};">${esc(v.item)}</div>
        <div style="color:${muted};font-size:12px;font-style:italic;">${esc(v.description)}</div>
      </td>
    </tr>`).join('');

  const effortItems = (campaign.effortReduction || []).map((s: string) => `<li style="margin-bottom:6px;">${esc(s)}</li>`).join('');

  const smsRows = (campaign.sms || []).map((s: any) => `
    <div style="margin-bottom:10px;padding:10px 14px;background:#f8f7f4;border-left:3px solid ${gold};">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:${muted};margin-bottom:4px;">Touch ${esc(s.touch)} — ${esc(s.timing)}</div>
      <div style="font-style:italic;color:${ink};">${esc(s.message)}</div>
    </div>`).join('');

  const socialSection = (label: string, content: string) => content ? `
    <div style="margin-bottom:14px;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:${muted};margin-bottom:4px;font-weight:700;">${esc(label)}</div>
      <div style="font-size:13px;color:${ink};white-space:pre-wrap;line-height:1.5;">${esc(content)}</div>
    </div>` : '';

  const headlineItems = (campaign.magicHeadlines || []).map((h: string, i: number) => `<li style="margin-bottom:6px;font-style:italic;">${esc(h)}</li>`).join('');

  const giveawaySection = campaign.giveawayDetails ? `
    <div style="margin-top:24px;padding:18px;background:#fdf8ec;border:1px solid #e8d9b0;page-break-inside:avoid;">
      <h2 style="font-size:16px;margin:0 0 10px;color:${ink};">🏆 Giveaway Details</h2>
      <p><strong>Grand Prize:</strong> ${esc(campaign.giveawayDetails.grandPrize)}</p>
      <p><strong>Entry:</strong> ${esc(campaign.giveawayDetails.entryMechanism)}</p>
      <p><strong>Finalist Offer:</strong> ${esc(campaign.giveawayDetails.finalistOffer)}</p>
      <div style="margin-top:10px;">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:${muted};margin-bottom:6px;font-weight:700;">Callback Script</div>
        <div style="font-size:12px;line-height:1.6;background:white;padding:12px;border:1px solid #eee;white-space:pre-wrap;">${esc(campaign.giveawayDetails.callbackScript)}</div>
      </div>
    </div>` : '';

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page { margin: 0; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: ${ink}; margin: 0; padding: 0; }
  .page { padding: 48px 56px; }
  h1, h2, h3 { font-family: Georgia, serif; }
  table { width: 100%; border-collapse: collapse; }
</style>
</head>
<body>
  <div class="page">

    <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid ${gold};padding-bottom:16px;margin-bottom:24px;">
      <div>
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:${gold};font-weight:700;">${esc(meta.offerTypeName)} · ${esc(meta.niche)} · ${esc(meta.month)}</div>
        <h1 style="font-size:26px;margin:6px 0 0;color:${ink};">${esc(campaign.offerName)}</h1>
        <div style="font-size:14px;font-style:italic;color:${muted};margin-top:4px;">${esc(campaign.tagline)}</div>
      </div>
      <div style="text-align:right;font-size:11px;color:${muted};white-space:nowrap;">
        ${esc(meta.brandName)}<br/>
        ${new Date().toLocaleDateString()}
      </div>
    </div>

    <h2 style="font-size:16px;color:${ink};">Dream Outcome</h2>
    <p style="font-size:14px;line-height:1.6;">${esc(campaign.dreamOutcome)}</p>

    <h2 style="font-size:16px;color:${ink};margin-top:22px;">Value Stack</h2>
    <table>${valueStackRows}</table>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding:12px 14px;background:#0d0c08;color:white;">
      <div>
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.7;">Total Perceived Value</div>
        <div style="font-size:18px;text-decoration:line-through;opacity:0.6;">${esc(campaign.totalPerceivedValue)}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:${gold};">Your Price</div>
        <div style="font-size:24px;font-weight:700;">${esc(campaign.offerPrice)}</div>
      </div>
    </div>

    ${campaign.reasonWhy ? `<h2 style="font-size:16px;color:${ink};margin-top:22px;">Reason Why</h2><p style="font-size:13px;line-height:1.6;font-style:italic;">${esc(campaign.reasonWhy)}</p>` : ''}

    ${effortItems ? `<h2 style="font-size:16px;color:${ink};margin-top:22px;">What They Never Have to Do</h2><ul style="font-size:13px;line-height:1.5;">${effortItems}</ul>` : ''}

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-top:22px;">
      <div style="padding:10px;background:#f8f7f4;"><div style="font-size:10px;text-transform:uppercase;color:${muted};margin-bottom:4px;font-weight:700;">⏰ Urgency</div><div style="font-size:12px;">${esc(campaign.urgency)}</div></div>
      <div style="padding:10px;background:#f8f7f4;"><div style="font-size:10px;text-transform:uppercase;color:${muted};margin-bottom:4px;font-weight:700;">🔒 Scarcity</div><div style="font-size:12px;">${esc(campaign.scarcity)}</div></div>
      <div style="padding:10px;background:#f8f7f4;"><div style="font-size:10px;text-transform:uppercase;color:${muted};margin-bottom:4px;font-weight:700;">✅ Guarantee</div><div style="font-size:12px;">${esc(campaign.guarantee)}</div></div>
    </div>

    <div style="page-break-before:always;"></div>

    <h2 style="font-size:16px;color:${ink};">Email</h2>
    <p style="font-size:13px;"><strong>Subject:</strong> ${esc(campaign.email?.subject)}</p>
    <p style="font-size:13px;"><strong>Preview:</strong> ${esc(campaign.email?.preheader)}</p>
    <div style="font-size:13px;line-height:1.6;white-space:pre-wrap;background:#f8f7f4;padding:14px;margin-top:8px;">${esc(campaign.email?.body)}</div>

    <h2 style="font-size:16px;color:${ink};margin-top:22px;">SMS Sequence</h2>
    ${smsRows}

    <h2 style="font-size:16px;color:${ink};margin-top:22px;">Social Posts</h2>
    ${socialSection('Facebook', campaign.facebook)}
    ${socialSection('Instagram', campaign.instagram)}
    ${socialSection('Nextdoor', campaign.nextdoor)}
    ${socialSection('Facebook Group', campaign.facebookGroup)}
    ${socialSection('Google Business Profile', campaign.gmb)}

    ${giveawaySection}

    ${headlineItems ? `<h2 style="font-size:16px;color:${ink};margin-top:22px;">Headline Variations</h2><ul style="font-size:13px;">${headlineItems}</ul>` : ''}

    ${campaign.ghlNotes ? `<h2 style="font-size:16px;color:${ink};margin-top:22px;">GHL Implementation Notes</h2><p style="font-size:13px;line-height:1.6;">${esc(campaign.ghlNotes)}</p>` : ''}

    <div style="margin-top:40px;padding-top:14px;border-top:1px solid #ddd;font-size:10px;color:${muted};text-align:center;">
      Generated by CarouselForge Campaign Engine · ${esc(meta.brandName)}
    </div>

  </div>
</body>
</html>`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { campaign, niche, month, offerTypeName, brandName } = req.body;
  if (!campaign) return res.status(400).json({ error: 'No campaign data provided' });

  let browser;
  try {
    browser = await getBrowser();
    const page = await browser.newPage();
    const html = buildBriefHTML(campaign, {
      niche: niche || '',
      month: month || '',
      offerTypeName: offerTypeName || '',
      brandName: brandName || 'CarouselForge',
    });
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="campaign-brief-${(niche || 'campaign').toLowerCase().replace(/\s+/g, '-')}.pdf"`);
    res.status(200).send(pdfBuffer);
  } catch (error) {
    if (browser) { try { await browser.close(); } catch {} }
    console.error('PDF generation error:', error);
    const message = error instanceof Error ? error.message : String(error);
    await logError({ route: '/api/campaign-pdf', message: 'PDF generation failed', details: message, requestBody: { niche, month, offerTypeName } });
    res.status(500).json({ error: 'PDF generation failed', details: message, retryable: true });
  }
}
