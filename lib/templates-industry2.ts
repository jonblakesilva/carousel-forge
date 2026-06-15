import { CarouselTemplate } from './templates';

export const INDUSTRY2_TEMPLATES: CarouselTemplate[] = [

  // ══════════════════════════════════════════
  // INDUSTRY: PRESSURE WASHING
  // ══════════════════════════════════════════
  {
    id: 'pressure-washing-scale',
    label: 'Scaling a Pressure Washing Business',
    desc: 'From side hustle to $500k — the marketing system that gets you there',
    icon: '💧',
    category: 'Industry: Pressure Washing',
    format: 'lesson',
    topic: 'How pressure washing companies scale past $200k with the right marketing and pricing strategy',
    cards: [
      { type: 'cover', eyebrow: 'PRESSURE WASHING', headline: 'FROM $0 TO $500K WITH A PRESSURE WASHER AND A SYSTEM', subheadline: 'The marketing moves that separate the $50k side hustles from the $500k operations.', tag: 'BUSINESS GROWTH' },
      { type: 'lesson', eyebrow: 'THE PRICING PROBLEM', headline: 'MOST PRESSURE WASHERS UNDERCHARGE BY 40%', bullets: ['The market average for residential driveway cleaning: $150-$250', 'The market average for house washing: $300-$600', 'Companies charging at the high end are NOT losing jobs — they are filtering to better customers', 'Price increase of 25% with a 20% drop in volume = 0% revenue change but 40% less work'], lesson: 'If you are winning every single estimate, you are too cheap.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE UPSELL', headline: 'BUNDLE SERVICES — STOP SELLING ONE AT A TIME', bullets: ['Driveway + sidewalk + house wash = $600 vs $200 for driveway alone', '"While we\'re here" upsell converts at 35-45% — the equipment is already out', 'Create a "Complete Exterior Package" with a premium price and a per-item discount breakdown', 'Customers who bundle are more profitable, easier to schedule, and refer more'], lesson: 'A bundled job takes 30% more time but generates 3x the revenue of a single service.', lessonLabel: 'THE STRATEGY', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE MARKETING', headline: 'THE 3 CHANNELS THAT FILL A PRESSURE WASHING CALENDAR', bullets: ['Before/after photos posted on Facebook Neighborhood Groups — free, local, high-intent audience', 'Door hangers at every neighboring property after each completed job — 1 new client per 20 hangers', 'Google Business Profile with 50+ reviews — the company that owns this owns the local search'], lesson: 'These three channels require no ad spend. Start all three this week.', lessonLabel: 'THE CHANNELS', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE RETENTION', headline: 'RECURRING ANNUAL CONTRACTS', bullets: ['Offer a 10% discount for customers who pre-book their annual service', 'A customer on a recurring contract is 5x more valuable than a one-time customer', 'Send "It\'s time for your annual clean" reminders 11 months after the last service', '50 recurring contracts at $400/year = $20,000 guaranteed annual revenue with zero marketing cost'], lesson: 'Recurring revenue is the goal. Every job is an opportunity to sell an annual plan.', lessonLabel: 'THE SYSTEM', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '$492k', statLabel: 'Revenue from 2 trucks running 5 days a week at proper pricing with recurring contracts', body: 'That is not a fantasy — it is math. 2 trucks × 5 days × $450 average ticket × 240 working days = $1.08M gross. Minus crew, equipment, fuel, and overhead = $492k. The system is the difference.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT A MARKETING SYSTEM BUILT FOR PRESSURE WASHING COMPANIES?', body: 'Review automation, annual contract campaigns, and neighborhood targeting — done for you.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // INDUSTRY: PEST CONTROL
  // ══════════════════════════════════════════
  {
    id: 'pest-control-recurring',
    label: 'Pest Control Recurring Revenue',
    desc: 'How pest control companies build subscription revenue that grows automatically',
    icon: '🐛',
    category: 'Industry: Pest Control',
    format: 'lesson',
    topic: 'How pest control companies build recurring subscription revenue and reduce customer churn',
    cards: [
      { type: 'cover', eyebrow: 'PEST CONTROL MARKETING', headline: 'THE SUBSCRIPTION MODEL THAT RUNS PEST CONTROL ON AUTOPILOT', subheadline: 'How smart pest control companies turn one-time calls into guaranteed monthly revenue.', tag: 'RECURRING REVENUE' },
      { type: 'stat', eyebrow: 'THE MATH', stat: '4.8x', statLabel: 'More lifetime value from a quarterly plan customer vs a one-time treatment customer', body: 'A one-time treatment: $150. A quarterly plan at $99/quarter: $396/year. Kept for 3 years: $1,188 vs $150. Same acquisition cost. Same truck. 8x the lifetime revenue.', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE PITCH', headline: 'HOW TO SELL THE PLAN ON THE FIRST CALL', bullets: ['"We can do a one-time treatment for $150 — but in 90 days you\'ll likely see them again. OR we can set you up on our quarterly protection plan at $99 — most homeowners find it\'s actually cheaper in the long run and you never have to worry about it again."', '"Which would you prefer — the one-time fix or the plan that keeps them out for good?"', '62% of customers choose the plan when presented this way — without any pressure'], lesson: 'The plan sells itself when you frame it as the smarter choice, not the more expensive one.', lessonLabel: 'THE SCRIPT', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE RETENTION', headline: 'HOW TO KEEP PLAN CUSTOMERS FOR 3+ YEARS', bullets: ['Send a "What we found and what we did" report after every visit — shows ongoing value', 'Proactive communication before every scheduled visit: "Your quarterly treatment is coming up on [date]"', 'Annual review call: "Based on the year we\'ve had — here is what we are seeing and what we recommend for next year"', 'Free re-treatment guarantee: "If you see any activity between visits — we come back at no charge"'], lesson: 'Customers cancel when they forget why they are paying. Your job is to remind them constantly.', lessonLabel: 'THE SYSTEM', slideNumber: 3, totalSlides: 5 },
      { type: 'quick-win', eyebrow: 'THIS WEEK', headline: 'CALL YOUR LAST 20 ONE-TIME CUSTOMERS TODAY', body: '"Hey [name], it\'s [your name] from [company]. We treated your home [X months] ago. Wanted to check in and see how things are looking — and let you know we have a protection plan that would prevent this from coming back. Would you be open to hearing about it?" Expect 25-35% conversion.', lesson: 'Your one-time customers are your easiest recurring revenue. They already know you.', lessonLabel: 'THE QUICK WIN', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT YOUR SUBSCRIPTION ONBOARDING AND RETENTION AUTOMATED?', body: 'Plan sign-up sequences, visit reminders, and renewal campaigns — all automated.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // INDUSTRY: REMODELING / HOME IMPROVEMENT
  // ══════════════════════════════════════════
  {
    id: 'remodeling-high-ticket',
    label: 'Remodeling High-Ticket Sales',
    desc: 'How remodeling companies close $30k+ jobs without competing on price',
    icon: '🏗️',
    category: 'Industry: Remodeling',
    format: 'lesson',
    topic: 'How home remodeling companies close high-ticket jobs without dropping price',
    cards: [
      { type: 'cover', eyebrow: 'REMODELING SALES', headline: 'HOW TO CLOSE $30K+ REMODELING JOBS WITHOUT BEING THE CHEAPEST', subheadline: 'The trust-building system that turns homeowners into buyers — before you ever send an estimate.', tag: 'HIGH-TICKET SALES' },
      { type: 'lesson', eyebrow: 'THE TIMELINE', headline: 'THE REMODELING DECISION TAKES 6-8 WEEKS ON AVERAGE', bullets: ['Week 1-2: Homeowner identifies the problem and starts researching', 'Week 3-4: Gets 2-4 estimates, reviews contractors online', 'Week 5-6: Narrows to 1-2 contractors, checks references, asks more questions', 'Week 7-8: Makes decision based on trust, timeline, and confidence — not just price'], lesson: 'The contractor who stays visible and communicative through all 8 weeks wins. The one who sends the estimate and disappears loses.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE PROCESS', headline: 'THE PRE-ESTIMATE PROCESS THAT POSITIONS YOU AS PREMIUM', bullets: ['Send a "What to expect" email before the in-home appointment with your credentials and a recent project gallery', 'Arrive on time with printed materials — project photos, material samples, your process checklist', 'Spend 60% of the appointment asking questions and listening — not presenting', 'Leave them with a physical folder of your recent work, warranty, and 3 references'], lesson: 'The contractor who shows up most prepared commands the most trust — and the highest price.', lessonLabel: 'THE SYSTEM', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE ESTIMATE', headline: 'YOUR ESTIMATE IS A SALES DOCUMENT — NOT A SPREADSHEET', bullets: ['Break it into line items with descriptions — show exactly what they are paying for and why', 'Include a "Why this costs what it costs" section — proactively address the price', 'Add photos of similar completed work with before/after', 'Include your warranty, timeline, and what to expect during construction'], lesson: 'A detailed estimate is harder to shop against. It signals competence and reduces price pressure.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE FOLLOW-UP', headline: 'THE 6-WEEK FOLLOW-UP SEQUENCE THAT CLOSES', bullets: ['Day 0: Send estimate + follow-up text same day', 'Day 3: Email with project photos similar to their scope', 'Day 7: Text check-in: "Any questions on the estimate?"', 'Day 14: Email with financing options', 'Day 21: Call — ask directly where they are in their decision', 'Day 35: Final email: "Still have your project on hold — would love to make it happen before [season]"'], lesson: 'High-ticket remodeling decisions need high-touch follow-up. Most contractors follow up once. The winner follows up six times.', lessonLabel: 'THE SEQUENCE', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '2.6x', statLabel: 'Higher close rate for remodeling companies with a documented follow-up sequence vs no sequence', body: 'The job is rarely lost to a lower price. It is lost to a competitor who stayed in front of the homeowner longer.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT YOUR REMODELING FOLLOW-UP SEQUENCE AUTOMATED?', body: 'Estimate delivery, follow-up texts, financing emails, and close sequence — all running automatically.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // QUICK WINS — GENERIC (more)
  // ══════════════════════════════════════════
  {
    id: 'quick-wins-generic-leads',
    label: 'Quick Wins: Generate 10 Leads This Week',
    desc: '5 fast moves to generate leads without spending a dollar on ads',
    icon: '⚡',
    category: 'Quick Wins',
    format: 'quick-wins',
    topic: '5 quick wins to generate 10 new leads this week for any service business without paying for ads',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 MOVES TO GET 10 LEADS THIS WEEK WITHOUT PAYING FOR ADS', subheadline: 'No new tools. No new budget. Just smarter use of what you already have.', tag: 'LEAD GENERATION' },
      { type: 'quick-win', eyebrow: 'MOVE #1', headline: 'TEXT EVERY OPEN ESTIMATE FROM THE LAST 60 DAYS', body: '"Hey [name], just following up on the estimate we sent. I know things get busy — is this still something you\'re moving forward with?" Simple, direct, no pressure. Expect 20-30% to respond. Half of those will book. Do it in the next 30 minutes.', lesson: 'Your biggest source of new revenue is the leads you already have and stopped following up with.', lessonLabel: 'DO THIS NOW', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #2', headline: 'POST A BEFORE/AFTER TO YOUR TOP 3 LOCAL FACEBOOK GROUPS', body: 'Find the 3 largest neighborhood or community Facebook groups in your service area. Post your best recent before/after photo with: "We just finished this [job] in [neighborhood] — if anyone needs [service] done, happy to take a look." Include your number and a photo. Expect 3-8 DMs per post.', lesson: 'Local Facebook groups are the highest-intent free audience in your market.', lessonLabel: 'DO THIS TODAY', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #3', headline: 'CALL EVERY CUSTOMER WHO REFERRED SOMEONE IN THE LAST YEAR', body: '"Hey [name], I was just thinking about you — you referred [person] to us last year and we really appreciate it. We\'re running a referral program right now — if you send anyone our way and they book, you get [reward]. Anyone come to mind?" Referrers refer again when reminded and rewarded.', lesson: 'Your best salesperson is a happy past customer. Call them.', lessonLabel: 'DO THIS TODAY', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #4', headline: 'SEND A REACTIVATION EMAIL TO PAST CUSTOMERS (12+ MONTHS SILENT)', body: 'Subject: "It\'s been a while — [first name]" \n\nBody: "Hey [name] — it\'s been over a year since we [did their service]. Just wanted to reach out and see how everything is holding up and if there\'s anything we can help with. We have some openings in [area] this week if the timing is right."', lesson: 'Reactivation campaigns to past customers generate $5-10 for every $1 spent.', lessonLabel: 'DO THIS TODAY', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #5', headline: 'ASK YOUR LAST 5 COMPLETED CUSTOMERS FOR A REFERRAL RIGHT NOW', body: 'Text them: "Hey [name], really glad we could help with [job]. Quick question — do you know anyone who might need [service]? We\'re taking on a few new clients this month and I\'d love to take care of your network the same way we took care of you." No discount needed. Just ask.', lesson: 'The number one reason customers do not refer is that nobody asked them.', lessonLabel: 'DO THIS IN 10 MINUTES', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'SCALE IT', headline: 'WANT ALL 5 OF THESE AUTOMATED SO THEY RUN EVERY MONTH?', body: 'Reactivation campaigns, referral requests, and estimate follow-up — all automated, all running while you work.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'quick-wins-close-rate',
    label: 'Quick Wins: Double Your Close Rate',
    desc: '5 tactics that double close rate on existing lead volume',
    icon: '📈',
    category: 'Quick Wins',
    format: 'quick-wins',
    topic: '5 quick tactics to double close rate on the same lead volume for any service business',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 TACTICS THAT DOUBLE YOUR CLOSE RATE ON THE SAME LEADS', subheadline: 'You do not need more leads. You need to close more of the ones you already have.', tag: 'SALES SYSTEM' },
      { type: 'quick-win', eyebrow: 'TACTIC #1', headline: 'RESPOND TO EVERY NEW LEAD WITHIN 5 MINUTES', body: 'Set up a missed-call text-back. When a new lead submits a form or calls: text within 90 seconds automatically. Companies that respond in 5 minutes close 9x more leads than companies that respond in an hour. This alone can double your close rate overnight.', lesson: 'Speed of response is the #1 variable in close rate. Automate it.', lessonLabel: 'THE IMPACT', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'TACTIC #2', headline: 'SEND YOUR ESTIMATE WITH A VIDEO WALKTHROUGH', body: 'Record a 60-second Loom video walking through the estimate. "Hey [name], [your name] here — just wanted to walk you through the proposal I sent..." Explain the key line items, answer the obvious questions, and end with your direct number. Video estimates close at 2.4x the rate of text-only estimates.', lesson: 'A face and a voice build more trust than a PDF ever will.', lessonLabel: 'THE TACTIC', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'TACTIC #3', headline: 'ADD 3 RECENT REVIEWS TO EVERY ESTIMATE EMAIL', body: 'At the bottom of every estimate email: "Here is what 3 of your neighbors said about working with us:" + 3 Google review screenshots or quotes. Reviews at the point of decision reduce price sensitivity by 30% and increase close rate by 25%.', lesson: 'Social proof is most powerful at the exact moment someone is deciding.', lessonLabel: 'THE TACTIC', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'TACTIC #4', headline: 'FOLLOW UP 7 TIMES — NOT 1', body: 'Most contractors follow up once and stop. The data says most decisions are made on touch 4-7. Build this sequence: Day 0 estimate → Day 1 text → Day 3 email with project photos → Day 7 text check-in → Day 14 financing option email → Day 21 call → Day 30 final offer. Set it up once. Let it run forever.', lesson: 'The company that follows up most wins. Almost without exception.', lessonLabel: 'THE SYSTEM', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'TACTIC #5', headline: 'ASK THE COMMITMENT QUESTION AT EVERY ESTIMATE', body: '"On a scale of 1-10, how important is it that you solve this in the next 30 days?" If they say 7+: "What would move this to a 10 for you?" If they say under 7: "That makes sense — what would need to change for the timing to be right?" This question surfaces the real objection before it becomes a silent no.', lesson: 'You cannot handle an objection you do not know about. Ask for it.', lessonLabel: 'THE MOVE', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT THE FULL FOLLOW-UP SEQUENCE AND AUTO-RESPONSE BUILT FOR YOU?', body: 'Speed-to-lead automation, 7-touch follow-up sequence, and estimate confirmation system — all done in 72 hours.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'quick-wins-retention',
    label: 'Quick Wins: Keep Clients Longer',
    desc: '5 fast moves that increase retention and reduce churn this week',
    icon: '🔒',
    category: 'Quick Wins',
    format: 'quick-wins',
    topic: '5 quick wins to increase client retention and reduce churn for service businesses',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 FAST MOVES THAT KEEP CLIENTS LONGER', subheadline: 'Acquiring a new client costs 5x more than keeping one. Here is how to keep them.', tag: 'RETENTION' },
      { type: 'quick-win', eyebrow: 'MOVE #1', headline: 'SEND A RESULTS RECAP TO EVERY CLIENT THIS WEEK', body: 'Email each active client with: what you have done for them, what it has achieved, and what you are doing next. Even one paragraph. Clients leave when they feel like you stopped caring. A results email is the easiest way to remind them why they are paying you.', lesson: 'Clients cancel when they forget the value. Remind them constantly.', lessonLabel: 'DO THIS TODAY', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #2', headline: 'SCHEDULE A 15-MINUTE CHECK-IN CALL WITH EVERY CLIENT', body: 'Text each client: "I want to make sure we\'re on the same page on everything — do you have 15 minutes this week for a quick check-in?" No agenda. Just listen. The issues they raise are your early warning system. The ones you do not call churn silently.', lesson: 'The check-in call finds the churn risk before they cancel.', lessonLabel: 'DO THIS WEEK', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #3', headline: 'IDENTIFY YOUR 3 CLIENTS MOST LIKELY TO CHURN', body: 'Which 3 clients have gone quiet, not responded to your last message, or mentioned concerns? Write their names down. Call each one today. Ask directly: "I want to make sure we\'re delivering the value you expected — what\'s your honest take on how it\'s going?" Most at-risk clients will tell you exactly what they need if you ask before they decide to leave.', lesson: 'Proactive outreach before they cancel is always more effective than win-back after.', lessonLabel: 'DO THIS NOW', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #4', headline: 'ADD AN UNEXPECTED BONUS THIS MONTH', body: 'Pick one thing you can do for each client that is outside the scope of your agreement. A bonus audit. A free piece of content. A resource they did not ask for. Send it with: "This is not in your agreement — just thought it would be useful for you." Surprise value creates loyalty that no contract clause can.', lesson: 'Clients who feel they are getting more than they paid for never leave voluntarily.', lessonLabel: 'THIS WEEK', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'MOVE #5', headline: 'ASK FOR FEEDBACK BEFORE THE RENEWAL DATE', body: 'Two months before every renewal: "We\'re coming up on [date] — I want to make sure the next year is even better than the last. What\'s one thing we could do more of, and one thing we could do differently?" This conversation prevents churn and creates the roadmap for the upsell.', lesson: 'The feedback conversation before renewal closes more renewals than any discount ever will.', lessonLabel: 'BEFORE RENEWAL', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'SYSTEMIZE IT', headline: 'WANT YOUR RETENTION SYSTEM BUILT AND AUTOMATED?', body: 'QBR scheduling, check-in automations, and renewal sequences — running in the background while you focus on the work.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // QUICK WINS — TREE SERVICE SPECIFIC
  // ══════════════════════════════════════════
  {
    id: 'quick-wins-tree-service',
    label: 'Quick Wins: Tree Service Company',
    desc: '5 fast moves to book more tree jobs this week',
    icon: '🌲',
    category: 'Industry: Tree & Lawn',
    format: 'quick-wins',
    topic: '5 quick wins for tree service companies to generate leads and book more jobs this week',
    cards: [
      { type: 'cover', eyebrow: 'QUICK WINS', headline: '5 QUICK WINS FOR TREE SERVICE COMPANIES THIS WEEK', subheadline: 'Zero new ad spend. Just smarter moves with what you already have.', tag: 'TREE SERVICE' },
      { type: 'quick-win', eyebrow: 'WIN #1', headline: 'TEXT EVERY ESTIMATE FROM THE LAST 45 DAYS', body: '"Hey [name], just following up on the tree estimate we sent. Still have that opening in your area — wanted to check if you were still thinking about it." Simple, no pressure. Expect 25-35% response rate. Most will be ready to book — they just needed a nudge.', lesson: 'You do not need new leads. Close the ones sitting in your estimate folder.', lessonLabel: 'DO THIS NOW', slideNumber: 1, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #2', headline: 'OFFER STORM CLEANUP BEFORE THE NEXT STORM HITS', body: 'Check your local weather forecast. If there is a storm in the next 7-10 days, send this to all past clients: "We\'re preparing for the upcoming weather — wanted to make sure you\'re on our priority list for cleanup if anything comes down on your property. Reply YES and I\'ll add you now." 30-40% say yes and that becomes 10-20 booked jobs from one text.', lesson: 'The company that books storm cleanup before the storm works non-stop while competitors scramble.', lessonLabel: 'DO THIS TODAY', slideNumber: 2, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #3', headline: 'LEAVE A DOOR HANGER AT EVERY NEIGHBORING PROPERTY AFTER A JOB', body: '"We just took care of the trees next door. While our crew is in the neighborhood, we have a couple of openings this week. Here is our number." Leave at the 6 nearest homes on both sides of the street. Cost: $0.25. Conversion: 1 job per 15 hangers on average. That is $50-200 in new revenue for every 25 cents you spend.', lesson: 'You already have a crew and a truck on site. Use the proof.', lessonLabel: 'AFTER EVERY JOB', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #4', headline: 'POST YOUR CREW AT WORK ON NEXTDOOR TODAY', body: 'Take a photo or video of your crew working on an active job. Post it to Nextdoor: "Our crew is in [neighborhood] today taking care of some large oak removal. If any neighbors need tree work — reply here or call [number]. We can usually fit in additional stops same week." This generates 3-8 inquiries per post in most neighborhoods.', lesson: 'Nextdoor is the highest-converting social platform for local tree companies. Use it every single job.', lessonLabel: 'DO THIS TODAY', slideNumber: 4, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'WIN #5', headline: 'REACTIVATE EVERY CLIENT WHO HAS NOT CALLED IN 18+ MONTHS', body: '"Hey [name], it\'s been a while — we did some work on your property back in [year]. Just wanted to check in and see how your trees are looking. Trees grow fast — depending on what we did last time, you might be due for a trim or inspection. Want us to take a quick look?" 20-30% will book.', lesson: 'Every tree on every property you have ever touched will eventually need service again. Your past client list is your best prospecting list.', lessonLabel: 'DO THIS WEEK', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'AUTOMATE ALL 5', headline: 'WANT THESE CAMPAIGNS RUNNING AUTOMATICALLY?', body: 'Estimate follow-up, reactivation, storm prep alerts, and post-job neighbor campaigns — all automated.', ctaText: 'Book a Free Demo' },
    ],
  },
];
