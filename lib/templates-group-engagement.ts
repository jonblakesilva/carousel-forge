// Pre-written Facebook Group engagement templates.
// Each matches the exact response shape of /api/group-engagement so they can be
// loaded directly into the Group Engagement results UI without an API call.
// These are real, usable starting points for the 4 core service niches —
// edit the bracketed placeholders before posting.

export interface GroupEngagementTemplate {
  id: string;
  niche: string;
  hookType: 'myth' | 'news' | 'freeoffer' | 'poll' | 'failstory';
  label: string;
  result: {
    hookTypeName: string;
    groupPost: string;
    whyItWorks: string;
    groupPostingTips: string[];
    dmScript: {
      trigger: string;
      openingMessage: string;
      offerMessage: string;
      followUpIfNoResponse: string;
    };
    videoScriptHook: string;
    videoScript: string;
    videoCaption: string;
  };
}

export const GROUP_ENGAGEMENT_TEMPLATES: GroupEngagementTemplate[] = [

  // ══════════════════════════════════════════
  // LAWN CARE — Myth-Bust
  // ══════════════════════════════════════════
  {
    id: 'ge-lawncare-myth',
    niche: 'Lawn Care',
    hookType: 'myth',
    label: 'Lawn Care: "Cutting short = less mowing" myth-bust',
    result: {
      hookTypeName: 'Myth-Bust',
      groupPost: "Unpopular opinion: cutting your grass super short so you don't have to mow as often is actually the #1 reason half the lawns in this neighborhood have brown patches right now.\n\nShort grass = shallow roots = grass that can't survive a hot week without turning into straw. The lawns that stay green all summer are usually being cut HIGHER, not lower.\n\nAnyone else notice their lawn struggling more this year? What height are you guys cutting at — curious how many of us have been doing this wrong. 👇",
      whyItWorks: "This works because it contradicts a belief almost every homeowner has acted on (cutting short to save time), which creates a strong urge to defend or question their own habit in the comments. It also doesn't mention the business at all, so it reads as genuinely helpful rather than promotional, which is exactly what most group moderators want to see.",
      groupPostingTips: [
        "Post Tuesday-Thursday between 6-8pm when people are home and scrolling after dinner — weekend posts get buried fast in most neighborhood groups",
        "Reply to the first 3-4 comments within 10 minutes of posting — early replies signal the algorithm this post is generating real conversation and it gets shown to more members",
        "Post from a personal profile, not the business page, if the group allows it — personal posts get 3-5x the engagement of business page posts in most local groups",
        "If the group has a 'no business posts' rule, do not mention your company name anywhere in the post or your profile bio at the time of posting"
      ],
      dmScript: {
        trigger: "Comments with their mowing height, says their lawn looks bad, or reacts to the post",
        openingMessage: "Hey! Saw your comment on the lawn post — yeah, the short-cut thing trips up almost everyone, it's just not common knowledge. What's your lawn looking like right now, mostly brown or just patchy in spots?",
        offerMessage: "Honestly the cutting height is usually one of 3-4 things stacking up. I do a free lawn health audit for a few neighbors each week — 15 minutes, I walk the yard and tell you exactly what's going on and what it'd take to fix, no pressure at all. Want me to swing by this week and take a look at yours?",
        followUpIfNoResponse: "No worries if the timing's not right — just wanted to mention the offer's still open if you want a second pair of eyes on it before things get worse this summer. Here whenever."
      },
      videoScriptHook: "If you're cutting your grass short to mow less often, you're actually creating more work for yourself.",
      videoScript: "If you're cutting your grass short to mow less often, you're actually creating more work for yourself. [PAUSE]\n\n[TEXT ON SCREEN: Short grass = shallow roots]\n\nHere's what happens — when you scalp your lawn, the roots only grow as deep as the blade is tall. Short blade, shallow roots. Shallow roots can't reach water during a hot week, so the grass dies back and goes brown. [PAUSE]\n\n[TEXT ON SCREEN: Taller grass = deeper roots = less watering]\n\nThe lawns that stay green all summer with barely any watering? Almost always being cut higher — like 3 to 3.5 inches instead of 2. Deeper roots, more shade on the soil, less evaporation. [PAUSE]\n\n[TEXT ON SCREEN: Drop a 🌱 if your lawn's been struggling]\n\nIf your lawn's been going brown faster than it should, drop a 🌱 in the comments and I'll tell you what height you're probably cutting at and how to fix it.",
      videoCaption: "Cutting your grass short to mow less? That might be exactly why it's going brown. Short grass = shallow roots = grass that can't handle a hot week. Drop a 🌱 below if your lawn's been struggling and I'll help you figure out why."
    }
  },

  // ══════════════════════════════════════════
  // ROOFING — Recent News / Storm Trend
  // ══════════════════════════════════════════
  {
    id: 'ge-roofing-news',
    niche: 'Roofing',
    hookType: 'news',
    label: 'Roofing: Storm season heads-up post',
    result: {
      hookTypeName: 'Recent News / Trend',
      groupPost: "Heads up neighbors — with the storms we've had rolling through lately, insurance companies are reporting a big jump in wind and hail damage claims across the area this season.\n\nThe tricky part is a LOT of roof damage isn't visible from the ground. Lifted shingles, granule loss, soft spots — you usually can't see any of it from your yard, but it's exactly what causes a slow leak 6 months from now that suddenly becomes a big problem.\n\nAnyone had a roofer actually come look at theirs after the last storm, or is everyone just hoping it's fine? 😅 Curious what people are seeing out there.",
      whyItWorks: "This works because it references something real and recent (storm activity) that people have a genuine reason to be thinking about right now, framed as a public-service heads-up rather than a pitch. The slightly self-deprecating humor in the closing question ('or is everyone just hoping it's fine') lowers defenses and makes people comfortable admitting they haven't checked — which is the exact opening you need.",
      groupPostingTips: [
        "Time this post within 24-48 hours of any actual storm event in your area for maximum relevance — the algorithm and the audience both respond better to timely posts",
        "Avoid naming your company or any pricing in the post itself; let the comments and DMs carry that weight instead",
        "If anyone comments describing damage, reply publicly with a genuinely helpful (non-salesy) tip first, then move to DM only if they seem interested in next steps",
        "Cross-post a lighter version (just the storm question, no roof-damage detail) in 2-3 different local groups to widen reach without looking like a copy-paste ad"
      ],
      dmScript: {
        trigger: "Comments describing storm damage, asks a question about their roof, or reacts to the post",
        openingMessage: "Hey, saw your comment on the storm post! That's actually a really common spot for wind damage to start showing up. Have you noticed any granules in your gutters or downspouts, or just hadn't checked yet?",
        offerMessage: "Totally get it, most people don't check until there's an actual leak. I do free roof inspections for a few neighbors after storms like this — takes about 20 minutes, I'll get on the roof, take photos, and tell you straight up if there's anything insurance-worthy or if you're in the clear. No cost, no pressure either way. Want me to come take a look this week?",
        followUpIfNoResponse: "No rush at all — just didn't want you to miss the window if there's hidden damage. The offer's open whenever you're ready, just shoot me a message."
      },
      videoScriptHook: "If you haven't checked your roof since the last storm, here's what insurance companies are seeing right now.",
      videoScript: "If you haven't checked your roof since the last storm, here's what insurance companies are seeing right now. [PAUSE]\n\n[TEXT ON SCREEN: Claims are up this season]\n\nWind and hail damage claims are spiking, and the problem is most roof damage is completely invisible from the ground. You're not going to see lifted shingles or granule loss standing in your driveway. [PAUSE]\n\n[TEXT ON SCREEN: A small leak today = a big problem in 6 months]\n\nWhat starts as a tiny issue you can't see turns into a slow leak that shows up as a stain on your ceiling 6 months from now — by then it's a much bigger, much more expensive fix. [PAUSE]\n\n[TEXT ON SCREEN: Comment STORM and I'll check yours free]\n\nIf you haven't had eyes on your roof since the last storm came through, comment STORM and I'll come take a look — no charge, no pressure, just straight answers.",
      videoCaption: "Storm season is doing a number on roofs right now and most of the damage you can't even see from the ground. If you haven't had your roof checked since the last big storm, comment STORM and I'll come take a look for free."
    }
  },

  // ══════════════════════════════════════════
  // HVAC — Free Offer Example
  // ══════════════════════════════════════════
  {
    id: 'ge-hvac-freeoffer',
    niche: 'HVAC',
    hookType: 'freeoffer',
    label: 'HVAC: Free tune-up story example',
    result: {
      hookTypeName: 'Free Offer Example',
      groupPost: "Quick story from this week — went out to a house a couple streets over because their AC was 'working fine' but their electric bill had crept up $80/month over the last year. Did a free check and found the system was running on a refrigerant level low enough that it was basically working twice as hard for the same cooling.\n\nTopped it off, cleaned the coils while I was there, bill should drop right back down. Took 20 minutes and cost them nothing since I was already in the area doing a free check.\n\nIf anyone's noticed their AC running more than it used to, or your bill creeping up for no obvious reason, drop a 🙋 below and I'll swing by and take a look at yours too — same deal, no charge.",
      whyItWorks: "This works because it's framed as a specific, believable, recently-happened story rather than a generic offer — specific numbers ($80/month) and a specific fix make it feel real, not like marketing copy. The free offer is introduced as something already given to a neighbor, which makes it feel earned/limited rather than a standing ad, and the comment trigger is a low-friction emoji instead of a typed word.",
      groupPostingTips: [
        "Use a real recent job if you have one — specifics (exact dollar amounts, exact issue found) make this format far more believable than a vague version",
        "Post mid-week during the hottest part of the day if it's summer, or the coldest snap if it's winter — timing the post to when people are actively feeling the discomfort dramatically increases response",
        "Keep the comment trigger to a single emoji (🙋, 👍) rather than a typed keyword for this format — it lowers the friction even further and tends to outperform word-based triggers for this specific hook type",
        "Avoid stacking more than one 'free' mention in the post itself — one clear free offer reads as generous, two or three reads as a sales pitch"
      ],
      dmScript: {
        trigger: "Reacts with the emoji, comments, or asks a question about their own system",
        openingMessage: "Hey! Saw you reacted to the AC post — what's going on with yours, has the bill been creeping up or is it more like it's just not keeping the house as cool as it used to?",
        offerMessage: "Got it, that's actually a really common combo and usually an easy fix once we know what's going on. Same deal as the post — I can swing by this week, do a full check (refrigerant level, coils, airflow, the works), no charge. Takes maybe 20-30 minutes. Want me to grab you a time this week or next?",
        followUpIfNoResponse: "No worries, just wanted to check back in — the free check offer's still good whenever it's convenient for you, no expiration on it."
      },
      videoScriptHook: "Your AC bill going up $80 a month for no reason? Here's what's probably happening.",
      videoScript: "Your AC bill going up $80 a month for no reason? Here's what's probably happening. [PAUSE]\n\n[TEXT ON SCREEN: True story from this week]\n\nWent to a house this week, AC was 'working fine' but their bill had crept up $80 a month over the year. Did a free check, found the refrigerant was low — system was working twice as hard for the same cooling. [PAUSE]\n\n[TEXT ON SCREEN: 20 minutes. $0. Bill drops back down.]\n\nTopped it off, cleaned the coils, 20 minutes, didn't cost them anything since I was already doing a free check in the area. Bill should drop right back to normal next cycle. [PAUSE]\n\n[TEXT ON SCREEN: Drop a 🙋 if your bill's been creeping up]\n\nIf your AC's running more than it used to or your bill's been quietly climbing, drop a 🙋 below and I'll come check yours too, same deal, no charge.",
      videoCaption: "Found a system running at half efficiency this week just from low refrigerant — cost the homeowner an extra $80/month without them knowing. Took 20 minutes to fix for free. If your bill's been creeping up, drop a 🙋 and I'll check yours too."
    }
  },

  // ══════════════════════════════════════════
  // PLUMBING — Costly Mistake Story
  // ══════════════════════════════════════════
  {
    id: 'ge-plumbing-failstory',
    niche: 'Plumbing',
    hookType: 'failstory',
    label: 'Plumbing: $4,200 water heater mistake story',
    result: {
      hookTypeName: 'Costly Mistake Story',
      groupPost: "PSA for anyone with a water heater older than 8-10 years — had a call this week from someone whose water heater finally gave out, except it didn't just stop working. It leaked for probably a couple days before anyone noticed, since it's in a closet nobody checks often.\n\nBy the time they called, it had already warped part of the subfloor and started growing mold behind the wall. What would've been a $1,200 water heater replacement turned into a $4,200+ repair between the floor, drywall, and mold remediation.\n\nAnyone know how old theirs is off the top of their head? Most people genuinely have no idea — worth a quick check. What's everyone's water heater situation looking like?",
      whyItWorks: "This works because cautionary tales with specific dollar amounts ($1,200 vs $4,200) create a visceral, easy-to-imagine fear without targeting any specific person, which makes it safe and even fun to discuss in the comments. The closing question normalizes not knowing your water heater's age, which removes embarrassment and gets more people responding honestly instead of staying quiet.",
      groupPostingTips: [
        "Anonymize all identifying details (no street names, no exact dates) to avoid seeming like gossip and to keep the focus on the lesson, not the person",
        "This format performs especially well in groups with a lot of older housing stock or first-time homeowners — adjust the story slightly to match your specific group's typical home age",
        "Respond to comments with simple, genuinely helpful info (like 'it's usually a sticker on the side with the manufacture date') before ever mentioning your business — this builds trust fast",
        "Avoid posting this more than once per quarter in the same group — the cautionary-tale format loses impact with repetition and can start to feel manipulative if overused"
      ],
      dmScript: {
        trigger: "Comments with their water heater's age, says they don't know, or reacts to the post",
        openingMessage: "Hey, saw your comment on the water heater post! Totally normal not to know off the top of your head, most people don't. If you want, tell me roughly how old your house is or when you moved in and I can usually help you estimate it.",
        offerMessage: "If it's been a while or you're not sure, it might be worth a quick free inspection just so you're not caught off guard — I check the age, look for any early warning signs (rust, slow leaks, weird noises), and let you know honestly if you've got years left or if it's something to plan for. No charge, no pressure. Want me to swing by this week?",
        followUpIfNoResponse: "No worries — just wanted to mention the free check is still on the table whenever you want peace of mind on it. No rush at all."
      },
      videoScriptHook: "A $1,200 water heater repair turned into $4,200 because of one thing nobody checks.",
      videoScript: "A $1,200 water heater repair turned into $4,200 because of one thing nobody checks. [PAUSE]\n\n[TEXT ON SCREEN: Water heater failed in a closet]\n\nHad a call this week — water heater finally gave out, but it didn't just stop working, it leaked for a couple days before anyone noticed because it's in a closet nobody checks often. [PAUSE]\n\n[TEXT ON SCREEN: $1,200 → $4,200+]\n\nBy the time anyone called, it had already warped the subfloor and started growing mold behind the wall. A simple water heater swap turned into a full floor, drywall, and mold remediation job. [PAUSE]\n\n[TEXT ON SCREEN: Comment AGE if you don't know yours]\n\nMost water heaters last 8-10 years, and most people have no idea how old theirs is. If that's you, comment AGE and I'll help you figure out how to check — takes 30 seconds and could save you thousands.",
      videoCaption: "A water heater that quietly failed in a closet turned a $1,200 fix into a $4,200+ repair because nobody noticed the leak for days. If you don't know how old your water heater is, comment AGE and I'll help you check."
    }
  }

];
