import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { clientType, problem, solution, result, niche, brandName, ctaText, ctaUrl } = req.body;
  if (!problem || !result) return res.status(400).json({ error: 'Problem and result are required' });

  const systemPrompt = `You are an expert at writing compelling case study carousels that convert readers into leads. You write in the style of Claude Hopkins and Frank Kern — specific, punchy, and result-focused.

Return ONLY a valid JSON array of card objects. No markdown, no explanation.

Use these card types as appropriate:
- cover: { type, eyebrow, headline, subheadline, tag, brandName }
- stat: { type, eyebrow, stat, statLabel, body, slideNumber, totalSlides, brandName }
- story: { type, eyebrow, headline, body, lesson, slideNumber, totalSlides, brandName }
- lesson: { type, eyebrow, headline, bullets, lesson, lessonLabel, slideNumber, totalSlides, brandName }
- example: { type, eyebrow, headline, body, lesson, lessonLabel, slideNumber, totalSlides, brandName }
- cta: { type, eyebrow, headline, body, ctaText, ctaUrl, brandName }

Structure: cover → situation → problem → solution → result (stat) → lessons learned → cta
Total: 6-7 slides`;

  const userPrompt = `Write a case study carousel with these details:
Client type: ${clientType || 'home service business owner'}
The problem they had: ${problem}
The solution implemented: ${solution || 'a done-for-you marketing and automation system'}
The result achieved: ${result}
Niche context: ${niche || 'home service / contractor marketing'}
Brand footer: ${brandName || ''}
CTA: ${ctaText || 'Book a Free Demo'}${ctaUrl ? ` → ${ctaUrl}` : ''}

Make it specific and compelling. Use real-feeling numbers. Tell it as a story, not a feature list.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 3000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const raw = data.content[0]?.text || '[]';
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const cards = JSON.parse(cleaned);
    const total = cards.length;
    const enriched = cards.map((c: any, i: number) => ({
      ...c,
      brandName: c.brandName || brandName || '',
      totalSlides: total,
      slideNumber: c.slideNumber || (i > 0 && i < total - 1 ? i : undefined),
    }));
    res.status(200).json({ cards: enriched });
  } catch (error) {
    console.error('Case study error:', error);
    res.status(500).json({ error: 'Failed to generate case study', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
