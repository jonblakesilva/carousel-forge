import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData } from '../../lib/cardTemplate';

const PLATFORM_PROMPTS: Record<string, string> = {
  instagram: `Write an Instagram caption for this carousel. Rules:
- Hook in first line (stops the scroll before "more" cutoff)
- Line breaks between each point for readability
- 3-5 bullet points pulling key insights
- Call to action at the end
- 5-10 relevant hashtags at the bottom (mix of niche + broad)
- Emoji used sparingly but strategically
- Max 2200 chars`,

  facebook: `Write a Facebook post caption for this carousel. Rules:
- Open with a question or bold statement
- More conversational/story-driven than Instagram
- Longer form is fine — Facebook rewards it
- End with engagement question ("What do you think? Drop a comment below")
- 2-3 hashtags max (Facebook doesn't need many)
- No line-by-line emoji spam — use them naturally`,

  linkedin: `Write a LinkedIn post caption for this carousel. Rules:
- First line is the hook — make it a pattern interrupt or bold claim
- Use line breaks heavily (LinkedIn rewards white space)
- Each insight on its own line
- Professional but conversational — not corporate speak
- End with a question to drive comments
- 3-5 hashtags at the bottom
- No cringe LinkedIn stuff like "Unpopular opinion:" or "Hot take:"
- Should feel like advice from a trusted peer`,

  tiktok: `Write a TikTok video description for this carousel (used as a slideshow). Rules:
- Very short — TikTok descriptions are secondary to the content
- 1-2 punchy lines max
- Include the keyword trigger CTA if provided (e.g. "Comment GUIDE to get the full breakdown")
- 3-5 trending hashtags relevant to the content
- Casual, direct, no fluff`,

  twitter: `Write a Twitter/X thread opener or single tweet for this carousel. Rules:
- If thread: First tweet is the hook, subsequent tweets expand each point
- If single: Under 280 chars, punchy, ends with a question or CTA
- No hashtags on Twitter — they look spammy now
- Direct, opinionated, and specific
- Format as a thread if content warrants it (number tweets 1/ 2/ etc)`,

  youtube: `Write a YouTube Shorts description for this carousel content. Rules:
- First 2 lines visible before "show more" — make them count
- Include the main topic keyword naturally
- List key points from the carousel
- Subscribe CTA
- 3-5 hashtags for discoverability
- Time stamps if applicable`,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    cards,
    platform = 'instagram',
    brandName,
    ctaText,
    ctaUrl,
    keywordTrigger,
    keywordAction,
    topic,
  }: {
    cards: CardData[];
    platform: string;
    brandName?: string;
    ctaText?: string;
    ctaUrl?: string;
    keywordTrigger?: string;
    keywordAction?: string;
    topic?: string;
  } = req.body;

  if (!cards?.length) return res.status(400).json({ error: 'No cards provided' });

  const platformPrompt = PLATFORM_PROMPTS[platform] || PLATFORM_PROMPTS.instagram;

  // Build content summary from cards
  const contentSummary = cards.map((c, i) => {
    const parts: string[] = [`[Slide ${i + 1} — ${c.type}]`];
    if (c.headline) parts.push(`Headline: ${c.headline}`);
    if (c.subheadline) parts.push(`Subheadline: ${c.subheadline}`);
    if (c.body) parts.push(`Body: ${c.body}`);
    if (c.bullets?.length) parts.push(`Bullets: ${c.bullets.join(' | ')}`);
    if (c.checks?.length) parts.push(`Checklist: ${c.checks.join(' | ')}`);
    if (c.lesson) parts.push(`Lesson: ${c.lesson}`);
    if (c.quote) parts.push(`Quote: "${c.quote}" — ${c.author || ''}`);
    if (c.myth) parts.push(`Myth: ${c.myth}`);
    if (c.truth) parts.push(`Truth: ${c.truth}`);
    if (c.stat) parts.push(`Stat: ${c.stat} — ${c.statLabel || ''}`);
    return parts.join('\n');
  }).join('\n\n');

  const keywordSection = keywordTrigger
    ? `\n\nKEYWORD TRIGGER: Include this in the caption naturally: "Comment '${keywordTrigger}' ${keywordAction || `and I'll send you the link`}"`
    : '';

  const ctaSection = ctaText
    ? `\n\nCTA: ${ctaText}${ctaUrl ? ` → ${ctaUrl}` : ''}`
    : '';

  const systemPrompt = `You are an expert social media copywriter specializing in high-engagement carousel content. You write platform-native captions that match the voice and format of each platform exactly.`;

  const userPrompt = `${platformPrompt}

CAROUSEL CONTENT:
Topic: ${topic || 'Marketing content'}
Brand: ${brandName || ''}
${contentSummary}
${keywordSection}
${ctaSection}

Write the caption now. Return only the caption text — no preamble, no explanation.`;

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

    if (!response.ok) throw new Error(`Anthropic API error: ${response.status}`);
    const data = await response.json();
    const caption = data.content[0]?.text || '';
    res.status(200).json({ caption });
  } catch (error) {
    console.error('Caption error:', error);
    res.status(500).json({ error: 'Failed to generate caption', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
