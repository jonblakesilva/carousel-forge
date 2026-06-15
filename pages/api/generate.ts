import type { NextApiRequest, NextApiResponse } from 'next';

const FORMAT_PROMPTS: Record<string, string> = {
  "famous-quote": "A carousel featuring a famous marketing or business quote with context, meaning, and a modern lesson. Include who said it, why it mattered, and how to apply it today.",
  "myth-truth": "A myth-busting carousel. Each middle slide reveals one common myth (crossed out) and the real truth below it. Make the myths feel familiar — things people actually believe.",
  "problem-solution": "A problem/solution carousel. Cover slide names the painful problem. Middle slides alternate: one problem slide then one solution slide. End with CTA.",
  "checklist": "A checklist carousel. Cover slide = the checklist title. Middle slides each contain a checklist section with 3-5 checkboxes. Very actionable, very specific.",
  "authority-list": "A numbered authority list carousel. Cover names the number and promise. Each middle slide = one numbered item with context and proof.",
  "quick-wins": "A quick wins carousel. Each middle slide is one quick-win card: what to do, why it works, how fast results appear. Tactical and immediate.",
  "hot-takes": "A hot takes carousel. Each middle slide is a bold contrarian opinion stated as a hot-take with a proof statement below. Make it spicy enough to get comments.",
  "case-study": "A detailed case study carousel. Cover = the result/headline. Middle slides walk through: the situation, the strategy, the execution, the result. Numbers and specifics required.",
  "story": "A story-format carousel. Narrative arc: hook, backstory, conflict, turning point, resolution, lesson. Written in first or third person. Like a short story told in slides.",
  "lesson": "An educational lesson carousel. A deep dive into one concept. Cover names the concept. Middle slides build understanding layer by layer with examples and takeaways.",
  "offer": "A carousel that presents an offer or service. Problem-aware to solution to proof to offer details to CTA. Persuasive but not pushy.",
  "pas": "A PAS (Problem-Agitate-Solution) framework carousel. Slides 1-2: identify the problem. Slides 3-4: agitate the pain (make it real). Slides 5-6: present the solution. Final slide: CTA.",
  "history": "A historical marketing case study carousel. Real ad campaigns, real names, real numbers. What they did, what happened, why it worked, and the lesson for today.",
  "principle": "A timeless marketing principle carousel. One evergreen truth per middle slide. Backed by history and examples. The kind of thing that was true in 1920 and is true today.",
  "mistake": "A common marketing mistake carousel. Cover names the biggest mistake. Each middle slide: one mistake, why people make it, the cost, and the fix.",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { topic, brandName, ctaText, ctaUrl, format = 'history', slideCount = 5, niche = '' } = req.body;
  if (!topic) return res.status(400).json({ error: 'Topic is required' });

  const formatDesc = FORMAT_PROMPTS[format] || FORMAT_PROMPTS['history'];

  const systemPrompt = `You are an expert at creating viral educational carousel content in the style of Frank Kern and Claude Hopkins.

IMPORTANT CONTEXT: This content is created by a marketing agency for home service business owners — roofing companies, tree service companies, lawn care companies, general contractors, and similar trades. The audience is business owners and operators in these niches. The topic is ALWAYS about their marketing, sales, lead generation, operations, systems, and growth — NEVER about the technical trade itself. If the topic is "roofing", write about roofing company marketing and sales — not about how to install shingles. If the topic is "lawn care", write about lawn care business growth — not about how to mow grass.

Return ONLY a valid JSON array of card objects. No markdown, no explanation, no preamble.

Available slide types and fields:
- cover: { type:"cover", eyebrow, headline, subheadline, tag, brandName }
- lesson: { type:"lesson", eyebrow, headline, bullets:string[], lesson, lessonLabel, tag, slideNumber, totalSlides, brandName }
- checklist: { type:"checklist", eyebrow, headline, checks:string[], slideNumber, totalSlides, brandName }
- myth: { type:"myth", eyebrow, myth, truth, slideNumber, totalSlides, brandName }
- stat: { type:"stat", eyebrow, stat, statLabel, body, slideNumber, totalSlides, brandName }
- step: { type:"step", eyebrow, headline, body, bullets:string[], stepNumber, totalSlides, brandName }
- problem: { type:"problem", eyebrow, headline, body, bullets:string[], slideNumber, totalSlides, brandName }
- solution: { type:"solution", eyebrow, headline, body, lesson, lessonLabel, slideNumber, totalSlides, brandName }
- hot-take: { type:"hot-take", eyebrow, headline, body, slideNumber, totalSlides, brandName }
- story: { type:"story", eyebrow, headline, body, lesson, slideNumber, totalSlides, brandName }
- quick-win: { type:"quick-win", eyebrow, headline, body, lesson, lessonLabel, tag, slideNumber, totalSlides, brandName }
- quote: { type:"quote", eyebrow, quote, author, slideNumber, totalSlides, brandName }
- example: { type:"example", eyebrow, headline, body, lesson, lessonLabel, tag, slideNumber, totalSlides, brandName }
- cta: { type:"cta", eyebrow, headline, body, ctaText, ctaUrl, brandName }

Rules: always start with cover, always end with cta. Headlines: punchy, direct, specific - never vague. Bullets: real specifics not platitudes - numbers beat adjectives. Eyebrows: 1-3 ALL CAPS words.

MAKE CONTENT WORTH SAVING: Every carousel must pass this test - would someone screenshot this and send it to a friend? Design each slide to stand alone as a piece of value. Rules: (1) Include at least one slide with a specific number or stat worth remembering. (2) Name your frameworks - The 3-Call Close System is more saveable than tips for closing. (3) At least one slide must contain information the reader did not know and now cannot un-know. (4) The lesson line on every lesson slide must be a one-sentence principle worth screenshotting alone. (5) Checklists and quick-wins: every item must be specific enough to act on TODAY not someday. (6) Hot-takes: the take must be strong enough to get someone to comment this is wrong OR this changed how I think - mild opinions are scroll-past content.`;

  const userPrompt = `Format: ${formatDesc}

Topic: "${topic}"
Slides: exactly ${slideCount} total (cover + middles + cta)
Brand footer: ${brandName || 'none'}
CTA text: ${ctaText || 'Follow For More'}
CTA URL: ${ctaUrl || ''}

Pick the best slide types for this format. Be specific — use real names, dates, numbers.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY || '', 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 5000, system: systemPrompt, messages: [{ role: 'user', content: userPrompt }] }),
    });

    if (!response.ok) throw new Error(`Anthropic API error: ${response.status}`);

    const data = await response.json();
    const rawText = data.content[0]?.text || '[]';
    const cleaned = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const cards = JSON.parse(cleaned);
    const total = cards.length;
    const enriched = cards.map((c: any, i: number) => ({
      ...c,
      brandName: c.brandName || brandName || '',
      totalSlides: c.totalSlides || total,
      slideNumber: c.slideNumber || (i > 0 && i < total - 1 ? i : undefined),
    }));

    res.status(200).json({ cards: enriched });
  } catch (error) {
    console.error('Generate error:', error);
    res.status(500).json({ error: 'Failed to generate cards', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}
