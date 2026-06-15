import { CarouselTemplate } from './templates';

export const LEAD_GEN_TEMPLATES: CarouselTemplate[] = [

  // ══════════════════════════════════════════
  // DIRECT MAIL
  // ══════════════════════════════════════════
  {
    id: 'direct-mail-system',
    label: 'Direct Mail That Actually Works',
    desc: 'Why most direct mail fails and the system that gets 8-15% response',
    icon: '📬',
    category: 'Lead Gen: Direct Mail',
    format: 'lesson',
    topic: 'How to run direct mail campaigns that generate leads for local service businesses',
    cards: [
      { type: 'cover', eyebrow: 'LEAD GENERATION', headline: 'DIRECT MAIL IS NOT DEAD. YOUR STRATEGY IS.', subheadline: 'Why 90% of direct mail campaigns fail — and what the other 10% do differently.', tag: 'DIRECT MAIL' },
      { type: 'myth', eyebrow: 'THE TRUTH', myth: 'Direct mail does not work anymore — everyone ignores it', truth: 'Direct mail response rates are at their highest in 10 years because digital noise has made physical mail stand out again', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'WHY MOST FAILS', headline: 'THE 4 REASONS DIRECT MAIL CAMPAIGNS FLOP', bullets: ['Wrong list — mailing to everyone instead of your exact ideal customer profile', 'Wrong offer — "Call us for a free estimate" is not an offer', 'One send — one touchpoint generates 1-2% response. Three sends generates 8-15%.', 'No follow-up — the mail lands, the phone rings once, no one answers, no callback'], lesson: 'Direct mail is a system, not a single send. Most people only do step one.', lessonLabel: 'THE PROBLEM', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE LIST', headline: 'YOUR LIST IS 80% OF YOUR RESULT', bullets: ['Homeowners with 10+ year old roofs in zip codes where you already work', 'Customers of your competitors (data available through USPS EDDM or list brokers)', 'Neighbors of your last 50 completed jobs within 0.5 miles', 'Homeowners who just pulled a permit in your county — they are actively spending money'], lesson: 'A mediocre mailer to a perfect list beats a perfect mailer to a bad list every time.', lessonLabel: 'THE FOUNDATION', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE OFFER', headline: 'THE DIRECT MAIL OFFER THAT GETS CALLED', bullets: ['Free audit or inspection with a specific deliverable: "Free 12-point lawn health assessment — $149 value"', 'Neighbor discount: "We\'re working in your neighborhood this week — get 15% off any service booked this month"', 'Guarantee offer: "If we don\'t improve your [specific metric] in 30 days — full refund"', 'Limited availability: "We have 8 spots open in your zip code this month — first come, first served"'], lesson: 'The offer must be specific, time-limited, and valuable enough to pick up the phone.', lessonLabel: 'THE FORMULA', slideNumber: 4, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE SYSTEM', headline: 'THE 3-TOUCH DIRECT MAIL SEQUENCE', checks: ['Touch 1 — Week 0: Oversized postcard (6x9 or larger) with strong offer and deadline', 'Touch 2 — Week 2: Letter in envelope (personal feel, handwritten name if possible)', 'Touch 3 — Week 4: Final notice card — "This is your last chance to claim [offer]"', 'Follow-up call to non-respondents on your list 3 days after each send'], slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'RUN YOUR CAMPAIGN', headline: 'WANT YOUR DIRECT MAIL CAMPAIGN BUILT AND AUTOMATED?', body: 'We build full direct mail sequences paired with digital follow-up — so when they get the mail, we\'re already following up digitally before they can forget.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'direct-mail-roofing',
    label: 'Roofing Direct Mail Playbook',
    desc: 'The exact direct mail strategy for storm season and year-round roofing leads',
    icon: '🏠',
    category: 'Lead Gen: Direct Mail',
    format: 'checklist',
    topic: 'Direct mail strategy for roofing companies — storm season campaigns and year-round neighborhood targeting',
    cards: [
      { type: 'cover', eyebrow: 'ROOFING LEAD GEN', headline: 'THE ROOFING DIRECT MAIL PLAYBOOK', subheadline: 'Storm season, neighborhood targeting, and year-round mail campaigns that fill your pipeline.', tag: 'DIRECT MAIL' },
      { type: 'lesson', eyebrow: 'STORM SEASON', headline: 'THE 72-HOUR STORM RESPONSE MAIL CAMPAIGN', bullets: ['Within 72 hours of a hail or wind event — mail every address in the affected zip codes', 'USPS EDDM (Every Door Direct Mail) delivers to entire zip codes for under $0.20 per piece', 'Message: "Your area experienced [event] on [date]. Your roof may have hidden damage. We\'re in the area offering free inspections this week."', 'Include QR code to online booking — most calls come from people who do not want to talk first'], lesson: 'The roofer who arrives first in the homeowner\'s mailbox after a storm gets the most appointments.', lessonLabel: 'THE STRATEGY', slideNumber: 1, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'NEIGHBORHOOD CAMPAIGN', headline: 'THE COMPLETED JOB RADIUS CAMPAIGN', checks: ['Within 1 day of every completed job — mail 100 surrounding homes', 'Message: "We just replaced a roof on [Street Name]. We\'re in your neighborhood this week and have availability for free inspections."', 'Include a photo of the completed job and a before/after if possible', 'Offer: neighbors of current jobs get priority scheduling and a $200 referral discount'], slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE LIST', headline: 'WHO TO MAIL YEAR-ROUND', bullets: ['Homes built 15+ years ago in your service area — roofs are reaching end of life', 'Recent permit pulls in the county — homeowners already in spending mode', 'Homes with recent real estate sales — new homeowners often replace older roofs immediately', 'Neighborhoods where competitors have active yard signs — intercept their audience'], lesson: 'Targeted list + right timing = the most cost-effective leads in roofing.', lessonLabel: 'THE LIST STRATEGY', slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE NUMBERS', stat: '2.9%', statLabel: 'Average response rate for targeted roofing direct mail — compared to 0.3% for digital banner ads', body: 'On a 500-piece mailing to the right list, that is 14-15 phone calls. At a $8,000 average job and 30% close rate — that is 4-5 jobs from one $150 mail campaign.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'RUN THE CAMPAIGN', headline: 'WANT YOUR ROOFING MAIL CAMPAIGN PAIRED WITH DIGITAL FOLLOW-UP?', body: 'When they get the mail, a digital ad follows them online the same week. Both channels reinforce the same offer. Close rate doubles.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // DOOR KNOCKING & CANVASSING
  // ══════════════════════════════════════════
  {
    id: 'door-knocking-system',
    label: 'Door Knocking That Actually Books Jobs',
    desc: 'The D2D system that turns 8 hours of knocking into 3-5 booked appointments',
    icon: '🚪',
    category: 'Lead Gen: Door-to-Door',
    format: 'lesson',
    topic: 'Door knocking and canvassing system for home service companies that books consistent appointments',
    cards: [
      { type: 'cover', eyebrow: 'LEAD GENERATION', headline: 'THE DOOR KNOCKING SYSTEM THAT FILLS YOUR CALENDAR', subheadline: '8 hours of smart canvassing should produce 3-5 booked appointments. Here is exactly how.', tag: 'D2D STRATEGY' },
      { type: 'lesson', eyebrow: 'THE MINDSET', headline: 'DOOR KNOCKING IS NOT SELLING — IT IS IDENTIFYING', bullets: ['Your goal at the door is NOT to close a sale — it is to identify interested homeowners', 'A "not interested" is a gift — it saves you time and moves you to the next door faster', 'You are looking for the 3 out of 10 who have the problem you solve — not trying to convince the other 7'], lesson: 'The D2D rep who is not bothered by rejection knocks 3x more doors and books 3x more appointments.', lessonLabel: 'THE FRAME', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE OPENER', headline: 'THE 10-SECOND DOOR OPENER THAT WORKS', bullets: ['"Hey, I\'m [name] with [company]. We just finished a job on [street name] — I\'m walking the neighborhood to see if anyone has any [roofing/tree/lawn] concerns before we pack up."', 'This works because: you are in the area (social proof), you are walking away (not desperate), and you are asking about concerns (not selling)', 'Do NOT use: "Hi, how are you today?" — it signals sales immediately'], lesson: 'The opener that sounds like you are leaving gets more people to invite you to stay.', lessonLabel: 'THE SCRIPT', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE QUALIFICATION', headline: '3 QUESTIONS THAT QUALIFY IN 60 SECONDS', bullets: ['"When did you last have your [roof/trees/lawn] looked at?" — surfaces recency and awareness', '"Has anything been bothering you about it or is it just maintenance?" — identifies urgency', '"Would you be open to a free [inspection/estimate/consultation] while we\'re here this week?" — soft ask with low commitment'], lesson: 'Three questions tell you everything you need to know before spending another 20 minutes on this door.', lessonLabel: 'THE SYSTEM', slideNumber: 3, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE ROUTING', headline: 'HOW TO ROUTE FOR MAXIMUM EFFICIENCY', checks: ['Work outward from a completed job — neighbors are pre-sold by seeing your crew work', 'Target your ideal density: 50-100 homes per half-day route in tight geographic clusters', 'Skip homes with no cars in the driveway — come back on the return loop', 'Leave a door hanger at every no-answer door — 5-10% call back within a week'], slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '3-5', statLabel: 'Booked appointments per 8-hour canvassing day using this system', body: 'At a 30% close rate and $3,000 average job — one full day of smart canvassing produces $2,700-$4,500 in revenue. Most reps doing it wrong produce 0-1 bookings in the same time.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'SCALE IT', headline: 'PAIR D2D WITH DIGITAL FOLLOW-UP FOR 2X THE CLOSE RATE', body: 'When a homeowner gives you their number at the door — your CRM should auto-send a text confirmation and follow-up sequence before you get back to your truck.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // DOOR HANGERS & SIGNAGE
  // ══════════════════════════════════════════
  {
    id: 'door-hanger-strategy',
    label: 'Door Hanger Strategy That Gets Calls',
    desc: 'How to design and distribute door hangers with a 3-5% response rate',
    icon: '🏷️',
    category: 'Lead Gen: Door Hangers',
    format: 'lesson',
    topic: 'Door hanger lead generation strategy for local service businesses — design and distribution',
    cards: [
      { type: 'cover', eyebrow: 'LEAD GENERATION', headline: 'THE DOOR HANGER STRATEGY THAT GETS 3-5% RESPONSE', subheadline: 'Most door hangers get thrown away. Here is what makes the ones that get called different.', tag: 'LOCAL MARKETING' },
      { type: 'lesson', eyebrow: 'DESIGN PRINCIPLES', headline: 'WHAT MAKES A DOOR HANGER GET CALLED', bullets: ['Headline first — the homeowner decides in 2 seconds. "We\'re working in your neighborhood this week" beats your logo.', 'One offer only — one phone number, one QR code, one thing to do', 'Specific scarcity — "8 spots remaining in your zip code this month" works. "Call today!" does not.', 'Before/after photo — visual proof performs 40% better than text-only hangers'], lesson: 'A door hanger is a 2-second decision. Design for the 2-second version, not the read-every-word version.', lessonLabel: 'THE RULE', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'DISTRIBUTION', headline: 'WHERE AND WHEN TO DISTRIBUTE FOR MAXIMUM RESPONSE', bullets: ['Saturday morning 9-11am — homeowners are home, relaxed, and thinking about their property', 'Within 0.25 miles of every active or completed job — your crew as social proof', 'After a weather event — tree damage, lawn stress, or roofing concerns are top of mind', 'Streets where competitor yard signs are visible — intercept their audience before they book'], lesson: 'Distribution timing and targeting matter more than design. Right person, right moment, right offer.', lessonLabel: 'THE STRATEGY', slideNumber: 2, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE NUMBERS', stat: '$0.12', statLabel: 'Average cost per door hanger — one call from 25 hangers = $3 cost per lead', body: 'At a 4% response rate on 500 hangers ($60 total cost) — that is 20 calls. At 30% close and $2,500 average job — that is $15,000 in revenue from a $60 investment.', slideNumber: 3, totalSlides: 5 },
      { type: 'quick-win', eyebrow: 'DO THIS NOW', headline: 'LEAVE 10 HANGERS AT EVERY COMPLETED JOB — TODAY', body: 'You already have a truck, a crew, and proof of work on that street. Before leaving any job: split up and hit the 10 nearest homes. Hand them the hanger and say "We just finished next door — wanted to let you know we\'re available this week if you need anything."', lesson: 'This single habit adds 2-4 additional estimates per week from zero additional cost.', lessonLabel: 'THE QUICK WIN', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'PAIR WITH DIGITAL', headline: 'ADD A QR CODE TO YOUR HANGER THAT TRIGGERS AN AUTOMATED SEQUENCE', body: 'They scan, they opt-in, and they immediately get a welcome text + email. Before they put the hanger down, you\'re already in their inbox.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'yard-signs-highway-signs',
    label: 'Yard Signs & Highway Signs Strategy',
    desc: 'How to use physical signage as a lead generation system',
    icon: '🪧',
    category: 'Lead Gen: Signage',
    format: 'lesson',
    topic: 'Yard signs and highway signs lead generation strategy for local service companies',
    cards: [
      { type: 'cover', eyebrow: 'LOCAL MARKETING', headline: 'YOUR SIGNS ARE YOUR CHEAPEST SALESPERSON', subheadline: 'Yard signs and highway signs working 24/7 with zero salary. Here is how to make them generate leads instead of just impressions.', tag: 'SIGNAGE STRATEGY' },
      { type: 'lesson', eyebrow: 'YARD SIGNS', headline: 'THE YARD SIGN THAT GENERATES CALLS VS THE ONE THAT DOESN\'T', bullets: ['Add a QR code that goes directly to your Google review page or booking form — not your homepage', 'Include one specific offer: "Neighbor discount: 10% off if you mention this sign"', 'Ask permission to leave signs for 2 weeks after every job — most homeowners say yes when asked directly', 'Map your sign placements — clusters of 5+ signs in one neighborhood create a market domination effect'], lesson: 'A yard sign without a response mechanism is a billboard. A yard sign with a QR code is a lead generator.', lessonLabel: 'THE DIFFERENCE', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'HIGHWAY SIGNS', headline: 'HOW TO USE BANDIT SIGNS LEGALLY AND EFFECTIVELY', bullets: ['Check local ordinances — many areas allow signs on private property with permission; some restrict public right-of-way', 'Best placement: high-traffic intersections near neighborhoods in your target area', 'Message must be readable in 2 seconds at 40mph: company name, one service, one phone number', 'Rotate messages seasonally: "Storm damage? Free inspection" beats generic service ads in spring'], lesson: 'Highway signs work as frequency tools — people see them 5-10 times before they call. Volume and placement density matter.', lessonLabel: 'THE STRATEGY', slideNumber: 2, totalSlides: 5 },
      { type: 'checklist', eyebrow: 'THE SYSTEM', headline: 'THE SIGN STRATEGY THAT DOMINATES A MARKET', checks: ['Leave yard signs at 100% of completed jobs for 2 weeks minimum', 'Cluster highway signs at 3-5 key intersections in your core market', 'Add QR codes linking to review page or instant booking form', 'Refresh signs every 60-90 days — faded signs signal neglect, not quality', 'A-frame signs at your vehicle and equipment when parked in neighborhoods during active jobs'], slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '8-12%', statLabel: 'Of inbound calls for local service companies originate from yard sign exposure', body: 'A company with 50 yard signs consistently placed in their core market area generates 15-20 additional inbound calls per month. At $20/sign, that\'s a $1,000 asset generating $40k+ in revenue annually.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WHEN THEY CALL FROM A SIGN — IS YOUR FOLLOW-UP READY?', body: 'The sign generates the call. The system closes the deal. Miss the follow-up and the sign was wasted.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // SOCIAL MEDIA LEAD GEN
  // ══════════════════════════════════════════
  {
    id: 'social-media-lead-gen',
    label: 'Social Media Lead Gen System',
    desc: 'How to turn followers into booked appointments without paid ads',
    icon: '📱',
    category: 'Lead Gen: Social Media',
    format: 'lesson',
    topic: 'How to generate leads from social media organically for local service businesses',
    cards: [
      { type: 'cover', eyebrow: 'SOCIAL MEDIA LEAD GEN', headline: 'TURN FOLLOWERS INTO BOOKED APPOINTMENTS', subheadline: 'The organic social media system that generates consistent leads without ad spend.', tag: 'NO PAID ADS' },
      { type: 'lesson', eyebrow: 'THE STRATEGY', headline: 'THE CONTENT THAT GENERATES LEADS VS THE CONTENT THAT GETS LIKES', bullets: ['Lead-generating content: problem identification, before/after, checklists, case studies with specific results', 'Vanity content: generic tips, inspirational quotes, unboxing of new equipment', 'Lead-gen CTA in every post: "Comment [keyword] and I\'ll DM you the details"', 'Story polls daily: "Does your [roof/lawn/trees] need attention? Yes / Not sure / Just had it done"'], lesson: 'Every piece of content should have a path that moves someone from viewer to lead. Likes without a next step are entertainment.', lessonLabel: 'THE PRINCIPLE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE COMMENT TRIGGER', headline: 'THE KEYWORD DM AUTOMATION THAT FILLS YOUR CALENDAR', bullets: ['Post: "Comment AUDIT and I\'ll DM you our free [service] assessment checklist"', 'Tool: ManyChat or GoHighLevel workflow triggers DM automatically when comment keyword detected', 'DM sequence: value delivery → qualify → booking link', 'Average conversion: 15-25% of comment → DM → booked call'], lesson: 'Keyword triggers turn your comments section into an automated lead capture system.', lessonLabel: 'THE SYSTEM', slideNumber: 2, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE CONTENT CALENDAR', headline: 'THE 5-POST WEEKLY FRAMEWORK THAT DRIVES LEADS', checks: ['Monday: Educational carousel (teach something specific to your niche)', 'Tuesday: Before/after transformation (visual proof)', 'Wednesday: Story or case study (build connection)', 'Thursday: FAQ or myth-buster (handle objections proactively)', 'Friday: CTA post with specific offer or limited availability'], slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LOCAL TARGETING', headline: 'HOW TO REACH LOCAL HOMEOWNERS ORGANICALLY', bullets: ['Tag your location in every post and story', 'Use hyper-local hashtags: #[CityName]Roofing, #[CountyName]LawnCare', 'Comment on local community Facebook Groups — answer questions, do not spam', 'Partner with complementary local businesses for cross-promotion'], lesson: 'Local organic reach requires local signals. Every post should include location data.', lessonLabel: 'THE TACTIC', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE BENCHMARK', stat: '3-4x', statLabel: 'More leads per follower from accounts that post consistently vs inconsistently', body: 'Consistency matters more than volume. 5 posts per week for 6 months builds compounding reach. Most contractors post 3 times, get frustrated, stop, and repeat the cycle forever.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'AUTOMATE IT', headline: 'WANT YOUR SOCIAL MEDIA LEAD GEN RUNNING AUTOMATICALLY?', body: 'Keyword triggers, automated DM sequences, and lead capture connected to your CRM — all done for you.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // COLD OUTREACH
  // ══════════════════════════════════════════
  {
    id: 'cold-outreach-system',
    label: 'Cold Outreach That Gets Responses',
    desc: 'Email, DM, and phone outreach that books meetings without being annoying',
    icon: '📤',
    category: 'Lead Gen: Outreach',
    format: 'lesson',
    topic: 'Cold outreach system for B2B and local service businesses — email, social DMs, and phone',
    cards: [
      { type: 'cover', eyebrow: 'LEAD GENERATION', headline: 'COLD OUTREACH THAT GETS RESPONSES', subheadline: 'Most cold outreach is deleted in under 2 seconds. Here is what the other kind looks like.', tag: 'OUTREACH SYSTEM' },
      { type: 'myth', eyebrow: 'THE TRUTH', myth: 'Cold outreach does not work anymore — people ignore everything', truth: 'Generic cold outreach does not work. Personalized, specific, value-first outreach works better than ever because the bar is so low', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE COLD EMAIL', headline: 'THE COLD EMAIL THAT GETS OPENED AND REPLIED TO', bullets: ['Subject: "[Their city] [their trade] — quick question" — specific and non-salesy', 'Line 1: One specific observation about their business — reviews, missing thing on their site, something they posted', 'Line 2: Connect it to a pain: "That usually means [specific problem they have]"', 'Line 3: One line on how you solve it + one question: "Would it be worth 15 minutes to see if this applies to you?"'], lesson: 'The email that asks one question and requires only one word to reply always outperforms the email that explains everything.', lessonLabel: 'THE FORMULA', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE DM', headline: 'THE SOCIAL DM THAT BOOKS CALLS FROM STRANGERS', bullets: ['Comment on their content first — 3 comments before the first DM', 'DM: "Saw your post about [specific thing] — we just helped a [similar business] with that exact issue. Would it be weird if I shared what worked?"', 'When they say yes — that is the meeting', 'Never pitch in the first DM. Trigger curiosity, not defensiveness.'], lesson: 'The DM that asks for nothing except permission to share always gets more responses than the one that asks for a call.', lessonLabel: 'THE SEQUENCE', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE PHONE', headline: 'THE 30-SECOND COLD CALL THAT DOES NOT GET HUNG UP ON', bullets: ['"Hey [name], this is [your name] — not a great time is it?" (they almost always say "no go ahead")', '"I\'ll be quick — I work with [type of company] in [city] and I noticed [specific observation]. Does that ring true for your business?"', 'If yes: "Would you be open to a quick conversation about it this week?"', 'If no: "Fair enough — who do you know in [niche] who might benefit from talking?"'], lesson: 'The call that acknowledges it is unexpected and offers to leave gets more conversations than the one that dives straight into a pitch.', lessonLabel: 'THE SCRIPT', slideNumber: 4, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE SEQUENCE', headline: 'THE MULTI-TOUCH OUTREACH SEQUENCE', checks: ['Day 1: Email — personalized, one question, short', 'Day 3: LinkedIn/Instagram connection request — no message yet', 'Day 5: DM — comment on their content, not a pitch', 'Day 8: Email follow-up — "just bumping this up" + new value add', 'Day 12: Phone call — 30-second version above', 'Day 15: Final email — "Closing this out — but thought this article might be useful: [link]"'], slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'AUTOMATE THE SEQUENCE', headline: 'WANT YOUR OUTREACH SEQUENCE BUILT AND RUNNING AUTOMATICALLY?', body: 'Every new prospect in your target list gets the full multi-touch sequence on autopilot. No manual tracking. No leads falling through.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // PAID ADS
  // ══════════════════════════════════════════
  {
    id: 'facebook-ads-service-business',
    label: 'Facebook Ads for Service Businesses',
    desc: 'The exact ad setup that generates booked estimates — not just clicks',
    icon: '📊',
    category: 'Lead Gen: Paid Ads',
    format: 'lesson',
    topic: 'Facebook and Instagram ad strategy for local service businesses that generates booked appointments',
    cards: [
      { type: 'cover', eyebrow: 'PAID ADS', headline: 'THE FACEBOOK AD SETUP THAT BOOKS ESTIMATES — NOT JUST CLICKS', subheadline: 'Most service business ads generate clicks. This setup generates booked appointments.', tag: 'META ADS' },
      { type: 'lesson', eyebrow: 'THE MISTAKE', headline: 'WHY MOST SERVICE BUSINESS ADS FAIL', bullets: ['Sending ad traffic to your homepage — no dedicated offer, no tracking, no follow-up', 'Running brand awareness ads when you need demand generation ads', 'Judging success by clicks and impressions instead of cost per booked appointment', 'Stopping after 2 weeks because "Facebook ads don\'t work for us"'], lesson: 'Ads do not fail. Funnels fail. The ad is only the first step in a system.', lessonLabel: 'THE ROOT CAUSE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE FUNNEL', headline: 'THE AD → LANDING PAGE → CRM SEQUENCE THAT CONVERTS', bullets: ['Ad: specific problem + specific offer + specific next step ("Free roof inspection — 3 spots left this week")', 'Landing page: one headline, one offer, one form — nothing else', 'Immediate follow-up: text within 90 seconds of form submit (automated)', '5-touch nurture sequence for leads that do not book immediately'], lesson: 'The ad gets the click. The landing page captures the lead. The CRM closes the deal.', lessonLabel: 'THE SYSTEM', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE TARGETING', headline: 'WHO TO TARGET IN YOUR LOCAL MARKET', bullets: ['Homeowners 35-65 within 15 miles of your service area — demographic baseline', 'Custom audience: upload past customer list → find lookalikes', 'Retargeting: anyone who visited your website in last 30 days', 'Interest targeting: home improvement, homeownership, DIY — narrow to homeowners only'], lesson: 'Start with your past customer lookalike audience. It will always outperform cold interest targeting.', lessonLabel: 'THE TARGETING', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE CREATIVE', headline: 'THE AD CREATIVE THAT OUTPERFORMS EVERYTHING ELSE', bullets: ['Before/after video — 30-60 seconds, no music, captions on, real results', 'Problem agitation — "Does your roof look like this?" + photo of damaged roof', 'Customer testimonial video — 60 seconds, unscripted, filmed on phone', 'Avoid: stock photos, corporate copy, hero shots of your logo or truck'], lesson: 'Real beats polished. Phone-shot video of a real job consistently outperforms studio creative.', lessonLabel: 'THE CREATIVE', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE BENCHMARK', stat: '$35-65', statLabel: 'Target cost per booked appointment for local service businesses on Facebook', body: 'At a $3,500 average job and 30% close rate — every $50 in ad spend that books one appointment generates $1,050 in revenue. That is a 21x return when the system is working.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'RUN THE ADS', headline: 'WANT THE FULL AD + LANDING PAGE + CRM SEQUENCE BUILT FOR YOU?', body: 'We build and manage the complete ad funnel — from creative to closing automation — for home service companies ready to scale.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'google-lsa-strategy',
    label: 'Google LSA & PPC Strategy',
    desc: 'How to dominate Google search and LSA for local service keywords',
    icon: '🔍',
    category: 'Lead Gen: Paid Ads',
    format: 'lesson',
    topic: 'Google Local Services Ads and PPC strategy for home service businesses to get inbound calls',
    cards: [
      { type: 'cover', eyebrow: 'GOOGLE ADS', headline: 'HOW TO DOMINATE GOOGLE FOR LOCAL SERVICE KEYWORDS', subheadline: 'LSA, PPC, and GMB — the three layers of Google dominance for home service companies.', tag: 'GOOGLE STRATEGY' },
      { type: 'lesson', eyebrow: 'THE HIERARCHY', headline: 'THE 3 LEVELS OF GOOGLE REAL ESTATE', bullets: ['Level 1 — LSA (Local Services Ads): the green checkmark ads at the very top. Pay per lead, not per click. Background-checked and Google Guaranteed.', 'Level 2 — PPC (Google Ads): traditional search ads below LSA. Pay per click.', 'Level 3 — Organic GMB: your Google Business Profile in the map pack. Free traffic.'], lesson: 'Companies that appear in all 3 levels own their local market. Most competitors only appear in 1.', lessonLabel: 'THE STRATEGY', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'LSA FIRST', headline: 'WHY LSA SHOULD BE YOUR FIRST GOOGLE INVESTMENT', bullets: ['You pay only when a verified lead calls — not for clicks that never convert', 'Google Guarantee badge builds instant trust for first-time callers', 'Average cost per lead: $30-80 for most home service categories', 'You can dispute irrelevant leads and get credited back'], lesson: 'LSA is the most accountable form of paid lead generation — you only pay when someone actually contacts you.', lessonLabel: 'THE CASE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'GMB OPTIMIZATION', headline: 'THE GMB OPTIMIZATIONS THAT INCREASE CALL VOLUME', bullets: ['Post weekly — Google rewards activity with ranking boosts', 'Photos: 20+ photos, updated quarterly. Before/after, crew at work, equipment.', 'Q&A section: pre-load 10 common questions with detailed answers', 'Reviews: respond to every review within 24 hours — Google tracks response rate'], lesson: 'Your GMB profile is a free sales page that appears at the top of Google. Most businesses leave it 40% filled out.', lessonLabel: 'THE TACTICS', slideNumber: 3, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE BENCHMARK', stat: '73%', statLabel: 'Of homeowners searching for a local contractor use Google — and 92% stay on the first page', body: 'If you are not visible in the first page of Google results for your primary service keywords — you are invisible to 73% of your potential market.', slideNumber: 4, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE QUICK WINS', headline: 'DO THESE BEFORE SPENDING ON ADS', checks: ['Complete your GMB profile 100% — every field filled, every category selected', 'Get to 25+ Google reviews at 4.5+ stars — minimum threshold for map pack dominance', 'Apply for Google Local Services Ads — the application takes 2 weeks to complete', 'Install call tracking on every phone number to measure ad performance'], slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'GET VISIBLE', headline: 'WANT YOUR GOOGLE PRESENCE BUILT AND OPTIMIZED?', body: 'We handle GMB optimization, LSA setup, and paid search management for home service companies who want to own their local market.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // APPOINTMENT SHOW RATES
  // ══════════════════════════════════════════
  {
    id: 'appointment-show-rates',
    label: 'Increase Appointment Show Rates',
    desc: 'The system that gets 90%+ of booked appointments to actually show up',
    icon: '📅',
    category: 'Lead Gen: Conversions',
    format: 'lesson',
    topic: 'How to increase appointment show rates and reduce no-shows for service businesses',
    cards: [
      { type: 'cover', eyebrow: 'CONVERSION STRATEGY', headline: 'THE SYSTEM THAT GETS 90%+ OF APPOINTMENTS TO SHOW', subheadline: 'Booked is not closed. Here is how to turn a calendar entry into a meeting that actually happens.', tag: 'SHOW RATE' },
      { type: 'stat', eyebrow: 'THE PROBLEM', stat: '30-40%', statLabel: 'Average no-show rate for service business appointments — without a confirmation system', body: 'A company booking 20 estimates per week with a 35% no-show rate is losing 7 appointments every week. At a 30% close rate and $3,500 average job — that is $7,350 in missed revenue per week.', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'WHY THEY NO-SHOW', headline: 'THE REAL REASONS PEOPLE DO NOT SHOW UP', bullets: ['They got a cheaper quote between booking and appointment', 'They forgot — no confirmation, no reminder, no connection', 'Life happened and they felt awkward canceling', 'They were not fully committed when they booked — the booking was too easy'], lesson: 'Most no-shows are recoverable with the right follow-up sequence. They are not lost — they are just not engaged.', lessonLabel: 'THE CAUSES', slideNumber: 2, totalSlides: 6 },
      { type: 'checklist', eyebrow: 'THE CONFIRMATION SEQUENCE', headline: 'THE 5-TOUCH SEQUENCE THAT GETS 90%+ SHOW RATES', checks: ['Immediately after booking: automated text + email confirmation with date, time, what to expect', '24 hours before: reminder text — "Confirming your appointment tomorrow at [time] — reply YES to confirm"', '2 hours before: text with your name and photo — "On my way shortly — looking forward to meeting you"', 'At appointment time if no answer: call immediately, text backup', 'After no-show: "Missed you today — I have one opening left this week. Want to reschedule?"'], slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE PRE-FRAME', headline: 'INCREASE COMMITMENT AT THE MOMENT OF BOOKING', bullets: ['Ask a commitment question during booking: "On a scale of 1-10, how important is it that you solve this in the next 30 days?"', 'If under 7: address the low commitment now rather than discover it at appointment time', 'Send a pre-meeting email: "Before we meet, here is what I will walk you through..." — builds anticipation', 'Ask them to invite the decision-maker: "Will your [partner/spouse] be there?"'], lesson: 'Commitment at booking predicts show rate more than any confirmation sequence. Build it in from the start.', lessonLabel: 'THE INSIGHT', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE RESULT', stat: '91%', statLabel: 'Average show rate for companies using the full 5-touch confirmation sequence', body: 'Companies without a sequence average 65% show rate. Companies with this exact sequence average 91%. The difference is 26 points — on 20 appointments per week, that is 5 additional meetings every single week.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'AUTOMATE IT', headline: 'WANT YOUR APPOINTMENT CONFIRMATION SEQUENCE RUNNING AUTOMATICALLY?', body: 'Every booked appointment automatically gets the full 5-touch confirmation sequence. Set it up once. Never have a no-show problem again.', ctaText: 'Book a Free Demo' },
    ],
  },

  // ══════════════════════════════════════════
  // AUTOMATIONS
  // ══════════════════════════════════════════
  {
    id: 'automation-stack',
    label: 'The 7 Automations Every Service Business Needs',
    desc: 'The exact automation stack that runs your business while you work',
    icon: '🤖',
    category: 'Lead Gen: Automations',
    format: 'checklist',
    topic: 'The 7 essential marketing automations for local service businesses that generate and close leads',
    cards: [
      { type: 'cover', eyebrow: 'MARKETING AUTOMATION', headline: 'THE 7 AUTOMATIONS RUNNING WHILE YOU WORK', subheadline: 'Set these up once. Generate and close leads forever without touching them.', tag: 'AUTOMATION STACK' },
      { type: 'quick-win', eyebrow: 'AUTOMATION #1', headline: 'MISSED CALL TEXT-BACK', body: 'When a call goes unanswered → automatic text fires within 60 seconds: "Hey, sorry we missed your call! This is [company] — what can we help you with?" Average: 40% text back response rate. Without this, that caller calls your competitor next.', lesson: 'Every missed call without an instant text is a lead gifted to your competitor.', lessonLabel: 'NON-NEGOTIABLE', slideNumber: 1, totalSlides: 8 },
      { type: 'quick-win', eyebrow: 'AUTOMATION #2', headline: 'NEW LEAD INSTANT FOLLOW-UP', body: 'New form submission or ad lead → immediate text + email within 90 seconds. "Hey [name], got your request — [name] from [company] here. What\'s the best time to connect?" Companies that respond in under 5 minutes close 9x more leads than those that respond in an hour.', lesson: 'Speed is the most underrated variable in lead conversion.', lessonLabel: 'CRITICAL', slideNumber: 2, totalSlides: 8 },
      { type: 'quick-win', eyebrow: 'AUTOMATION #3', headline: '5-TOUCH NURTURE SEQUENCE', body: 'Lead does not book immediately → enters 7-day automated sequence. Day 1: value content. Day 3: social proof. Day 5: FAQ. Day 7: final offer. Most leads need 3-5 touches before deciding. Most businesses give up after 1.', lesson: 'The business that stays in front of the undecided lead wins.', lessonLabel: 'HIGH IMPACT', slideNumber: 3, totalSlides: 8 },
      { type: 'quick-win', eyebrow: 'AUTOMATION #4', headline: 'APPOINTMENT CONFIRMATION SEQUENCE', body: 'Appointment booked → text confirmation immediately + reminder 24hr before + reminder 2hr before. This single automation moves show rate from 65% to 90%+ with zero manual effort.', lesson: 'A confirmed appointment is worth 40% more than an unconfirmed one.', lessonLabel: 'CRITICAL', slideNumber: 4, totalSlides: 8 },
      { type: 'quick-win', eyebrow: 'AUTOMATION #5', headline: 'POST-JOB REVIEW REQUEST', body: 'Job marked complete → wait 2 hours → text: "Hey [name], hope the [service] came out exactly how you wanted! Would you mind leaving us a quick Google review? Here\'s the link: [link]" Average: 22% response rate. 10 jobs per week = 2 new reviews per week automatically.', lesson: 'Reviews are the compound interest of reputation. Automate the ask.', lessonLabel: 'LONG-TERM VALUE', slideNumber: 5, totalSlides: 8 },
      { type: 'quick-win', eyebrow: 'AUTOMATION #6', headline: '90-DAY REACTIVATION CAMPAIGN', body: 'Every 90 days → text/email to all past clients: "Hey [name], just thinking about you — it\'s been a while since we [did their service]. Anything come up we can help with?" Average: $8k-$18k per campaign from a list you already own.', lesson: 'Your past customers are the highest-margin leads in your entire business.', lessonLabel: 'HIGHEST ROI', slideNumber: 6, totalSlides: 8 },
      { type: 'quick-win', eyebrow: 'AUTOMATION #7', headline: 'REFERRAL REQUEST AUTOMATION', body: '3 days after a 5-star review → automated text: "You\'re amazing — thank you for the review! Do you know anyone who might benefit from [your service]? We\'ll take care of them just like we took care of you." 15-20% refer someone within 30 days when asked this way.', lesson: 'The happiest moment to ask for a referral is 72 hours after they left you a great review.', lessonLabel: 'MULTIPLIER', slideNumber: 7, totalSlides: 8 },
      { type: 'cta', eyebrow: 'GET THE STACK', headline: 'WANT ALL 7 AUTOMATIONS BUILT AND RUNNING IN 72 HOURS?', body: 'Done for you. Connected to your CRM. Running while you sleep. Most clients see ROI in week one.', ctaText: 'Book a Free Setup Call' },
    ],
  },

  // ══════════════════════════════════════════
  // FAQ & OBJECTION HANDLING FORMATS
  // ══════════════════════════════════════════
  {
    id: 'faq-roofing',
    label: 'FAQ: Roofing Questions Before Signing',
    desc: '7 questions every roofing customer asks — and the expert answers',
    icon: '❓',
    category: 'FAQ & Objections',
    format: 'lesson',
    topic: 'The 7 questions every homeowner asks before hiring a roofing company — with expert answers',
    cards: [
      { type: 'cover', eyebrow: 'ROOFING FAQ', headline: '7 QUESTIONS EVERY HOMEOWNER ASKS BEFORE HIRING A ROOFER', subheadline: 'Answer these before they ask them and you position yourself as the only logical choice.', tag: 'TRUST BUILDER' },
      { type: 'lesson', eyebrow: 'Q1', headline: '"HOW DO I KNOW IF I NEED A FULL REPLACEMENT OR JUST REPAIRS?"', bullets: ['If 25% or more of shingles are damaged — replacement is almost always more cost-effective than repair', 'If the roof is 15+ years old — repairs extend life by 1-3 years; a replacement extends it by 25-30', 'A reputable roofer will show you photos of the actual damage before recommending either'], lesson: 'The company that answers this question honestly — even when repair is the right answer — earns more trust than the one that always recommends replacement.', lessonLabel: 'THE ANSWER', slideNumber: 1, totalSlides: 8 },
      { type: 'lesson', eyebrow: 'Q2', headline: '"HOW DO I KNOW YOUR ESTIMATE IS ACCURATE?"', bullets: ['Get the estimate in writing with specific material brands, quantities, and labor details — not just a total number', 'Ask: "What happens if you find hidden damage during tear-off?" (the answer reveals their integrity)', 'Three estimates are reasonable — but do not choose purely on price'], lesson: 'A detailed estimate is a signal of a professional company. A one-line total number is a red flag.', lessonLabel: 'THE ANSWER', slideNumber: 2, totalSlides: 8 },
      { type: 'lesson', eyebrow: 'Q3', headline: '"ARE YOU LICENSED AND INSURED?"', bullets: ['In most states: verify contractor license number on your state\'s contractor board website', 'Ask for a Certificate of Insurance — and call the insurance company to verify it is current', 'A company that resists providing either is not worth the risk'], lesson: 'The 30 seconds it takes to verify insurance can save you from a six-figure liability.', lessonLabel: 'THE ANSWER', slideNumber: 3, totalSlides: 8 },
      { type: 'lesson', eyebrow: 'Q4', headline: '"HOW LONG WILL IT TAKE?"', bullets: ['Most residential roofs: 1-2 days for the installation', 'Scheduling from signed contract to start: 1-4 weeks depending on season', 'Be wary of companies that promise to start tomorrow — it often means they have no other work'], lesson: 'A realistic timeline is more valuable than a fast one. Ask for it in writing.', lessonLabel: 'THE ANSWER', slideNumber: 4, totalSlides: 8 },
      { type: 'lesson', eyebrow: 'Q5', headline: '"WHAT WARRANTY DO I GET?"', bullets: ['Material warranty: from the manufacturer, typically 25-50 years on shingles', 'Workmanship warranty: from the contractor, typically 1-10 years — this is the one that matters most', 'Ask: "If I have a leak in year 3 — what exactly do I do and who pays for it?"'], lesson: 'The warranty is only as good as the company standing behind it. Verify they will still be in business.', lessonLabel: 'THE ANSWER', slideNumber: 5, totalSlides: 8 },
      { type: 'lesson', eyebrow: 'Q6', headline: '"WHAT DOES THE INSURANCE PROCESS LOOK LIKE?"', bullets: ['You file the claim → adjuster comes out → adjuster writes an estimate → you hire a contractor', 'A reputable roofer will meet with your adjuster to advocate for you — do not let the adjuster go alone', 'You do not have to choose the cheapest option — the insurance payment covers the work, not just the cheapest bid'], lesson: 'The insurance process is confusing by design. A roofer who explains it clearly before you hire them is telling you something about how they operate.', lessonLabel: 'THE ANSWER', slideNumber: 6, totalSlides: 8 },
      { type: 'lesson', eyebrow: 'Q7', headline: '"WHY SHOULD I CHOOSE YOU OVER THE OTHER ESTIMATES?"', bullets: ['Check reviews — not just the star rating, but the detail in the responses', 'Ask for 3 recent references from similar projects in your neighborhood', '"What do you do that your competitors do not?" — if they cannot answer this, they are a commodity'], lesson: 'The question "why you?" should make a great contractor more confident, not defensive. Their answer tells you everything.', lessonLabel: 'THE ANSWER', slideNumber: 7, totalSlides: 8 },
      { type: 'cta', eyebrow: 'SHARE THIS', headline: 'SAVE THIS AND SEND IT TO EVERY HOMEOWNER GETTING ESTIMATES', body: 'The homeowner who asks better questions makes a better decision — and usually chooses the contractor who gave them the education.', ctaText: 'Book a Free Consultation' },
    ],
  },
  {
    id: 'objection-carousel-contractor',
    label: 'Contractor Objection Handling Slides',
    desc: 'The exact responses to the 5 objections every contractor hears',
    icon: '🛡️',
    category: 'FAQ & Objections',
    format: 'lesson',
    topic: 'Objection handling for home service contractors — responses to the most common sales objections',
    cards: [
      { type: 'cover', eyebrow: 'SALES TRAINING', headline: 'THEY SAID IT. HERE\'S WHAT YOU SAY BACK.', subheadline: 'The 5 objections every contractor hears — and the exact responses that keep the conversation alive.', tag: 'OBJECTION HANDLING' },
      { type: 'lesson', eyebrow: 'OBJECTION 1', headline: '"YOUR PRICE IS TOO HIGH"', bullets: ['"I hear that a lot — can I ask, what were you expecting to spend?"', '"The price difference usually comes down to materials and insurance. Want me to show you exactly what is in our number?"', '"What happens if you go with the cheaper option and it fails in 18 months? What does that cost you?"'], lesson: 'Price objections are almost always value objections. They do not see what they are paying for yet.', lessonLabel: 'YOUR RESPONSE', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 2', headline: '"I NEED TO GET MORE ESTIMATES"', bullets: ['"Absolutely — you should. Here is what I\'d ask each one: do they pull permits, what is their warranty on labor, and can I call 3 past customers?"', '"What are you hoping to learn from the other estimates that I can answer now?"', '"If the other estimates come back similar — what would help you feel confident choosing us?"'], lesson: 'Giving them homework for the competitor interviews means they will apply your standard to everyone else.', lessonLabel: 'YOUR RESPONSE', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 3', headline: '"I NEED TO THINK ABOUT IT"', bullets: ['"Of course — what specifically are you thinking about?" (always ask this)', '"Is it the investment, the timing, or are you not sure this is the right fit?"', '"If you were going to move forward, what would need to be true?"'], lesson: '"Think about it" always has a specific reason underneath it. Find the real objection.', lessonLabel: 'YOUR RESPONSE', slideNumber: 3, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 4', headline: '"I HAD A BAD EXPERIENCE WITH A CONTRACTOR BEFORE"', bullets: ['"That\'s actually why I want to be upfront about everything from the beginning — what happened?"', '"Here is what we do differently: [specific process, specific guarantee]"', '"Would it help to talk to a customer who also had a bad experience before working with us?"'], lesson: 'A past bad experience is not a no — it is a reason to show them you are different. Prove it with specifics.', lessonLabel: 'YOUR RESPONSE', slideNumber: 4, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'OBJECTION 5', headline: '"I\'LL CALL YOU IN THE SPRING" (SEASONAL DELAY)', bullets: ['"I understand — can I ask what will be different in the spring?"', '"Our spring schedule fills up in January. Want me to lock in your spot now with no deposit required?"', '"The issue usually gets worse over winter — and our pricing typically increases 8-12% in spring. Would it be worth locking in today\'s price?"'], lesson: 'Seasonal delays are almost always price-pressure tactics or indecision disguised as timing. Offer an easy reason to commit now.', lessonLabel: 'YOUR RESPONSE', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'TRAIN YOUR TEAM', headline: 'SHARE THIS WITH EVERY PERSON WHO TAKES SALES CALLS', body: 'A team that has practiced these responses closes 40% more of the same leads. Role-play every objection before the next estimate.', ctaText: 'Follow For More' },
    ],
  },

  // ══════════════════════════════════════════
  // NATIONAL LEAD GEN
  // ══════════════════════════════════════════
  {
    id: 'national-lead-gen-agency',
    label: 'National Lead Gen for Agencies',
    desc: 'How marketing agencies generate leads across multiple markets simultaneously',
    icon: '🌐',
    category: 'Lead Gen: National',
    format: 'lesson',
    topic: 'National lead generation strategy for marketing agencies serving multiple markets and niches',
    cards: [
      { type: 'cover', eyebrow: 'NATIONAL LEAD GEN', headline: 'HOW TO GENERATE LEADS IN EVERY MARKET SIMULTANEOUSLY', subheadline: 'The agency lead generation system that works in 50 cities at once without a team in each one.', tag: 'SCALE' },
      { type: 'lesson', eyebrow: 'THE FOUNDATION', headline: 'YOU DO NOT NEED TO BE LOCAL TO GENERATE LOCAL LEADS', bullets: ['Content marketing positions you as the niche expert — regardless of your location', '"The only marketing system built specifically for [niche] companies" — national positioning, local relevance', 'Case studies from one market validate your offer in every other market', 'Webinars, podcasts, and LinkedIn content reach every geography simultaneously'], lesson: 'Niche specificity replaces geographic proximity. Be the national expert in a vertical instead of the local expert in a city.', lessonLabel: 'THE INSIGHT', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE CHANNELS', headline: 'CHANNELS THAT SCALE NATIONALLY WITHOUT HEADCOUNT', bullets: ['LinkedIn outreach: connect with owners in your niche across every city — fully automatable', 'Podcast guesting: appear on home service, contractor, or industry podcasts once → reach thousands in the niche', 'YouTube: "Marketing for [Niche] Businesses" content ranks nationally and generates inbound leads for years', 'Paid ads with national targeting + niche messaging: $50/day can reach every [niche] business owner in America'], lesson: 'One great piece of niche content generates more leads nationally than a year of local networking.', lessonLabel: 'THE CHANNELS', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE OFFER', headline: 'THE OFFER THAT CONVERTS NATIONALLY', bullets: ['Free audit specific to the niche: "Free Marketing Audit for Tree Service Companies"', 'Free resource: "The Complete Lead Generation Playbook for Roofing Companies"', 'Free demo with relevant case study: "How we took a [city] contractor from $200k to $800k — let me show you how"', 'Webinar: "The 5 Marketing Mistakes Costing Lawn Care Companies $100k/Year"'], lesson: 'The offer that names the niche converts at 3-5x the rate of the generic offer.', lessonLabel: 'THE OFFER', slideNumber: 3, totalSlides: 5 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '47x', statLabel: 'More leads per dollar from niche-specific content vs generic marketing content — our own data', body: 'A blog post titled "Marketing for Tree Service Companies" generates 47x more qualified leads than "Marketing for Small Businesses." Same effort. Same cost. 47x the return.', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'SCALE YOUR AGENCY', headline: 'WANT TO SEE HOW WE GENERATE LEADS IN 30+ MARKETS FROM ONE SYSTEM?', body: 'Book a call and we will walk you through the exact content, outreach, and funnel system we use to generate leads nationally for our agency.', ctaText: 'Book a Free Strategy Call' },
    ],
  },
];

// ══════════════════════════════════════════
// INDUSTRY: HVAC & PLUMBING
// ══════════════════════════════════════════
export const HVAC_PLUMBING_TEMPLATES: CarouselTemplate[] = [
  {
    id: 'hvac-slow-season',
    label: 'HVAC Off-Season Revenue',
    desc: 'How HVAC companies generate revenue between peak seasons',
    icon: '❄️',
    category: 'Industry: HVAC',
    format: 'lesson',
    topic: 'How HVAC companies generate revenue in the off-season with maintenance agreements and marketing',
    cards: [
      { type: 'cover', eyebrow: 'HVAC BUSINESS', headline: 'HOW TO MAKE MONEY WHEN NOBODY NEEDS HEAT OR AC', subheadline: 'The off-season revenue strategy smart HVAC companies use to stay fully booked year-round.', tag: 'HVAC MARKETING' },
      { type: 'stat', eyebrow: 'THE REALITY', stat: '62%', statLabel: 'Of HVAC revenue is concentrated in 4 months — spring AC and fall heating', body: 'The companies that survive slow season are not the ones who work harder in those 4 months. They are the ones who built recurring revenue that pays them in the other 8.', slideNumber: 1, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE MOVE', headline: 'MAINTENANCE AGREEMENTS — YOUR RECESSION-PROOF REVENUE', bullets: ['A $199/year maintenance agreement generates recurring revenue regardless of season', '85%+ renewal rate when combined with a proactive scheduling system', 'Members prioritize service — your highest-margin work — over price-shoppers', 'A company with 500 maintenance agreements has $99,500/year in guaranteed baseline revenue'], lesson: 'Maintenance agreements convert one-time customers into annuities.', lessonLabel: 'THE STRATEGY', slideNumber: 2, totalSlides: 6 },
      { type: 'lesson', eyebrow: 'THE CAMPAIGN', headline: 'THE MARCH MAINTENANCE CAMPAIGN', bullets: ['Email all past clients in March: "Spring tune-up spots filling fast — book before the heat rush"', 'Offer a discount for scheduling before May 1 — creates urgency', 'Include a checklist of what they get — makes the value tangible', 'Follow up 3 times over 3 weeks — most bookings come on touch 2 or 3'], lesson: 'The company that contacts past customers first in spring fills its calendar before competitors start advertising.', lessonLabel: 'THE EXECUTION', slideNumber: 3, totalSlides: 6 },
      { type: 'quick-win', eyebrow: 'DO THIS WEEK', headline: 'TEXT EVERY CLIENT FROM LAST SUMMER TODAY', body: '"Hey [name], it\'s [your name] from [company]. We serviced your system last year — just wanted to reach out before the spring rush and see if you wanted to get your tune-up scheduled. We have some early availability and can usually lock in a better window if you book now."', lesson: 'This one text to your past customer list generates 3-5 bookings per 20 sends. Do it today.', lessonLabel: 'THE QUICK WIN', slideNumber: 4, totalSlides: 6 },
      { type: 'stat', eyebrow: 'THE MATH', stat: '3.4x', statLabel: 'More lifetime revenue from maintenance agreement customers vs one-time service calls', body: 'They call you first when something breaks. They refer friends because they have a relationship. They buy new equipment through you because you are their trusted technician.', slideNumber: 5, totalSlides: 6 },
      { type: 'cta', eyebrow: 'BUILD THE SYSTEM', headline: 'WANT YOUR MAINTENANCE AGREEMENT CAMPAIGN AUTOMATED?', body: 'Renewal reminders, seasonal outreach, and upsell sequences — all done for you.', ctaText: 'Book a Free Demo' },
    ],
  },
  {
    id: 'plumbing-reviews',
    label: 'Plumbing Reviews & Trust System',
    desc: 'How plumbing companies dominate local search with reviews',
    icon: '🔧',
    category: 'Industry: Plumbing',
    format: 'lesson',
    topic: 'How plumbing companies get more Google reviews and dominate local search',
    cards: [
      { type: 'cover', eyebrow: 'PLUMBING MARKETING', headline: 'THE REVIEW STRATEGY THAT DOMINATES LOCAL SEARCH', subheadline: 'Why the plumber with the most reviews wins — and how to build that lead without asking awkwardly.', tag: 'LOCAL SEO' },
      { type: 'stat', eyebrow: 'THE DATA', stat: '87%', statLabel: 'Of homeowners check Google reviews before calling a plumber — even for emergencies', body: 'Plumbing is one of the highest-trust service categories. People do not call a plumber they have never heard of. They call the one their neighbor mentioned or the one with 100+ reviews at 4.8 stars.', slideNumber: 1, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE ASK', headline: 'WHEN AND HOW TO ASK FOR A REVIEW', bullets: ['Ask within 2 hours of completing the job — satisfaction is highest immediately after', 'Text beats email: "Hey [name], glad we got that sorted. If you have 60 seconds, a review would mean the world to us: [link]"', 'Never ask in person — it creates social pressure. Text lets them do it on their own time', 'A satisfied plumbing customer who does NOT get asked almost never leaves a review voluntarily'], lesson: 'The review is there to be captured. You just have to ask at the right moment.', lessonLabel: 'THE SYSTEM', slideNumber: 2, totalSlides: 5 },
      { type: 'lesson', eyebrow: 'THE DOMINATION MATH', headline: 'HOW MANY REVIEWS YOU NEED TO OWN YOUR MARKET', bullets: ['Under 20 reviews: invisible — nobody takes a risk on you', '20-50 reviews: considered — you make it to the shortlist', '50-100 reviews: competitive — you win a fair share', '100+ at 4.8+: dominant — you are the obvious choice before a call is made'], lesson: 'In most local markets, 100 reviews at 4.8+ stars is enough to dominate the Google map pack.', lessonLabel: 'THE BENCHMARK', slideNumber: 3, totalSlides: 5 },
      { type: 'quick-win', eyebrow: 'START TODAY', headline: 'SEND YOUR REVIEW REQUEST TEXT RIGHT NOW', body: 'Open your last 10 completed jobs. Text every one: "Hi [name], this is [your name] from [company]. We appreciate your business last [week/month] — would you mind leaving us a quick review? It really helps: [Google link]" Expect 3-4 responses from 10. At 2 per week that is 100 reviews in a year.', lesson: 'Most plumbers have 8-15 reviews after 5 years in business. The ones with 150+ have a system.', lessonLabel: 'THE ACTION', slideNumber: 4, totalSlides: 5 },
      { type: 'cta', eyebrow: 'AUTOMATE IT', headline: 'WANT YOUR REVIEW REQUEST AUTOMATED AFTER EVERY JOB?', body: 'Job closed → automatic text fires 2 hours later → review comes in without you lifting a finger.', ctaText: 'Book a Free Demo' },
    ],
  },
];
