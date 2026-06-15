import type { NextApiRequest, NextApiResponse } from 'next';
import { generateCardHTML, CardData } from '../../lib/cardTemplate';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { cards, bg = '#F5F0E8', ink = '#0D0D0D', logo = '', bgImage = '' }: { cards: CardData[]; bg?: string; ink?: string; logo?: string; bgImage?: string } = req.body;
  if (!cards || !Array.isArray(cards) || cards.length === 0) return res.status(400).json({ error: 'No cards provided' });

  let browser;
  try {
    browser = await getBrowser();
    const images: string[] = [];
    for (const card of cards) {
      const baseHtml = generateCardHTML(card, bg, ink, logo);
      // Inject bgImage as background overlay if provided
      const bgStyle = bgImage
        ? `body > div:first-child { background-image: url('${bgImage}') !important; background-size: cover !important; background-position: center !important; }`
        : '';
      const html = bgImage
        ? baseHtml.replace('</style>', bgStyle + '</style>')
        : baseHtml;
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
      await page.setContent(html, { waitUntil: 'networkidle0' });
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 500));
      const screenshot = await page.screenshot({ type: 'png', encoding: 'base64', clip: { x:0, y:0, width:1080, height:1080 } });
      images.push(`data:image/png;base64,${screenshot}`);
      await page.close();
    }
    res.status(200).json({ images });
  } catch (error) {
    console.error('Screenshot error:', error);
    res.status(500).json({ error: 'Failed to generate screenshots', details: error instanceof Error ? error.message : 'Unknown error' });
  } finally {
    if (browser) await browser.close();
  }
}

export const config = { api: { bodyParser: { sizeLimit: '10mb' }, responseLimit: '50mb' } };
