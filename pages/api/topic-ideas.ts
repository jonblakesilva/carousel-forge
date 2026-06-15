import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { niche, format, count = 10 } = req.body;

  if (!niche) return res.status(400).json({ error: 'Niche is required' });

  const systemPrompt = `You are a viral content strategist who specializes in creating educational carousel content for service-based businesses and marketing professionals. You generate topic ideas that are specific, interesting, and likely to get saves and shares.

Return ONLY a valid JSON array of topic idea objects. No markdown, no explanation.

Each topic object has:
{
  "topic": "the specific topic string",
  "hook": "why this will perform well (one sentence)",
  "format": "suggested format type"
}`;

  const userPrompt = `Generate ${count} carousel topic ideas for: "${niche}"
${format ? `Preferred format: ${format}` : 'Use a mix of formats'}

Make them specific and punchy — not generic. Think viral educational content that gets saved.
Include a mix of: historical case studies, myths vs truths, checklists, quick wins, hot takes, case studies, and principles.

Return JSON array only.`;

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
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) throw new Error(`Anthropic API error: ${response.status}`);
    const data = await response.json();
    const raw = data.content[0]?.text || '[]';
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const ideas = JSON.parse(cleaned);
    res.status(200).json({ ideas });
  } catch (error) {
    console.error('Topic ideas error:', error);
    res.status(500).json({ error: 'Failed to generate topic ideas', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
