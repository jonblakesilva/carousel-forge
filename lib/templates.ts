import { CardData } from './cardTemplate';
import { BOOK_TEMPLATES_2 } from './templates-books2';
import { SALES_AND_RETENTION_TEMPLATES } from './templates-sales-retention';
import { LEAD_GEN_TEMPLATES } from './templates-leadgen';
import { INDUSTRY2_TEMPLATES } from './templates-industry2';

export interface CarouselTemplate {
  id: string;
  label: string;
  desc: string;
  icon: string;
  category: string;
  format: string;
  topic: string;
  bookSource?: string; // for book lesson templates
  cards: CardData[];
}

export const SUGGESTED_BOOKS = [
  { title: 'Scientific Advertising', author: 'Claude Hopkins', year: 1923, icon: '📜', templateId: 'book-hopkins', why: 'The original data-driven advertising bible. Every principle still works.' },
  { title: 'Ogilvy on Advertising', author: 'David Ogilvy', year: 1983, icon: '🎩', templateId: 'book-ogilvy', why: 'How the world\'s best ad man thought about copy, research, and results.' },
  { title: 'The Boron Letters', author: 'Gary Halbert', year: 1984, icon: '✉️', templateId: 'book-halbert', why: 'Raw, honest lessons on direct mail and persuasion from prison.' },
  { title: '$100M Offers', author: 'Alex Hormozi', year: 2021, icon: '💰', templateId: 'book-hormozi-offers', why: 'How to make your offer so good people feel dumb saying no.' },
  { title: 'Influence', author: 'Robert Cialdini', year: 1984, icon: '🧠', templateId: 'book-cialdini', why: 'The 6 psychological triggers behind every yes. Essential for sales.' },
  { title: 'The Ultimate Sales Machine', author: 'Chet Holmes', year: 2007, icon: '🔧', templateId: 'book-holmes', why: 'The stadium pitch and dream 100 strategy that changed B2B forever.' },
  { title: 'Breakthrough Advertising', author: 'Eugene Schwartz', year: 1966, icon: '⚡', templateId: 'book-schwartz', why: 'The most advanced copywriting book ever written. Market awareness levels.' },
  { title: 'No B.S. Direct Marketing', author: 'Dan Kennedy', year: 1992, icon: '📬', templateId: 'book-kennedy', why: 'The direct mail and direct response playbook for local businesses.' },
  { title: 'This Is Marketing', author: 'Seth Godin', year: 2018, icon: '🎯', templateId: 'book-godin', why: 'Smallest viable market, permission marketing, and the new rules.' },
  { title: 'Predictably Irrational', author: 'Dan Ariely', year: 2008, icon: '🎲', templateId: 'book-ariely', why: 'Why people make irrational buying decisions — and how to use it ethically.' },
];

export const CAROUSEL_TEMPLATES: CarouselTemplate[] = [

  // ══════════════════════════════════════════
  // HISTORICAL CAMPAIGNS
  // ══════════════════════════════════════════
  {
    id: 'schlitz',
    label: 'Schlitz Beer — Hopkins',
    desc: 'The campaign that invented reason-why advertising',
    icon: '🍺',
    category: 'Historical',
    format: 'history',
    topic: 'Claude Hopkins and the Schlitz Beer campaign',
    cards: [
      { type: 'cover', eyebrow: 'MARKETING HISTORY', headline: '3 ADS THAT MADE SCHLITZ BEER FAMOUS', subheadline: 'The campaigns that invented modern advertising.', tag: 'CLAUDE HOPKINS' },
      { type: 'lesson', eyebrow: 'THE STRATEGY', headline: 'SHOW HOW YOUR PRODUCT IS MADE', bullets: ['Hopkins visited the brewery and wrote down every step of the process', 'Competitors brewed beer the same way but never told anyone', 'He described steam-cleaning bottles, testing yeast for 1,200 generations, filtering through white-wood pulp'], lesson: 'Specificity creates believability. The first to claim a common fact owns it.', lessonLabel: 'THE LESSON', slideNumber: 1, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '#1', statLabel: 'Beer in America — from #5 to #1 in under 6 months', body: 'Nothing changed about the beer. Only the story changed. Hopkins proved that telling people what you already do is enough to win.', slideNumber: 2, totalSlides: 5 },
      { type: 'quote', eyebrow: 'CLAUDE HOPKINS', quote: 'The stories we tell of our methods are always impressive. Yet we never apply to our advertising what we apply to our manufacturing.', author: 'Claude Hopkins — Scientific Advertising, 1923', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'APPLY THIS TODAY', headline: 'YOUR PROCESS IS YOUR DIFFERENTIATOR', bullets: ['List every step in how you deliver your service', 'Describe what competitors do but never talk about', 'Name specifics: time, tools, standards, guarantees'], lesson: 'What feels obvious to you is fascinating to your customer.', lessonLabel: 'THE TAKEAWAY', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'WANT MORE?', headline: 'FOLLOW FOR DAILY MARKETING LESSONS FROM HISTORY', body: 'The ads that built empires. The principles that still work today.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'ogilvy-rolls',
    label: 'Ogilvy\'s Rolls-Royce Headline',
    desc: 'The most famous car headline ever written',
    icon: '🚗',
    category: 'Historical',
    format: 'history',
    topic: 'David Ogilvy and the Rolls-Royce 60 mph headline',
    cards: [
      { type: 'cover', eyebrow: 'MARKETING HISTORY', headline: 'THE HEADLINE THAT SOLD A ROLLS-ROYCE', subheadline: 'Written in 1959. Still studied in every business school today.', tag: 'DAVID OGILVY' },
      { type: 'stat', eyebrow: 'THE HEADLINE', stat: '60 MPH', statLabel: '"The loudest noise in this Rolls-Royce comes from the electric clock"', body: 'Ogilvy spent 3 weeks reading technical reports before writing a single word. This headline came directly from an engineer\'s document. He called it "the most difficult ad I ever wrote."', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HOW HE DID IT', headline: 'READ EVERYTHING BEFORE WRITING ANYTHING', bullets: ['Ogilvy immersed himself in the car — not in advertising ideas', '26 headline drafts were written and rejected before this one', 'The winning line came from a factory floor report, not from creativity'], lesson: 'Great copy comes from the product, not the copywriter\'s imagination.', lessonLabel: 'THE PROCESS', slideNumber: 2, totalSlides: 5 },
      { type: 'myth', eyebrow: 'THE TRUTH', myth: 'Great advertising requires a great creative idea', truth: 'Great advertising requires great research into the product and the customer — then getting out of the way', slideNumber: 3, totalSlides: 5 },
      { type: 'quote', eyebrow: 'DAVID OGILVY', quote: 'On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar.', author: 'David Ogilvy — Confessions of an Advertising Man', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'SAVE THIS', headline: 'SPEND 80% OF YOUR TIME ON THE HEADLINE', body: 'The rest writes itself. Your headline is your ad. Get that right first.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'pepsodent',
    label: 'Pepsodent — Hopkins Habit Loop',
    desc: 'How Hopkins created the toothbrushing habit and made millions',
    icon: '🦷',
    category: 'Historical',
    format: 'history',
    topic: 'Claude Hopkins and the Pepsodent toothpaste habit loop campaign',
    cards: [
      { type: 'cover', eyebrow: 'MARKETING HISTORY', headline: 'HOW ONE AD CREATED A DAILY HABIT FOR 100 MILLION PEOPLE', subheadline: 'The Pepsodent campaign — and what it teaches about building a market from scratch.', tag: 'CLAUDE HOPKINS' },
      { type: 'lesson', eyebrow: 'THE PROBLEM', headline: 'NOBODY BRUSHED THEIR TEETH IN 1900', bullets: ['Before Pepsodent, less than 7% of Americans had toothpaste in their medicine cabinet', 'Hopkins was hired to sell toothpaste to a country that didn\'t think they needed it', 'The product was fine — the habit didn\'t exist'], lesson: 'You can\'t sell a solution to a problem people don\'t feel yet.', lessonLabel: 'THE CHALLENGE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE STRATEGY', headline: 'CREATE THE CUE, SELL THE REWARD', bullets: ['Hopkins identified "the film on your teeth" — something people could feel with their tongue', '"Run your tongue across your teeth. You\'ll feel a film." — this created instant awareness', 'Pepsodent promised to remove the film. The cue created the desire. The product delivered the reward.'], lesson: 'Don\'t sell the product. Sell the problem that makes the product necessary.', lessonLabel: 'THE INSIGHT', slideNumber: 2, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '10 yr', statLabel: 'Pepsodent became one of the world\'s best-selling brands within a decade', body: 'By 1930, toothbrushing had become a daily habit for millions of Americans. Hopkins had manufactured not just demand — but a new human routine.', slideNumber: 3, totalSlides: 6 },
      { type: 'example', eyebrow: 'WHY IT WORKS', headline: 'CUE → ROUTINE → REWARD IS THE HABIT LOOP', body: 'Charles Duhigg later formalized this as the "Habit Loop" in The Power of Habit. Hopkins discovered it empirically in 1915. Every successful product that creates habitual use follows this framework.', lesson: 'Make the customer feel the problem first. Then sell the solution.', lessonLabel: 'THE FRAMEWORK', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'APPLY THIS', headline: 'IDENTIFY YOUR CUSTOMER\'S "FILM ON THE TEETH"', body: 'What is the specific uncomfortable thing your customer already feels but hasn\'t named yet? Name it for them in your marketing. That\'s your hook.', lesson: 'The cue that creates the desire is worth more than any feature or benefit.', lessonLabel: 'YOUR HOMEWORK', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'MORE LIKE THIS', headline: 'FOLLOW FOR WEEKLY MARKETING LESSONS FROM HISTORY', body: 'The campaigns that changed behavior. The principles that still print money.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'vw-think-small',
    label: 'VW Think Small — DDB 1959',
    desc: 'The ad that broke every rule and won everything',
    icon: '🚙',
    category: 'Historical',
    format: 'history',
    topic: 'Volkswagen Think Small campaign by DDB 1959',
    cards: [
      { type: 'cover', eyebrow: 'MARKETING HISTORY', headline: 'THE AD THAT BROKE EVERY RULE IN ADVERTISING', subheadline: 'Think Small — how Volkswagen sold an ugly German car to post-war Americans.', tag: 'DDB 1959' },
      { type: 'lesson', eyebrow: 'THE CONTEXT', headline: 'AMERICA IN 1959 WANTED BIG', bullets: ['American cars were large, chrome-heavy, and symbolized prosperity', 'Post-war America equated size with success', 'VW was selling a small, ugly car built by the country America had just defeated'], lesson: 'The market said go big. DDB zigged.', lessonLabel: 'THE PROBLEM', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE STRATEGY', headline: 'LEAN INTO THE FLAW BEFORE THE CUSTOMER CAN', bullets: ['"Think Small" — VW made smallness the feature, not the defect', '"It\'s ugly, but it gets you there" — self-deprecating honesty built instant trust', 'The white space around the tiny car made it feel confident, not apologetic'], lesson: 'Acknowledging your weakness first removes the customer\'s objection and builds credibility.', lessonLabel: 'THE LESSON', slideNumber: 2, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '#1', statLabel: 'Named the greatest ad campaign of the 20th century by Ad Age in 1999', body: 'VW sales in America went from negligible to dominant. The campaign created an entirely new category: the economy car as a smart, rational choice.', slideNumber: 3, totalSlides: 5 },
      { type: 'myth', eyebrow: 'THE LESSON', myth: 'Hide your product\'s weaknesses in your marketing', truth: 'Acknowledge your weakness first — it makes everything else you say more believable', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'APPLY THIS', headline: 'WHAT\'S THE THING ABOUT YOUR BUSINESS YOU\'VE BEEN HIDING?', body: 'Say it first. Own it. Watch trust go up.', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // BOOK LESSONS
  // ══════════════════════════════════════════
  {
    id: 'book-hopkins',
    label: 'Scientific Advertising — Hopkins',
    desc: '5 lessons from the most influential marketing book ever written',
    icon: '📜',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Scientific Advertising by Claude Hopkins',
    bookSource: 'Scientific Advertising — Claude Hopkins (1923)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: '5 LESSONS FROM SCIENTIFIC ADVERTISING', subheadline: 'Written in 1923. Still the most important marketing book ever written.', tag: 'CLAUDE HOPKINS' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'ADVERTISING IS SALESMANSHIP IN PRINT', bullets: ['Every ad should be judged by the same standard as a salesman: does it make the sale?', 'Not: is it clever, beautiful, or award-winning?', 'Hopkins never ran an ad that couldn\'t be measured against a result'], lesson: 'If you can\'t trace an ad to a sale, it isn\'t advertising — it\'s decoration.', lessonLabel: 'THE PRINCIPLE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'TEST EVERYTHING. ASSUME NOTHING.', bullets: ['Hopkins ran split tests on headlines in the 1910s — before anyone called them split tests', 'He never trusted his instincts over his numbers', '"Almost any question can be answered cheaply and quickly by a test campaign"'], lesson: 'Your opinion about what works is worth nothing. The data is everything.', lessonLabel: 'THE PRINCIPLE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'GIVE PEOPLE A REASON WHY', bullets: ['Reason-why copy outperforms clever copy every time', 'Explain why your price is what it is, why your process works, why you\'re different', '"People are so often led wrong by smart thinking. The answer lies in the market."'], lesson: 'Tell people why and they will trust you. Don\'t tell them why and they\'ll doubt you.', lessonLabel: 'THE PRINCIPLE', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'THE COUPON IS YOUR ACCOUNTABILITY', bullets: ['Hopkins insisted on coupons (response mechanisms) in every ad to measure response', 'If an ad generates no response, kill it immediately — no excuses', 'Modern equivalent: trackable links, unique phone numbers, promo codes'], lesson: 'Every ad must have a response mechanism. Otherwise you\'re guessing.', lessonLabel: 'THE PRINCIPLE', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 5', headline: 'DON\'T TRY TO BE CLEVER', bullets: ['The most dangerous thing in advertising is trying to entertain instead of sell', '"Brilliant writing, clever conceits, and peculiar pictures can cost you dearly"', 'The ad that gets the most attention is not always the one that sells the most product'], lesson: 'Your job is to sell, not to impress. Those are often opposite goals.', lessonLabel: 'THE PRINCIPLE', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ THE ORIGINAL', headline: 'SCIENTIFIC ADVERTISING — FREE ONLINE', body: 'Hopkins\' book is public domain. Search "Scientific Advertising PDF" — it\'s 100 pages that will change how you think about marketing forever.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'book-hormozi-offers',
    label: '$100M Offers — Hormozi',
    desc: '5 lessons on making an offer so good people feel dumb saying no',
    icon: '💰',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from $100M Offers by Alex Hormozi',
    bookSource: '$100M Offers — Alex Hormozi (2021)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: '5 LESSONS FROM $100M OFFERS', subheadline: 'How to make an offer so good people feel dumb saying no.', tag: 'ALEX HORMOZI' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'CHARGE MORE THAN YOU\'RE COMFORTABLE WITH', bullets: ['Hormozi\'s first rule: if your price doesn\'t make you uncomfortable, it\'s too low', 'Higher prices create higher perceived value — not less demand', 'People pay premium prices for premium outcomes, not for products'], lesson: 'Your pricing is a signal of your confidence in your result.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'SOLVE FOR ALL THE REASONS PEOPLE WON\'T BUY', bullets: ['List every reason someone says no to your offer', 'For each one, build a mechanism that removes it', 'Price → payment plan. Time → done-for-you. Risk → guarantee. Effort → automation'], lesson: 'The perfect offer removes every reason to say no before the customer thinks of it.', lessonLabel: 'THE FRAMEWORK', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'THE VALUE EQUATION', bullets: ['Value = (Dream Outcome × Perceived Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice)', 'Increase the dream. Increase believability. Decrease time. Decrease effort.', 'Most businesses focus on the top. The real money is in cutting the bottom.'], lesson: 'Make it faster, easier, and more certain — and you can charge anything.', lessonLabel: 'THE FORMULA', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'STACK YOUR BONUSES UNTIL IT FEELS UNREASONABLE', bullets: ['List every problem a customer will face after buying, then solve each one as a bonus', 'Reveal each bonus with its standalone value before showing the full stack', '"And if that\'s all we gave you it would be worth $X. But we\'re also including..."'], lesson: 'The bonus stack makes the core offer feel like the free gift.', lessonLabel: 'THE TACTIC', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 5', headline: 'REVERSE THE RISK COMPLETELY', bullets: ['A strong guarantee eliminates the customer\'s fear of loss', 'The stronger your guarantee, the higher your conversion rate — and the lower your refund rate', '"If this doesn\'t work for you, we\'ll refund every dollar and still do the work"'], lesson: 'Whoever takes the most risk in the transaction has the most power in the sale.', lessonLabel: 'THE PRINCIPLE', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'GET THE BOOK', headline: 'READ $100M OFFERS — IT\'S $1 ON AMAZON KINDLE', body: 'Alex Hormozi priced it at $1 on purpose. 100 pages that will change your business model.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'book-cialdini',
    label: 'Influence — Cialdini',
    desc: 'The 6 psychological triggers behind every yes',
    icon: '🧠',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Influence by Robert Cialdini — the 6 principles of persuasion',
    bookSource: 'Influence — Robert Cialdini (1984)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: '6 TRIGGERS BEHIND EVERY YES', subheadline: 'Robert Cialdini spent years studying why people say yes. Here\'s what he found.', tag: 'CIALDINI' },
      { type: 'lesson', eyebrow: 'TRIGGER 1', headline: 'RECIPROCITY — GIVE FIRST', bullets: ['People feel obligated to return favors — even ones they didn\'t ask for', 'Free guides, audits, consultations, and content all trigger reciprocity', 'The free value you give creates a felt obligation to give something back'], lesson: 'Give before you ask. The debt is felt even when it\'s invisible.', lessonLabel: 'HOW TO USE IT', slideNumber: 1, totalSlides: 7 },
      { type: 'lesson', eyebrow: 'TRIGGER 2', headline: 'SOCIAL PROOF — OTHERS ARE DOING IT', bullets: ['People look to the behavior of others when uncertain', 'Reviews, testimonials, client counts, and case studies all work', '"Join 1,400 contractors who already use our system"'], lesson: 'Show who else bought. Numbers are proof. Names are proof. Photos are proof.', lessonLabel: 'HOW TO USE IT', slideNumber: 2, totalSlides: 7 },
      { type: 'lesson', eyebrow: 'TRIGGER 3', headline: 'AUTHORITY — CREDENTIALS SIGNAL COMPETENCE', bullets: ['People follow the lead of credible experts', 'Titles, certifications, media mentions, and client results all build authority', 'Even perceived authority works — how you dress, talk, and present matters'], lesson: 'Establish your authority before you make your pitch. Sequence matters.', lessonLabel: 'HOW TO USE IT', slideNumber: 3, totalSlides: 7 },
      { type: 'lesson', eyebrow: 'TRIGGER 4', headline: 'SCARCITY — LESS IS MORE DESIRABLE', bullets: ['"Only 3 spots left this month" works because loss aversion is real', 'Scarcity must be genuine — manufactured scarcity destroys trust when discovered', 'Time limits, quantity limits, and access limits all work'], lesson: 'What can be lost is more motivating than what can be gained.', lessonLabel: 'HOW TO USE IT', slideNumber: 4, totalSlides: 7 },
      { type: 'lesson', eyebrow: 'TRIGGER 5', headline: 'LIKING — WE BUY FROM PEOPLE WE LIKE', bullets: ['People say yes to those they know, like, and trust', 'Similarity, compliments, and familiarity all increase liking', 'This is why personal branding outperforms anonymous advertising for service businesses'], lesson: 'Be a person first, a business second. Likability is a sales multiplier.', lessonLabel: 'HOW TO USE IT', slideNumber: 5, totalSlides: 7 },
      { type: 'lesson', eyebrow: 'TRIGGER 6', headline: 'COMMITMENT — SMALL YESES LEAD TO BIG YESES', bullets: ['Once people commit to something small, they feel pressure to stay consistent', 'Free consultations, free audits, and trials work because they get a micro-commitment', 'The foot-in-the-door technique uses this: small ask → medium ask → big ask'], lesson: 'Get a small yes early. It makes the big yes much easier later.', lessonLabel: 'HOW TO USE IT', slideNumber: 6, totalSlides: 7 },
      { type: 'cta', eyebrow: 'READ THE ORIGINAL', headline: 'INFLUENCE BY CIALDINI — MANDATORY READING', body: 'Every sales and marketing person should read this. It\'s the foundation under every persuasion technique that works.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'book-halbert',
    label: 'The Boron Letters — Halbert',
    desc: 'Raw lessons on direct mail and copy written from prison',
    icon: '✉️',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from The Boron Letters by Gary Halbert',
    bookSource: 'The Boron Letters — Gary Halbert (1984)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'LESSONS FROM THE BORON LETTERS', subheadline: 'Gary Halbert wrote these from prison to his son. They\'re the most honest marketing lessons ever put to paper.', tag: 'GARY HALBERT' },
      { type: 'quote', eyebrow: 'THE SETUP', quote: 'The world is full of people who can write. What is rare and valuable is someone who can write and sell at the same time.', author: 'Gary Halbert — The Boron Letters', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'THE STARVING CROWD IS EVERYTHING', bullets: ['Halbert\'s most famous lesson: if you had a hamburger stand at the right time and place, a crowd of starving people beats any edge you could have', 'A hungry market beats better copy, better design, better pricing', '"Find what people already want to buy, then sell it to them"'], lesson: 'Market selection is more important than skill, copy, or creativity.', lessonLabel: 'THE PRINCIPLE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'READ YOUR AD ALOUD BEFORE SENDING IT', bullets: ['If it sounds stiff or unnatural when you read it aloud, it reads stiff on paper', 'Great copy sounds like a conversation, not a brochure', 'Halbert edited everything by ear first, eye second'], lesson: 'Write how you talk. Then clean it up — don\'t make it formal.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 3', headline: 'THE A PILE AND THE B PILE', bullets: ['Halbert described how people sort their mail into A pile (personal) and B pile (obvious ads)', 'Your direct mail must feel like an A pile letter — personal, specific, handwritten if possible', 'Most business mail goes straight into the B pile and the trash'], lesson: 'The most important goal of your envelope is to get opened. Then the headline. Then the body.', lessonLabel: 'THE INSIGHT', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 4', headline: 'SWIPE FILE EVERYTHING THAT MAKES YOU BUY', bullets: ['Halbert kept a massive collection of ads, letters, and copy that worked on him personally', 'When you feel compelled to buy something, save the copy that compelled you', 'The best education in persuasion is your own buying behavior'], lesson: 'If it worked on you, study it. If it didn\'t, ignore it.', lessonLabel: 'THE HABIT', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ THE ORIGINAL', headline: 'THE BORON LETTERS ARE FREE ONLINE', body: 'Gary Halbert\'s son Bond released them for free at thegaryhalbertletter.com — read them all.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'book-schwartz',
    label: 'Breakthrough Advertising — Schwartz',
    desc: 'Market awareness levels — the most advanced copy framework ever',
    icon: '⚡',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from Breakthrough Advertising by Eugene Schwartz — market awareness levels',
    bookSource: 'Breakthrough Advertising — Eugene Schwartz (1966)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'THE 5 LEVELS OF MARKET AWARENESS', subheadline: 'Eugene Schwartz\'s framework is the most important concept in copywriting. Most marketers have never heard of it.', tag: 'EUGENE SCHWARTZ' },
      { type: 'lesson', eyebrow: 'THE FRAMEWORK', headline: 'YOUR MARKET IS NOT ALL IN THE SAME PLACE', bullets: ['Most Aware: they know your product and just need the price', 'Product Aware: they know what your product is but not why to choose you', 'Solution Aware: they know there\'s a solution but don\'t know your product', 'Problem Aware: they feel the pain but don\'t know solutions exist', 'Completely Unaware: no felt need at all'], lesson: 'The biggest mistake in marketing: writing copy for the wrong level of awareness.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 5 },
      { type: 'example', eyebrow: 'IN PRACTICE', headline: 'WRONG AWARENESS LEVEL = ZERO SALES', body: 'A tree service running ads that say "Call us for professional tree removal" is talking to Level 2-3. But most of their audience is at Level 4-5 — they don\'t think they need tree removal yet. The ad has to create the desire before it can pitch the service.', lesson: 'Meet people where they are. Not where you wish they were.', lessonLabel: 'THE APPLICATION', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HOW TO USE IT', headline: 'MATCH YOUR HOOK TO YOUR MARKET\'S AWARENESS', bullets: ['Most Aware → lead with price or deal: "Spring cleanup — $199 this week only"', 'Solution Aware → lead with your difference: "The only crew that cleans up after themselves"', 'Problem Aware → lead with the problem: "Dead branches don\'t fall on schedule"', 'Unaware → lead with a story or pattern interrupt'], lesson: 'The same product needs 5 different ads for 5 different audiences.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 5 },
      { type: 'quote', eyebrow: 'EUGENE SCHWARTZ', quote: 'Copy cannot create desire for a product. It can only take the hopes, dreams, fears and desires that already exist in the hearts of millions of people and focus those already-existing desires onto a particular product.', author: 'Eugene Schwartz — Breakthrough Advertising, 1966', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'READ THE ORIGINAL', headline: 'BREAKTHROUGH ADVERTISING — WORTH EVERY DOLLAR', body: 'The book sells for $100-$150 used. It will make you 100x that if you apply it. Search it on eBay or Amazon.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'book-kennedy',
    label: 'No B.S. Direct Marketing — Kennedy',
    desc: 'Dan Kennedy\'s iron-clad rules for local business marketing',
    icon: '📬',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from No B.S. Direct Marketing by Dan Kennedy',
    bookSource: 'No B.S. Direct Marketing — Dan Kennedy',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'DAN KENNEDY\'S RULES FOR DIRECT MARKETING', subheadline: 'The man who built the direct response industry for local businesses. These are his rules.', tag: 'DAN KENNEDY' },
      { type: 'lesson', eyebrow: 'RULE 1', headline: 'ALWAYS HAVE AN OFFER', bullets: ['Every piece of marketing must make a specific offer with a specific response mechanism', '"Brand awareness" is what people say when they can\'t measure results', 'Call to action must be clear, specific, and deadline-driven'], lesson: 'No offer = no response = no results. Period.', lessonLabel: 'KENNEDY\'S RULE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'RULE 2', headline: 'ALWAYS HAVE A DEADLINE', bullets: ['Without a deadline, people postpone forever — even when they want what you sell', 'The deadline creates urgency that overcomes inertia', '"Respond by [date] and receive..." works in every medium, every market'], lesson: 'An offer without a deadline is a suggestion. A suggestion with a deadline is a command.', lessonLabel: 'KENNEDY\'S RULE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'RULE 3', headline: 'FOLLOW UP OR FAIL', bullets: ['Kennedy\'s data: 80% of sales happen between the 5th and 12th contact', 'Most businesses give up after 1-2 follow-ups', 'A follow-up sequence is worth more than the original campaign'], lesson: 'Your fortune is in the follow-up. Build the sequence before you run the ad.', lessonLabel: 'KENNEDY\'S RULE', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'RULE 4', headline: 'SPEAK DIRECTLY TO YOUR BEST CUSTOMER', bullets: ['Mass marketing is dead — niche-specific language always outperforms generic', '"Attention: Tree Service Owners Doing Under $500k" beats any headline that tries to appeal to everyone', 'Kennedy called this the "If you are [specific person] this is for you" technique'], lesson: 'Narrow your message to widen your results.', lessonLabel: 'KENNEDY\'S RULE', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'RULE 5', headline: 'DIRECT MAIL STILL WORKS', bullets: ['Kennedy built his career proving that direct mail outperforms digital for most local businesses', 'Physical mail has less competition than it did in the 1990s', 'A well-written letter to a targeted list still generates extraordinary returns'], lesson: 'The medium your competitors abandon is the one you should invest in.', lessonLabel: 'KENNEDY\'S RULE', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ THE ORIGINAL', headline: 'NO B.S. DIRECT MARKETING — $15 ON AMAZON', body: 'One of the most practical books ever written for local business owners. Read it in a weekend.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'book-holmes',
    label: 'Ultimate Sales Machine — Holmes',
    desc: 'The Stadium Pitch and Dream 100 strategy explained',
    icon: '🔧',
    category: 'Book Lessons',
    format: 'lesson',
    topic: 'Lessons from The Ultimate Sales Machine by Chet Holmes — Dream 100 and Stadium Pitch',
    bookSource: 'The Ultimate Sales Machine — Chet Holmes (2007)',
    cards: [
      { type: 'cover', eyebrow: 'BOOK LESSONS', headline: 'THE ULTIMATE SALES MACHINE', subheadline: 'Chet Holmes\' two ideas that changed how the best companies think about sales and marketing.', tag: 'CHET HOLMES' },
      { type: 'lesson', eyebrow: 'LESSON 1', headline: 'THE DREAM 100 — PURSUE YOUR BEST CLIENTS OBSESSIVELY', bullets: ['Instead of reaching thousands of mediocre leads, pick 100 dream clients and pursue them relentlessly', 'Monthly gifts, handwritten notes, calls, events — every touchpoint makes you impossible to ignore', 'Holmes doubled a company\'s revenue in 12 months by targeting 100 accounts with total focus'], lesson: '100 perfect clients pursued with obsession beats 10,000 mediocre leads treated casually.', lessonLabel: 'THE STRATEGY', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LESSON 2', headline: 'THE STADIUM PITCH — EDUCATE BEFORE YOU SELL', bullets: ['Holmes imagined pitching to a stadium full of potential buyers: only 3% are ready to buy now', '7% are open to it. 30% don\'t think about it. 30% think they\'re not interested. 30% are sure they\'re not.', 'Most marketing talks to the 3%. The biggest opportunity is in the 37%.'], lesson: 'Educate the 37% and convert them before your competitors even know they exist.', lessonLabel: 'THE INSIGHT', slideNumber: 2, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE NUMBERS', stat: '3%', statLabel: 'Of your market is ready to buy right now — the other 97% needs education first', body: 'This is why content marketing, educational carousels, and lead magnets outperform direct pitching for cold audiences. Sell to the 3%. Educate the 97%.', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOW TO APPLY IT', headline: 'BUILD YOUR OWN DREAM 100 LIST', bullets: ['Identify your 100 dream clients — specific companies or people, not demographics', 'Create a 12-month touch campaign: monthly mail, quarterly calls, invitations to events', 'Track every touchpoint. Most deals close after 8-12 contacts over 6+ months'], lesson: 'The Dream 100 works because most of your competitors give up after 2 attempts.', lessonLabel: 'YOUR ACTION', slideNumber: 4, totalSlides: 6 },
      { type: 'quote', eyebrow: 'CHET HOLMES', quote: 'Mastery isn\'t about doing 4,000 different things. It\'s about doing 12 things 4,000 times.', author: 'Chet Holmes — The Ultimate Sales Machine', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'READ THE ORIGINAL', headline: 'THE ULTIMATE SALES MACHINE — $15 ON AMAZON', body: 'One of the most practical books for growing a service business. The Dream 100 alone is worth 10x the price.', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // PRINCIPLES
  // ══════════════════════════════════════════
  {
    id: 'specificity',
    label: 'Power of Specificity',
    desc: 'Why vague copy kills sales — with examples',
    icon: '🎯',
    category: 'Principle',
    format: 'principle',
    topic: 'The power of specificity in advertising copy',
    cards: [
      { type: 'cover', eyebrow: 'TIMELESS PRINCIPLE', headline: 'VAGUE COPY KILLS SALES', subheadline: 'The one principle that separates amateurs from professionals.', tag: 'SPECIFICITY' },
      { type: 'myth', eyebrow: 'THE TRUTH', myth: 'Great marketing uses bold, inspiring, emotional language', truth: 'Great marketing uses specific, concrete, verifiable facts that create trust', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE EXAMPLES', headline: 'VAGUE VS SPECIFIC — SIDE BY SIDE', bullets: ['"Lose weight fast" vs "Lose 14 lbs in 21 days"', '"High quality service" vs "We show up on time or the job is free"', '"Our clients get results" vs "Our average client generates $18k in their first reactivation campaign"'], lesson: 'Specifics can be verified. Vague claims cannot. Verification creates trust.', lessonLabel: 'THE RULE', slideNumber: 2, totalSlides: 5 },
      { type: 'example', eyebrow: 'PROOF', headline: 'PEPSODENT WENT FROM ZERO TO #1 WITH ONE SPECIFIC PHRASE', body: '"Run your tongue across your teeth. Feel that film?" Before this, toothpaste ads said "cleans your teeth." Hopkins\' specific, tangible instruction created an entirely new daily habit for 100 million Americans.', lesson: 'Naming what the customer already feels — with precision — is more powerful than any claim.', lessonLabel: 'THE CASE STUDY', slideNumber: 3, totalSlides: 5 },
      { type: 'quick-win', eyebrow: 'DO THIS NOW', headline: 'AUDIT YOUR COPY FOR THESE 10 VAGUE WORDS', body: 'Find every: fast, great, best, quality, amazing, effective, powerful, professional, reliable, trusted. Replace each with a specific number, name, timeframe, or verifiable fact.', lesson: 'If you can\'t prove it or measure it, don\'t say it.', lessonLabel: 'THE ACTION', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'APPLY THIS', headline: 'REWRITE ONE HEADLINE TODAY', body: 'Take your current tagline or main headline. Remove every vague word. Replace with one specific, measurable claim.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'follow-up',
    label: 'The Follow-Up Fortune',
    desc: '80% of sales happen on contact 5-12 — most give up after 2',
    icon: '📞',
    category: 'Principle',
    format: 'principle',
    topic: 'Why follow-up is the most valuable untapped asset in any service business',
    cards: [
      { type: 'cover', eyebrow: 'TIMELESS PRINCIPLE', headline: 'YOUR FORTUNE IS IN THE FOLLOW-UP', subheadline: '80% of sales happen on contact 5 through 12. Most businesses give up after 2.', tag: 'FOLLOW-UP' },
      { type: 'stat', eyebrow: 'THE DATA', stat: '80%', statLabel: 'Of sales require 5+ follow-up contacts — National Sales Executive Association', body: 'And yet 44% of salespeople give up after one follow-up. 22% after two. Only 14% make 3+ attempts. The opportunity gap is massive.', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'WHY THEY DON\'T BUY IMMEDIATELY', headline: 'NOT BUYING NOW ≠ NOT INTERESTED', bullets: ['They\'re busy — timing was off', 'They\'re comparing — still in research mode', 'They\'re waiting for a trigger — season, event, budget cycle', 'They forgot about you — the most common and most fixable reason'], lesson: 'Most lost leads aren\'t lost — they\'re just not followed up with.', lessonLabel: 'THE REALITY', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE SYSTEM', headline: 'THE 5-TOUCH FOLLOW-UP SEQUENCE', bullets: ['Day 0: Immediate response (text + email within 5 minutes)', 'Day 1: Value add — send something useful, not another pitch', 'Day 3: Check-in — casual, personal, low pressure', 'Day 7: Social proof — a result, testimonial, or case study', 'Day 14: Break-up message — "Should I keep your info or remove you?"'], lesson: 'The break-up message consistently generates 20-30% response from dead leads.', lessonLabel: 'THE SEQUENCE', slideNumber: 3, totalSlides: 5 },
      { type: 'quick-win', eyebrow: 'QUICK WIN', headline: 'REACTIVATE YOUR LAST 50 DEAD LEADS THIS WEEK', body: 'Pull every lead who didn\'t close in the last 90 days. Send one personal text: "Hey [name], just checking back in on [their request]. Things still moving forward for you?" You will close 10-20% of them this week.', lesson: 'The fastest money in any business is always in leads already in your pipeline.', lessonLabel: 'DO THIS FIRST', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'AUTOMATE THE FOLLOW-UP', headline: 'WHAT IF YOUR FOLLOW-UP RAN AUTOMATICALLY?', body: 'The right system texts every lead within 5 minutes, follows up 7 times, and reactivates old customers every 90 days — without you touching it.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // MYTH / TRUTH
  // ══════════════════════════════════════════
  {
    id: 'marketing-myths',
    label: '5 Marketing Myths Busted',
    desc: 'What your market believes vs reality',
    icon: '🚫',
    category: 'Myth-Truth',
    format: 'myth-truth',
    topic: 'The biggest myths about marketing for service businesses',
    cards: [
      { type: 'cover', eyebrow: 'MYTH BUSTING', headline: '5 MARKETING MYTHS COSTING YOU MONEY', subheadline: 'Stop believing these. Start growing.', tag: 'SERVICE BUSINESS' },
      { type: 'myth', eyebrow: 'MYTH #1', myth: 'You need a big ad budget to compete online', truth: 'You need a better system. A $500/mo funnel with a 10% close rate beats a $5,000 ad spend with no follow-up.', slideNumber: 1, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #2', myth: 'Social media followers equal revenue', truth: 'Followers are vanity. Email lists, phone numbers, and booked appointments are the only metrics that pay.', slideNumber: 2, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #3', myth: 'More leads = more revenue', truth: 'Better follow-up on existing leads = more revenue. Most businesses close less than 20% of the leads they already have.', slideNumber: 3, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #4', myth: 'Word of mouth is enough to grow', truth: 'Word of mouth is a bonus, not a strategy. It is unpredictable, unscalable, and stops the moment you stop delivering.', slideNumber: 4, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #5', myth: 'A new website will fix your lead problem', truth: 'A website without traffic and follow-up is a digital brochure no one reads. The system around the site drives revenue.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'THE FIX', headline: 'WANT THE ACTUAL SYSTEM?', body: 'Consistent follow-up. Automated reactivation. Booked calls on autopilot.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // INDUSTRY: TREE SERVICE / LAWN CARE
  // ══════════════════════════════════════════
  {
    id: 'tree-service-myths',
    label: 'Tree Service Marketing Myths',
    desc: 'What tree service owners get wrong about marketing',
    icon: '🌲',
    category: 'Industry: Tree & Lawn',
    format: 'myth-truth',
    topic: 'Marketing myths that cost tree service companies money',
    cards: [
      { type: 'cover', eyebrow: 'TREE SERVICE OWNERS', headline: '5 MARKETING MYTHS COSTING YOU JOBS', subheadline: 'If you believe any of these, it\'s costing you more than you think.', tag: 'TREE SERVICE' },
      { type: 'myth', eyebrow: 'MYTH #1', myth: 'Referrals and repeat customers are enough to grow', truth: 'Referrals cap your growth at whatever your existing clients\' networks allow. A system can generate leads while you\'re doing the work.', slideNumber: 1, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #2', myth: 'Low price wins the job', truth: 'Customers who hire on price leave on price. The clients worth keeping choose based on trust, reviews, and professionalism — not the lowest number.', slideNumber: 2, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #3', myth: 'I need to be on every social platform', truth: 'One platform with a consistent lead capture system outperforms five platforms with no follow-up. Pick one. Do it well.', slideNumber: 3, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #4', myth: 'Google Ads are too expensive for tree service', truth: 'Tree service keywords convert at 15-20%. A $50 lead that becomes a $1,500 job is a 30x return. The math works when your follow-up works.', slideNumber: 4, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MYTH #5', myth: 'Once the job is done, the customer relationship is over', truth: 'The average tree service customer has 3-5 additional needs in the next 2 years. No one calls them back. That money is sitting there uncollected.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILT FOR TREE SERVICE', headline: 'A MARKETING SYSTEM BUILT SPECIFICALLY FOR TREE COMPANIES', body: 'Automated follow-up, review collection, reactivation campaigns, and booked estimates on autopilot.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'reactivation-story',
    label: '$18k Reactivation Story',
    desc: 'How one email to past customers made $18k in a weekend',
    icon: '📝',
    category: 'Story',
    format: 'story',
    topic: 'How one reactivation email campaign made $18k in a weekend for a tree service company',
    cards: [
      { type: 'cover', eyebrow: 'TRUE STORY', headline: '$18,000 FROM ONE EMAIL TO OLD CUSTOMERS', subheadline: 'A tree service company in Ohio. 340 past customers. One email. One weekend.', tag: 'CASE STUDY' },
      { type: 'story', eyebrow: 'THE SETUP', headline: 'FEBRUARY. THREE JOBS ON THE BOOKS.', body: 'It was February in Ohio. A tree service owner had 3 jobs scheduled for the next two weeks and was considering running paid ads. Before spending on new leads, we looked at what he already had: 340 past customers who had never been contacted after their job was completed.', slideNumber: 1, totalSlides: 5 },
      { type: 'story', eyebrow: 'THE CAMPAIGN', headline: 'ONE EMAIL. TWO HOURS TO SET UP.', body: 'We wrote a simple email. Subject: "Hey [name] — checking in about your property." Body: a personal reminder of their last job, mention of the upcoming spring season, and an offer for a priority spring cleanup quote if they responded within 7 days. No pressure. No sales language. Just a neighbor checking in.', slideNumber: 2, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '$18k', statLabel: 'Generated in 72 hours from a list they already owned', body: '12 people responded. 9 booked. Average job value: $2,100. Total: $18,900. Cost to run: $0. Time to set up: 2 hours. ROI: incalculable.', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE LESSON', headline: 'YOUR BEST LEADS ALREADY TRUST YOU', bullets: ['Past customers don\'t need convincing — they need reminding', 'Most contractors never contact past clients after the job is complete', '90-day reactivation campaigns should run automatically, forever', 'The average customer has 3-5 additional needs in the next 2 years'], lesson: 'Your past customer list is the most valuable asset in your business. Most people never use it.', lessonLabel: 'THE TAKEAWAY', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'YOUR TURN', headline: 'HOW MANY PAST CUSTOMERS ARE ON YOUR LIST?', body: 'We set up automated reactivation campaigns for tree service and lawn care companies. Most see $8k-$18k from the first send.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // CHECKLISTS & QUICK WINS
  // ══════════════════════════════════════════
  {
    id: 'lead-gen-checklist',
    label: 'Local Business Lead Gen Checklist',
    desc: 'Everything a local service business needs for lead gen on autopilot',
    icon: '✅',
    category: 'Checklist',
    format: 'checklist',
    topic: 'Complete lead generation checklist for local service businesses',
    cards: [
      { type: 'cover', eyebrow: 'CHECKLIST', headline: 'THE COMPLETE LEAD GEN CHECKLIST', subheadline: 'Everything a local service business needs to generate leads on autopilot.', tag: '2024 EDITION' },
      { type: 'checklist', eyebrow: 'FOUNDATION', headline: 'YOUR DIGITAL FOUNDATION', checks: ['Google Business Profile fully filled out with photos and services', 'Website has a clear headline and one primary call to action', 'Phone number is clickable on mobile', 'Live chat or contact form responds within 5 minutes'], slideNumber: 1, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'LEAD CAPTURE', headline: 'CAPTURING EVERY LEAD', checks: ['Lead magnet or free offer prominently displayed', 'Email capture with an immediate automated follow-up', 'Missed call text-back set up and tested', 'Facebook Pixel and Google Tag installed and verified'], slideNumber: 2, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'FOLLOW-UP', headline: 'FOLLOW-UP THAT CLOSES', checks: ['5-email nurture sequence loaded and live', 'SMS follow-up within 5 minutes of every new inquiry', 'Monthly reactivation campaign to past customers running', 'Review request automatically sent after every completed job'], slideNumber: 3, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'REPUTATION', headline: 'REVIEWS & REPUTATION', checks: ['25+ Google reviews with 4.5+ star average', 'Response template ready for negative reviews', 'NFC review cards given to every satisfied client', 'Testimonials on website and in social media'], slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'GET IT BUILT', headline: 'WANT THIS ENTIRE SYSTEM SET UP IN 72 HOURS?', body: 'Done for you. No tech headaches. Your first week live typically generates 3-8 booked estimates.', ctaText: 'Book a Free Setup Call' },
    ],
  },
  {
    id: 'google-reviews',
    label: '5 Quick Wins: Google Reviews',
    desc: 'Get more reviews this week without being annoying',
    icon: '⭐',
    category: 'Quick Wins',
    format: 'quick-wins',
    topic: '5 fast ways to get more Google reviews this week',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 WAYS TO GET MORE GOOGLE REVIEWS THIS WEEK', subheadline: 'Zero awkward asking. All fast to implement.', tag: 'LOCAL SEO' },
      { type: 'quick-win', eyebrow: 'WIN #1', headline: 'TEXT THE LINK WITHIN 2 HOURS OF THE JOB', body: '"Hey [name], glad we could take care of that for you today. If you have 60 seconds, a Google review would mean the world to us — [link]." Within-2-hour texts get 3x more reviews than next-day emails.', lesson: 'Emotion peaks immediately after a great experience. Catch it then.', lessonLabel: 'WHY IT WORKS', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #2', headline: 'USE AN NFC REVIEW CARD', body: 'Get NFC cards printed ($30 for 10 on Vistaprint). Hand them to every happy customer on site. One tap opens your Google review page on their phone. No link copying, no searching. Tap and go.', lesson: 'Remove friction and reviews happen. Add friction and they don\'t.', lessonLabel: 'WHY IT WORKS', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #3', headline: 'ADD THE LINK TO EVERY EMAIL SIGNATURE', body: '"Happy with our work? 60 seconds on Google helps us a lot → [link]" at the bottom of every email. Passive reviews weekly with zero additional effort.', lesson: 'Your existing customers are your fastest and easiest source of new reviews.', lessonLabel: 'WHY IT WORKS', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #4', headline: 'REACTIVATE YOUR LAST 50 COMPLETED JOBS', body: 'Text or email your last 50 customers: "We\'re pushing hard for reviews this month — if you have 60 seconds, here\'s the link: [link]. Really appreciate it." Expect 10-20% to respond.', lesson: 'People who already had a great experience just needed to be asked.', lessonLabel: 'WHY IT WORKS', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #5', headline: 'AUTOMATE IT IN YOUR CRM', body: 'Set trigger: job marked complete → wait 2 hours → auto-text with review link. Set it once and never think about it again. Every completed job automatically requests a review.', lesson: 'Manual asking stops when you get busy. Automation never stops.', lessonLabel: 'WHY IT WORKS', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'GO FURTHER', headline: 'WANT THE AUTOMATED REVIEW SYSTEM?', body: 'We set up automated review requests, NFC cards, and reputation management — done for you.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // HOT TAKES
  // ══════════════════════════════════════════
  {
    id: 'contractor-hot-takes',
    label: 'Contractor Marketing Hot Takes',
    desc: 'Spicy opinions that get engagement',
    icon: '🔥',
    category: 'Hot Takes',
    format: 'hot-takes',
    topic: 'Unpopular truths about marketing for contractors',
    cards: [
      { type: 'cover', eyebrow: 'HOT TAKES', headline: 'UNPOPULAR TRUTHS ABOUT CONTRACTOR MARKETING', subheadline: 'If any of these make you uncomfortable, that\'s the point.', tag: 'SPICY EDITION' },
      { type: 'hot-take', eyebrow: 'HOT TAKE #1', headline: 'YOUR WEBSITE IS NOT YOUR BIGGEST PROBLEM', body: 'You do not need a new website. You need a follow-up system. 80% of your lost revenue is sitting in leads who called, got a quote, and never heard from you again.', slideNumber: 1, totalSlides: 6 },
      { type: 'hot-take', eyebrow: 'HOT TAKE #2', headline: 'WORD OF MOUTH IS NOT A MARKETING STRATEGY', body: 'It is a byproduct of great work — not a plan. The day you stop working, the referrals stop. You cannot scale it, predict it, or retire on it.', slideNumber: 2, totalSlides: 6 },
      { type: 'hot-take', eyebrow: 'HOT TAKE #3', headline: 'YOU ARE NOT TOO EXPENSIVE', body: 'You are undervalued because you cannot articulate your difference. Raise your prices 20%. You will lose the price-shoppers and keep the clients worth keeping.', slideNumber: 3, totalSlides: 6 },
      { type: 'hot-take', eyebrow: 'HOT TAKE #4', headline: 'POSTING WITHOUT A SYSTEM IS CHARITY FOR META', body: '3 posts a week for 2 years with no lead capture, no follow-up, and no offer is just free content for Mark Zuckerberg. Post less. Capture more. Build a list.', slideNumber: 4, totalSlides: 6 },
      { type: 'hot-take', eyebrow: 'HOT TAKE #5', headline: 'YOUR BUSIEST SEASON IS THE WORST TIME TO COAST ON MARKETING', body: 'Slow down on marketing when busy and the pipeline hits you 90 days later when you have nothing scheduled. Market hardest when you are fully booked.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'AGREE OR DISAGREE?', headline: 'DROP YOUR HOTTEST TAKE IN THE COMMENTS', body: 'And if you want a system that generates consistent leads year-round without depending on referrals or posts — we built it.', ctaText: 'Book a Free Strategy Call' },
    ],
  },

  // ══════════════════════════════════════════
  // PAS / FRAMEWORK
  // ══════════════════════════════════════════
  {
    id: 'feast-famine',
    label: 'The Feast or Famine Cycle (PAS)',
    desc: 'Classic PAS framework for service businesses',
    icon: '🎯',
    category: 'PAS',
    format: 'pas',
    topic: 'The feast-or-famine cycle destroying service business owners',
    cards: [
      { type: 'cover', eyebrow: 'THE REAL PROBLEM', headline: 'WHY YOUR REVENUE LOOKS LIKE A HEART ATTACK', subheadline: 'The feast-or-famine cycle — and how to break it permanently.', tag: 'SERVICE BUSINESS' },
      { type: 'problem', eyebrow: 'THE PROBLEM', headline: 'BUSY ONE MONTH. DEAD THE NEXT.', body: 'You finish a big job. Revenue looks great. You stop marketing because you\'re slammed. A month later the pipeline is empty and you\'re calling old clients asking if they need anything.', bullets: ['No consistent lead flow = no predictable revenue', 'Reactive marketing creates reactive revenue', 'You\'re always starting over instead of building up'], slideNumber: 1, totalSlides: 6 },
      { type: 'problem', eyebrow: 'THE REAL COST', headline: 'HERE\'S WHAT THE CYCLE IS ACTUALLY COSTING YOU', body: 'It\'s not just stressful. It\'s expensive. Every slow month means discounting to fill the schedule. Every feast means turning away profitable work. The cycle keeps you from ever building anything sustainable.', bullets: ['Can\'t hire — revenue is too unpredictable', 'Can\'t raise prices — always need the next job', 'Can\'t plan ahead — pipeline is invisible'], slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE CAUSE', headline: 'YOU\'RE MARKETING WHEN YOU\'RE SLOW', bullets: ['Marketing when slow means results arrive 60-90 days later', 'By the time leads come in, you\'re slammed again', 'The cycle repeats forever because the system never runs constantly'], lesson: 'Marketing is not a faucet. It\'s a flywheel. It needs to spin all the time.', lessonLabel: 'THE ROOT CAUSE', slideNumber: 3, totalSlides: 6 },
      { type: 'solution', eyebrow: 'THE SOLUTION', headline: 'MARKET EVERY DAY — ESPECIALLY WHEN FULLY BOOKED', body: 'Set up automated lead generation that runs while you work. Email follow-up that nurtures while you sleep. Reactivation campaigns that bring back old customers every 90 days.', lesson: 'Businesses with consistent revenue are not luckier. They built a system.', lessonLabel: 'THE SHIFT', slideNumber: 4, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE 3 AUTOMATIONS', headline: 'START WITH THESE THREE', checks: ['Missed call text-back — respond to every lead within 90 seconds automatically', '5-email nurture sequence — follow up with leads who didn\'t book instantly', '90-day reactivation campaign — bring back every past customer automatically'], slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BREAK THE CYCLE', headline: 'WANT THE SYSTEM BUILT FOR YOU?', body: 'We set up the entire automation stack in 72 hours. First reactivation campaign typically generates $8k-$18k.', ctaText: 'Book a Free Strategy Call' },
    ],
  },

  // ══════════════════════════════════════════
  // FAMOUS QUOTES
  // ══════════════════════════════════════════
  {
    id: 'ford-advertising-quote',
    label: 'Henry Ford — Stop the Clock',
    desc: 'The quote that explains why cutting ads is fatal',
    icon: '💬',
    category: 'Famous Quote',
    format: 'famous-quote',
    topic: 'Henry Ford on the danger of stopping advertising',
    cards: [
      { type: 'cover', eyebrow: 'FAMOUS QUOTE', headline: 'THE MAN WHO STOPS ADVERTISING TO SAVE MONEY', subheadline: 'Henry Ford said it in 1920. It has never been more relevant.', tag: 'HENRY FORD' },
      { type: 'quote', eyebrow: 'THE QUOTE', quote: 'The man who stops advertising to save money is like the man who stops the clock to save time.', author: 'Henry Ford', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'WHAT IT MEANS', headline: 'CUTTING ADS DOESN\'T SAVE MONEY', bullets: ['Cutting ads when slow feels smart in month 1', 'In month 2 your pipeline has dried up completely', 'In month 3 you\'re discounting to fill the schedule', 'The "savings" cost you 10x in lost revenue'], lesson: 'Marketing is not a cost when business is slow. It is the solution to business being slow.', lessonLabel: 'THE TRUTH', slideNumber: 2, totalSlides: 5 },
      { type: 'example', eyebrow: 'HISTORY PROVES IT', headline: 'WHAT HAPPENED DURING THE GREAT DEPRESSION', body: 'Most companies slashed ad budgets. Procter & Gamble doubled theirs. Kellogg\'s doubled theirs. By 1933, Kellogg\'s profits had risen 30% and they dominated the cereal market for the next 50 years.', lesson: 'Your competitors will go quiet in hard times. That is when your voice gets loudest.', lessonLabel: 'THE LESSON', slideNumber: 3, totalSlides: 5 },
      { type: 'myth', eyebrow: 'THE CORRECT RESPONSE', myth: 'Cut marketing when revenue drops to reduce costs', truth: 'Increase marketing when revenue drops — because that is precisely what caused the drop', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'DON\'T STOP THE CLOCK', headline: 'KEEP YOUR MARKETING RUNNING YEAR-ROUND', body: 'Automated systems that generate leads whether you are busy or slow. No manual effort required.', ctaText: 'See How It Works' },
    ],
  },

  // ══════════════════════════════════════════
  // INDUSTRY: ROOFING MARKETING
  // ══════════════════════════════════════════
  {
    id: 'roofing-lead-mistakes',
    label: 'Roofing Lead Gen Mistakes',
    desc: 'Why most roofing companies waste money on leads',
    icon: '🏠',
    category: 'Industry: Roofing',
    format: 'mistake',
    topic: 'Lead generation mistakes that cost roofing companies thousands every month',
    cards: [
      { type: 'cover', eyebrow: 'ROOFING BUSINESS', headline: '5 LEAD GEN MISTAKES COSTING ROOFERS THOUSANDS', subheadline: 'Most roofing companies make all five. Here is how to fix them.', tag: 'MARKETING' },
      { type: 'lesson', eyebrow: 'MISTAKE #1', headline: 'BUYING SHARED LEADS FROM ANGI OR HOMEADVISOR', bullets: ['Shared leads go to 4-6 contractors simultaneously — you are in a race to the bottom on price', 'The homeowner has already been called twice before you dial', 'Cost per lead looks cheap until you factor in close rate — often 5-8% on shared leads vs 30-40% on exclusive'], lesson: 'Own your lead generation. Shared leads rent you attention — owned systems build equity.', lessonLabel: 'THE FIX', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'MISTAKE #2', headline: 'NO FOLLOW-UP SYSTEM AFTER THE ESTIMATE', bullets: ['74% of homeowners get multiple estimates before deciding', 'Average roofing sale takes 5-7 days from estimate to decision', 'Most roofers follow up once — or never — after leaving the estimate'], lesson: 'The roofer who follows up the most professionally wins, not the one with the lowest price.', lessonLabel: 'THE FIX', slideNumber: 2, totalSlides: 6 },
      { type: 'myth', eyebrow: 'MISTAKE #3', myth: 'Storm season will take care of itself — we do not need marketing when it rains', truth: 'Companies with systems before the storm capture 3-5x more jobs than those scrambling to set them up during it. Preparation is the strategy.', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'MISTAKE #4', headline: 'NO REVIEW STRATEGY', bullets: ['Roofing is one of the highest-trust purchases a homeowner ever makes', '87% of consumers read reviews before hiring a contractor', 'A company with 80 reviews at 4.8 stars dominates map pack and wins jobs before the phone even rings'], lesson: 'Reviews are not a nice-to-have. For roofing, they are the sale.', lessonLabel: 'THE FIX', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'MISTAKE #5', headline: 'TREATING EVERY LEAD THE SAME', bullets: ['Storm leads vs insurance leads vs retail leads require completely different follow-up sequences', 'Insurance claim leads need an adjuster education sequence', 'Retail leads need a financing and value-justification sequence', 'Treating them the same kills close rate on both'], lesson: 'Segment your leads. Send the right message to the right person at the right time.', lessonLabel: 'THE FIX', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILT FOR ROOFING', headline: 'WANT A MARKETING SYSTEM BUILT FOR ROOFING COMPANIES?', body: 'Automated follow-up, review collection, storm campaign playbook, and lead segmentation — done for you in 72 hours.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'roofing-close-rate',
    label: 'Roofing Close Rate Killers',
    desc: 'Why roofers lose jobs they should win — and the fixes',
    icon: '📋',
    category: 'Industry: Roofing',
    format: 'problem-solution',
    topic: 'Why roofing companies have low estimate close rates and how to fix them',
    cards: [
      { type: 'cover', eyebrow: 'ROOFING SALES', headline: 'WHY YOU ARE LOSING JOBS YOU SHOULD WIN', subheadline: 'Most roofing companies close 15-20% of estimates. The best close 35-45%. Here is the difference.', tag: 'CLOSE RATE' },
      { type: 'problem', eyebrow: 'THE PROBLEM', headline: 'YOU LEAVE THE ESTIMATE AND DISAPPEAR', body: 'The homeowner got 3 estimates. You were the second one. Your estimate sat in their inbox for 4 days with zero follow-up. The third company texted the same night, emailed a financing option the next day, and called on day 3 to answer questions. Who do you think got the job?', bullets: ['No automated follow-up after estimate delivery', 'No value-add content between estimate and decision', 'No easy way for homeowner to ask questions after you leave'], slideNumber: 1, totalSlides: 5 },
      { type: 'solution', eyebrow: 'THE FIX', headline: 'BUILD A 7-DAY ESTIMATE FOLLOW-UP SEQUENCE', body: 'Day 0: Text confirmation with estimate link. Day 1: Email with financing options. Day 2: Text with a video of your crew working. Day 3: Email with 3 recent reviews from similar projects. Day 5: Personal call to answer questions. Day 7: Final offer or price-lock.', lesson: 'The company that stays in front of the homeowner between estimate and decision wins — almost every time.', lessonLabel: 'THE SYSTEM', slideNumber: 2, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE NUMBERS', stat: '2.3x', statLabel: 'Average close rate improvement after implementing a 7-day follow-up sequence', body: 'A roofing company going from 18% to 41% close rate on the same lead volume doubles revenue without spending another dollar on advertising.', slideNumber: 3, totalSlides: 5 },
      { type: 'quick-win', eyebrow: 'START TODAY', headline: 'SEND THIS TEXT WITHIN 1 HOUR OF EVERY ESTIMATE', body: '"Hey [name], this is [your name] from [company]. Just wanted to make sure you received the estimate I sent over. Happy to answer any questions — even about the insurance process if that applies. Here is a link to our recent work in your area: [link]"', lesson: 'The 1-hour text alone improves close rate by 15-20% for most roofing companies.', lessonLabel: 'QUICK WIN', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'GET THE FULL SYSTEM', headline: 'WANT THE FULL ESTIMATE FOLLOW-UP SEQUENCE BUILT FOR YOU?', body: 'We set up the complete 7-day sequence — texts, emails, and automations — done for you. Most clients see ROI within the first week.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // INDUSTRY: LAWN CARE MARKETING
  // ══════════════════════════════════════════
  {
    id: 'lawn-care-scaling',
    label: 'Scaling a Lawn Care Business',
    desc: 'From $200k to $500k — the marketing moves that matter',
    icon: '🌿',
    category: 'Industry: Lawn Care',
    format: 'lesson',
    topic: 'How lawn care companies scale from $200k to $500k with better marketing and systems',
    cards: [
      { type: 'cover', eyebrow: 'LAWN CARE GROWTH', headline: 'HOW LAWN CARE COMPANIES BREAK THE $500K CEILING', subheadline: 'The marketing and operations moves that separate the $200k companies from the $1M ones.', tag: 'LAWN CARE' },
      { type: 'lesson', eyebrow: 'MOVE #1', headline: 'STOP SELLING MOWING. START SELLING PROGRAMS.', bullets: ['One-time mow customers have 30% return rate. Program customers have 85%+ retention', 'A customer on a 26-cut annual program is worth $1,400-$2,200/year vs $45 per cut', 'Programs are easier to schedule, easier to staff, and far more profitable per stop'], lesson: 'Recurring revenue is the only revenue that lets you plan, hire, and grow.', lessonLabel: 'THE SHIFT', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'MOVE #2', headline: 'ROUTE DENSITY IS MORE VALUABLE THAN MORE CUSTOMERS', bullets: ['A truck doing 12 jobs in a 2-mile radius earns more than one doing 12 jobs across 8 miles', 'Route optimization cuts drive time by 30-40% — that is 2-3 extra jobs per day per truck', 'Geographic marketing: target neighborhoods where you already have 3+ customers'], lesson: 'The goal is not more customers. It is more customers per square mile.', lessonLabel: 'THE STRATEGY', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'MOVE #3', headline: 'UPSELL AFTER EVERY SERVICE', bullets: ['Lawn care companies that offer aeration, overseeding, and fertilization programs see 40% higher LTV', 'The best time to upsell is right after a great service — not months later', 'Automated post-service texts with add-on offers convert at 12-18%'], lesson: 'Your most receptive buyer is a customer who just watched you do great work.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'MOVE #4', headline: 'REFERRAL PROGRAMS THAT ACTUALLY WORK', bullets: ['Most lawn care referral programs fail because the reward goes to the wrong person at the wrong time', 'Reward the referring customer immediately — not after the new customer completes 3 visits', 'Text the reward: "You just earned a free service credit — use it on your next visit"'], lesson: 'Immediate, tangible rewards turn happy customers into active salespeople.', lessonLabel: 'THE SYSTEM', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '3.2x', statLabel: 'Revenue increase when combining programs + route density + upsells', body: 'A lawn care company with 150 one-time customers generates maybe $180k/year. The same 150 customers on programs with upsells and referrals generates $580k-$620k. Same truck count. Same crew. Different system.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILT FOR LAWN CARE', headline: 'WANT A MARKETING SYSTEM BUILT FOR LAWN CARE COMPANIES?', body: 'Program upsell automations, referral campaigns, route-density geo targeting, and reactivation — done for you.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'lawn-care-offseason',
    label: 'Lawn Care Off-Season Revenue',
    desc: 'How to generate revenue when grass stops growing',
    icon: '❄️',
    category: 'Industry: Lawn Care',
    format: 'problem-solution',
    topic: 'How lawn care companies generate revenue in the off-season with better marketing',
    cards: [
      { type: 'cover', eyebrow: 'LAWN CARE STRATEGY', headline: 'HOW TO MAKE MONEY WHEN GRASS STOPS GROWING', subheadline: 'The off-season revenue playbook for lawn care companies.', tag: 'OFF-SEASON' },
      { type: 'problem', eyebrow: 'THE PROBLEM', headline: 'THE OFF-SEASON REVENUE CLIFF', body: 'Most lawn care companies in seasonal markets see revenue drop 60-80% from October through March. Crew members go elsewhere. Equipment sits idle. The owner takes on debt to survive winter — then starts from zero in spring.', bullets: ['Revenue drops but fixed costs stay the same', 'Best crew members find other work and do not come back', 'Spring ramp-up costs more because you are rebuilding from scratch every year'], slideNumber: 1, totalSlides: 5 },
      { type: 'solution', eyebrow: 'THE STRATEGY', headline: 'ADD COMPLEMENTARY SERVICES WITH THE SAME CUSTOMER BASE', body: 'Your existing customers already trust you and know where they live. Winter services with high margin and low equipment cost include: leaf cleanup, gutter cleaning, holiday lighting installation and removal, snow removal (if applicable), and fall aeration and overseeding.', lesson: 'The customer who trusts you with their lawn in summer trusts you with their property in winter. You just have to ask.', lessonLabel: 'THE PRINCIPLE', slideNumber: 2, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'THE CAMPAIGN', headline: 'THE SEPTEMBER OFF-SEASON UPSELL CAMPAIGN', checks: ['September 1: Email all active clients — "Fall cleanup spots are filling fast — want us to handle yours?"', 'September 15: Text campaign for aeration and overseeding with early-bird pricing', 'October 1: Holiday lighting pre-sale offer to all residential clients', 'October 15: Follow-up to non-responders with social proof and limited availability', 'November 1: Winter service intro email — gutter clean, leaf removal final push'], slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '$47k', statLabel: 'Average additional off-season revenue for a lawn care company with 200 active clients running this campaign', body: 'That is enough to keep a key crew member employed year-round, maintain equipment, and start spring fully staffed and funded.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT YOUR OFF-SEASON CAMPAIGN BUILT AND AUTOMATED?', body: 'We set up the entire fall/winter upsell sequence — emails, texts, and follow-ups — so it runs automatically every year.', ctaText: 'Book a Free Setup Call' },
    ],
  },

  // ══════════════════════════════════════════
  // INDUSTRY: HOME SERVICE / GENERAL CONTRACTOR
  // ══════════════════════════════════════════
  {
    id: 'contractor-lead-nurture',
    label: 'Lead Nurture for Contractors',
    desc: 'Turn cold leads into booked jobs with the right sequence',
    icon: '🔨',
    category: 'Industry: Contractors',
    format: 'lesson',
    topic: 'Lead nurture sequence for home service and general contractors to close more estimates',
    cards: [
      { type: 'cover', eyebrow: 'CONTRACTOR MARKETING', headline: 'THE LEAD NURTURE SEQUENCE THAT CLOSES JOBS', subheadline: 'Most contractors send one quote and wait. Here is what the ones who close 40% of estimates do instead.', tag: 'LEAD NURTURE' },
      { type: 'lesson', eyebrow: 'THE REALITY', headline: 'MOST LEADS ARE NOT READY TO BUY TODAY', bullets: ['Only 3% of your leads are ready to buy right now', '37% are open to it — they just need the right nudge at the right time', '60% will eventually buy from someone — the question is whether it will be you or a competitor who stayed in front of them'], lesson: 'The company that nurtures leads wins the jobs that are not decided yet — which is most of them.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 6 },
      { type: 'step', eyebrow: 'STEP 1', headline: 'IMMEDIATE RESPONSE — WITHIN 5 MINUTES', body: 'Text: "Hey [name], this is [your name] from [company]. Got your request — I will reach out in the next hour to schedule a look. Any specific times that work best for you?" Speed is the first signal of professionalism.', stepNumber: 1, totalSlides: 6, slideNumber: 2 },
      { type: 'step', eyebrow: 'STEP 2', headline: 'ESTIMATE DELIVERY + SAME-DAY TEXT', body: 'Send the estimate. Then text: "Just sent over the proposal — check your email. Happy to walk through it by phone or answer questions by text. Most people have 2-3 questions before they decide — what are yours?" This opens dialogue instead of waiting for silence.', stepNumber: 2, totalSlides: 6, slideNumber: 3 },
      { type: 'step', eyebrow: 'STEP 3', headline: 'DAY 3: SOCIAL PROOF TOUCH', body: 'Email: "Since I sent your estimate, we just finished a similar project in [nearby area]. Here are a few photos [link]. The homeowner said [quote from review]. Happy to connect you with them directly if that would help."', stepNumber: 3, totalSlides: 6, slideNumber: 4 },
      { type: 'step', eyebrow: 'STEP 4', headline: 'DAY 7: THE QUESTION CLOSE', body: 'Text: "Hey [name], just checking in — where are you in your thinking on the project? No pressure either way. Happy to answer any questions or adjust the scope if needed." This low-pressure check-in surfaces objections before they become silence.', stepNumber: 4, totalSlides: 6, slideNumber: 5 },
      { type: 'cta', eyebrow: 'AUTOMATE THE SEQUENCE', headline: 'WANT THIS ENTIRE SEQUENCE RUNNING AUTOMATICALLY?', body: 'Every new lead gets the 4-step sequence on autopilot. No manual follow-up. No leads falling through the cracks. Close more of what you already have.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'contractor-pricing',
    label: 'Stop Competing on Price',
    desc: 'How contractors win jobs without being the cheapest',
    icon: '💵',
    category: 'Industry: Contractors',
    format: 'principle',
    topic: 'How home service contractors win more jobs without lowering their prices',
    cards: [
      { type: 'cover', eyebrow: 'CONTRACTOR SALES', headline: 'STOP COMPETING ON PRICE. START WINNING ON VALUE.', subheadline: 'The contractors charging 20% more than the market — and staying fully booked.', tag: 'PRICING STRATEGY' },
      { type: 'myth', eyebrow: 'THE MYTH', myth: 'Homeowners always choose the lowest price', truth: 'Homeowners choose the contractor they trust most. Price is the tiebreaker when trust is equal — and it is never equal if you have a system.', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE TRUST STACK', headline: 'WHAT CREATES TRUST BEFORE THE ESTIMATE', bullets: ['50+ Google reviews at 4.8 stars or higher', 'A professional website with photos of real projects', 'A response that arrives within 5 minutes of inquiry', 'A pre-estimate email with credentials, insurance proof, and photos'], lesson: 'By the time they see your price, the decision is already 80% made.', lessonLabel: 'THE INSIGHT', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE PRESENTATION', headline: 'THE ESTIMATE IS A SALES DOCUMENT, NOT A SPREADSHEET', bullets: ['Break down the line items — show exactly what they are paying for', 'Include photos of the problem and your proposed solution', 'Include a warranty and what happens if something goes wrong', 'Add a section: "Why we cost more than the guy down the street"'], lesson: 'A detailed estimate with clear reasoning closes at 2x the rate of a simple number on a page.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'hot-take', eyebrow: 'THE TRUTH', headline: 'IF EVERY LEAD ACCEPTS YOUR PRICE, YOU ARE TOO CHEAP', body: 'You should lose 20-30% of estimates on price. If you win everything, you are leaving money on the table. The goal is not to win every job — it is to win the right jobs at the right margin.', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'DO THIS WEEK', headline: 'RAISE YOUR PRICES 15% ON YOUR NEXT 10 ESTIMATES', body: 'Track close rate. If it stays above 30%, you have found a higher price floor. Most contractors who do this are shocked to discover their close rate barely changes — but their margin improves dramatically.', lesson: 'Price resistance is often imaginary until you test it.', lessonLabel: 'THE EXPERIMENT', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT A MARKETING SYSTEM THAT POSITIONS YOU AS PREMIUM?', body: 'Review generation, professional estimate follow-up, and trust-building automations — built for contractors who do not want to compete on price.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // SWIPE FILE: HIGH-PERFORMING HOOKS BY FORMAT
  // ══════════════════════════════════════════
  {
    id: 'swipe-checklist-hooks',
    label: 'Swipe: Best Checklist Hooks',
    desc: 'The highest-performing checklist carousel hooks — steal these',
    icon: '📋',
    category: 'Swipe File',
    format: 'lesson',
    topic: 'Highest-performing checklist carousel hooks and why they work',
    cards: [
      { type: 'cover', eyebrow: 'SWIPE FILE', headline: 'THE CHECKLIST HOOKS THAT GET THE MOST SAVES', subheadline: 'Study these. Steal the structure. Build your own.', tag: 'CAROUSEL HOOKS' },
      { type: 'lesson', eyebrow: 'HOOK TYPE 1', headline: 'THE "BEFORE YOU" HOOK', bullets: ['"Before you run your next Facebook ad — read this checklist"', '"Before you hire your next employee — go through this list"', '"Before your busy season starts — check every item below"', 'Formula: Before you [do the thing they are about to do] — [the checklist that saves them]'], lesson: 'These hooks work because they intercept someone right before a high-stakes action.', lessonLabel: 'WHY IT WORKS', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 2', headline: 'THE NUMBERED PROMISE HOOK', bullets: ['"The 9-point checklist that doubled our close rate"', '"12 things every roofing company should do before storm season"', '"The 7 automations keeping our calendar full year-round"', 'Formula: The [specific number]-point checklist that [specific result]'], lesson: 'Numbers signal completeness. They promise you will not miss anything. That drives saves.', lessonLabel: 'WHY IT WORKS', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 3', headline: 'THE "I WISH I KNEW" HOOK', bullets: ['"The checklist I wish I had when I started my tree service"', '"Everything I wish someone gave me before my first season"', '"The list no one shows you when you start a contracting business"', 'Formula: The checklist I wish I had when [relatable starting point]'], lesson: 'Nostalgia and regret are powerful. Readers project themselves onto your past self.', lessonLabel: 'WHY IT WORKS', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 4', headline: 'THE AUDIT HOOK', bullets: ['"Audit your Google Business Profile with this 10-point checklist"', '"Run this audit on your follow-up system — most companies fail 6 of 10"', '"The marketing audit every service business should do quarterly"', 'Formula: Audit your [thing they care about] with this [number]-point checklist'], lesson: 'Audits are saved because people intend to use them. Save rate is 3-4x higher than regular posts.', lessonLabel: 'WHY IT WORKS', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 5', headline: 'THE STANDARD-SETTER HOOK', bullets: ['"Here is the exact checklist we use for every new client onboarding"', '"This is the standard we hold our team to — screenshot and share"', '"Our internal quality checklist — we are making it public"', 'Formula: Here is the exact checklist we use internally for [thing they aspire to]'], lesson: 'Making internal processes public signals confidence and builds authority.', lessonLabel: 'WHY IT WORKS', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'YOUR TURN', headline: 'PICK ONE HOOK FORMAT AND BUILD YOUR CHECKLIST TODAY', body: 'The best checklist carousel is the one relevant to your specific audience. Use one of these hooks. Fill it with your actual knowledge.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'swipe-story-hooks',
    label: 'Swipe: Best Story & Case Study Hooks',
    desc: 'Hooks that make people stop and read every slide',
    icon: '📖',
    category: 'Swipe File',
    format: 'lesson',
    topic: 'Highest-performing story and case study carousel hooks and why they work',
    cards: [
      { type: 'cover', eyebrow: 'SWIPE FILE', headline: 'THE STORY HOOKS THAT STOP THE SCROLL', subheadline: 'The opening lines that make people read every single slide. Study the formula.', tag: 'HOOKS' },
      { type: 'lesson', eyebrow: 'HOOK TYPE 1', headline: 'THE SPECIFIC NUMBER HOOK', bullets: ['"$18,000 from one email to 340 people we already knew"', '"We booked 9 jobs in 72 hours without running a single ad"', '"One text message. 12 responses. $18k in revenue."', 'Formula: [specific dollar amount or result] from [surprisingly simple action]'], lesson: 'Specificity makes claims believable. Vague claims are scrolled past. Specific numbers stop thumbs.', lessonLabel: 'WHY IT WORKS', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 2', headline: 'THE CONTRAST HOOK', bullets: ['"In January we had 3 jobs. In March we had 31. Here is what changed."', '"12 months ago I was quoting every job at cost. Today I turned down a $4,000 job because the margin was too low."', '"He was about to close the company. 6 weeks later he hired 2 more people."', 'Formula: [painful before state] → [remarkable after state] — here is what changed'], lesson: 'Contrast creates tension. Tension demands resolution. Resolution requires reading all the slides.', lessonLabel: 'WHY IT WORKS', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 3', headline: 'THE "ALMOST DID NOT" HOOK', bullets: ['"He almost did not send the email. It made him $18k."', '"I almost quit in month 3. The thing that saved the business was embarrassingly simple."', '"She was about to cut her marketing budget in half. She did the opposite. Here is what happened."', 'Formula: [person] almost [gave up or made bad decision]. [Positive outcome followed].'], lesson: 'Near-miss stories create suspense. Everyone has almost given up. They want to know what happened.', lessonLabel: 'WHY IT WORKS', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 4', headline: 'THE "CLIENT SAID NO" HOOK', bullets: ['"The client said no. Three follow-ups later they spent $6,200."', '"She told us she was going with someone cheaper. We sent one more email. She called back."', '"He ghosted us for 6 weeks. Automated follow-up brought him back."', 'Formula: [person] said no/ghosted → [automated persistence] → [unexpected yes]'], lesson: 'These stories validate persistence and sell follow-up systems simultaneously.', lessonLabel: 'WHY IT WORKS', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 5', headline: 'THE CONFESSION HOOK', bullets: ['"For 3 years I thought more leads was the answer. I was completely wrong."', '"I spent $12,000 on ads before I realized my follow-up was the problem."', '"The mistake I made that cost me $40k in lost revenue — and how I found out."', 'Formula: I thought [wrong belief]. I was wrong. Here is what I learned.'], lesson: 'Admitting a mistake signals honesty. Honesty builds trust faster than any claim.', lessonLabel: 'WHY IT WORKS', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'YOUR TURN', headline: 'PICK ONE HOOK AND WRITE YOUR STORY TODAY', body: 'Every business has a $18k-in-72-hours story waiting to be told. Find yours. Use one of these hooks. The engagement will surprise you.', ctaText: 'Follow For More' },
    ],
  },
  {
    id: 'swipe-hot-take-hooks',
    label: 'Swipe: Best Hot Take Hooks',
    desc: 'The opinionated hooks that blow up in comments',
    icon: '🔥',
    category: 'Swipe File',
    format: 'lesson',
    topic: 'Highest-performing hot take and contrarian carousel hooks that drive comments and shares',
    cards: [
      { type: 'cover', eyebrow: 'SWIPE FILE', headline: 'THE HOT TAKE HOOKS THAT BLOW UP THE COMMENTS', subheadline: 'Contrarian angles that create debate. Study the structure. Not just the opinion.', tag: 'HOOKS' },
      { type: 'lesson', eyebrow: 'HOOK TYPE 1', headline: 'THE "STOP DOING" HOOK', bullets: ['"Stop buying leads. You are paying for the privilege of being in a price war."', '"Stop posting every day. You are training an algorithm with content that does not convert."', '"Stop hiring the cheapest person. You are building a revolving door."', 'Formula: Stop [thing they are doing] → [the painful consequence they have not named yet]'], lesson: 'Permission to stop doing something feels like relief. Relief creates engagement.', lessonLabel: 'WHY IT WORKS', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 2', headline: 'THE "YOUR [THING] IS NOT YOUR PROBLEM" HOOK', bullets: ['"Your website is not your problem. Your follow-up is."', '"Your pricing is not your problem. Your positioning is."', '"Your leads are not your problem. Your close rate is."', 'Formula: Your [thing they blame] is not your problem. Your [real cause] is.'], lesson: 'Reframing the problem is more valuable than solving the stated problem. It signals expertise.', lessonLabel: 'WHY IT WORKS', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 3', headline: 'THE UNPOPULAR MATH HOOK', bullets: ['"If you post 5x a week for a year with no offer, you made $0."', '"Your best-reviewed competitor has 200 Google reviews. You have 12. That is not a marketing problem — it is a system problem."', '"3 estimates a day at 20% close is 18 jobs a month. 10 estimates a day at 40% close is 120. Same marketing spend."', 'Formula: [specific math that reveals an uncomfortable truth]'], lesson: 'Numbers cut through opinions. Uncomfortable math is impossible to argue with — which makes it impossible to ignore.', lessonLabel: 'WHY IT WORKS', slideNumber: 3, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HOOK TYPE 4', headline: 'THE "EVERYONE SAYS X, BUT" HOOK', bullets: ['"Everyone says you need more leads. The data says you need better follow-up."', '"Everyone says social media is dead for contractors. Our clients disagree."', '"Everyone says direct mail is old. It is also the only channel where you face zero competition."', 'Formula: Everyone says [conventional wisdom]. [Counter-evidence or counter-claim].'], lesson: 'Contradicting consensus positions you as the informed insider. It creates instant authority.', lessonLabel: 'WHY IT WORKS', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'YOUR TURN', headline: 'WHAT IS THE UNPOPULAR TRUTH IN YOUR INDUSTRY?', body: 'The thing everyone in your market believes that you know is wrong — that is your best hot take. Write it. Post it. Brace for comments.', ctaText: 'Follow For More' },
    ],
  },
];

// Merge all template sources
export const ALL_TEMPLATES = [
  ...CAROUSEL_TEMPLATES,
  ...BOOK_TEMPLATES_2,
  ...SALES_AND_RETENTION_TEMPLATES,
  ...LEAD_GEN_TEMPLATES,
  ...INDUSTRY2_TEMPLATES,
];

export const TEMPLATE_CATEGORIES = [
  'All',
  ...Array.from(new Set(ALL_TEMPLATES.map(t => t.category)))
];

