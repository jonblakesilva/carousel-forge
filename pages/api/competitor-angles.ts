import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { competitor, niche, yourNiche } = req.body;
  if (!competitor && !niche) return res.status(400).json({ error: 'Competitor name or niche required' });

  const systemPrompt = `You are a content strategy and competitive positioning expert. You analyze what content angles a competitor or type of account is likely NOT covering, and identify gaps that represent high-value content opportunities.

Return ONLY a valid JSON object. No markdown, no explanation.

{
  "competitorProfile": "2-sentence description of the type of content this competitor/niche typically posts",
  "commonAngles": ["angles they definitely cover", "..."],
  "gaps": [
    {
      "angle": "The gap angle title",
      "why": "Why this is underserved",
      "topicIdeas": ["specific topic 1", "specific topic 2", "specific topic 3"],
      "format": "suggested carousel format type",
      "opportunityScore": 8
    }
  ],
  "positioningAdvice": "One paragraph on how to own this white space"
}`;

  const userPrompt = `Analyze content gaps for:
Competitor/niche to analyze: "${competitor || niche}"
My niche/context: "${yourNiche || 'marketing agency for home service businesses'}"

Find 5-7 significant content gaps — angles they are NOT covering that would resonate with the same audience. Think about: advanced vs beginner content, emotional vs tactical, systems vs tips, industry-specific vs generic, data-driven vs story-driven.`;

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

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const raw = data.content[0]?.text || '{}';
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleaned);
    res.status(200).json(result);
  } catch (error) {
    console.error('Competitor angle error:', error);
    res.status(500).json({ error: 'Failed to analyze competitor angles', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
