import { CarouselTemplate } from './templates';

export const SALES_AND_RETENTION_TEMPLATES: CarouselTemplate[] = [

  // ══════════════════════════════════════════
  // SALES FRAMEWORKS
  // ══════════════════════════════════════════
  {
    id: 'sales-spin',
    label: 'SPIN Selling Framework',
    desc: 'The research-backed question sequence that closes complex sales',
    icon: '🔄',
    category: 'Sales Frameworks',
    format: 'lesson',
    topic: 'SPIN Selling framework — Situation, Problem, Implication, Need-Payoff questions',
    cards: [
      { type: 'cover', eyebrow: 'SALES FRAMEWORK', headline: 'THE QUESTION SEQUENCE THAT CLOSES COMPLEX SALES', subheadline: 'SPIN Selling — Neil Rackham\'s research across 35,000 sales calls distilled into 4 question types.', tag: 'SPIN SELLING' },
      { type: 'lesson', eyebrow: 'THE FRAMEWORK', headline: 'SPIN — 4 TYPES OF QUESTIONS IN ORDER', bullets: ['S — Situation: understand their current state (ask few — buyers find them tedious)', 'P — Problem: identify explicit pain points they acknowledge', 'I — Implication: expand the consequences of that problem ("what does that cost you?")', 'N — Need-Payoff: get them to articulate the value of solving it ("what would that be worth?")'], lesson: 'Most salespeople stop at Situation and Problem. Implication and Need-Payoff are where deals are won.', lessonLabel: 'THE SEQUENCE', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'IMPLICATION QUESTIONS', headline: 'THE MOST POWERFUL QUESTIONS IN SALES', bullets: ['"What happens to your team schedule when you do not have jobs booked in advance?"', '"How much revenue do you estimate you\'ve lost from leads that went cold?"', '"What has this cost you over the last 12 months if you think about it carefully?"', 'Implication questions make the problem feel urgent without you saying a word'], lesson: 'Implication questions are not about information gathering. They are about amplifying felt pain.', lessonLabel: 'THE TACTIC', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'NEED-PAYOFF QUESTIONS', headline: 'LET THEM CLOSE THEMSELVES', bullets: ['"If you had a system that automatically followed up with every estimate for 7 days — what would that be worth?"', '"How important is it to you to solve this before the busy season starts?"', '"What would consistent lead flow change about how you run your business?"', 'These questions make the prospect articulate the ROI before you quote the price'], lesson: 'When they say the ROI out loud, your price becomes the obvious next step.', lessonLabel: 'THE CLOSE SETUP', slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE RESEARCH', stat: '17%', statLabel: 'Higher close rate when using all 4 SPIN question types vs Situation and Problem alone', body: 'Rackham studied 35,000 sales calls across 23 countries over 12 years. SPIN was the pattern in every top-performing sales conversation — regardless of industry.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'APPLY THIS', headline: 'WRITE 3 IMPLICATION AND 3 NEED-PAYOFF QUESTIONS FOR YOUR NEXT CALL', body: 'Practice them until they feel natural. The first time you hear a prospect say their own ROI back to you — you will never go back to the old way.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'sales-discovery-call',
    label: 'The Perfect Discovery Call',
    desc: 'The exact structure for a 30-minute discovery call that closes',
    icon: '📞',
    category: 'Sales Frameworks',
    format: 'checklist',
    topic: 'The perfect discovery call structure for home service and marketing agency sales',
    cards: [
      { type: 'cover', eyebrow: 'SALES FRAMEWORK', headline: 'THE PERFECT 30-MINUTE DISCOVERY CALL', subheadline: 'The exact structure that turns cold prospects into closed deals. No pitching required.', tag: 'SALES SYSTEM' },
      { type: 'checklist', eyebrow: 'MINUTES 0-5', headline: 'SET THE FRAME BEFORE THEY CAN', checks: ['State the agenda upfront: "I want to spend a few minutes learning about your business, then I\'ll share what we do and see if it\'s a fit"', 'Get permission: "Does that work for you?"', 'Ask the timeline question early: "What made you reach out today specifically?"'], slideNumber: 1, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'MINUTES 5-15', headline: 'DIG INTO THE PROBLEM — NOT THE PRODUCT', checks: ['Current situation: "Walk me through how you currently get new jobs"', 'Pain: "What\'s the biggest frustration with that right now?"', 'Cost: "What has that been costing you — time, money, or both?"', 'Timeline: "How long has this been going on?"', 'Priority: "On a scale of 1-10, how important is fixing this right now?"'], slideNumber: 2, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'MINUTES 15-25', headline: 'PRESENT ONLY WHAT SOLVES THEIR SPECIFIC PROBLEM', checks: ['Recap their pain before presenting: "So what I\'m hearing is..."', 'Present only the features that address what they told you', 'Use their words: "You mentioned you lose leads in follow-up — here\'s exactly how we solve that"', 'Show a relevant case study from a similar company'], slideNumber: 3, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'MINUTES 25-30', headline: 'CLOSE OR QUALIFY OUT', checks: ['Need-payoff question: "If this worked the way I described — what would that mean for you?"', 'Ask for the decision: "Does this feel like a good fit based on what you\'ve shared?"', 'If yes → next step. If no → ask what\'s missing', 'Never end without a defined next action and a specific date'], slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'THE SYSTEM', headline: 'THE CALL STRUCTURE IS THE PRODUCT', body: 'A great discovery call makes the close feel like the natural conclusion — not a confrontation. Run this structure 10 times and you will never go back to winging it.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'sales-objection-handling',
    label: 'Objection Handling Playbook',
    desc: 'The 5 most common sales objections and exactly how to handle them',
    icon: '🛡️',
    category: 'Sales Frameworks',
    format: 'lesson',
    topic: 'How to handle the 5 most common sales objections for home service and marketing companies',
    cards: [
      { type: 'cover', eyebrow: 'SALES FRAMEWORK', headline: 'THE 5 OBJECTIONS YOU WILL HEAR ON EVERY CALL', subheadline: 'And the exact response to each one. Memorize these. Use them.', tag: 'OBJECTION HANDLING' },
      { type: 'lesson', eyebrow: 'OBJECTION 1', headline: '"YOUR PRICE IS TOO HIGH"', bullets: ['"Compared to what?" — surfaces the real comparison', '"What were you expecting to pay?" — reveals their frame', '"Let me ask — what happens if you do nothing about this for another 6 months?" — implication question', 'Then: "What if I could show you the ROI on this covers the cost in the first 30 days?"'], lesson: 'Price objections are almost always value objections. They do not see enough value yet.', lessonLabel: 'THE RESPONSE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 2', headline: '"I NEED TO THINK ABOUT IT"', bullets: ['"Of course. What specifically do you want to think about?" — forces specificity', '"Is it the investment, the timing, or are you not sure this is the right fit?" — isolates the real objection', '"What would you need to see to feel confident moving forward?"', '"If you were going to move forward, what would the next step look like?"'], lesson: '"Think about it" means they have an objection they have not said out loud yet. Find it.', lessonLabel: 'THE RESPONSE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 3', headline: '"WE\'RE ALREADY WORKING WITH SOMEONE"', bullets: ['"That\'s great — how\'s that going for you?" — genuine curiosity, no attack', '"What do you love about them?" — uncovers what they value', '"Is there anything you wish they did better?" — surfaces the gap', '"Would you be open to seeing if we can fill that gap — no commitment required?"'], lesson: 'You are not selling against the competitor. You are selling against the gap they leave.', lessonLabel: 'THE RESPONSE', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 4', headline: '"NOW IS NOT A GOOD TIME"', bullets: ['"When would be a good time?" — gets a commitment', '"What would need to change for the timing to be right?" — surfaces the real barrier', '"Completely understand. Can I ask — what is making this a bad time right now?" — builds context', '"Most of our clients said the same thing before starting. What changed for them was..."'], lesson: 'Timing objections are usually priority objections. They need to feel the urgency of inaction.', lessonLabel: 'THE RESPONSE', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 5', headline: '"I NEED TO TALK TO MY PARTNER/SPOUSE"', bullets: ['Do not negotiate without the decision maker in the room', '"Absolutely — when can we get them on a call together?" — schedule it immediately', '"What are their biggest concerns likely to be? I want to make sure we address those."', 'Offer a 15-minute "partner call" where you walk through it together'], lesson: 'If there is a second decision maker, the deal does not close without them. Get them in the room.', lessonLabel: 'THE RESPONSE', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'PRACTICE THESE', headline: 'ROLE PLAY EVERY OBJECTION BEFORE YOUR NEXT CALL', body: 'The salesperson who has practiced their responses sounds confident. Confidence closes. Hesitation kills deals.', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // RETENTION, ASCENSION, UPSELLS
  // ══════════════════════════════════════════
  {
    id: 'retention-value-ladder',
    label: 'The Value Ladder — Ascension Strategy',
    desc: 'How to move customers from low-ticket to high-ticket systematically',
    icon: '📈',
    category: 'Retention & Ascension',
    format: 'lesson',
    topic: 'Value ladder ascension strategy — how to move clients from entry offers to premium packages',
    cards: [
      { type: 'cover', eyebrow: 'RETENTION STRATEGY', headline: 'THE VALUE LADDER — YOUR ASCENSION ROADMAP', subheadline: 'Every client should have a clear path from their first purchase to your highest-value offer.', tag: 'ASCENSION' },
      { type: 'lesson', eyebrow: 'THE CONCEPT', headline: 'MOST BUSINESSES HAVE AN ENTRY AND AN EXIT — NO LADDER', bullets: ['Entry: a single service at a fixed price', 'Exit: client finishes the job and leaves', 'Every dollar in between is left uncollected because there is no next step', 'A value ladder creates a systematic path from first transaction to maximum lifetime value'], lesson: 'Every client who buys your lowest offer should have a defined path to your highest offer.', lessonLabel: 'THE PRINCIPLE', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'BUILDING THE LADDER', headline: 'A VALUE LADDER FOR A MARKETING AGENCY', bullets: ['Rung 1: Free audit or consultation (entry point)', 'Rung 2: Starter package — basic setup ($397/mo)', 'Rung 3: Growth package — full funnel + automation ($797/mo)', 'Rung 4: Premium package — ads + SEO + full management ($1,500/mo)', 'Rung 5: Done-with-you coaching or implementation ($5,000+)'], lesson: 'Each rung delivers enough value that the next rung becomes the obvious next step.', lessonLabel: 'THE STRUCTURE', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE TRIGGER', headline: 'WHAT MOVES SOMEONE UP THE LADDER', bullets: ['A result on the current rung makes the next rung feel like a natural investment', 'A check-in conversation at 60 days: "You are getting X results — here is what we could do with Y"', 'A trigger event: their busy season, a competitor gaining on them, a new goal they share'], lesson: 'Ascension is not selling — it is showing someone what is possible from where they already stand.', lessonLabel: 'THE MOVE', slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '5x', statLabel: 'More revenue from ascending an existing client than acquiring a new one at the same cost', body: 'An existing client on Rung 3 who moves to Rung 4 generates $700/mo more with zero acquisition cost. That same $700 in new revenue from ads requires $350-1,400 in ad spend. The math is not close.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'BUILD YOUR LADDER', headline: 'MAP YOUR VALUE LADDER THIS WEEK', body: 'List every service you offer. Organize them by price and complexity. Find the gaps. Those gaps are uncollected revenue.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'upsell-framework',
    label: 'The Perfect Upsell System',
    desc: 'When, how, and what to upsell without feeling pushy',
    icon: '⬆️',
    category: 'Retention & Ascension',
    format: 'lesson',
    topic: 'How to upsell clients without being pushy — timing, framing, and the right offers',
    cards: [
      { type: 'cover', eyebrow: 'UPSELL STRATEGY', headline: 'THE UPSELL THAT DOES NOT FEEL LIKE AN UPSELL', subheadline: 'When you upsell the right thing at the right moment to the right person — they thank you for it.', tag: 'REVENUE GROWTH' },
      { type: 'lesson', eyebrow: 'THE TIMING', headline: 'UPSELL AFTER THE WIN — NEVER BEFORE IT', bullets: ['The best moment to offer more is immediately after delivering a great result', 'Right after completing a job → upsell a maintenance plan', 'Right after a campaign performs well → upsell an upgrade tier', '"You\'ve been seeing X results — here is what we could do if we added Y"'], lesson: 'A customer who just got a win is the most receptive buyer you will ever encounter.', lessonLabel: 'THE RULE', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE FRAMING', headline: 'FRAME THE UPSELL AS THE NEXT LOGICAL STEP', bullets: ['Not: "We also offer..." (product push)', 'Yes: "Based on what you just achieved — the obvious next step is..." (natural progression)', '"Given where you are now and where you want to go — here is the gap we can close next"', 'Tie the upsell directly to their stated goal'], lesson: 'The best upsell feels like advice, not a pitch. Lead with their goal, not your product.', lessonLabel: 'THE LANGUAGE', slideNumber: 2, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'THE 5 UPSELL TRIGGERS', headline: 'WHEN TO OFFER MORE', checks: ['After delivering a result they are excited about', 'When they mention a goal your next tier can help achieve', 'At the 60-90 day mark in the relationship', 'When a trigger event happens (busy season, growth moment, new hire)', 'When they refer someone — they are already in advocacy mode'], slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '60-70%', statLabel: 'Probability of selling to an existing customer vs 5-20% for a new prospect', body: 'Every upsell you do not offer is revenue you leave on the table for a competitor to pick up later. Your current clients are your highest-probability buyers.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WHAT IS YOUR 60-DAY UPSELL TRIGGER?', body: 'Define the trigger event, the offer, and the script. Automate the reminder. Make upselling a system, not a memory.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'cross-sell-framework',
    label: 'Cross-Sell Strategy for Service Businesses',
    desc: 'Sell adjacent services to your existing clients — the easiest revenue you will ever make',
    icon: '↔️',
    category: 'Retention & Ascension',
    format: 'lesson',
    topic: 'How to cross-sell adjacent services to existing home service and marketing clients',
    cards: [
      { type: 'cover', eyebrow: 'CROSS-SELL STRATEGY', headline: 'THE EASIEST REVENUE YOU WILL EVER MAKE', subheadline: 'Your current clients already trust you. All you have to do is offer them more ways to use that trust.', tag: 'REVENUE GROWTH' },
      { type: 'lesson', eyebrow: 'THE PRINCIPLE', headline: 'YOUR CLIENTS HAVE MORE PROBLEMS THAN YOU SOLVE', bullets: ['A tree service client probably also needs: lawn maintenance, gutter cleaning, holiday lights, stump removal', 'A marketing client on social probably also needs: email, reputation management, ads, SEO', 'These adjacent needs are being filled by someone — it could be you'], lesson: 'Every client relationship has adjacent problems you are not solving yet. That is the cross-sell opportunity.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE STRATEGY', headline: 'MAP YOUR CLIENT\'S ADJACENT PROBLEMS', bullets: ['List every problem your ideal client has — not just the one you currently solve', 'Which of those problems do you have the skills or relationships to solve?', 'Which of those problems does your current product or service naturally expand into?', 'Build those adjacent solutions and offer them first to existing clients'], lesson: 'Your satisfied client is the best audience for your next service launch.', lessonLabel: 'THE MOVE', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE LANGUAGE', headline: 'HOW TO INTRODUCE A CROSS-SELL WITHOUT KILLING THE RELATIONSHIP', bullets: ['"Since we\'ve been working together on X, I\'ve noticed you might benefit from Y — want to hear more?"', '"We recently added [new service] — and based on where you are, I think you\'d be our ideal candidate for it"', '"A lot of our [X] clients also use [Y] — have you thought about that?"'], lesson: 'Cross-selling is not pitching — it is noticing a client need and offering to solve it.', lessonLabel: 'THE FRAMING', slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '$0', statLabel: 'Cost to offer an existing client an adjacent service — vs $200-500 to acquire a new client', body: 'A cross-sell to an existing client has zero acquisition cost, higher close rate (60-70% vs 5-20%), and zero trust-building required. It is the highest-margin sale in any business.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'YOUR ACTION', headline: 'LIST 3 ADJACENT SERVICES YOUR TOP 10 CLIENTS MIGHT NEED', body: 'Call or text one of them this week and mention it. The response will tell you everything about whether there is a market for it.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'retention-churn-prevention',
    label: 'Churn Prevention System',
    desc: 'How to keep clients longer and spot the ones about to leave',
    icon: '🔒',
    category: 'Retention & Ascension',
    format: 'lesson',
    topic: 'Client retention strategy and churn prevention for service businesses and agencies',
    cards: [
      { type: 'cover', eyebrow: 'RETENTION STRATEGY', headline: 'HOW TO KEEP CLIENTS LONGER AND SPOT THE ONES ABOUT TO LEAVE', subheadline: 'Churn is silent, expensive, and almost always predictable. Here is how to stop it.', tag: 'CLIENT RETENTION' },
      { type: 'stat', eyebrow: 'THE MATH', stat: '5x', statLabel: 'More expensive to replace a client than to retain one — Harvard Business Review', body: 'A 5% increase in retention increases profits by 25-95%. Yet most businesses spend 90% of their marketing budget on acquisition and almost nothing on retention.', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE EARLY WARNING SIGNS', headline: 'CLIENTS WHO ARE ABOUT TO LEAVE ALWAYS SHOW SIGNALS', bullets: ['They go quiet — fewer replies, longer response times', 'They stop engaging with results you share', 'They ask "what have we actually achieved?" — they are scoring you in their head', 'They mention a competitor or ask about something outside your scope'], lesson: 'Churn rarely happens without warning. Most businesses just are not watching for the signals.', lessonLabel: 'THE PATTERNS', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE QBR', headline: 'THE QUARTERLY BUSINESS REVIEW THAT PREVENTS CHURN', bullets: ['Schedule a 30-minute call every 90 days with every retained client', 'Show results since the last review — specific numbers', 'Ask: "What\'s working? What could be better? What are your goals for next quarter?"', 'Preview next quarter\'s plan — make them feel invested in what\'s coming'], lesson: 'Clients leave when they feel like you stopped caring about their results. QBRs prove you never did.', lessonLabel: 'THE SYSTEM', slideNumber: 3, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE RETENTION CHECKLIST', headline: 'DO THESE AND CHURN DROPS DRAMATICALLY', checks: ['60-day success call: show early wins, ask for feedback', 'Monthly results report sent before they have to ask', 'Proactive communication: tell them about changes before they feel them', 'Surprise moments of value: bonus content, early feature access, a referral gift', 'Exit interview for every client who leaves — no exceptions'], slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE SAVE CALL', headline: 'WHEN A CLIENT SAYS THEY WANT TO LEAVE', bullets: ['"Can I ask — what would need to change for you to stay?" — surfaces the real issue', '"What would \'better\' look like for you?" — gets them to define success on their terms', '"Give us 30 days to fix X — if it\'s not right by then, we\'ll part on good terms" — buys time and shows commitment'], lesson: 'A client who says they are leaving is still talking to you. That means there is still a chance.', lessonLabel: 'THE SCRIPT', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'SCHEDULE YOUR NEXT 3 CLIENT QBR CALLS THIS WEEK', body: 'The clients you check in with stay. The ones you ignore leave — usually for a competitor who was paying more attention.', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // INFLUENCERS TO FOLLOW
  // ══════════════════════════════════════════
  {
    id: 'marketing-influencers',
    label: 'Marketing Influencers to Follow',
    desc: 'The accounts that will actually make you better at marketing',
    icon: '👥',
    category: 'Resources',
    format: 'authority-list',
    topic: 'The marketing influencers and educators worth following in 2024',
    cards: [
      { type: 'cover', eyebrow: 'MARKETING RESOURCES', headline: 'THE MARKETING ACCOUNTS WORTH ACTUALLY FOLLOWING', subheadline: 'Not influencers. Educators. People who make you better every time they post.', tag: '2024 LIST' },
      { type: 'lesson', eyebrow: 'DIRECT RESPONSE', headline: 'DIRECT RESPONSE & COPYWRITING', bullets: ['Gary Bencivenga — the greatest living copywriter. Search his farewell seminar.', 'Dan Kennedy — @dankennedy_nobs — direct mail and direct response for local business', 'David Garfinkel — fastest way to learn copywriting in a short format', 'Stefan Georgi — RMBC copywriting method, one of the best modern copywriters'], lesson: 'Study the people who write ads that make millions — not the ones who talk about writing ads.', lessonLabel: 'THE LIST', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'BUSINESS GROWTH', headline: 'BUSINESS GROWTH & OFFER STRATEGY', bullets: ['Alex Hormozi — @hormozi — offer creation, business growth, and ruthless clarity', 'Russell Brunson — @russellbrunson — funnels, traffic, and online marketing', 'Noah Kagan — @noahkagan — practical growth and customer development', 'Codie Sanchez — @codiesanchez — buying and building service businesses'], lesson: 'Follow people who have done the thing, not just studied it.', lessonLabel: 'THE LIST', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'CONTENT & SOCIAL', headline: 'CONTENT STRATEGY & SOCIAL MEDIA', bullets: ['Jay Baer — @jaybaer — practical content and word-of-mouth strategy', 'Jonah Berger — @j1berger — science behind why content spreads', 'Eddie Shleyner — @verygoodnov — best short-form copywriting education on LinkedIn', 'Justin Welsh — @thejustinwelsh — solopreneur content and LinkedIn growth'], lesson: 'The accounts that teach frameworks outperform the ones that just share tactics.', lessonLabel: 'THE LIST', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'SALES', headline: 'SALES EDUCATION', bullets: ['Jeremy Miner — @jeremyleeminer — NEPQ framework, the best modern sales training', 'Jeb Blount — @jebblount — fanatical prospecting and outbound sales', 'Chris Voss — @fbinegotiator — negotiation and high-stakes communication', 'Justin Michael — @justinmichaeltech — cold outreach and B2B prospecting'], lesson: 'Sales education is the highest-ROI self-investment in any business.', lessonLabel: 'THE LIST', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LOCAL & SERVICE BUSINESS', headline: 'LOCAL AND SERVICE BUSINESS SPECIFICALLY', bullets: ['Mike Michalowicz — @mikemichalowicz — Profit First author, service business systems', 'Donald Miller — @donaldmiller — StoryBrand framework for all marketing', 'Ken Goodrich — successful home service franchise builder and operator', 'Cody Askins — @codyaskins — insurance and home service sales training'], lesson: 'Generic marketing advice needs to be filtered through the lens of service business reality. Follow people who live in that reality.', lessonLabel: 'THE LIST', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD YOUR FEED', headline: 'WHO YOU FOLLOW DETERMINES WHAT YOU KNOW', body: 'Your content feed is your curriculum. Build it intentionally. Unfollow the noise. Follow the people who make you better every single time they post.', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // HISTORIC ADVERTISEMENTS
  // ══════════════════════════════════════════
  {
    id: 'historic-ads-that-shaped-world',
    label: 'Historic Ads That Shaped the World',
    desc: '5 advertisements that changed industries, cultures, and consumer behavior',
    icon: '📰',
    category: 'Historic Advertising',
    format: 'history',
    topic: 'Historic advertisements that shaped consumer culture and changed marketing forever',
    cards: [
      { type: 'cover', eyebrow: 'ADVERTISING HISTORY', headline: '5 ADS THAT CHANGED THE WORLD', subheadline: 'Before digital. Before social. Before data. These campaigns rewired how billions of people think.', tag: 'ADVERTISING HISTORY' },
      { type: 'example', eyebrow: 'AD #1 — 1971', headline: 'COCA-COLA "I\'D LIKE TO BUY THE WORLD A COKE"', body: 'During the Vietnam War and peak cultural division, Coca-Cola aired a commercial of young people from 50 nations singing together on a hillside. It was not about the product. It was about what the product stood for. Sales spiked. The song became a #1 hit. It showed that advertising could create culture.', lesson: 'The most powerful ads do not sell a product — they sell a feeling the product becomes associated with.', lessonLabel: 'THE LESSON', slideNumber: 1, totalSlides: 6 },
      { type: 'example', eyebrow: 'AD #2 — 1984', headline: 'APPLE "1984" — ONE AIRING. PERMANENT IMPACT.', body: 'Directed by Ridley Scott. Aired once during the Super Bowl. Budget: $1.5M. It showed a woman destroying a giant screen showing an Orwellian dictator. No product features. No price. Just a promise: Apple will set you free. It made Apple synonymous with rebellion and creativity — an identity the company still lives inside today.', lesson: 'Brand advertising at its most powerful does not describe the product — it positions the customer as the hero.', lessonLabel: 'THE LESSON', slideNumber: 2, totalSlides: 6 },
      { type: 'example', eyebrow: 'AD #3 — 1959', headline: 'DE BEERS "A DIAMOND IS FOREVER"', body: 'Before 1947, diamond engagement rings were not a cultural norm. De Beers hired N.W. Ayer to create one. The campaign ran for 70 years. By 1990, 80% of American brides received a diamond ring. De Beers did not find a market — they manufactured one through advertising. "A Diamond Is Forever" was voted the best advertising slogan of the 20th century.', lesson: 'Advertising can create demand where none existed. De Beers did not sell diamonds — they sold a tradition.', lessonLabel: 'THE LESSON', slideNumber: 3, totalSlides: 6 },
      { type: 'example', eyebrow: 'AD #4 — 1964', headline: 'LYNDON JOHNSON "DAISY AD" — CHANGED POLITICAL ADVERTISING FOREVER', body: 'A 60-second TV spot. A little girl counts petals on a daisy. A nuclear countdown begins. An explosion. Aired once. Pulled within 24 hours due to controversy. Johnson won by the largest popular vote margin in history. The ad proved that emotional political advertising could override logic. Political campaigns have operated on this principle ever since.', lesson: 'Emotional advertising creates memory and drives action more powerfully than rational argument — in any context.', lessonLabel: 'THE LESSON', slideNumber: 4, totalSlides: 6 },
      { type: 'example', eyebrow: 'AD #5 — 1950s', headline: 'MARLBORO MAN — TURNED A CIGARETTE FOR WOMEN INTO THE #1 MALE BRAND', body: 'Marlboro was originally marketed as a filtered cigarette for women. Sales were failing. Leo Burnett rebranded with the Marlboro Man — a rugged cowboy. Within a year, Marlboro went from negligible market share to the #1 selling cigarette in America. The Marlboro Man ran for 45 years and became one of the most recognized advertising icons in history.', lesson: 'A brand is not what you sell — it is who your customer wants to be. Burnett sold an identity, not a cigarette.', lessonLabel: 'THE LESSON', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'THE THROUGHLINE', headline: 'EVERY GREAT AD SOLD AN IDENTITY, NOT A PRODUCT', body: 'Freedom. Rebellion. Love. Masculinity. Unity. Every campaign on this list sold a feeling that people wanted to be part of — and the product was just the vehicle. What feeling does your brand sell?', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // BEFORE/AFTER TRANSFORMATION
  // ══════════════════════════════════════════
  {
    id: 'before-after-marketing-system',
    label: 'Before/After: Marketing System',
    desc: 'Life before vs after a real marketing system — for contractors',
    icon: '🔄',
    category: 'Before & After',
    format: 'story',
    topic: 'Before and after transformation for a contractor who implemented a marketing system',
    cards: [
      { type: 'cover', eyebrow: 'TRANSFORMATION STORY', headline: 'BEFORE THE SYSTEM VS AFTER THE SYSTEM', subheadline: 'What a contractor\'s business looks like before — and 90 days after — a real marketing system.', tag: 'REAL RESULTS' },
      { type: 'problem', eyebrow: 'BEFORE THE SYSTEM', headline: 'THE MONDAY MORNING SCRAMBLE', body: 'Calls leads manually from a spreadsheet. Half of them have already hired someone else. Sends estimates by email and hears nothing for days. Follows up once, feels awkward, stops. Relies on word of mouth for new work. Has a great season followed by a dead one. Never knows what next month looks like.', bullets: ['Response time: 3-6 hours average', 'Follow-up: 1-2 attempts then silence', 'Review count: 14 Google reviews in 3 years', 'Revenue predictability: none'], slideNumber: 1, totalSlides: 5 },
      { type: 'solution', eyebrow: 'AFTER THE SYSTEM — 90 DAYS', headline: 'THE SAME BUSINESS. COMPLETELY DIFFERENT EXPERIENCE.', body: 'Every new lead gets a text within 90 seconds automatically. A 7-day follow-up sequence runs whether the owner is on a job or at dinner. Google reviews are requested after every completed job. Past customers get a reactivation campaign every 90 days. The pipeline is visible in a dashboard updated in real time.', lesson: 'The work is the same. The business that runs around it is unrecognizable.', lessonLabel: 'THE TRANSFORMATION', slideNumber: 2, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE NUMBERS — 90 DAYS LATER', stat: '3.1x', statLabel: 'Revenue increase from the same lead volume — no additional ad spend', body: 'Response time: under 90 seconds. Follow-up: 7 automated touches. Reviews: 34 new in 90 days. Close rate: 18% → 41%. Reactivation: $18k from the first campaign to past customers.', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'WHAT ACTUALLY CHANGED', headline: 'THE SYSTEM DID NOT CHANGE THE BUSINESS — IT REVEALED IT', bullets: ['The leads were always there — they were just falling through the cracks', 'The past customers were always willing to come back — they just needed to be asked', 'The reviews were always earnable — it just needed to be systematized', 'The close rate was always improvable — the follow-up just needed to run consistently'], lesson: 'You do not have a leads problem. You have a system problem. The revenue you want is already in the business.', lessonLabel: 'THE INSIGHT', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'YOUR BEFORE STORY', headline: 'WHAT DOES YOUR MONDAY MORNING LOOK LIKE RIGHT NOW?', body: 'If it looks like the Before — the system is the difference. We build it in 72 hours. The first reactivation campaign alone typically covers the investment.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // QUICK WINS — INDUSTRY SPECIFIC
  // ══════════════════════════════════════════
  {
    id: 'quick-wins-roofing',
    label: 'Quick Wins: Roofing Company',
    desc: '5 fast moves that book more roofing jobs this week',
    icon: '⚡',
    category: 'Industry: Roofing',
    format: 'quick-wins',
    topic: '5 quick wins for roofing companies to generate more leads and close more jobs this week',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 QUICK WINS FOR ROOFING COMPANIES THIS WEEK', subheadline: 'No new ad spend. No new systems. Just smarter use of what you already have.', tag: 'ROOFING' },
      { type: 'quick-win', eyebrow: 'WIN #1', headline: 'TEXT EVERY OPEN ESTIMATE FROM THE LAST 30 DAYS', body: '"Hey [name], just following up on the estimate we sent over. I know you have a lot going on — is this still something you\'re moving forward with?" Expect 20-35% to respond. Half of those will book.', lesson: 'You do not need new leads. You need to close the ones you already have.', lessonLabel: 'DO THIS TODAY', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #2', headline: 'PUT A YARD SIGN AT EVERY JOB — WITH YOUR REVIEW LINK', body: 'A yard sign with a QR code that goes to your Google review page. Neighbors see crews working, walk over to look, and scan the code. Costs $30. Generates leads for weeks from every job.', lesson: 'Every completed job is a billboard. Most contractors let it go to waste.', lessonLabel: 'DO THIS TODAY', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #3', headline: 'CALL EVERY INSURANCE CLAIM REFERRAL FROM THE LAST YEAR', body: 'Pull every insurance job from the past 12 months. Call each one: "We handled your roof last year — wanted to check in and see how everything is holding up. Also, do you know anyone going through an insurance claim right now?" Average: 1-2 referrals per 10 calls.', lesson: 'Insurance referrals are the highest-value leads in roofing. Your past clients know people.', lessonLabel: 'DO THIS WEEK', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #4', headline: 'ADD A BEFORE/AFTER PHOTO TEXT TO EVERY COMPLETED JOB', body: 'Right after finishing: text the homeowner a before/after photo collage. "Before and after — your new roof looks incredible. Would love it if you\'d share this with anyone who mentions needing one." 40% share it on their own.', lesson: 'Social proof travels fastest when it comes from someone the recipient already trusts.', lessonLabel: 'DO THIS TODAY', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #5', headline: 'OFFER A REFERRAL GIFT TO EVERY CLOSED JOB', body: 'After every installation: "We\'re running a referral program this month — if you refer someone who gets their roof done with us, we\'ll send you a $100 [gift card/bill credit/restaurant gift card]. Know anyone with an older roof?" Mention it in person, then send the same message by text.', lesson: 'The homeowner who just trusted you with their biggest asset is your best possible salesperson.', lessonLabel: 'DO THIS TODAY', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'GO FURTHER', headline: 'WANT ALL 5 OF THESE AUTOMATED?', body: 'We build automated follow-up, review requests, and referral campaigns for roofing companies. Set up in 72 hours.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'quick-wins-lawn-care',
    label: 'Quick Wins: Lawn Care Company',
    desc: '5 fast moves lawn care companies can execute this week',
    icon: '⚡',
    category: 'Industry: Lawn Care',
    format: 'quick-wins',
    topic: '5 quick wins for lawn care companies to add revenue and clients this week',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 QUICK WINS FOR LAWN CARE COMPANIES THIS WEEK', subheadline: 'Zero new tools. Zero new ads. Just smarter moves with what you already have.', tag: 'LAWN CARE' },
      { type: 'quick-win', eyebrow: 'WIN #1', headline: 'UPSELL AERATION TO EVERY ACTIVE CLIENT THIS WEEK', body: 'Text every active client: "We\'re scheduling fall aeration this week for clients in your area. Want us to add it to your next service? We\'ll handle everything — no extra trip needed." Expect 15-25% to say yes. At $150-$250 per lawn, 10 yes\'s = $1,500-$2,500 in one text blast.', lesson: 'Adjacent services to active clients have almost zero acquisition cost.', lessonLabel: 'DO THIS TODAY', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #2', headline: 'CONVERT 5 ONE-TIME CLIENTS TO PROGRAMS', body: 'Pull your last 10 one-time mow clients. Call each one: "We\'ve got a few program spots available for next season — it locks in your price, gives you priority scheduling, and saves you about 15% versus booking individual mows. Want me to hold a spot for you?" Expect 40-50% to say yes.', lesson: 'Recurring revenue is built one conversation at a time.', lessonLabel: 'DO THIS WEEK', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #3', headline: 'ADD ONE NEIGHBOR DOOR HANGER PER JOB', body: 'After every service, leave a door hanger at the 3 nearest neighbor properties: "We just finished the lawn next door — if you\'d like the same results, here\'s our number." Include a photo of the finished lawn. Cost: $0.25 per hanger. Average: 1 new client per 15 hangers.', lesson: 'Route density is the most profitable growth strategy in lawn care.', lessonLabel: 'DO THIS TODAY', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #4', headline: 'RUN A "BRING A NEIGHBOR" REFERRAL WEEK', body: 'Text all active clients: "This week only — refer a neighbor who signs up for a program and we\'ll give you one free service. Know anyone who\'s been thinking about getting their lawn taken care of?" Set a 7-day deadline. Expect 5-15% response rate.', lesson: 'Time-limited offers convert dramatically better than evergreen ones.', lessonLabel: 'DO THIS TODAY', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #5', headline: 'REACTIVATE EVERY CHURNED CLIENT FROM LAST YEAR', body: 'Pull everyone who was a client last year but has not rescheduled. Text: "Hey [name], we took care of your lawn last year — just wanted to reach out and see if you\'d like us back this season. We can get you on the schedule this week." Expect 20-30% to respond. Half will book.', lesson: 'Churned clients are not lost. They are just waiting to be asked again.', lessonLabel: 'DO THIS WEEK', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'AUTOMATE ALL 5', headline: 'WANT THESE CAMPAIGNS RUNNING AUTOMATICALLY EVERY SEASON?', body: 'We build seasonal upsell campaigns, reactivation sequences, and referral automations for lawn care companies.', ctaText: 'Book a Free Demo' },
    ],
  },
];
