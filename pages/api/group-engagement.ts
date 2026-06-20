import type { NextApiRequest, NextApiResponse } from 'next';
import { logError } from '../../lib/errorLog';

// ─── ENGAGEMENT HOOK TYPES ──────────────────────────────────────────────────
const HOOK_TYPES: Record<string, { name: string; mechanic: string }> = {
  myth: {
    name: 'Myth-Bust',
    mechanic: 'State a widely-believed myth about the service/industry, then bust it with a surprising fact. Frame it as "unpopular opinion" or "things nobody tells you." Ends with a question that invites people to share their own experience or disagree.',
  },
  news: {
    name: 'Recent News / Trend',
    mechanic: 'Reference a recent, broadly-known trend, season change, weather event, or cost increase affecting homeowners in this niche right now. Frame it as a heads-up / public service angle, not a sales pitch. Ends with a question inviting people to share what they are seeing/dealing with.',
  },
  freeoffer: {
    name: 'Free Offer Example',
    mechanic: 'Describe a specific real-sounding example of a free service/audit/review activation given to a recent customer, framed as a story or case study shared for value/transparency, not as an ad. Ends with an invitation: "comment [WORD] and I will send you the details" or "drop a 🙋 if you want me to check yours too."',
  },
  poll: {
    name: 'Opinion Poll / This or That',
    mechanic: 'A simple, low-effort either/or or rate-this question relevant to the niche that anyone in the group can answer in 2 seconds. Designed purely to maximize comment count and signal-boost the post in the group algorithm before the value/offer angle is introduced in the DM.',
  },
  failstory: {
    name: 'Costly Mistake Story',
    mechanic: 'A short, specific story (can be anonymized/composite) about a homeowner who made a common mistake in this niche and what it cost them. Framed as a cautionary tale shared to help the group, not to sell. Ends with a question inviting people to share if this has happened to them.',
  },
};

const NICHE_GROUP_CONTEXT: Record<string, string> = {
  'Lawn Care': 'local homeowner Facebook groups, neighborhood groups, and lawn/garden enthusiast groups',
  'Roofing': 'local homeowner Facebook groups, neighborhood groups, and storm/weather-watch community groups',
  'HVAC': 'local homeowner Facebook groups, neighborhood groups, and home maintenance community groups',
  'Plumbing': 'local homeowner Facebook groups, neighborhood groups, and home maintenance community groups',
};

function getNicheContext(niche: string): string {
  return NICHE_GROUP_CONTEXT[niche] || `local homeowner Facebook groups and neighborhood community groups relevant to ${niche.toLowerCase()}`;
}

async function callClaude(systemPrompt: string, userPrompt: string, maxTokens: number): Promise<any> {
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY || '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error('API error ' + resp.status + ': ' + errText);
  }
  const data = await resp.json();
  const raw = (data.content?.[0]?.text || '').trim();
  if (!raw) throw new Error('Empty response from AI');
  let jsonStr = raw;
  const fence = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) jsonStr = fence[1].trim();
  const s = jsonStr.indexOf('{');
  if (s === -1) throw new Error('No JSON in response: ' + raw.slice(0, 200));
  let candidate = jsonStr.slice(s);
  const e = candidate.lastIndexOf('}');
  if (e !== -1) candidate = candidate.slice(0, e + 1);
  try {
    return JSON.parse(candidate);
  } catch {
    let repaired = candidate;
    const lastGoodComma = repaired.lastIndexOf(',');
    const lastCloseBrace = Math.max(repaired.lastIndexOf('}'), repaired.lastIndexOf(']'));
    if (lastGoodComma > lastCloseBrace) repaired = repaired.slice(0, lastGoodComma);
    const opens = (repaired.match(/\{/g) || []).length;
    const closes = (repaired.match(/\}/g) || []).length;
    const opensArr = (repaired.match(/\[/g) || []).length;
    const closesArr = (repaired.match(/\]/g) || []).length;
    repaired += ']'.repeat(Math.max(0, opensArr - closesArr));
    repaired += '}'.repeat(Math.max(0, opens - closes));
    try {
      return JSON.parse(repaired);
    } catch {
      throw new Error('Could not parse JSON even after repair. Tail: ' + raw.slice(-150));
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({
      hookTypes: Object.entries(HOOK_TYPES).map(([value, v]) => ({ value, label: v.name })),
    });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    niche,
    hookType,
    offerName,
    offerDescription,
    brandName,
    ctaUrl,
    dmKeyword,
  }: {
    niche: string;
    hookType: string;
    offerName?: string;
    offerDescription?: string;
    brandName?: string;
    ctaUrl?: string;
    dmKeyword?: string;
  } = req.body;

  if (!niche || !hookType) return res.status(400).json({ error: 'niche and hookType are required' });

  const hook = HOOK_TYPES[hookType] || HOOK_TYPES.myth;
  const brand = brandName || 'Your Company';
  const booking = ctaUrl || '[your booking link]';
  const keyword = (dmKeyword || 'YES').toUpperCase();
  const offer = offerName || `a free ${niche.toLowerCase()} audit/review`;
  const offerDesc = offerDescription || `a no-obligation walkthrough that identifies the top 3 issues and what they would cost to fix`;
  const groupContext = getNicheContext(niche);

  const systemPrompt =
    'You are a social media growth strategist who specializes in organic engagement-bait content for local service businesses inside Facebook Groups. ' +
    'You understand that Facebook Group algorithms and most group admin rules punish direct sales posts and reward posts that generate comments, reactions, and conversation. ' +
    'Your entire strategy is: post something genuinely engaging that has nothing salesy about it on the surface, get people commenting, then move the actual offer into private DMs where there are no group-rule restrictions and no algorithm working against you. ' +
    'AUDIENCE: Everything is written for the homeowner / end consumer reading a local Facebook Group -- never for another business owner. ' +
    'TONE: Sounds like a real local business owner posting in a group as a person, not a brand account. Casual, no corporate language, no excessive emojis, no hashtags in the group post (hashtags do not function in Facebook Groups and signal "ad"). ' +
    'CRITICAL RULE: The Group Post must NEVER contain a link, a price, or an explicit "DM me" sales pitch in a pushy way. The only call to action in the post is an easy, low-friction comment trigger (one word, an emoji, answering a question). The actual offer is reserved for the DM script. ' +
    'Return ONLY a valid JSON object, no markdown, no explanation, no extra fields.';

  const userPrompt =
    'Create a complete Facebook Group engagement system for a ' + niche + ' business targeting ' + groupContext + '.\n\n' +
    'HOOK TYPE: ' + hook.name + '\n' +
    'MECHANIC: ' + hook.mechanic + '\n\n' +
    'CONTEXT:\n' +
    '- Niche: ' + niche + '\n' +
    '- Brand: ' + brand + '\n' +
    '- Booking link (DM only, never in the group post): ' + booking + '\n' +
    '- The offer being funneled to: ' + offer + ' -- specifically: ' + offerDesc + '\n' +
    '- Comment trigger keyword: "' + keyword + '"\n\n' +
    'Return this exact JSON schema:\n' +
    '{\n' +
    '  "hookTypeName": "' + hook.name + '",\n' +
    '  "groupPost": "The actual Facebook Group post text, 60-120 words, written like a real person posting in the group. No links. No prices. No hard sell. Ends with a simple, low-friction comment trigger tied to the keyword \\"' + keyword + '\\" or an easy reaction/question. This must read as genuinely interesting or useful on its own, with zero sales pressure visible.",\n' +
    '  "whyItWorks": "2-3 sentences explaining the psychological/algorithmic reason this specific post will generate comments in a local Facebook Group, written for the business owner reading this internally (not for the public).",\n' +
    '  "groupPostingTips": ["3-4 specific tactical tips for posting this in real Facebook Groups -- best posting times, how to respond to early comments to boost the post, group rule considerations, whether to post as personal profile vs business page"],\n' +
    '  "dmScript": {\n' +
    '    "trigger": "Exactly what action from a group member should fire this DM (e.g. comments the keyword, reacts, answers the poll, comments at all)",\n' +
    '    "openingMessage": "The first DM message sent immediately. References the group post naturally, warm and personal, NOT a copy-pasted sales message. Does not pitch yet -- builds on the comment they made.",\n' +
    '    "offerMessage": "The second DM message (sent after they reply or after a short delay) that introduces ' + offer + ' specifically, explains ' + offerDesc + ', and gives a clear simple next step. Still conversational, not a hard close.",\n' +
    '    "followUpIfNoResponse": "A single soft follow-up message to send 2-3 days later if they engaged but never replied to the DM, designed to not feel pushy."\n' +
    '  },\n' +
    '  "videoScriptHook": "The first line of a 30-45 second video script using the SAME hook/topic as the group post -- a pattern-interrupt opening line, no warm-up, no greeting.",\n' +
    '  "videoScript": "Full 30-45 second video script using [PAUSE] and [TEXT ON SCREEN: ...] markers, same topic/angle as the group post but adapted for a talking-to-camera video. Structure: hook (0-3 sec), value/story (3-30 sec), soft CTA (30-45 sec) inviting comments or DMs, matching the group post mechanic.",\n' +
    '  "videoCaption": "A short caption (40-70 words) to post alongside the video on Facebook/Instagram, consistent with the group post angle, with a comment-trigger CTA matching the keyword \\"' + keyword + '\\"."\n' +
    '}';

  try {
    const result = await callClaude(systemPrompt, userPrompt, 2200);
    result.meta = { niche, hookType, hookTypeLabel: hook.name, dmKeyword: keyword };
    res.status(200).json(result);
  } catch (error) {
    console.error('Group engagement error:', error);
    const message = error instanceof Error ? error.message : String(error);
    await logError({
      route: '/api/group-engagement',
      message: 'Group engagement generation failed',
      details: message,
      requestBody: { niche, hookType },
    });
    res.status(500).json({ error: 'Group engagement generation failed', details: message, retryable: true });
  }
}
