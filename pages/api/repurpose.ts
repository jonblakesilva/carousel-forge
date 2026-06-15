import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData } from '../../lib/cardTemplate';

const REPURPOSE_PROMPTS: Record<string, string> = {
  blog: `Convert this carousel content into a full SEO-optimized blog post. Structure:
- Title (H1): Use the carousel headline as the foundation, expand it for SEO
- Meta description: 155 chars max
- Introduction paragraph: hook + what the reader will learn
- Body: Each carousel slide becomes a section with H2 heading. Expand each point into 2-3 paragraphs with examples and context
- Conclusion: Summary + clear CTA
- Format in clean Markdown
- Aim for 800-1200 words
- Write in a conversational but authoritative voice — like advice from a trusted peer, not a textbook`,

  email: `Convert this carousel content into a high-converting marketing email. Structure:
- Subject line (3 options — one curiosity, one benefit, one urgency)
- Preview text: 85 chars max
- Opening: personal hook that earns the read
- Body: Each carousel point becomes a short paragraph or bullet — scannable and punchy
- Transition to CTA: bridge from value to the offer
- CTA: clear, single action
- PS line: something that adds value or creates urgency
- Keep it under 400 words
- Voice: direct, specific, like writing to one person you know
- No generic phrases like "I hope this finds you well"`,

  linkedin: `Convert this carousel content into a long-form LinkedIn article. Structure:
- Headline: compelling and keyword-rich
- Introduction: bold opening statement + promise of value
- Body: Each carousel section becomes a LinkedIn section with strategic white space and line breaks
- Use numbered lists and bullet points for scanability
- Add real examples and specifics throughout
- Conclusion: your perspective + question to drive comments
- Hashtags: 3-5 relevant ones at the bottom
- Aim for 600-900 words
- Voice: professional peer — not corporate, not casual`,

  thread: `Convert this carousel content into a Twitter/X thread. Structure:
- Tweet 1 (hook): The most compelling claim or result from the whole carousel — under 280 chars
- Tweets 2-N: One key point per tweet. Each standalone and punchy. Number them (2/ 3/ etc)
- Second-to-last tweet: The key takeaway or lesson
- Final tweet: CTA or question
- No hashtags (they look spammy on Twitter now)
- Each tweet under 280 chars
- Voice: direct, opinionated, specific
- Total 6-10 tweets`,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    cards,
    format = 'blog',
    topic,
    brandName,
    ctaText,
    ctaUrl,
  }: {
    cards: CardData[];
    format: string;
    topic?: string;
    brandName?: string;
    ctaText?: string;
    ctaUrl?: string;
  } = req.body;

  if (!cards?.length) return res.status(400).json({ error: 'No cards provided' });

  const prompt = REPURPOSE_PROMPTS[format] || REPURPOSE_PROMPTS.blog;

  // Build content summary
  const contentSummary = cards.map((c, i) => {
    const parts: string[] = [`[Slide ${i + 1} — ${c.type}]`];
    if (c.headline) parts.push(`Headline: ${c.headline}`);
    if (c.subheadline) parts.push(`Subheadline: ${c.subheadline}`);
    if (c.body) parts.push(`Body: ${c.body}`);
    if (c.bullets?.length) parts.push(`Bullets:\n${c.bullets.map(b => `- ${b}`).join('\n')}`);
    if (c.checks?.length) parts.push(`Checklist:\n${c.checks.map(b => `- ${b}`).join('\n')}`);
    if (c.lesson) parts.push(`Lesson: ${c.lesson}`);
    if (c.quote) parts.push(`Quote: "${c.quote}" — ${c.author || ''}`);
    if (c.myth) parts.push(`Myth: ${c.myth}\nTruth: ${c.truth}`);
    if (c.stat) parts.push(`Stat: ${c.stat} — ${c.statLabel}`);
    return parts.join('\n');
  }).join('\n\n---\n\n');

  const userPrompt = `${prompt}

CAROUSEL CONTENT TO REPURPOSE:
Topic: ${topic || 'Marketing content'}
Brand: ${brandName || ''}
CTA: ${ctaText || 'Follow For More'}${ctaUrl ? ` → ${ctaUrl}` : ''}

${contentSummary}

Write the ${format} now. Return only the content — no preamble or explanation.`;

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
        max_tokens: 2500,
        system: 'You are an expert content repurposer who transforms carousel content into platform-native long-form content. You write with authority, specificity, and a conversational tone. Every piece you produce reads like it was written by a knowledgeable human practitioner — not a content generator.',
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) throw new Error(`Anthropic API error: ${response.status}`);
    const data = await response.json();
    const content = data.content[0]?.text || '';
    res.status(200).json({ content, format });
  } catch (error) {
    console.error('Repurpose error:', error);
    res.status(500).json({ error: 'Failed to repurpose content', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
