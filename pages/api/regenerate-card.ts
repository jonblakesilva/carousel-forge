import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { topic, style, cardType, slideNumber, totalSlides, brandName, ctaText, ctaUrl } = req.body;

  const systemPrompt = `You are an expert at creating vintage direct-response marketing carousel content in the style of Claude Hopkins and Frank Kern.

Return ONLY a single valid JSON object for one carousel card. No markdown, no explanation, no array — just the object.

Card type "${cardType}" fields:
- cover: { type, tag, eyebrow, headline, subheadline, brandName }
- lesson: { type, slideNumber, totalSlides, eyebrow, headline, tag, bullets (array of 2-4 strings), lesson, lessonLabel, brandName }
- example: { type, slideNumber, totalSlides, eyebrow, tag, headline, body, lesson, lessonLabel, brandName }
- quote: { type, slideNumber, totalSlides, eyebrow, quote, author, brandName }
- cta: { type, eyebrow, headline, body, ctaText, ctaUrl, brandName }

Style: punchy, specific, old newspaper headline energy. Details over vague claims.`;

  const userPrompt = `Regenerate slide ${slideNumber} of ${totalSlides} (type: "${cardType}") for this carousel about: "${topic}"
Style: ${style}
Brand: ${brandName || 'none'}
CTA text: ${ctaText || 'Follow for more'}
CTA url: ${ctaUrl || ''}

Give me a fresh, different take on this slide. Make it punchy and specific.`;

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
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) throw new Error(`Anthropic API error: ${response.status}`);

    const data = await response.json();
    const rawText = data.content[0]?.text || '{}';
    const cleaned = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const card = JSON.parse(cleaned);

    res.status(200).json({ card: { ...card, brandName: card.brandName || brandName || '' } });
  } catch (error) {
    console.error('Regenerate error:', error);
    res.status(500).json({ error: 'Failed to regenerate card', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}
