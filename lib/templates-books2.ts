import { CardData } from './cardTemplate';
import { CarouselTemplate } from './templates';

export const BOOK_TEMPLATES_2: CarouselTemplate[] = [

  // ── PRE-SUASION — CIALDINI ──
  {
    id: 'book-presuasion',
    label: 'Pre-Suasion — Cialdini',
    desc: 'What you do BEFORE the pitch matters more than the pitch itself',
    icon: '🧲',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Pre-Suasion by Robert Cialdini — privileged moments and attention control',
    bookSource: 'Pre-Suasion — Robert Cialdini (2016)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'WIN THE SALE BEFORE YOU MAKE THE PITCH', subheadline: 'Cialdini\'s Pre-Suasion — the moment before your ask determines whether it works.', tag: 'CIALDINI' },
      { type: 'lesson', eyebrow: 'THE BIG IDEA', headline: 'WHAT COMES BEFORE THE MESSAGE IS AS IMPORTANT AS THE MESSAGE', bullets: ['The frame you set before speaking determines how your words land', 'A customer asked "Are you adventurous?" before seeing an offer said yes 3x more often', 'Priming the right mental state makes your pitch land without resistance'], lesson: 'The moment before the ask is the most powerful moment in any sale.', lessonLabel: 'THE PRINCIPLE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'ATTENTION IS NOT NEUTRAL — IT CHANGES PERCEPTION', bullets: ['Whatever people are focused on feels more important to them in that moment', 'Ask someone to remember a time they felt lucky before pricing your service — they negotiate less', 'Ask them to remember a time they were ripped off — price resistance goes up 40%'], lesson: 'What you draw attention to before your pitch changes how your pitch is received.', lessonLabel: 'THE APPLICATION', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'THE PRIVILEGED MOMENT — OWN THE CHANNEL BEFORE THE MESSAGE', bullets: ['Get the right channel first: text beats email when relationship is warm', 'A handwritten note before a sales call improves close rate by 22%', 'Sending a useful piece of content before your pitch primes reciprocity and goodwill'], lesson: 'The channel, the timing, and the setup are part of the persuasion — not the preamble to it.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'example', eyebrow: 'IN PRACTICE', headline: 'THE PRE-SUASION SEQUENCE FOR HOME SERVICE LEADS', body: 'Before sending your estimate: text "Just wanted to say it was great meeting you today — your property is exactly the type of project we do best." Then send the estimate. Priming warmth and specificity before the number lands makes the price feel more justified.', lesson: 'The estimate is not the sale. Everything before the estimate is.', lessonLabel: 'THE APPLICATION', slideNumber: 4, totalSlides: 6 },
      { type: 'quote', eyebrow: 'CIALDINI', quote: 'To persuade optimally, it is necessary to pre-suade optimally — to arrange for recipients to be in the right state of mind before any request.', author: 'Robert Cialdini — Pre-Suasion (2016)', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'PRE-SUASION — THE SEQUEL TO INFLUENCE', body: 'If Influence taught you the 6 triggers, Pre-Suasion teaches you what to do in the moment before you use them. Both are required reading.', ctaText: 'Follow For More' },
    ],
  },

  // ── TRAFFIC SECRETS — BRUNSON ──
  {
    id: 'book-traffic-secrets',
    label: 'Traffic Secrets — Russell Brunson',
    desc: 'How to find your dream customers and get them into your funnel',
    icon: '🚦',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Traffic Secrets by Russell Brunson — dream customer avatar and traffic strategies',
    bookSource: 'Traffic Secrets — Russell Brunson (2020)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'TRAFFIC SECRETS — HOW TO FIND YOUR DREAM CUSTOMER', subheadline: 'Russell Brunson\'s playbook for getting your ideal clients to find you — not the other way around.', tag: 'RUSSELL BRUNSON' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'THE DREAM 100 — FISH WHERE THE FISH ALREADY ARE', bullets: ['Your dream customers are already congregating somewhere online — forums, groups, YouTube channels, podcasts', 'Instead of building an audience from scratch, infiltrate where they already are', 'Identify 100 people/platforms where your dream clients spend time — then get in front of them'], lesson: 'Don\'t build a crowd. Join one that already has the people you want.', lessonLabel: 'THE STRATEGY', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'PAID AND EARNED — TWO PATHS TO THE SAME AUDIENCE', bullets: ['Paid traffic: buy your way in (ads, sponsorships)', 'Earned traffic: work your way in (content, collaborations, guest appearances)', 'Brunson recommends working your way in first to understand the audience before paying for access'], lesson: 'Understand the audience before you pay to reach them. Earned traffic teaches you what paid traffic needs to say.', lessonLabel: 'THE FRAMEWORK', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'THE HOOK, STORY, OFFER FRAMEWORK', bullets: ['Every piece of content needs a hook that stops the scroll', 'A story that creates connection and builds desire', 'An offer that is the natural next step from the story'], lesson: 'Hook gets attention. Story earns trust. Offer converts. Remove any one and the whole sequence fails.', lessonLabel: 'THE FORMULA', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'WORK YOUR WAY IN BEFORE YOU BUY YOUR WAY IN', bullets: ['Comment on the posts your dream customers engage with', 'Collaborate with people who already have their attention', 'Create content that appears in the same searches and feeds they use'], lesson: 'Earned presence converts at 3-5x the rate of paid ads because trust is already established.', lessonLabel: 'THE TACTIC', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE REALITY', stat: '95%', statLabel: 'Of your market is not ready to buy today — but they are ready to consume content', body: 'Traffic Secrets is built on this insight: stop trying to sell to everyone and start educating the 95%. The ones ready to buy will self-select and convert.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'TRAFFIC SECRETS — GET IT FREE + SHIPPING AT CLICKFUNNELS.COM', body: 'Brunson offers it free as a lead magnet. Pay shipping. Read it.', ctaText: 'Follow For More' },
    ],
  },

  // ── NEVER SPLIT THE DIFFERENCE — VOSS ──
  {
    id: 'book-voss',
    label: 'Never Split the Difference — Voss',
    desc: 'FBI negotiation tactics that close deals without dropping price',
    icon: '🤝',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Never Split the Difference by Chris Voss — negotiation tactics for sales',
    bookSource: 'Never Split the Difference — Chris Voss (2016)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'FBI NEGOTIATION TACTICS THAT CLOSE MORE DEALS', subheadline: 'Chris Voss negotiated for the FBI. Here is what he learned that applies to every sales call.', tag: 'CHRIS VOSS' },
      { type: 'lesson', eyebrow: 'TACTIC 1', headline: 'TACTICAL EMPATHY — LABEL THEIR EMOTIONS FIRST', bullets: ['"It seems like price is a real concern for you" — name what they feel before addressing it', 'Labeling an emotion defuses it. Ignoring it amplifies it.', 'After labeling: go silent. Let them confirm, correct, or expand. Do not fill the silence.'], lesson: 'People trust negotiators who understand their emotions more than those who counter their logic.', lessonLabel: 'THE TACTIC', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'TACTIC 2', headline: 'THE MIRROR — REPEAT THE LAST 3 WORDS', bullets: ['Customer: "Your price is too high." You: "Too high?" — then silence.', 'Mirroring signals you are listening and invites them to keep talking', 'The more they talk, the more you learn. The more they explain, the more they justify their own objection out loud.'], lesson: 'The best negotiators talk less and mirror more. Let the customer solve their own objection.', lessonLabel: 'THE TACTIC', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'TACTIC 3', headline: 'THE ACCUSATION AUDIT — LIST EVERY OBJECTION FIRST', bullets: ['Before your pitch: "I know this might seem expensive. I know you\'ve probably had bad experiences with contractors before. I know you weren\'t planning to spend this much."', 'Naming every fear before they say it removes its power', 'People cannot accuse you of something you already admitted'], lesson: 'Say their objections before they do. It disarms every one of them.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'TACTIC 4', headline: 'NO IS THE BEGINNING — NOT THE END', bullets: ['"Is now a bad time?" gets more responses than "Do you have a few minutes?"', '"Is this a bad fit?" after a no-reply gets more callbacks than any follow-up', 'No feels safe. Yes feels like commitment. Give people a comfortable no to get them talking.'], lesson: 'A no is not rejection — it is the start of a real conversation.', lessonLabel: 'THE INSIGHT', slideNumber: 4, totalSlides: 6 },
      { type: 'quote', eyebrow: 'CHRIS VOSS', quote: 'Negotiation is not an act of battle — it is a process of discovery. The goal is to uncover as much information as possible.', author: 'Chris Voss — Never Split the Difference (2016)', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'NEVER SPLIT THE DIFFERENCE — MANDATORY FOR ANYONE IN SALES', body: 'The most practical negotiation book ever written. Every chapter has a tactic you can use on your next call.', ctaText: 'Follow For More' },
    ],
  },

  // ── EXPERT SECRETS — BRUNSON ──
  {
    id: 'book-expert-secrets',
    label: 'Expert Secrets — Russell Brunson',
    desc: 'How to turn your knowledge into a movement that sells',
    icon: '🎓',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Expert Secrets by Russell Brunson — building a following around your expertise',
    bookSource: 'Expert Secrets — Russell Brunson (2017)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'TURN YOUR KNOWLEDGE INTO A MOVEMENT', subheadline: 'Expert Secrets — how to become the voice people follow, not just another service provider.', tag: 'RUSSELL BRUNSON' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'BECOME THE GUIDE, NOT THE HERO', bullets: ['The customer is the hero of their story — not you', 'Your job is to be the guide who gives them tools, wisdom, and a plan', 'Brunson calls this the "Attractive Character" — someone who has walked the path the customer wants to walk'], lesson: 'Nobody follows a hero. Everyone follows a guide who has already been where they want to go.', lessonLabel: 'THE SHIFT', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'THE EPIPHANY BRIDGE — STORY THAT CREATES BELIEF', bullets: ['Logic does not change beliefs. Stories that create "aha moments" do.', 'Walk them through the moment you discovered the new opportunity', 'The bridge goes from old belief ("word of mouth is enough") to new belief ("I need a system")'], lesson: 'Every piece of content should bridge them from a limiting belief to an empowering one.', lessonLabel: 'THE FORMULA', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'THE NEW OPPORTUNITY — DO NOT SELL IMPROVEMENT', bullets: ['People do not want to be better at the old way — they want a new way entirely', 'Do not sell "better marketing." Sell "a marketing system you have never had before."', 'The new opportunity positions you as the guide to something they cannot get elsewhere'], lesson: 'Improvement is a comparison to failure. New opportunity is a vision of something different.', lessonLabel: 'THE DISTINCTION', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'BUILD YOUR FOLLOWING BEFORE YOU NEED IT', bullets: ['The people who have large audiences built them before they needed them to sell', 'Daily publishing creates a feedback loop: you learn what resonates, your audience grows, your offers improve', 'You cannot manufacture an audience at the moment of launch'], lesson: 'Build the audience. Then build the offer. In that order.', lessonLabel: 'THE SEQUENCE', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'EXPERT SECRETS — FREE + SHIPPING FROM CLICKFUNNELS', body: 'The blueprint for anyone who wants to build a following around their expertise and sell through education.', ctaText: 'Follow For More' },
    ],
  },

  // ── $100M LEADS — HORMOZI ──
  {
    id: 'book-hormozi-leads',
    label: '$100M Leads — Hormozi',
    desc: 'How to get strangers to want to buy your stuff',
    icon: '🎯',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from $100M Leads by Alex Hormozi — lead generation strategies that scale',
    bookSource: '$100M Leads — Alex Hormozi (2023)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'HOW TO GET STRANGERS TO WANT TO BUY YOUR STUFF', subheadline: '$100M Leads — Alex Hormozi\'s complete playbook for building a lead generation machine.', tag: 'ALEX HORMOZI' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'THE CORE FOUR — YOUR ONLY 4 WAYS TO GET LEADS', bullets: ['Warm Outreach: contact people you already know', 'Cold Outreach: contact strangers directly', 'Post Content: create content that attracts inbound leads', 'Run Ads: pay to put your message in front of strangers'], lesson: 'Every lead generation strategy is a variation of these four. Master one before adding another.', lessonLabel: 'THE FRAMEWORK', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'THE LEAD MAGNET THAT ACTUALLY WORKS', bullets: ['A lead magnet should solve one specific problem for one specific person completely', '"7 Tips to Get More Customers" → bad. "The exact email template we use to reactivate tree service clients" → good', 'The more specific the lead magnet, the lower the opt-in volume but the higher the quality and close rate'], lesson: 'A specific lead magnet attracts fewer people but converts far more of them.', lessonLabel: 'THE PRINCIPLE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'CONTENT IS THE CHEAPEST FORM OF PAID ADVERTISING', bullets: ['A post that gets 10,000 views cost you nothing but time — an ad to 10,000 people costs hundreds', 'Content compounds: a post from 2 years ago still generates leads today', 'Paid ads stop the moment you stop paying. Content keeps working.'], lesson: 'Document your expertise. It pays compounding interest.', lessonLabel: 'THE MATH', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'THE ENGAGED AUDIENCE OVER THE LARGE AUDIENCE', bullets: ['1,000 highly engaged followers who trust you beats 100,000 passive ones', 'Engagement = comments, shares, saves, replies — not just likes', 'Hormozi\'s rule: go deep before you go wide. One platform, one niche, one type of content until it works'], lesson: 'Depth of connection matters more than width of reach.', lessonLabel: 'THE PRINCIPLE', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE INSIGHT', stat: '1%', statLabel: 'Of people who know about you will buy from you — so the math is just a volume game at the top of the funnel', body: 'If 1% of people who see your content convert to clients, you need 10,000 impressions per month to get 100 leads. That math makes content, ads, and outreach volume all make sense.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ IT', headline: '$100M LEADS — $1 ON AMAZON KINDLE', body: 'The follow-up to $100M Offers. If Offers taught you what to sell, Leads teaches you how to find people to sell it to.', ctaText: 'Follow For More' },
    ],
  },

  // ── JAY ABRAHAM ──
  {
    id: 'book-jay-abraham',
    label: 'Getting Everything You Can — Jay Abraham',
    desc: 'The 3 ways to grow any business — and why most people only use one',
    icon: '📐',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Getting Everything You Can Out of All You\'ve Got by Jay Abraham',
    bookSource: 'Getting Everything You Can Out of All You\'ve Got — Jay Abraham (2000)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'THE 3 WAYS TO GROW ANY BUSINESS', subheadline: 'Jay Abraham\'s formula. Every revenue strategy fits into one of these three.', tag: 'JAY ABRAHAM' },
      { type: 'stat', eyebrow: 'THE FRAMEWORK', stat: '3', statLabel: 'Ways to grow a business — and only 3', body: '1. Get more customers. 2. Get them to spend more per transaction. 3. Get them to buy more frequently. Every marketing strategy, every sales tactic, every retention campaign fits into one of these three.', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE INSIGHT', headline: 'MOST BUSINESSES ONLY WORK ON #1', bullets: ['90% of marketing spend goes to acquiring new customers', 'Increasing average transaction size requires no additional marketing spend', 'Increasing purchase frequency requires only better communication with existing customers', 'A 10% improvement in all three compounds into 33% revenue growth from the same traffic'], lesson: 'The fastest and cheapest growth is almost always in #2 and #3 — not #1.', lessonLabel: 'THE DISCOVERY', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'STRATEGY #2', headline: 'INCREASE AVERAGE TRANSACTION SIZE', bullets: ['Offer upgrades: larger scope, premium materials, extended warranty', 'Bundle complementary services at the time of purchase', 'Present a good-better-best option — most people choose the middle'], lesson: 'Every transaction is an opportunity to serve more of the customer\'s needs. Most businesses leave this on the table.', lessonLabel: 'HOW TO APPLY', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'STRATEGY #3', headline: 'INCREASE PURCHASE FREQUENCY', bullets: ['Seasonal outreach: contact past customers before every season they might need your service', 'Reactivation campaigns: 90-day check-ins to every past customer', 'Subscription or maintenance programs that lock in repeat business'], lesson: 'A customer who buys twice is worth 3x a one-time customer — and the second sale costs 80% less to earn.', lessonLabel: 'HOW TO APPLY', slideNumber: 4, totalSlides: 6 },
      { type: 'quote', eyebrow: 'JAY ABRAHAM', quote: 'Most people are sitting on goldmines they do not even know exist. They are the past customers they have already served and forgotten about.', author: 'Jay Abraham', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'GETTING EVERYTHING YOU CAN — TIMELESS AND PRACTICAL', body: 'Jay Abraham charges $25,000 per day for consulting. His book costs $20. Read it.', ctaText: 'Follow For More' },
    ],
  },

  // ── CONTAGIOUS — JONAH BERGER ──
  {
    id: 'book-contagious',
    label: 'Contagious — Jonah Berger',
    desc: 'Why things catch on — the 6 STEPPS that make content spread',
    icon: '🦠',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Contagious by Jonah Berger — why content goes viral and products spread',
    bookSource: 'Contagious — Jonah Berger (2013)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'WHY SOME THINGS CATCH ON AND OTHERS DON\'T', subheadline: 'Jonah Berger spent 10 years studying virality. Here are the 6 ingredients.', tag: 'JONAH BERGER' },
      { type: 'lesson', eyebrow: 'STEPPS FRAMEWORK', headline: 'THE 6 INGREDIENTS OF VIRAL CONTENT', bullets: ['S — Social Currency: does sharing this make me look good?', 'T — Triggers: what environmental cues remind people to share?', 'E — Emotion: does it make people feel something strongly?', 'P — Public: is it visible enough that others see people using/sharing it?', 'P — Practical Value: does it genuinely help?', 'S — Stories: is there a narrative that carries the message?'], lesson: 'Viral content is not random. It is engineered to hit 3-6 of these triggers simultaneously.', lessonLabel: 'THE FRAMEWORK', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'SOCIAL CURRENCY', headline: 'PEOPLE SHARE THINGS THAT MAKE THEM LOOK GOOD', bullets: ['Insider information, exclusive access, and counterintuitive facts spread fastest', '"Most people don\'t know this..." — triggers sharing because knowing it is social currency', 'Content that makes the sharer look smart, knowledgeable, or caring spreads without asking'], lesson: 'Create content that makes your audience look good for knowing it. They will share it without being asked.', lessonLabel: 'HOW TO USE IT', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'PRACTICAL VALUE', headline: 'USEFUL CONTENT SPREADS BECAUSE PEOPLE SHARE USEFUL THINGS', bullets: ['Checklists, how-tos, and frameworks are saved and shared at 4x the rate of opinion pieces', 'People forward useful content to specific people who would benefit — this is the most powerful spread', 'The question to ask: "Would someone forward this to a friend?" If yes — it has practical value'], lesson: 'Make your content immediately useful to one person and they will send it to ten others.', lessonLabel: 'HOW TO USE IT', slideNumber: 3, totalSlides: 6 },
      { type: 'example', eyebrow: 'IN PRACTICE', headline: 'WHY CHECKLISTS GO VIRAL ON LINKEDIN', body: '"The 12-point checklist we use before every client launch" — this gets saved because it has practical value, shared because it gives the sharer social currency ("look what I found"), and remembered because it is specific and concrete. All 3 STEPPS hit simultaneously.', lesson: 'When you stack multiple STEPPS into one piece of content, spread accelerates exponentially.', lessonLabel: 'THE LESSON', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE DATA', stat: '6x', statLabel: 'More word-of-mouth happens offline than online — most virality is in conversations, not shares', body: 'Berger\'s research found that 93% of word-of-mouth happens in person. The goal of online content is not online shares — it is to become a topic of offline conversation.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'CONTAGIOUS BY JONAH BERGER — ESSENTIAL FOR CONTENT CREATORS', body: 'The research-backed answer to "why do some things catch on?" Apply it to every piece of content you make.', ctaText: 'Follow For More' },
    ],
  },

  // ── PURPLE COW — GODIN ──
  {
    id: 'book-purple-cow',
    label: 'Purple Cow — Seth Godin',
    desc: 'Be remarkable or be invisible — there is no middle ground',
    icon: '🐄',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Purple Cow by Seth Godin — being remarkable in a world of brown cows',
    bookSource: 'Purple Cow — Seth Godin (2003)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'BE REMARKABLE OR BE INVISIBLE', subheadline: 'Seth Godin\'s Purple Cow — the manifesto for businesses that refuse to be boring.', tag: 'SETH GODIN' },
      { type: 'lesson', eyebrow: 'THE CORE IDEA', headline: 'A PURPLE COW IS THE ONLY COW WORTH TALKING ABOUT', bullets: ['Drive past a field of brown cows and you stop noticing them in 5 minutes', 'Drive past one purple cow and you still talk about it three weeks later', 'Most businesses are brown cows — competent, reliable, and completely forgettable'], lesson: 'Remarkable means worth remarking about. Everything else is invisible.', lessonLabel: 'THE METAPHOR', slideNumber: 1, totalSlides: 5 },
      { type: 'myth', eyebrow: 'THE TRAP', myth: 'Build a good product and word of mouth will follow naturally', truth: 'Word of mouth follows remarkable experiences, not good ones. Good is the enemy of remarkable.', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HOW TO APPLY IT', headline: 'FIND YOUR PURPLE COW', bullets: ['What is the most extreme version of your service that still makes sense?', 'What guarantee would be so bold that competitors would never match it?', 'What process is so different that customers tell people about it?'], lesson: 'Your purple cow does not have to be better — it has to be different enough to be remarked upon.', lessonLabel: 'THE EXERCISE', slideNumber: 3, totalSlides: 5 },
      { type: 'example', eyebrow: 'SERVICE BUSINESS PURPLE COWS', headline: 'WHAT A PURPLE COW LOOKS LIKE IN HOME SERVICES', body: 'Tree service: crews wear uniforms, clean up every leaf, and leave a hand-written card. Lawn care: sends a before/after photo text same day. Roofing: live video of the job in progress sent to homeowner. These seem small — but they are so far above the standard that every customer talks about them.', lesson: 'In a market full of brown cows, one purple cow owns the category.', lessonLabel: 'THE EXAMPLES', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'PURPLE COW — READ IT IN ONE SITTING', body: 'Seth Godin\'s best business book. Under 200 pages. Changes how you think about every business decision.', ctaText: 'Follow For More' },
    ],
  },

  // ── READY FIRE AIM — MASTERSON ──
  {
    id: 'book-ready-fire-aim',
    label: 'Ready Fire Aim — Michael Masterson',
    desc: 'The 4 stages of business growth and what kills companies at each stage',
    icon: '🚀',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Ready Fire Aim by Michael Masterson — the 4 stages of business growth',
    bookSource: 'Ready Fire Aim — Michael Masterson (2008)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'THE 4 STAGES OF BUSINESS GROWTH', subheadline: 'Michael Masterson built 6 businesses to $100M+. Here is the framework behind every one of them.', tag: 'MICHAEL MASTERSON' },
      { type: 'lesson', eyebrow: 'STAGE 1: $0-$1M', headline: 'INFANCY — SELL FIRST, PERFECT SECOND', bullets: ['The only goal at Stage 1: find a product people will pay for and sell it', 'Most founders build instead of sell — they run out of money before finding product-market fit', 'Masterson\'s rule: if you cannot sell it, do not build it'], lesson: 'The fatal mistake of infancy is over-investing in product before validating the market.', lessonLabel: 'THE LESSON', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'STAGE 2: $1M-$10M', headline: 'CHILDHOOD — BUILD YOUR BACK END', bullets: ['Stage 2 is won or lost on customer lifetime value — not acquisition cost', 'The front end (first sale) is a break-even proposition — profit is in repeat business', 'Build the upsell, the cross-sell, and the ascension before Stage 2 ends'], lesson: 'At Stage 2, the business that profits on the back end wins. The one that only has a front end dies.', lessonLabel: 'THE LESSON', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'STAGE 3: $10M-$50M', headline: 'ADOLESCENCE — SYSTEMS REPLACE THE FOUNDER', bullets: ['At Stage 3, the founder is the bottleneck', 'Every system, process, and skill must be documented and transferred to employees', 'If the business cannot run for 2 weeks without you — you have a job, not a business'], lesson: 'Stage 3 is won by the founder who figures out how to work on the business, not in it.', lessonLabel: 'THE LESSON', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE CORE PRINCIPLE', headline: 'READY, FIRE, AIM — NOT READY, AIM, AIM, AIM', bullets: ['Most businesses fail because they spend too long "getting ready" before selling', 'Fire (launch) with a good enough product, then aim (optimize) based on real feedback', 'Market feedback in 30 days is worth more than 6 months of internal planning'], lesson: 'Done beats perfect. Launch with 80% and improve with market feedback.', lessonLabel: 'THE PRINCIPLE', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'READY FIRE AIM — THE GROWTH STAGES BLUEPRINT', body: 'Essential reading for anyone between $500k and $10M trying to figure out what to focus on.', ctaText: 'Follow For More' },
    ],
  },

  // ── 7TH LEVEL — JEREMY MINER ──
  {
    id: 'book-jeremy-miner',
    label: '7th Level / NEPQ — Jeremy Miner',
    desc: 'The sales framework that replaces persuasion with problem-finding',
    icon: '💬',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Jeremy Miner and NEPQ — Neuro-Emotional Persuasion Questions sales framework',
    bookSource: 'NEPQ — Jeremy Miner / The New Model of Selling',
    cards: [
      { type: 'cover', eyebrow: 'SALES FRAMEWORK', headline: 'THE SALES SYSTEM THAT REPLACES PERSUASION', subheadline: 'Jeremy Miner\'s NEPQ — Neuro-Emotional Persuasion Questions. Stop convincing. Start uncovering.', tag: 'JEREMY MINER' },
      { type: 'lesson', eyebrow: 'THE CORE IDEA', headline: 'PEOPLE DO NOT WANT TO BE SOLD — THEY WANT TO BE UNDERSTOOD', bullets: ['The old model: pitch your product, handle objections, close hard', 'The new model: ask questions that help prospects discover their own need', 'When they discover the problem themselves — they own the solution'], lesson: 'The prospect who convinces himself is unconquerable. Your job is to ask the questions that lead him there.', lessonLabel: 'THE SHIFT', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'NEPQ PHASE 1', headline: 'CONNECTING QUESTIONS — EARN THE RIGHT TO DIG DEEPER', bullets: ['"What made you decide to reach out today?"', '"What have you tried before to solve this?"', '"How long has this been an issue for you?"', 'These questions create rapport and reveal the problem without pitching anything'], lesson: 'You cannot solve a problem you do not fully understand. Connecting questions build the foundation.', lessonLabel: 'THE QUESTIONS', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'NEPQ PHASE 2', headline: 'SITUATION AND PROBLEM QUESTIONS — AMPLIFY THE PAIN', bullets: ['"What has this been costing you in lost revenue while you\'ve had this problem?"', '"What happens to your business if this doesn\'t change in the next 6 months?"', '"On a scale of 1-10, how important is it that you solve this now?"', 'These make the prospect articulate the cost of inaction in their own words'], lesson: 'The prospect\'s own words are always more persuasive than yours.', lessonLabel: 'THE TECHNIQUE', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'NEPQ PHASE 3', headline: 'COMMITMENT QUESTIONS — LET THEM CLOSE THEMSELVES', bullets: ['"If we could solve that for you — what would that mean for your business?"', '"How confident are you that we can get you to where you want to be?"', '"What would need to be true for you to feel comfortable moving forward today?"', 'These questions surface objections before they become a hard no'], lesson: 'A commitment question does not ask for the sale. It asks what the sale would mean to them.', lessonLabel: 'THE CLOSE', slideNumber: 4, totalSlides: 6 },
      { type: 'myth', eyebrow: 'NEPQ VS OLD SALES', myth: 'Great salespeople have the gift of persuasion — they talk people into buying', truth: 'Great salespeople ask questions that help people talk themselves into buying. The difference in close rate is 30-40%.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'STUDY NEPQ', headline: 'JEREMY MINER\'S NEPQ IS THE BEST SALES FRAMEWORK FOR SERVICE BUSINESSES', body: 'Find his YouTube channel, his podcast, and his book The New Model of Selling. Apply it to your next 10 estimates.', ctaText: 'Follow For More' },
    ],
  },

  // ── 48 LAWS OF POWER — GREENE ──
  {
    id: 'book-48-laws',
    label: '48 Laws of Power — Robert Greene',
    desc: 'The uncomfortable truths about power that apply to business',
    icon: '⚔️',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Business lessons from The 48 Laws of Power by Robert Greene',
    bookSource: 'The 48 Laws of Power — Robert Greene (1998)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: '5 LAWS OF POWER THAT APPLY TO EVERY BUSINESS', subheadline: 'Robert Greene\'s controversial masterpiece — the uncomfortable truths about influence and authority.', tag: 'ROBERT GREENE' },
      { type: 'lesson', eyebrow: 'LAW 6', headline: 'COURT ATTENTION AT ALL COSTS', bullets: ['In business: obscurity is the enemy. Controversy, specificity, and spectacle get attention.', 'Greene: "It is better to be attacked than ignored. Attacks are a form of acknowledgment."', 'For service businesses: be the most visible company in your niche. Reviews, content, signage, uniforms — all of it.'], lesson: 'If your market does not know you exist, you do not exist.', lessonLabel: 'THE APPLICATION', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LAW 9', headline: 'WIN THROUGH YOUR ACTIONS — NEVER THROUGH ARGUMENT', bullets: ['Arguing with a competitor publicly makes you look insecure', 'Let your results do the talking: share case studies, post before/afters, screenshot reviews', 'Demonstrate superiority — do not claim it'], lesson: 'Claim it with words and people doubt you. Show it with results and they believe it without being asked.', lessonLabel: 'THE APPLICATION', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LAW 18', headline: 'DO NOT BUILD FORTRESSES — ISOLATION IS DANGEROUS', bullets: ['Contractors who hide behind word of mouth have no visibility when referrals dry up', 'Go where your customers are: local events, neighborhood groups, review platforms, social', 'Isolation feels safe — it is actually the highest-risk position in any market'], lesson: 'Visibility is a competitive advantage. Isolation is a vulnerability.', lessonLabel: 'THE APPLICATION', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LAW 30', headline: 'MAKE YOUR ACCOMPLISHMENTS SEEM EFFORTLESS', bullets: ['Customers who see you straining to get work become nervous about your stability', 'Project confidence and abundance — full schedule, selective about clients, standards-driven', 'The perception of effortless success attracts more success'], lesson: 'Desperation repels. Confidence attracts. The business that looks fully booked gets fully booked.', lessonLabel: 'THE APPLICATION', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'THE 48 LAWS OF POWER — READ IT AS HISTORY, NOT A MANUAL', body: 'Greene draws from 3,000 years of history. Read it to understand how power actually works — in courts, in business, and in sales conversations.', ctaText: 'Follow For More' },
    ],
  },

  // ── BLUE OCEAN STRATEGY ──
  {
    id: 'book-blue-ocean',
    label: 'Blue Ocean Strategy — Kim & Mauborgne',
    desc: 'Stop competing in crowded markets — create your own',
    icon: '🌊',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Blue Ocean Strategy by Kim and Mauborgne — creating uncontested market space',
    bookSource: 'Blue Ocean Strategy — W. Chan Kim & Renée Mauborgne (2004)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'STOP COMPETING. START CREATING.', subheadline: 'Blue Ocean Strategy — how to make competition irrelevant by creating your own market.', tag: 'BLUE OCEAN' },
      { type: 'myth', eyebrow: 'RED OCEAN VS BLUE OCEAN', myth: 'The way to win is to out-compete rivals for existing customers in existing markets', truth: 'The way to win is to create new value that makes competition irrelevant — your own blue ocean', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE STRATEGY', headline: 'THE FOUR ACTIONS FRAMEWORK', bullets: ['Eliminate: what factors does your industry take for granted that can be removed?', 'Reduce: what can be reduced well below the industry standard?', 'Raise: what can be raised well above the industry standard?', 'Create: what has never been offered that would create new demand?'], lesson: 'Doing all four simultaneously creates a value curve so different that comparison becomes irrelevant.', lessonLabel: 'THE FRAMEWORK', slideNumber: 2, totalSlides: 5 },
      { type: 'example', eyebrow: 'FOR SERVICE BUSINESSES', headline: 'WHAT A BLUE OCEAN LOOKS LIKE IN HOME SERVICES', body: 'Eliminate: low-ball pricing that attracts price shoppers. Reduce: time spent on quoting every prospect. Raise: quality of communication, follow-up, and results guarantee. Create: the only company in your market that sends before/after photo books and review cards with every completed job. The combined result is a company that competes on a completely different dimension than every other contractor.', lesson: 'You do not need to be better. You need to be different enough that comparison is impossible.', lessonLabel: 'THE EXAMPLE', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE NICHE TRAP', headline: 'GOING NICHE IS THE FIRST STEP TO BLUE OCEAN', bullets: ['The more specific your target, the less competition you face', '"Marketing for tree service companies" is a blue ocean vs "marketing for small businesses"', 'Niche down until you own a category — then expand from a position of strength'], lesson: 'The narrower your focus, the wider your competitive moat.', lessonLabel: 'THE APPLICATION', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'BLUE OCEAN STRATEGY — THE CASE FOR DIFFERENTIATION', body: 'Kim and Mauborgne studied 150 companies over 30 years. The pattern is clear: companies that stop competing and start creating always win.', ctaText: 'Follow For More' },
    ],
  },

  // ── THE CHALLENGER SALE ──
  {
    id: 'book-challenger-sale',
    label: 'The Challenger Sale — Dixon & Adamson',
    desc: 'Why the best salespeople challenge their customers — not just serve them',
    icon: '🏆',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from The Challenger Sale by Matthew Dixon and Brent Adamson',
    bookSource: 'The Challenger Sale — Matthew Dixon & Brent Adamson (2011)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'THE BEST SALESPEOPLE CHALLENGE THEIR CUSTOMERS', subheadline: 'CEB studied 6,000 sales reps and found one profile dramatically outperformed the others.', tag: 'THE CHALLENGER SALE' },
      { type: 'stat', eyebrow: 'THE RESEARCH', stat: '5', statLabel: 'Types of salespeople — only one consistently wins in complex sales', body: 'Hard Worker, Challenger, Relationship Builder, Lone Wolf, Problem Solver. In a stable economy, all 5 perform similarly. In a tough economy, Challengers outperform every other profile by 2-3x.', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE CHALLENGER', headline: 'CHALLENGERS DO 3 THINGS OTHERS DON\'T', bullets: ['Teach: they bring insights the customer does not have — about their own business or market', 'Tailor: they adapt their pitch to the specific driver of the individual they are speaking to', 'Take control: they are comfortable pushing back on customers and maintaining price discipline'], lesson: 'Challengers win not by agreeing with customers but by reframing how customers think about their problem.', lessonLabel: 'THE PROFILE', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE TEACH PHASE', headline: 'LEAD WITH INSIGHT, NOT WITH PRODUCT', bullets: ['"Most contractors we work with are losing 40% of their estimates because of a follow-up problem, not a pricing problem. Let me show you what we found."', 'This repositions you from vendor to advisor', 'The insight has to be genuinely new and counterintuitive — not something they could Google'], lesson: 'An insight that reframes the customer\'s problem makes your solution the only logical answer.', lessonLabel: 'THE TECHNIQUE', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'FOR SERVICE BUSINESSES', headline: 'THE CHALLENGER QUESTION FOR HOME SERVICES', body: '"Most [roofing/tree/lawn] companies we talk to think their main challenge is getting more leads. But when we look at the numbers, 60-70% of the revenue opportunity is actually in the leads they already have but are not following up with. Does that match what you\'re seeing in your business?"', lesson: 'This is the Challenger teach: leading with an insight that reframes the problem before introducing the solution.', lessonLabel: 'THE APPLICATION', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'THE CHALLENGER SALE — ESSENTIAL FOR B2B AND HIGH-TICKET SALES', body: 'Research-backed, practical, and immediately applicable. The most important sales book of the last 20 years.', ctaText: 'Follow For More' },
    ],
  },

  // ── ENTRELEADERSHIP — DAVE RAMSEY ──
  {
    id: 'book-entreleadership',
    label: 'EntreLeadership — Dave Ramsey',
    desc: 'Building a business with both entrepreneurial spirit and leadership discipline',
    icon: '🦁',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from EntreLeadership by Dave Ramsey — building a business with character and discipline',
    bookSource: 'EntreLeadership — Dave Ramsey (2011)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'BUILD A BUSINESS WORTH LEADING', subheadline: 'Dave Ramsey\'s EntreLeadership — the principles behind a team-driven, values-based company.', tag: 'DAVE RAMSEY' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'LIVE ON LESS THAN YOU MAKE — IN BUSINESS TOO', bullets: ['Ramsey built his business empire on the same principle he teaches consumers: no debt', 'Every major expansion was funded from cash flow — never from borrowed money', 'A business that operates debt-free has no creditors controlling its decisions'], lesson: 'Financial margin creates decision-making freedom. Debt eliminates it.', lessonLabel: 'THE PRINCIPLE', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'HIRE SLOW. FIRE FAST.', bullets: ['One wrong hire costs 3x their annual salary in productivity loss, re-hiring, and team damage', 'Ramsey\'s process: multiple interviews, personality assessments, reference checks, trial periods', 'When a culture problem walks into your business — your only options are fix it fast or remove it'], lesson: 'The best thing you can do for your best employees is quickly remove your worst ones.', lessonLabel: 'THE PRINCIPLE', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'COMMUNICATE THE VISION UNTIL IT FEELS REDUNDANT', bullets: ['Employees cannot execute a vision they do not understand', 'Ramsey recommends repeating your mission and values at every team meeting — forever', '"When you are sick of saying it, your team is just starting to hear it."'], lesson: 'Over-communication of vision is impossible. Under-communication is the default.', lessonLabel: 'THE PRINCIPLE', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'CONNECTED COMPENSATION — PAY PEOPLE TO WIN', bullets: ['Hourly wages pay for showing up. Performance pay pays for results.', 'Commission, profit sharing, and bonuses tied to company goals align team incentives', 'Ramsey\'s team has profit sharing — when the company wins, everyone wins'], lesson: 'When employees think like owners, they work like owners.', lessonLabel: 'THE PRINCIPLE', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ IT', headline: 'ENTRELEADERSHIP — FOR BUSINESS OWNERS WHO WANT TO BUILD A REAL TEAM', body: 'Dave Ramsey built a $250M company from a card table in his living room. This book is how.', ctaText: 'Follow For More' },
    ],
  },
];
