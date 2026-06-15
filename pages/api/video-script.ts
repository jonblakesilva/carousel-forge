import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData } from '../../lib/cardTemplate';

const SCRIPT_FORMATS: Record<string, string> = {
  reel: `Write a 30-60 second Instagram/TikTok Reel script from this carousel content.

HOOK RULE (non-negotiable): The very first line must be a pattern interrupt that stops the scroll cold. No warm-up, no intro, no "hey guys". Start mid-thought or mid-statement. Options:
- Bold claim: "Most [niche] companies are bleeding money and do not even know it."
- Specific number: "I watched 47 contractors lose jobs this year for the same reason."
- Confession: "I was wrong about [thing] for 3 years."
- Question that hits: "Why does your competitor stay fully booked while you scramble?"
- Contrarian: "More leads is not your problem. Stop saying it is."

Structure:
- Hook (0-3 sec): pattern interrupt — mandatory, no exceptions
- Value delivery (3-45 sec): rapid-fire points — one idea per breath, no filler
- CTA (45-60 sec): single action, stated once, clearly
Tone: direct, peer-to-peer, like texting a friend who runs a business
Format: write with [PAUSE] and [TEXT ON SCREEN: ...] markers`,

  youtube: `Write a 3-5 minute YouTube video script from this carousel content.

HOOK RULE (non-negotiable): The first 15 seconds must hook hard or viewers leave. NO "hey welcome back to my channel." Start with the most compelling stat, result, or claim from the content — then promise what they will learn.
Example strong opens:
- "One text message generated $18,000 in 72 hours. I am going to show you exactly how."
- "If your close rate is under 35%, this video is going to change your business."
- "I have watched 200 contractors run ads and 180 of them made the same mistake."

Structure:
- Hook (0-15 sec): your strongest claim or result — state it immediately
- Open loop (15-30 sec): promise what they will learn, tease the payoff
- Context (30-60 sec): why this matters and who it is for
- Main content (1-4 min): each carousel point becomes a teaching moment with examples
- Payoff + CTA (30 sec): deliver the promise, then the next step
Tone: knowledgeable peer — confident, direct, never corporate
Format: write with [B-ROLL SUGGESTION: ...] and [GRAPHIC: ...] markers`,

  shorts: `Write a 15-30 second YouTube Shorts / TikTok script from this carousel content.

HOOK RULE (non-negotiable): The first WORD or phrase must stop the scroll. You have 0.5 seconds. Start with the shock, the number, or the claim. Never with "So", "Hey", "Today", or "I want to".
Strong Shorts openers:
- "Stop buying leads." (then explain)
- "47 contractors. Same mistake." (then reveal it)
- "Your follow-up is why you are losing." (then prove it)
- "$18,000. One text. 72 hours." (then break it down)

Structure:
- First line: the hook — immediate, specific, stops the scroll
- Lines 2-6: 3-5 rapid punchy points, one per breath
- Final line: question that drives comments OR one clear CTA
Tone: fast, punchy, zero filler words
Format: script only — every word spoken, nothing else`,

  podcast: `Write a 3-5 minute podcast segment or intro script from this carousel content.

HOOK RULE (non-negotiable): Do NOT open with "Welcome back" or "Today we are talking about." Open with the most interesting claim, story, or stat from the content — then frame what the listener will get.
Strong podcast openers:
- "A contractor I spoke to last month was losing $7,000 a week without knowing it. Here is how we found it."
- "The number one mistake I see across every home service business I talk to is not what you think."
- "What if I told you the leads you already have are worth more than any new ad you could run?"

Structure:
- Hook (0-20 sec): your strongest claim, stat, or micro-story — no intro
- Frame (20-40 sec): what they will learn and why it matters to them specifically
- Content (40 sec - 4 min): each point expanded conversationally with real examples
- Summary + CTA (30 sec): one sentence recap, one action to take today
Tone: smart friend who has done this — direct, warm, no jargon
No visual cues — audio only, explain everything verbally`,

  vsl: `Write a 90-second Video Sales Letter (VSL) script from this carousel content.

HOOK RULE (non-negotiable): The first 5 seconds must name the exact person and their exact pain. No brand intro. No logo. No music bed description. Name the problem so precisely that the right viewer feels seen and the wrong viewer self-selects out.
Strong VSL openers:
- "If you run a [niche] company and your calendar is not full — this is for you."
- "You are spending money on leads. You are losing half of them in follow-up. That stops today."
- "This is for the contractor who is great at the work but struggling to make the business grow."

Structure:
- Hook (0-5 sec): name the person and the pain — immediately
- Agitate (5-25 sec): make the cost of the problem visceral and specific
- Solution preview (25-55 sec): introduce the mechanism, not the features
- Proof (55-75 sec): one specific result with real numbers
- CTA (75-90 sec): one next step, state it twice, add what they get
Tone: direct response — every sentence earns the next one
Format: teleprompter-ready — short sentences, [PAUSE] markers, natural spoken rhythm`,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    cards,
    scriptFormat = 'reel',
    topic,
    brandName,
    ctaText,
    ctaUrl,
    niche,
  }: {
    cards: CardData[];
    scriptFormat: string;
    topic?: string;
    brandName?: string;
    ctaText?: string;
    ctaUrl?: string;
    niche?: string;
  } = req.body;

  if (!cards?.length) return res.status(400).json({ error: 'No cards provided' });

  const formatPrompt = SCRIPT_FORMATS[scriptFormat] || SCRIPT_FORMATS.reel;

  const contentSummary = cards.map((c, i) => {
    const parts: string[] = [];
    if (c.headline) parts.push(`HEADLINE: ${c.headline}`);
    if (c.body) parts.push(`BODY: ${c.body}`);
    if (c.bullets?.length) parts.push(`POINTS: ${c.bullets.join(' | ')}`);
    if (c.lesson) parts.push(`LESSON: ${c.lesson}`);
    if (c.quote) parts.push(`QUOTE: "${c.quote}" — ${c.author}`);
    if (c.myth) parts.push(`MYTH: ${c.myth} / TRUTH: ${c.truth}`);
    if (c.stat) parts.push(`STAT: ${c.stat} — ${c.statLabel}`);
    return parts.length ? `[Slide ${i + 1}]\n${parts.join('\n')}` : null;
  }).filter(Boolean).join('\n\n');

  const userPrompt = `${formatPrompt}

CAROUSEL CONTENT TO ADAPT:
Topic: ${topic || 'Marketing content'}
Niche: ${niche || 'home service business marketing'}
Brand: ${brandName || ''}
CTA: ${ctaText || 'Follow For More'}${ctaUrl ? ` → ${ctaUrl}` : ''}

${contentSummary}

Write the script now. Return only the script — no preamble.`;

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
        system: 'You are an expert video scriptwriter who specializes in converting educational carousel content into platform-native video scripts. You write with authority, specificity, and natural spoken rhythm. Every script you write sounds like it was written by a human expert — not generated.',
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    res.status(200).json({ script: data.content[0]?.text || '', format: scriptFormat });
  } catch (error) {
    console.error('Script error:', error);
    res.status(500).json({ error: 'Failed to generate script', details: error instanceof Error ? error.message : 'Unknown' });
  }
}
