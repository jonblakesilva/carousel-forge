import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { topic, format, niche, brandName } = req.body;
  if (!topic) return res.status(400).json({ error: 'Topic required' });

  const systemPrompt = `You are an expert at writing viral carousel cover slides in the style of Claude Hopkins and Frank Kern. You write in uppercase, punchy, direct-response headline style.

Return ONLY a valid JSON array of exactly 3 cover slide objects. No markdown, no explanation.

Each object:
{
  "type": "cover",
  "eyebrow": "SHORT ALL CAPS LABEL",
  "headline": "THE HEADLINE IN ALL CAPS",
  "subheadline": "A supporting line in sentence case that expands on the headline",
  "tag": "OPTIONAL BADGE",
  "hookType": "one of: curiosity | number | contrast | confession | bold-claim",
  "hookExplanation": "One sentence explaining why this hook works"
}

Hook types to use — one per variation:
- curiosity: creates an information gap the reader must fill
- number: specific numbers that create instant credibility  
- contrast: before/after or myth/truth tension
- confession: admitting something counter-intuitive to build trust
- bold-claim: a statement so specific or strong it demands attention`;

  const userPrompt = `Generate 3 different hook variations for a carousel cover slide about:
Topic: "${topic}"
Format: ${format || 'educational'}
Niche/Context: ${niche || 'home service business marketing'}
Brand: ${brandName || ''}

Make each variation dramatically different in angle and approach — not just different wording of the same idea.`;

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
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const raw = data.content[0]?.text || '[]';
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const hooks = JSON.parse(cleaned);
    res.status(200).json({ hooks });
  } catch (error) {
    console.error('Hook AB error:', error);
    res.status(500).json({ error: 'Failed to generate hooks', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
