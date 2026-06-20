import type { NextApiRequest, NextApiResponse } from 'next';


// ─── SEASONAL TRIGGERS  -  all 12 months for all niches ─────────────────────────
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

type SeasonalHook = { trigger: string; pain: string; dream: string; urgency: string };
type NicheSeasons = Record<string, SeasonalHook>;

const SEASONAL: Record<string, NicheSeasons> = {
  'Tree Service': {
    January:   { trigger:'winter storm cleanup', pain:'Dangerous hanging limbs from ice and snow are a liability sitting on their property right now', dream:'Property protected and safe before the next storm hits', urgency:'Ice damage gets worse every freeze-thaw cycle  -  this window is closing fast' },
    February:  { trigger:'pre-spring tree assessment', pain:'Winter-damaged trees look fine from the ground but are structurally compromised', dream:'Know exactly what needs to go before spring growth hides the damage', urgency:'Spring green-up makes damage invisible and doubles removal cost' },
    March:     { trigger:'spring storm prep', pain:'That big oak over the house survived winter but one spring storm could end that streak', dream:'Go into storm season with every hazard tree already gone', urgency:'Spring storm season starts in 6-8 weeks  -  booked crews cannot fit emergencies' },
    April:     { trigger:'spring cleanup and trimming', pain:'Winter left a mess  -  dead branches, debris, trees that did not survive', dream:'Property looking its best as neighbors start spending time outside', urgency:'Spring books up faster than any other season  -  crews fill up by mid-April' },
    May:       { trigger:'pre-summer shade trimming', pain:'Overgrown trees blocking views, dropping sap on cars, creating privacy issues', dream:'Perfectly shaped trees giving ideal shade without the mess', urgency:'Summer heat makes this work brutal  -  prices go up and availability drops fast' },
    June:      { trigger:'summer storm prep', pain:'Hurricane and severe storm season is here  -  one bad night can total everything', dream:'Every tree properly pruned to let wind through rather than resist it', urgency:'Storm calls book out instantly  -  only pre-booked customers get priority response' },
    July:      { trigger:'summer stump removal', pain:'Dead stumps are an eyesore and a tripping hazard all summer', dream:'Clean usable yard space where that stump used to ruin the view', urgency:'Summer is the best time for grinding  -  stumps are dry and grind faster' },
    August:    { trigger:'late summer trimming', pain:'Trees that were beautiful in spring are now blocking light and dropping debris all over the deck', dream:'Clear canopy, clean yard, unobstructed view going into fall', urgency:'August lull means faster scheduling  -  slots fill back up in September' },
    September: { trigger:'fall preparation', pain:'Those leaves are coming down and that means branches will not be hidden much longer', dream:'Know exactly what to remove before leaf-off makes neighbors notice everything', urgency:'Fall is peak tree season  -  book in September or wait until February' },
    October:   { trigger:'leaf-off assessment season', pain:'When the leaves drop, the dead wood shows  -  what is up there that you have not seen all year', dream:'Complete property tree audit and removal plan locked in before ground freezes', urgency:'Ground stays workable for heavy equipment until mid-November  -  then prices jump' },
    November:  { trigger:'pre-winter removal', pain:'Ice is coming and those weak spots in the canopy will be the first thing to fail', dream:'Every hazard identified and removed before the first ice storm', urgency:'Last practical window before frozen ground and holiday crew schedules' },
    December:  { trigger:'end of year property prep', pain:'Year-end property cleanup often reveals deferred tree work that became urgent', dream:'Starting the new year with a clean safe properly maintained property', urgency:'Holiday booking window  -  schedule January work now at current pricing' },
  },
  'Lawn Care': {
    January:{ trigger:'early season booking', pain:'Best lawn care companies book out months in advance and every spring you scramble', dream:'First on the schedule when the grass starts growing', urgency:'Spring crew spots fill up completely by February  -  this is the last call' },
    February:{ trigger:'pre-season fertilization', pain:'Lawn that looks thin and yellow when the neighbors lawn looks green', dream:'First spring green-up so early the neighbors ask what you did', urgency:'Pre-emergent window opens March 1 and closes fast  -  miss it and weeds own the yard' },
    March:{ trigger:'spring clean-up and first cut', pain:'Winter debris, matted leaves, and brown patches that did not survive', dream:'Lawn looking pristine for the first time anyone spends time outside', urgency:'March clean-up slots book in days  -  the company that does your clean-up keeps your account all season' },
    April:{ trigger:'core aeration and overseeding', pain:'Compacted soil and bare patches that fertilizer cannot fix alone', dream:'Thick dense lawn that chokes out weeds and handles foot traffic', urgency:'Spring aeration window is 6 weeks  -  after May 15 it is too hot and results suffer' },
    May:{ trigger:'weed control and lawn program enrollment', pain:'Dandelions and crabgrass spreading faster than any homeowner can keep up', dream:'Weed-free lawn without spending every weekend pulling them', urgency:'Weed treatments need time to work  -  waiting until summer means a full season of loss' },
    June:{ trigger:'summer heat prep', pain:'Lawn that burns out by July no matter what they do', dream:'Green resilient lawn through the hottest summer weeks', urgency:'June is the last chance to strengthen root systems before summer stress hits' },
    July:{ trigger:'drought and heat management', pain:'Brown patches spreading despite watering  -  something is wrong', dream:'Understanding exactly what the lawn needs and someone handling it', urgency:'Heat damage compounds weekly  -  every week without treatment is two weeks of recovery' },
    August:{ trigger:'late summer aeration prep', pain:'Tired worn lawn that needs recovery before fall', dream:'Strong going into fall so it comes back thick next spring', urgency:'Fall aeration window opens in 4-6 weeks  -  early booking locks in the best slots' },
    September:{ trigger:'fall aeration and overseeding', pain:'Sparse patchy lawn that is embarrassing when everyone is outside in fall', dream:'Dense thick lawn that looks like a golf course going into winter', urgency:'Fall is THE best time to seed  -  soil temps are perfect for 3 more weeks only' },
    October:{ trigger:'winterization and final fertilization', pain:'Lawn that barely survives winter and starts spring thin and pale', dream:'Protecting all the work done this season so it comes back even better', urgency:'Winterization must happen before first hard frost  -  usually 3-5 weeks away' },
    November:{ trigger:'leaf cleanup and final cut', pain:'Buried lawn under leaves that will suffocate it all winter', dream:'Clean properly cut lawn going into dormancy for the best spring recovery', urgency:'Leave leaves on the lawn through November and you will pay for it in bare patches all next year' },
    December:{ trigger:'next season early enrollment', pain:'Another year of scrambling to find a reliable lawn company at the last minute', dream:'Best lawn on the street next summer locked in before the rush', urgency:'Early enrollment pricing ends January 1  -  save 15% and get first-pick scheduling' },
  },
  'Roofing': {
    January:{ trigger:'ice dam and winter damage', pain:'Ice dams causing leaks that are damaging ceilings walls and insulation right now', dream:'Damage stopped claim filed and repair scheduled before it gets worse', urgency:'Every freeze-thaw cycle makes ice dam damage exponentially worse' },
    February:{ trigger:'winter damage assessment', pain:'Unknown damage from winter storms that will become obvious as a leak in spring', dream:'Complete roof assessment before any moisture causes interior damage', urgency:'Spring rain is 4-6 weeks away  -  hidden damage becomes a full leak with the first downpour' },
    March:{ trigger:'spring storm prep', pain:'Aging roof that survived last storm season but feels like borrowed time', dream:'Going into storm season knowing the roof is solid', urgency:'Storm season booking fills up completely  -  emergency work gets 40% premium pricing' },
    April:{ trigger:'spring inspection and repair', pain:'Winter damage that shows up as stains soft spots and missing shingles', dream:'Clean bill of health on the roof or a clear plan to fix it', urgency:'Spring inspection window before heavy rain season  -  catch small repairs before they become replacements' },
    May:{ trigger:'pre-summer replacement', pain:'Roof that will not survive another summer of heat cycling and storms', dream:'New roof installed before summer heat with full warranty protection', urgency:'Summer scheduling is fully booked by June 1 every year' },
    June:{ trigger:'storm season insurance response', pain:'Recent storm damage that insurance will cover but needs documentation fast', dream:'Insurance claim maximized and repair scheduled before more weather hits', urgency:'Insurance claims have documentation deadlines  -  waiting loses money' },
    July:{ trigger:'mid-summer inspection', pain:'Summer heat is cooking shingles that are already near end-of-life', dream:'Know exactly where the roof stands before fall storm season', urgency:'Heat damage identified in July can be addressed in August  -  wait and it is an emergency' },
    August:{ trigger:'pre-fall replacement booking', pain:'Dreading another fall and winter on a roof that is clearly failing', dream:'New roof done before leaves fall and cold weather sets in', urgency:'September-October is peak replacement season  -  August is the last chance for good scheduling' },
    September:{ trigger:'fall storm prep', pain:'Vulnerable roof going into the most active severe weather months', dream:'Fully repaired and sealed before the first fall storm system', urgency:'October storm season is coming  -  repair windows are closing fast' },
    October:{ trigger:'pre-winter repairs', pain:'Any damage that is not fixed before winter freeze becomes a major problem', dream:'Weathertight roof before temperatures drop and installation becomes difficult', urgency:'Cold weather installation is possible but harder and more expensive  -  do it now' },
    November:{ trigger:'winter-ready repairs', pain:'Ice dams snow load and freeze-thaw will exploit any weakness that exists', dream:'Every vulnerability sealed before the first snow', urgency:'November is the last practical window before winter pricing and delays' },
    December:{ trigger:'year-end insurance and replacement', pain:'Waiting until spring means another winter of risk and another deductible year', dream:'New roof on tax year timeline insurance claim closed peace of mind for winter', urgency:'December 31 insurance and tax deadline  -  year-end replacements must be booked now' },
  },
  'HVAC': {
    January:{ trigger:'winter emergency prep', pain:'Furnace running but not serviced and could fail on the coldest night of the year', dream:'Heating system that runs perfectly all winter without a single anxious moment', urgency:'January is peak furnace failure month  -  tune-up now or risk a weekend emergency call at 3x the price' },
    February:{ trigger:'heating efficiency audit', pain:'Energy bills climbing even though the thermostat has not moved', dream:'Lower bills and a system running at peak efficiency for the rest of winter', urgency:'February cold snaps are coming  -  energy waste compounds every degree of inefficiency' },
    March:{ trigger:'spring AC prep', pain:'AC unit not touched since last summer and first hot day is coming fast', dream:'AC running perfectly when the first hot week hits  -  no emergency calls no panic', urgency:'Spring tune-ups book up in 3-4 weeks  -  wait and pay emergency pricing for first breakdowns' },
    April:{ trigger:'AC tune-up season', pain:'That first 80-degree day will reveal every weakness in a system that sat dormant all winter', dream:'Reliable cooling through the entire summer with no breakdowns', urgency:'April is the last practical window before summer surge pricing kicks in' },
    May:{ trigger:'pre-summer system replacement', pain:'Summer is coming fast and the AC unit is already 10-15 years old', dream:'New system installed and running before summer heat arrives', urgency:'May is the last month for new system installation before summer backlog  -  6-week lead times in June' },
    June:{ trigger:'summer cooling optimization', pain:'AC struggling to keep up with heat when it needs to perform most', dream:'Cool comfortable home through the hottest months without a single breakdown', urgency:'Summer repair slots are booking 5-7 days out  -  breakdowns in July mean days of heat' },
    July:{ trigger:'peak heat system check', pain:'System running constantly but never quite getting the house cool enough', dream:'System optimized to handle peak heat load without strain or high bills', urgency:'Every day of inefficiency in July adds to the energy bill and shortens equipment life' },
    August:{ trigger:'pre-fall system checkup', pain:'System has been running hard all summer and needs assessment before fall', dream:'Fall and winter heading into shoulder season with full confidence in both systems', urgency:'August tune-ups catch summer damage before it becomes a fall repair' },
    September:{ trigger:'fall heating prep', pain:'First cold snap of fall always reveals the furnace problems from last year', dream:'Heating system serviced and ready before the first time you need it', urgency:'September furnace tune-ups book up fast  -  October is emergency season' },
    October:{ trigger:'winter prep', pain:'Another winter of worrying whether the furnace will make it through', dream:'Heating system inspected cleaned and certified before the first freeze', urgency:'October is the last month before winter emergency pricing  -  regular service is 40% less than emergency' },
    November:{ trigger:'emergency heat prep', pain:'Temperatures dropping and the furnace has not been serviced in years', dream:'Complete peace of mind going into the coldest months of the year', urgency:'November is the final pre-winter service window  -  December calls are emergency pricing' },
    December:{ trigger:'holiday season reliability', pain:'House full of family and a furnace that picks the worst possible time to fail', dream:'Guaranteed reliable heat through the entire holiday season', urgency:'Holiday season means no available technicians  -  pre-service now or risk the worst timing' },
  },
  'Med Spa': {
    January:{ trigger:'new year body goals campaign', pain:'Every January clients flood socials talking about new year new me but your schedule has empty slots', dream:'Fully booked January with clients eager to start their aesthetic journey for the new year', urgency:'New Year traffic peaks in the first 3 weeks of January  -  after that it drops sharply' },
    February:{ trigger:'Valentines Day glow campaign', pain:'Clients want to look their best for Valentines Day but have not booked yet', dream:'Clients glowing and confident for their Valentines Day plans  -  and crediting you for it', urgency:'Valentines Day appointments need to be booked 2-3 weeks out for optimal results timing' },
    March:{ trigger:'spring refresh campaign', pain:'Clients emerging from winter wanting to look refreshed before spring social events start', dream:'Refreshed confident appearance heading into wedding season and spring events', urgency:'Spring social calendar fills fast  -  aesthetic results need 2-4 weeks to settle before events' },
    April:{ trigger:'wedding season prep', pain:'Wedding season is here and clients are in the final stretch of looking their best for ceremonies and events', dream:'Looking effortlessly beautiful in every wedding photo for the next 4 months', urgency:'Bridal party treatments need to be booked now for May and June weddings  -  availability is filling' },
    May:{ trigger:'summer body prep', pain:'Summer is coming and clients are thinking about sleeveless arms and confidence at the pool', dream:'Feeling confident and camera-ready heading into summer with no self-consciousness holding them back', urgency:'Body contouring and skin treatments need 6-8 weeks for optimal results  -  May is the last window' },
    June:{ trigger:'summer maintenance', pain:'Summer sun and heat are working against client skin and they need professional support to maintain results', dream:'Glowing protected skin all summer without undoing their investment', urgency:'Sun damage accelerates in June  -  protective treatments now prevent costly correction later' },
    July:{ trigger:'mid-summer refresh', pain:'Summer activities have left skin looking tired and treatments from spring are wearing off', dream:'Refreshed renewed look for the second half of summer and fall events', urgency:'Fall event season starts in September  -  treatments booked in July are perfectly timed' },
    August:{ trigger:'back-to-routine refresh', pain:'Summer is ending and clients want to look professional and refreshed heading into fall routines', dream:'Confident polished appearance for fall events, work engagements, and the holiday season ahead', urgency:'September fills fast as everyone returns from summer  -  August is the last open window' },
    September:{ trigger:'fall event season prep', pain:'Fall weddings, galas, and professional events are booked and clients want to look their absolute best', dream:'Looking stunning and effortless at every fall event without anyone knowing why', urgency:'Fall events cluster in October-November  -  September treatments time perfectly for peak results' },
    October:{ trigger:'holiday prep campaign', pain:'Holiday party season is 6-8 weeks away and clients who want to look their best need to start now', dream:'Being the best-looking person in the room at every holiday party without effort', urgency:'Holiday results require 4-8 weeks  -  October 1 is the last practical start date for December results' },
    November:{ trigger:'holiday party season', pain:'Holiday parties are weeks away and clients who did not book in October are in a panic', dream:'Quick treatments that deliver maximum impact before the holiday season peaks', urgency:'Only express treatments can deliver results in time  -  book before Thanksgiving fills the schedule' },
    December:{ trigger:'new year new you early enrollment', pain:'Another year is ending and clients are reflecting on changes they want to make  -  aesthetically and otherwise', dream:'Starting the new year with a plan, a membership, and the confidence that comes with it', urgency:'January is the highest-demand month of the year  -  memberships booked in December get first-pick scheduling' },
  },
  'Dental Practice': {
    January:{ trigger:'new year new smile campaign', pain:'Patients who have been putting off dental work for months are resolved to finally get it done', dream:'Starting the year with dental health addressed and cosmetic concerns handled', urgency:'January appointments fill fast with resolution patients  -  book this week before the rush' },
    February:{ trigger:'Valentines smile campaign', pain:'Patients self-conscious about their smile avoid photos and close interactions', dream:'Confident beautiful smile in time for Valentines Day and spring photos', urgency:'Whitening and cosmetic work needs 2-4 weeks  -  February 14 is coming fast' },
    March:{ trigger:'spring dental health', pain:'Patients who skipped their fall cleaning are overdue and know it', dream:'Clean healthy mouth and peace of mind heading into spring', urgency:'Overdue patients risk gum disease progression every additional month of delay' },
    April:{ trigger:'tax refund dental campaign', pain:'Patients who needed expensive work have been delaying due to cost  -  tax refunds change that calculus', dream:'Finally addressing the dental work that has been hanging over them', urgency:'Tax refunds peak in March-April  -  this is the window when patients can afford to say yes' },
    June:{ trigger:'back to school family dental', pain:'Kids summer schedules open a window for appointments they missed during the school year', dream:'Entire family dentally covered before back-to-school September chaos', urgency:'Summer pediatric appointments fill completely by mid-June  -  schedule now' },
    September:{ trigger:'end of year benefits campaign', pain:'Patients with dental insurance who have not used their annual benefits are about to lose them', dream:'Using every dollar of insurance they already paid for before it disappears December 31', urgency:'Dental benefits reset January 1  -  unused benefits are gone forever after December 31' },
    October:{ trigger:'use your benefits campaign', pain:'Q4 crunch is here and patients are only now realizing they have unused dental benefits expiring', dream:'Using their full insurance benefit for the work they need before losing it', urgency:'Most practices book out 4-6 weeks  -  October is the last realistic booking window for December work' },
    November:{ trigger:'year-end benefits deadline', pain:'November patients are in a panic realizing their benefits expire and schedules are almost full', dream:'Getting in for their work before December 31 benefit expiration', urgency:'November is the most competitive month for dental appointments  -  call today' },
    December:{ trigger:'new patient new year campaign', pain:'People searching for a new dentist for the new year are choosing right now', dream:'Starting the new year with a trusted dental team and a clean slate', urgency:'New patient appointments are filling for January  -  secure your spot before the new year rush' },
  },
  'Auto Detailing': {
    March:{ trigger:'spring detail season', pain:'Cars covered in winter salt, grime, and road chemicals that are actively damaging paint', dream:'Car looking showroom-fresh and protected for the entire spring and summer', urgency:'Spring detailing slots fill in 2-3 weeks as everyone acts simultaneously  -  book now' },
    April:{ trigger:'spring protection treatment', pain:'Pollen season is coating every car daily and the paint is taking a beating', dream:'Full detail plus paint protection that repels pollen, water, and UV for 6-12 months', urgency:'Ceramic coating and paint protection need dry weather  -  the April window is ideal and closing' },
    May:{ trigger:'pre-summer full detail', pain:'Summer means road trips, outdoor events, and photos  -  car needs to be at its best', dream:'Turning heads everywhere you drive this summer with a car that looks brand new', urgency:'Memorial Day weekend and summer travel starts in 3 weeks  -  booking window is closing fast' },
    August:{ trigger:'back to school sale prep', pain:'Summer heat and UV have faded and oxidized paint that looked great in spring', dream:'Car restored to its best condition heading into fall with full protection for winter', urgency:'Fall paint protection must happen before first frost  -  August is the optimal application window' },
    October:{ trigger:'pre-winter paint protection', pain:'Winter is coming and untreated paint will take salt and road chemical damage all season', dream:'Car fully protected against winter salt, ice, and road chemicals for the next 5-6 months', urgency:'Paint protection applied before first snowfall lasts all winter  -  do it now or pay for correction in spring' },
    November:{ trigger:'holiday gift detail packages', pain:'Finding a meaningful gift for the car enthusiast or someone who needs it but would not treat themselves', dream:'The perfect gift  -  a professionally detailed car that makes someone feel great every drive', urgency:'Holiday gift certificates sell out  -  order by December 10 for guaranteed holiday delivery' },
  },
  'Restaurant & Cafe': {
    January:{ trigger:'new year health menu', pain:'Customers making January health resolutions are avoiding their usual spots', dream:'Being the restaurant that supports their goals while still delivering great food', urgency:'January health consciousness peaks in week 1-2 and fades fast  -  position now' },
    February:{ trigger:'Valentines dinner campaign', pain:'Couples who wait too long will not get a table  -  and they know it', dream:'The perfect romantic evening with a reservation locked in and a memorable experience', urgency:'Valentines Day reservations fill 2-3 weeks out  -  couples are deciding right now' },
    March:{ trigger:'St Patricks Day event', pain:'Customers looking for a great place to celebrate are choosing their spot this week', dream:'A packed house full of regulars and new faces celebrating together', urgency:'Events need promotion 2-3 weeks out  -  this week is the window to drive reservations' },
    May:{ trigger:'Mothers Day dining', pain:'Everyone waits until the last week and loses their preferred restaurant', dream:'The restaurant that made Moms day special  -  a story told at every family gathering', urgency:'Mothers Day is the single busiest restaurant day of the year  -  reservations should have started last week' },
    June:{ trigger:'summer patio and events', pain:'Summer is prime dining out season and competitors are capturing the outdoor dining demand', dream:'Being the go-to summer spot for the entire neighborhood', urgency:'June bookings set the tone for the whole summer  -  establish the summer habit now' },
    September:{ trigger:'fall menu launch', pain:'Customers ready for fall comfort food are looking for where to get it first', dream:'Being the restaurant they discover fall at and return to all season', urgency:'First mover advantage in fall menu launches generates the most press and social sharing' },
    November:{ trigger:'Thanksgiving catering and holiday parties', pain:'Companies and families looking for Thanksgiving catering and holiday party venues are deciding right now', dream:'Fully booked through December with corporate and family holiday business locked in', urgency:'Holiday catering and party decisions are made in November  -  companies book in October-November' },
    December:{ trigger:'New Years Eve event', pain:'New Years Eve diners plan 3-6 weeks out and available tables disappear fast', dream:'A packed New Years Eve that generates buzz and new regulars heading into January', urgency:'December 15 is the last realistic date to sell New Years Eve packages  -  promote now' },
  },
  'Nail Salon': {
    February:{ trigger:'Valentines nail art campaign', pain:'Clients wanting festive Valentines nails are booking up the week before  -  slots disappearing fast', dream:'Beautiful Valentines set that turns heads and feels special for the occasion', urgency:'Valentines appointments book 1-2 weeks out  -  this week is the window' },
    April:{ trigger:'spring nail refresh', pain:'Clients tired of dark winter colors ready for bright spring sets and fresh gel', dream:'Spring-ready nails that match the energy of the season', urgency:'Spring refresh demand peaks in April  -  books fill fast once the weather turns' },
    May:{ trigger:'prom and graduation season', pain:'Prom and graduation clients need their look locked in  -  nails are the finishing touch', dream:'A set that photographs perfectly and makes them feel confident at their biggest moment', urgency:'Prom season appointments need to be booked 2 weeks out  -  May is already booking' },
    June:{ trigger:'summer nail season', pain:'Wedding season and summer events mean clients need long-lasting sets that hold up in heat and water', dream:'Perfect summer nails that last through vacations, weddings, and outdoor events', urgency:'Summer nail season books completely  -  June slots are filling as of this week' },
    October:{ trigger:'Halloween nail art season', pain:'Clients who want seasonal Halloween nail art need to book now or miss the fun window', dream:'Unique seasonal nail art that generates compliments and social media saves everywhere they go', urgency:'Halloween nail art books 2-3 weeks out  -  October 15 is the last booking date for pre-Halloween sets' },
    November:{ trigger:'holiday nail season', pain:'Holiday parties and family gatherings are coming and clients want festive nails that last', dream:'Holiday nails that look stunning in every photo from Thanksgiving through New Years', urgency:'Holiday season is the busiest nail period of the year  -  books fill completely by mid-November' },
    December:{ trigger:'New Years Eve glam', pain:'New Years Eve is in weeks and clients who have not booked their glam set are scrambling', dream:'A show-stopping set for the biggest night of the year', urgency:'New Years Eve nail appointments are fully booked by December 20  -  last call' },
  },
  'Auto Repair': {
    January:{ trigger:'winter car safety check', pain:'January cold is exposing every battery weakness, tire issue, and fluid problem that was borderline in fall', dream:'Car running reliably through the rest of winter without a breakdown or expensive emergency', urgency:'January is peak car failure month  -  batteries, coolant, and tires fail most in extreme cold' },
    March:{ trigger:'spring vehicle inspection', pain:'Winter damage  -  potholes, salt corrosion, undercarriage wear  -  is not visible until you look for it', dream:'Full assessment of winter damage with a clear plan to keep the car running perfectly all year', urgency:'Spring inspection now catches small issues before they become summer breakdown emergencies' },
    May:{ trigger:'summer road trip prep', pain:'Summer road trips and family vacations are weeks away and the last thing anyone wants is a breakdown', dream:'Fully inspected and confident vehicle ready for summer driving without worry', urgency:'Memorial Day travel starts in 3 weeks  -  preventive inspections book up fast' },
    August:{ trigger:'back to school vehicle check', pain:'College students and back-to-school families need reliable vehicles heading into the fall semester', dream:'Every family member driving a safe, inspected vehicle for the school year ahead', urgency:'Late August is the last window before school rush  -  slots booking up fast' },
    October:{ trigger:'winter prep inspection', pain:'First cold snap is coming and cars that are not winterized are at risk', dream:'Car fully prepared for winter  -  battery, tires, fluids, belts, and hoses all verified', urgency:'October is the last comfortable window for preventive winter prep before cold makes it urgent' },
    November:{ trigger:'pre-winter safety campaign', pain:'Winter is weeks away and unaddressed car issues become dangerous and expensive in cold weather', dream:'Total peace of mind heading into winter knowing the car is fully winterized and safe', urgency:'November bookings fill fast as everyone realizes winter is actually here  -  call today' },
  },


  'Concrete': {
    March:{ trigger:'spring driveway and patio season', pain:'Winter frost heave and salt damage has cracked and spalled driveways and patios across the neighborhood', dream:'Beautiful functional concrete surfaces that the whole neighborhood notices heading into summer', urgency:'Spring concrete books up fast  -  crews are scheduling 4-6 weeks out starting March 1' },
    April:{ trigger:'spring outdoor living projects', pain:'Homeowners ready to invest in outdoor living spaces for the summer but have not locked in a contractor', dream:'Stunning patio or outdoor living space done before Memorial Day entertaining season', urgency:'April is the last month to guarantee summer completion  -  May start dates risk pushing to fall' },
    May:{ trigger:'pre-summer project close', pain:'Summer is weeks away and homeowners who have not started their driveway or patio project are running out of time', dream:'Project completed and cured before the first summer gathering or party', urgency:'Concrete needs 28 days to cure  -  May 1 is the last start date for Memorial Day completion' },
    August:{ trigger:'fall project booking', pain:'Homeowners wanting a new driveway or patio know fall is coming and projects get harder to schedule', dream:'Beautiful new concrete surfaces installed in the ideal fall weather before winter', urgency:'Fall concrete season books in August  -  September availability is nearly gone already' },
    September:{ trigger:'fall installation prime season', pain:'Fall is the best weather for concrete installation and homeowners who wait lose the ideal window', dream:'New driveway or patio installed in perfect fall curing conditions, ready to impress next spring', urgency:'September and October are the best months for concrete  -  crews book completely by mid-September' },
    October:{ trigger:'last window before winter', pain:'Homeowners who missed spring and summer are facing one final window before ground freeze makes projects impossible', dream:'Project completed before winter shuts everything down  -  not waiting another 6 months', urgency:'October 15 is the practical deadline for concrete installation before freeze  -  book this week' },
  },
  'Marketing Agency': {
    January:{ trigger:'new year new marketing resolution', pain:'Business owners resolving to finally fix their marketing in the new year are evaluating agencies right now', dream:'Starting the year with a real marketing system in place instead of the same guesswork as last year', urgency:'January agency decisions set the tone for the entire year  -  most sign in weeks 1-3' },
    March:{ trigger:'Q1 review and Q2 planning', pain:'Businesses reviewing Q1 results are seeing the gap between where they are and where they want to be', dream:'Clear strategy and execution plan in place before Q2 starts so this quarter is different', urgency:'Q2 starts April 1  -  marketing decisions made in March get implemented in time' },
    April:{ trigger:'spring growth push', pain:'Spring brings more consumer activity and businesses without a marketing system are watching competitors capture it', dream:'Fully booked schedule through the peak spring and summer months', urgency:'Spring marketing results require 4-6 weeks of setup  -  April decisions drive summer outcomes' },
    June:{ trigger:'mid-year marketing audit', pain:'Half the year is gone and revenue is not where the forecast said it would be', dream:'Clear diagnosis of what is not working plus a plan to recover the back half of the year', urgency:'A mid-year pivot in June gives 6 months to recover  -  waiting until Q4 leaves only 3' },
    September:{ trigger:'Q4 revenue push', pain:'Q4 is 3 months away and businesses without a marketing plan will miss the biggest revenue quarter', dream:'Record Q4 revenue driven by campaigns planned and launched in September', urgency:'Q4 marketing must be planned and set up in September to be live when buying activity peaks' },
    October:{ trigger:'year-end push and next year planning', pain:'The year is ending and next year looks identical unless something changes now', dream:'Finishing this year strong and entering next year with a real marketing system already in place', urgency:'December 31 is coming  -  agencies that onboard in October have 3 months to show results before year-end reviews' },
  },
  'Plumbing': {
    January:{ trigger:'winter pipe protection', pain:'January cold is the number one cause of burst pipes and water damage  -  and most homeowners have done nothing', dream:'Complete peace of mind that pipes are protected through the coldest stretch of winter', urgency:'Pipe insulation and inspection must happen before the next cold snap  -  not after the burst' },
    March:{ trigger:'spring plumbing inspection', pain:'Winter freeze-thaw cycles stress pipes in ways that only become obvious as pressure builds in spring', dream:'Full plumbing health check revealing any winter damage before it becomes a water damage claim', urgency:'Spring inspection finds problems early  -  waiting until a leak appears means paying for the damage too' },
    May:{ trigger:'outdoor plumbing prep', pain:'Outdoor spigots, irrigation systems, and hose bibs need to be activated and checked after winter shutoff', dream:'Outdoor water systems running perfectly for the entire summer with no surprises', urgency:'Summer outdoor water use starts Memorial Day  -  problems found now are fixed before you need them' },
    August:{ trigger:'pre-fall plumbing service', pain:'End of summer is prime time for drain buildup, water heater stress, and hidden leaks that worsen in fall', dream:'Fully inspected plumbing system heading into fall with no ticking time bombs', urgency:'Fall plumbing emergencies are the most disruptive  -  catching problems in August is far cheaper' },
    October:{ trigger:'winterization season', pain:'Frost is coming and outdoor plumbing that is not winterized properly will burst and flood in January', dream:'Every outdoor water system properly drained and protected before the first freeze', urgency:'Winterization must happen before first hard frost  -  typically 3-5 weeks away from now' },
    November:{ trigger:'pre-winter inspection', pain:'Winter plumbing emergencies are expensive and the most disruptive  -  and almost all are preventable', dream:'Complete plumbing inspection completed before winter guaranteeing no emergency calls in January', urgency:'November is the last window for preventive winterization  -  December calls are emergency pricing' },
  },
  'Remodeling': {
    January:{ trigger:'new year renovation resolution', pain:'Homeowners who have been planning a renovation for months are finally ready to act in January', dream:'Project started this quarter and finished before the summer entertaining season', urgency:'January is the only month remodelers have open schedules  -  spring is already booking' },
    March:{ trigger:'spring project season', pain:'Spring always brings the renovation urge and the same contractor availability problem', dream:'Project started in April and finished before summer  -  not pushed to fall again', urgency:'March consultations book April start dates  -  wait until April and you are starting in August' },
    June:{ trigger:'summer project planning', pain:'Summer arrived and the kitchen or bathroom they have been putting off is still unfinished', dream:'Project scoped, contracted, and scheduled so fall finishes are possible', urgency:'June planning locks in August-September completion  -  later starts push to next year' },
    August:{ trigger:'fall project window', pain:'The best remodeling window of the year is fall and the contractor schedule is being claimed right now', dream:'Project completed before the holidays  -  guests in a newly renovated space', urgency:'Fall remodeling books in August  -  September consultations often cannot get October start dates' },
    September:{ trigger:'pre-holiday renovation', pain:'Holidays are coming and the kitchen or bathroom they have been putting off is still the same', dream:'Renovated space done and ready for the first holiday gathering', urgency:'October 1 start date is the last realistic date to finish before Thanksgiving' },
    October:{ trigger:'year-end remodel push', pain:'Another year is ending with the same unfinished renovation that was on the list last January', dream:'Project contracted and scheduled so the new year starts with visible progress', urgency:'January and February are the best construction months  -  contracts signed in October get those prime slots' },
  },
  'Gutter Cleaning': {
    March:{ trigger:'spring gutter clearing', pain:'Winter debris, ice dam remnants, and compacted leaves are blocking gutters right before spring rains', dream:'Clear flowing gutters protecting the foundation and siding through every spring rain', urgency:'First spring rains reveal every blocked gutter as water pours over the edge  -  get ahead of it' },
    April:{ trigger:'spring rain prep', pain:'April showers are coming and blocked gutters will overflow and damage fascia, siding, and foundation', dream:'Gutters cleared and flowing perfectly before the heaviest rain months of the year', urgency:'Spring rainy season peaks in April-May  -  gutter cleaning must happen before the first big rain' },
    September:{ trigger:'pre-fall leaf season', pain:'Leaf drop is 4-6 weeks away and gutters that are not cleaned will be completely blocked by November', dream:'Gutters cleared now so leaf season is handled in one cleaning instead of two', urgency:'Pre-leaf cleaning in September means one service handles the whole fall  -  wait and pay for two' },
    October:{ trigger:'peak fall leaf cleanup', pain:'Leaves are falling and gutters are filling up with debris that will freeze and cause ice dams all winter', dream:'Gutters fully cleaned and flowing before first freeze to prevent winter ice dam damage', urgency:'October is the peak cleaning month  -  slots fill completely and often book 3-4 weeks out' },
    November:{ trigger:'post-leaf final cleaning', pain:'Leaves are mostly down and gutters are full  -  one freeze will turn that debris into ice dam material', dream:'Final fall cleaning completed before first freeze guaranteeing ice-free gutters all winter', urgency:'November cleaning must happen before first hard freeze  -  after that it is an ice dam situation' },
    December:{ trigger:'holiday ice dam prevention', pain:'Ice dams forming in gutters during the coldest month can cause thousands in water damage', dream:'Gutters cleared and protected going into the deepest cold with no leak risk', urgency:'December ice dam prevention is last-minute but critical  -  available slots are extremely limited' },
  },
  'Pressure Washing': {
    January:{ trigger:'winter prep booking', pain:'Properties getting grimy from winter weather and no plan to address it', dream:'Clean property lined up for the first warm day of spring', urgency:'Best pressure washing companies fill their spring schedules in January and February' },
    February:{ trigger:'early spring booking', pain:'Another spring scramble to find a pressure washer when everyone wants one at the same time', dream:'First pick of scheduling slots and guaranteed availability for spring clean-up', urgency:'Spring slots book out completely  -  call now or wait until summer' },
    March:{ trigger:'spring exterior refresh', pain:'House driveway and deck covered in a winters worth of grime mold and algae', dream:'Property looking brand new before the first outdoor gathering of the season', urgency:'Spring pressure washing slots fill in the first 2 weeks of March every year' },
    April:{ trigger:'spring clean-up peak', pain:'Winter algae and mold already turning the driveway green', dream:'Every surface sparkling clean as neighbors start spending time outside', urgency:'April is the peak spring booking month  -  availability drops weekly' },
    May:{ trigger:'pre-summer exterior cleaning', pain:'Dirty house exterior stained deck and grimy patio making entertaining embarrassing', dream:'Outdoor living spaces that look as good as the inside of the house', urgency:'Deck and patio cleaning needs to cure before heavy summer use  -  do it in May' },
    June:{ trigger:'summer mold prevention', pain:'Mold and mildew getting worse with summer humidity', dream:'Clean exterior that stays cleaner longer with proper summer treatment', urgency:'June humidity accelerates mold  -  cleaning now prevents retreating in August' },
    July:{ trigger:'mid-summer refresh', pain:'Summer foot traffic and outdoor entertaining leaving everything dirty', dream:'Clean outdoor spaces for the rest of summer entertaining season', urgency:'Midsummer slots are limited  -  crews at peak capacity' },
    August:{ trigger:'late summer cleaning', pain:'End of summer grime buildup before fall entertaining begins', dream:'Fresh clean surfaces going into the best outdoor weather of the year', urgency:'August slots book fast  -  September is the second peak season' },
    September:{ trigger:'fall prep cleaning', pain:'Summer has left a layer of algae pollen and grime on everything', dream:'Fresh clean surfaces going into fall entertaining season', urgency:'Fall is the second-best time to pressure wash  -  before leaves drop and coat everything again' },
    October:{ trigger:'pre-winter surface treatment', pain:'Mold and algae left on surfaces will freeze and cause damage all winter', dream:'All surfaces properly cleaned and treated before freeze-thaw season', urgency:'Last clean of the season  -  mold left through winter causes double the damage' },
    November:{ trigger:'final season cleaning', pain:'One last chance to protect surfaces before winter sets in', dream:'Surfaces sealed and clean heading into winter with no regrets', urgency:'November cold makes pressure washing harder  -  act before temperatures drop below 40' },
    December:{ trigger:'new year prep', pain:'Starting the new year with a grimy property when a clean start costs less than you think', dream:'Clean property going into the new year with early spring booking locked in', urgency:'December deals and January availability  -  the easiest time to book before spring rush' },
  },
  'Pest Control': {
    January:{ trigger:'winter rodent control', pain:'Mice and rats already inside looking for warmth and food through the coldest months', dream:'Mouse-free home through winter  -  no traps no droppings no stress', urgency:'Winter rodent populations double indoors by February without treatment' },
    February:{ trigger:'pre-season perimeter treatment', pain:'Spring is coming and with it every ant spider and insect that spent winter hiding in the walls', dream:'Barrier in place before bugs wake up  -  not reacting after they are already inside', urgency:'Pre-emergent pest treatment must happen before soil temps hit 45F  -  usually 4-6 weeks away' },
    March:{ trigger:'spring pest prevention', pain:'Every spring the same battle  -  ants in the kitchen spiders in the basement stink bugs everywhere', dream:'No bugs inside this spring  -  guaranteed', urgency:'March treatment prevents the entire spring and summer cycle  -  waiting until May means fighting all season' },
    April:{ trigger:'ant and spider season', pain:'Ants finding every crack and spiders taking over the garage and basement', dream:'Protected home where bugs stay outside where they belong', urgency:'April colonies are small and easy to treat  -  wait until June and treatment takes twice as long' },
    May:{ trigger:'mosquito and tick season', pain:'Kids and pets cannot enjoy the backyard because of mosquitoes and the tick risk is real', dream:'Backyard that is safe and comfortable for the whole summer', urgency:'Mosquito season peaks in 4-6 weeks  -  treatment needs time to establish before peak activity' },
    June:{ trigger:'summer pest peak', pain:'Peak pest season and currently no protection in place', dream:'Protected home and yard through the entire summer', urgency:'June is peak pest activity  -  unprotected homes see 3x the infestation rate by August' },
    July:{ trigger:'mid-summer pest protection', pain:'Summer heat driving more insects inside looking for cool and water', dream:'Home that is a barrier not a welcome mat for summer pests', urgency:'July is the peak of mosquito wasp and ant activity  -  protection now covers the rest of summer' },
    August:{ trigger:'stink bug and spider prevention', pain:'Stink bugs and spiders move inside as temperatures drop  -  it starts in September', dream:'Pre-treatment that stops the fall invasion before it starts', urgency:'Stink bug prevention must happen in August  -  September is too late to prevent entry' },
    September:{ trigger:'fall perimeter treatment', pain:'Fall is when mice spiders and stink bugs come inside looking for warmth', dream:'Sealed protected home that pests cannot penetrate this fall and winter', urgency:'Fall treatment window is 6 weeks  -  after first frost it is reactive not preventive' },
    October:{ trigger:'winter rodent prevention', pain:'Mice and rats move inside when temperatures drop and they are already scouting entry points', dream:'Mouse-free winter  -  no traps no droppings no stress', urgency:'Rodent exclusion must happen before first hard frost when they commit to indoor living' },
    November:{ trigger:'pre-winter sealing', pain:'Every gap and crack in the home exterior is a potential winter pest entry point', dream:'Sealed home that stays pest-free through the coldest months', urgency:'November is the last month before ground freeze makes exterior treatment less effective' },
    December:{ trigger:'holiday pest prevention', pain:'House guests arriving and the last thing you need is a mouse or roach sighting', dream:'Clean pest-free home through the entire holiday entertaining season', urgency:'December treatment protects through the holidays and sets up a clean start to the new year' },
  },
  'Painting': {
    January:{ trigger:'interior painting season', pain:'House interior looking dingy and dated going into another year without change', dream:'Fresh updated interior ready for the new year at the best price of the year', urgency:'January is slowest month for painters  -  lowest prices and most flexible scheduling of the year' },
    February:{ trigger:'pre-spring interior refresh', pain:'Same dated colors and scuffed walls going into spring when guests start visiting', dream:'Fresh interior completed before the spring social season begins', urgency:'Winter scheduling fills up fast once word gets out about January pricing' },
    March:{ trigger:'spring exterior prep booking', pain:'Exterior paint peeling and fading after another winter  -  curb appeal suffering', dream:'Fresh exterior ready as neighbors start spending time outside and noticing everything', urgency:'Exterior painting season books up completely by April  -  March is the last chance for good scheduling' },
    April:{ trigger:'exterior painting season opens', pain:'Peeling chipping exterior that looks worse every day as spring sun reveals the damage', dream:'Beautiful curb appeal that makes the property look like the best on the street', urgency:'April through September is the exterior painting window  -  prime slots fill fast' },
    May:{ trigger:'exterior peak booking', pain:'That curb appeal project that gets pushed every year while the paint keeps peeling', dream:'Stunning exterior that makes neighbors stop and ask who did the work', urgency:'May is peak booking for premium painters  -  availability drops every week' },
    June:{ trigger:'summer exterior painting', pain:'Long sunny days perfect for exterior work and not taking advantage of the weather', dream:'Exterior completed in ideal conditions with fast dry times and perfect results', urgency:'June scheduling is competitive  -  crews book 3-4 weeks out minimum' },
    July:{ trigger:'mid-summer interior cooling', pain:'Too hot to enjoy outdoor projects but indoor painting is comfortable all summer', dream:'Fresh interior rooms completed during the heat without disrupting summer life', urgency:'Interior painters have summer availability gaps  -  fastest scheduling of the season' },
    August:{ trigger:'back to school refresh', pain:'Kids going back to school and the house needs a reset after a summer of activity', dream:'Refreshed home interior ready for fall routines and entertaining season', urgency:'August interior projects can finish before September school and activity schedules get hectic' },
    September:{ trigger:'fall exterior painting last call', pain:'Last chance to get exterior painting done before cold weather makes it impossible', dream:'Exterior completed in perfect fall temperatures before the season closes', urgency:'Exterior painting window closes when temps drop below 50F consistently  -  usually mid-October' },
    October:{ trigger:'fall color refresh', pain:'Interior looking dated and tired as the entertaining season begins', dream:'Fresh interior colors that make the home feel new for fall and holiday season', urgency:'October interior projects can finish before holiday decorating season  -  prime time slots filling now' },
    November:{ trigger:'pre-holiday interior painting', pain:'Hosting holidays in a home that needs paint but running out of time to do something about it', dream:'Fresh painted home ready to impress guests through the entire holiday season', urgency:'November 1 start is the last realistic date to finish before Thanksgiving hosting begins' },
    December:{ trigger:'new year prep painting', pain:'Another year of looking at the same dingy walls and promising to do something about it', dream:'Starting the new year with a fresh painted home and that project finally done', urgency:'December-January is the best time to book  -  slowest season means best pricing and fastest start' },
  },
  'Landscaping': {
    January:{ trigger:'spring landscape design booking', pain:'Another year of the same boring landscape while neighbors keep improving theirs', dream:'Landscape design locked in and materials ordered before spring rush', urgency:'Top landscaping designers book out 3-4 months in advance  -  January secures spring installation' },
    February:{ trigger:'spring planting prep', pain:'Spring is 6-8 weeks away and no plan in place for landscape improvements', dream:'Beautiful spring landscape that looks intentional not accidental', urgency:'Soil prep and design must happen in late winter for spring installation to go smoothly' },
    March:{ trigger:'spring landscape installation', pain:'Property that looks bare and neglected as everything starts greening up around it', dream:'First spring with a properly designed and planted landscape that makes visitors stop', urgency:'Spring planting window is short  -  top landscapers fill up within 2 weeks of opening their schedule' },
    April:{ trigger:'spring landscape peak', pain:'Outdoor space that is not ready for the outdoor entertaining season starting now', dream:'Fully landscaped yard ready for spring gatherings and neighborhood visibility', urgency:'April is peak season  -  every week you wait is another week without enjoying your outdoor space' },
    May:{ trigger:'outdoor living season prep', pain:'Summer is coming and the outdoor space is still not what you want it to be', dream:'Outdoor living area that becomes the place everyone wants to spend time', urgency:'May installations need to establish before summer heat  -  timing matters for survival rates' },
    June:{ trigger:'summer landscape maintenance', pain:'Spring plantings getting overgrown and the property losing the clean look it had', dream:'Maintained landscape that looks professionally managed all summer long', urgency:'June growth is aggressive  -  maintenance now prevents August recovery work' },
    July:{ trigger:'summer drought management', pain:'New or existing plantings struggling in summer heat without proper care', dream:'Thriving landscape through the hottest months with the right watering and treatment plan', urgency:'July heat stress kills plants that survive everything else  -  intervention now saves the investment' },
    August:{ trigger:'fall landscape planning', pain:'Disappointed in how the landscape looked all summer and ready to do something about fall', dream:'Fall landscape that peaks in September and October when everyone is outside', urgency:'Fall planting materials sell out fast  -  August booking secures the best selection' },
    September:{ trigger:'fall landscape installation', pain:'Fall is the best time to plant and another year is passing without capitalizing on it', dream:'New trees shrubs and plantings that will establish all fall and explode in spring', urgency:'Fall planting window is September through mid-October  -  miss it and wait until spring' },
    October:{ trigger:'fall cleanup and winterization', pain:'Landscape heading into winter without proper cleanup and protection', dream:'Property looking clean going into winter with everything protected for spring return', urgency:'Hard frost deadline  -  winterization must happen before the first freeze damages unprotected plantings' },
    November:{ trigger:'hardscape and design planning', pain:'Another winter without making progress on the hardscape or design projects that keep getting pushed', dream:'Spring ready to install a project that has been designed all winter', urgency:'Winter is design season  -  contractors available now who will be completely booked by March' },
    December:{ trigger:'spring project early booking', pain:'Spring always comes and the landscape is never what you imagined it could be', dream:'Spring 2025 being the year the landscape finally looks like the vision', urgency:'Best landscapers book their spring calendar completely before January 1  -  book now or wait until fall' },
  },
  'Pool Service': {
    January:{ trigger:'early season pool opening booking', pain:'Pool opening gets pushed every year and the first warm day is always a scramble', dream:'Pool open and ready on the first warm day without a single phone call or scramble', urgency:'Top pool service companies fill their spring opening schedule in January and February' },
    February:{ trigger:'spring pool prep', pain:'Pool that sat all winter without proper care will take weeks to get swim-ready', dream:'Pool opening that takes days not weeks because prep work is done right', urgency:'Spring opening schedule is booking now  -  wait until April and you will wait in line' },
    March:{ trigger:'spring pool opening', pain:'First warm week of spring revealing a green swampy mess that was a pool', dream:'Crystal clear pool ready to swim from the first warm weekend of the year', urgency:'March openers finish faster and pay less than April and May when everyone calls at once' },
    April:{ trigger:'peak pool opening', pain:'Every other family on the block has their pool open while yours is still covered', dream:'Swim-ready pool before spring breaks and early season gatherings', urgency:'April is the single busiest month for pool opening  -  booking slots are filling daily' },
    May:{ trigger:'pre-summer pool service enrollment', pain:'Summer is 4 weeks away and pool maintenance plan is not in place', dream:'Perfectly balanced pool maintained all summer without lifting a finger', urgency:'Summer maintenance plans fill up in May  -  late bookers get leftover time slots' },
    June:{ trigger:'summer pool maintenance', pain:'Summer pool ownership is supposed to be fun but chemicals and green water are exhausting', dream:'Pool that is always swim-ready when you want it without doing anything yourself', urgency:'June is when green water problems peak  -  weekly service now prevents costly emergency treatments' },
    July:{ trigger:'peak summer pool care', pain:'Pool that turns green in 3 days every time you skip a treatment', dream:'Crystal clear pool through the entire summer that your kids and guests love', urgency:'July chemical demand is highest of the year  -  service companies prioritize enrolled customers' },
    August:{ trigger:'late summer pool perfection', pain:'Summer slipping away and pool still not running the way you want it', dream:'Perfect pool through August and September  -  the best months for swimming', urgency:'August treatments protect pool equipment through the final heavy-use weeks of summer' },
    September:{ trigger:'fall pool transition', pain:'Pool owners who skip fall prep pay double for spring opening', dream:'Easy spring opening because fall closing was done properly', urgency:'September closing window  -  pools left open through first freeze sustain equipment damage' },
    October:{ trigger:'fall pool closing', pain:'First freeze is 4-6 weeks away and pool is not yet winterized', dream:'Pool properly closed and protected so it opens perfectly next spring', urgency:'Freeze damage to unprotected pool equipment costs $2,000 to $8,000 to repair  -  close before the frost' },
    November:{ trigger:'winterization', pain:'Pool not properly winterized and winter is here', dream:'Equipment fully protected and pool ready to open quickly next spring', urgency:'November is the final closing window  -  pools that freeze without proper winterization have serious damage' },
    December:{ trigger:'next season early enrollment', pain:'Another summer of green water and weekend pool maintenance ruining the enjoyment', dream:'Next summer with a perfectly maintained pool that someone else handles completely', urgency:'Early enrollment pricing available through December 31  -  locks in best rates before spring increases' },
  },
  'Electrician': {
    January:{ trigger:'electrical safety inspection', pain:'Older home with original wiring that has never been professionally inspected  -  this is not fine', dream:'Full safety assessment and clear understanding of exactly where the electrical system stands', urgency:'January is the slowest month for electricians  -  fastest scheduling and best availability of the year' },
    February:{ trigger:'winter electrical load issues', pain:'Circuit breakers tripping from winter heating loads and holiday electronics still connected', dream:'Electrical system properly sized for actual usage with no more nuisance trips', urgency:'Winter peak demand reveals overloaded circuits  -  ignoring it is a fire risk not an inconvenience' },
    March:{ trigger:'spring home improvement electrical', pain:'Home improvement season starting and every project seems to need electrical work', dream:'All planned projects properly permitted and safely wired before contractors arrive', urgency:'Electricians fill spring schedules in March  -  project delays from unavailable electricians are expensive' },
    April:{ trigger:'panel upgrade season', pain:'Old panel with fuses or outdated breakers that cannot support modern electrical loads', dream:'New panel that handles everything  -  EV charger home office and all the rest safely', urgency:'Panel upgrades take 4-6 weeks with permits  -  book in April for spring completion' },
    May:{ trigger:'outdoor electrical and lighting', pain:'Outdoor outlets fixtures and lighting that are either missing or unsafe', dream:'Outdoor space with proper GFCi protected outlets and beautiful landscape lighting', urgency:'Summer entertaining season starts soon  -  outdoor electrical must be done before the gatherings start' },
    June:{ trigger:'summer AC electrical support', pain:'Air conditioning running on circuits that were not designed for the load', dream:'Dedicated properly sized circuits for all major appliances running safely all summer', urgency:'Summer peak electrical load is coming  -  overloaded circuits in summer heat are a fire hazard' },
    July:{ trigger:'generator and backup power', pain:'Power outages in summer storms leaving family without AC and food spoiling', dream:'Whole-home generator or transfer switch that kicks in automatically when power goes out', urgency:'Hurricane and storm season is peak generator installation demand  -  book now or wait months' },
    August:{ trigger:'EV charger installation', pain:'Electric vehicle sitting in the garage charging on a regular outlet taking 3 days to charge', dream:'Level 2 charger installed and car fully charged every morning without thinking about it', urgency:'EV charger installations are booking 3-4 weeks out as adoption accelerates  -  schedule now' },
    September:{ trigger:'fall electrical prep', pain:'Heading into winter with electrical issues that cold weather and holiday loads will expose', dream:'Electrical system ready for winter loads holiday lighting and indoor living season', urgency:'Fall is the last comfortable weather window for exterior electrical work before winter' },
    October:{ trigger:'holiday lighting circuits', pain:'Holiday lighting tripping breakers and burning up extension cords every December', dream:'Dedicated outdoor circuits that handle full holiday lighting displays without issues', urgency:'October installation means everything is ready before Thanksgiving  -  November bookings are always rushed' },
    November:{ trigger:'winter electrical safety', pain:'Older home heading into winter with unresolved electrical concerns', dream:'Complete peace of mind that the electrical system is safe through the coldest darkest months', urgency:'November is the last pre-winter booking window before December holiday emergency premium rates' },
    December:{ trigger:'new year electrical planning', pain:'Another year of putting off the panel upgrade EV charger or whole-home generator project', dream:'Starting the new year with the project planned permitted and scheduled to start in January', urgency:'January is the only month when premium electricians have open schedule  -  book it now' },
  },
  'Window Cleaning': {
    January:{ trigger:'winter window cleaning', pain:'Windows covered in winter grime and condensation stains making the house feel darker', dream:'Clean clear windows that let in maximum light through the short winter days', urgency:'January is slowest month  -  easiest scheduling and best pricing of the year' },
    February:{ trigger:'pre-spring cleaning', pain:'Winter leaving film and calcium deposits that dull every room despite sunshine', dream:'Crystal clear windows ready to make the house feel bright as days get longer', urgency:'Spring cleaning rush starts in March  -  February pricing is significantly better' },
    March:{ trigger:'spring clean-up window washing', pain:'Winter film on windows makes every room feel darker than it should', dream:'Sparkling clean windows for the first spring days when light finally feels like it is back', urgency:'Spring window cleaning books up faster than any other season  -  slots fill in days' },
    April:{ trigger:'spring exterior window cleaning', pain:'Pollen season coating every window the moment they get cleaned', dream:'Professional treatment that repels pollen and keeps windows cleaner between visits', urgency:'April pollen peaks in 2-3 weeks  -  professional treatment now protects through peak season' },
    May:{ trigger:'pre-summer exterior wash', pain:'Summer is about to start and windows are the first thing visitors notice from outside', dream:'Property with gleaming windows that make the entire exterior look well-maintained', urgency:'Summer scheduling fills fast as outdoor season begins  -  May is the last easy booking window' },
    June:{ trigger:'summer window maintenance', pain:'Summer rain and dust cycling constantly leaving windows streaky and spotted', dream:'Clean windows maintained through the entire summer entertaining and outdoor season', urgency:'Summer maintenance plans book out  -  single-service clients get leftover slots' },
    July:{ trigger:'mid-summer clarity', pain:'Mid-summer haze film and water spots dulling every view from inside the house', dream:'Crystal clear views of the garden and outdoor spaces through every window', urgency:'July water spotting compounds quickly  -  each rain cycle adds more mineral deposits' },
    August:{ trigger:'back to school refresh', pain:'House looking tired after a summer of outdoor activity and traffic', dream:'Fresh clean windows that make the whole house feel reset heading into fall', urgency:'August scheduling is competitive  -  best crews book first' },
    September:{ trigger:'fall window cleaning', pain:'Fall is peak visibility season but summer has left windows dirty for it', dream:'Crystal clear windows for fall light which is the most beautiful light of the year', urgency:'Fall window cleaning is second-peak season  -  September slots go fast' },
    October:{ trigger:'pre-holiday cleaning', pain:'Holiday season coming and windows are the first impression guests get from outside', dream:'Gleaming windows that make the home look its very best through the entertaining season', urgency:'October cleaning is the last before holiday season  -  November slots are holiday rush premium' },
    November:{ trigger:'pre-winter cleaning', pain:'Last chance to get clean windows before winter weather makes outdoor cleaning difficult', dream:'Clean windows that stay cleaner longer with proper winter treatment', urgency:'Cold weather makes window cleaning harder and less effective  -  do it before temperatures drop below 40' },
    December:{ trigger:'holiday season sparkle', pain:'Holiday lights and decorations deserve spotless windows to show them off properly', dream:'Beautifully clean windows that make holiday lighting sparkle and glow from inside and out', urgency:'December scheduling is extremely limited  -  holiday clean must be booked now to guarantee a slot' },
  },
  'General Contractor': {
    January:{ trigger:'new year renovation planning', pain:'Homeowners who have been planning a project for months are finally ready to act in January', dream:'Project started this quarter and finished before summer entertaining season arrives', urgency:'January is the only month GCs have open schedules  -  spring is already booking up fast' },
    March:{ trigger:'spring project season', pain:'Spring always brings the renovation urge and the same contractor availability problem every year', dream:'Project started in April and finished before summer  -  not pushed back to fall again', urgency:'March consultations book April start dates  -  wait until April and you are starting in August' },
    June:{ trigger:'summer project planning', pain:'Summer arrived and the kitchen, bathroom, or addition that was planned never got started', dream:'Project scoped, contracted, and scheduled so fall completion is still possible', urgency:'June planning locks in August-September completion  -  later starts push to next year' },
    August:{ trigger:'fall project booking window', pain:'The best construction window of the year is fall and contractor schedules are being claimed right now', dream:'Project completed before the holidays  -  guests in a newly renovated or finished space', urgency:'Fall projects book in August  -  September consultations often cannot get October start dates' },
    September:{ trigger:'pre-holiday renovation', pain:'Holidays are coming and the project that has been put off is still the same', dream:'Renovated space done and ready for the first holiday gathering this year', urgency:'October 1 start date is the last realistic date to finish before Thanksgiving' },
    October:{ trigger:'year-end project contracting', pain:'Another year is ending with the same unfinished project that was on the list last January', dream:'Project contracted and scheduled so the new year starts with visible measurable progress', urgency:'January and February are the best construction months  -  contracts signed in October get prime slots' },
  },
};

// Fill in any missing months with a sensible, CUSTOMER-FACING default.
// IMPORTANT: this fallback must speak to the end customer's problem with their
// [niche] need (homeowner/consumer pain), never to the trade business's own
// marketing/lead-gen problem -- that mismatch previously leaked B2B copy into
// B2C campaigns whenever a niche/month combo was missing from the hand-written
// SEASONAL data above.
const ALL_NICHES = Object.keys(SEASONAL);
MONTHS.forEach(m => {
  ALL_NICHES.forEach(n => {
    if (!SEASONAL[n][m]) {
      const service = n.toLowerCase();
      SEASONAL[n][m] = {
        trigger: `${m.toLowerCase()} ${service} service push`,
        pain: `Most homeowners do not think about ${service} until something goes wrong, and ${m} is exactly when small issues turn into expensive emergencies`,
        dream: `${service.charAt(0).toUpperCase() + service.slice(1)} fully handled this ${m} with zero surprises and zero emergency calls`,
        urgency: `${m} appointment slots fill quickly once the season gets busy  -  booking now means getting a convenient time instead of whatever is left`,
      };
    }
  });
});

// ─── OFFER SUGGESTIONS by niche ──────────────────────────────────────────────
const OFFER_SUGGESTIONS: Record<string, Record<string, string[]>> = {
  'free-gift': {
    'Tree Service': [
      'Free stump grinding ($350 value) with every tree removal booked this month  -  first 10 clients',
      'Free lot line clearing (up to 50 feet) with any removal over $800  -  limited to 8 clients',
      'Free wood chip delivery (1 truckload, $200 value) with any pruning service booked this week',
      'Free emergency priority status for 12 months (jump the queue on storm calls) with any service over $500',
      'Free property assessment and written hazard report ($150 value) for every new client this month',
    ],
    'Lawn Care': [
      'Free fall aeration ($200 value) with any annual lawn program signed this month',
      'Free first fertilization treatment ($120 value) for new clients who sign before the end of the month',
      'Free weed pre-emergent treatment ($150 value) with spring clean-up service booked this week',
      'Free lawn health assessment and written report ($100 value) for every new program client',
      'Free overseeding of bare patches (up to 500 sqft) with fall aeration booked this September',
    ],
    'Roofing': [
      'Free gutters cleaned ($250 value) with any roof repair or replacement booked this month',
      'Free chimney inspection and written report ($175 value) with any roofing work this fall',
      'Free ridge vent installation ($300 value) with any full replacement scheduled this month',
      'Free 5-year maintenance inspection plan ($400 value) with every full replacement this season',
      'Free ice and water shield upgrade on first 6 feet ($200 value) on all replacements booked in November',
    ],
    'HVAC': [
      'Free air quality assessment and written report ($150 value) with any tune-up or service booked this month',
      'Free smart thermostat installation ($250 value) with any system replacement scheduled in April',
      'Free duct leakage test ($200 value) with spring AC tune-up booked before May 1',
      'Free UV light sanitizer installation ($300 value) with fall furnace replacement this season',
      'Free 1-year maintenance plan ($350 value) with any new system installation this month',
    ],
    'Pressure Washing': [
      'Free deck sealing treatment ($150 value) with house washing booked this month',
      'Free driveway treatment (sealing or degreasing, $120 value) with any complete exterior package',
      'Free gutter flush-out ($100 value) with any house or roof washing service this fall',
      'Free fence washing ($150 value) with any driveway and house wash combo booked this month',
      'Free concrete degreasing treatment ($100 value) with any driveway service booked this week',
    ],
    'Pest Control': [
      'Free mosquito yard treatment ($150 value) with any new quarterly protection plan this spring',
      'Free rodent inspection and entry point report ($175 value) with first quarterly service',
      'Free spider web removal and exterior treatment ($100 value) with any pest control service this month',
      'Free termite inspection and report ($200 value) for every new client who signs a plan this month',
      'Free fire ant treatment ($125 value) with any lawn pest control plan signed in May or June',
    ],
    
    
    'Landscaping': [
      'Free mulch application (up to 3 yards, $200 value) with any landscape design or installation project',
      'Free irrigation system check and winterization ($150 value) with any fall landscape service',
      'Free seasonal planting plan and consultation ($175 value) with any landscaping service this month',
      'Free edging and border installation (up to 50 linear feet, $200 value) with any lawn or landscape project',
    ],
    'Painting': [
      'Free color consultation and sample wall painting ($150 value) for every new exterior project',
      'Free garage floor epoxy coating ($300 value) with any complete exterior house painting project',
      'Free deck staining (up to 200 sqft, $250 value) with any house exterior paint job booked this month',
      'Free trim and shutters included at no extra charge ($400 value) on all full exterior projects this month',
    ],
    'Pool Service': [
      'Free pool opening or closing ($200 value) with any annual maintenance plan signed this month',
      'Free chemical balance kit and 60-day supply ($150 value) for every new service client',
      'Free equipment inspection and written health report ($175 value) for first 12 new clients',
      'Free algae treatment and scrub ($125 value) with first monthly service visit this season',
    ],
    'Nail Salon': [
      'Free nail art design on 2 accent nails ($30 value) with any full set booked this month',
      'Free gel top coat upgrade ($20 value) on any manicure booked this week  -  first 15 clients',
      'Free paraffin wax treatment ($35 value) with any full set or pedicure combo booked this month',
      'Free nail repair kit to take home ($25 value) with every full set booked before end of month',
      'Free cuticle treatment and hand massage ($30 value) with any booking this week',
    ],
    'Auto Detailing': [
      'Free engine bay cleaning ($75 value) with any full interior and exterior detail booked this month',
      'Free tire shine and trim dressing ($50 value) with any wash and wax package this week',
      'Free headlight restoration ($80 value) with any full detail booked before end of month  -  first 8 clients',
      'Free clay bar decontamination treatment ($100 value) with any paint correction or ceramic coating',
      'Free odor elimination treatment ($75 value) with any full interior detail booked this month',
    ],
    'Concrete': [
      'Free expansion joint sealing ($150 value) with any driveway or patio installation this month',
      'Free concrete sealer application ($200 value) with any new pour booked before end of month',
      'Free saw-cut pattern upgrade ($300 value) on any stamped concrete patio booked this season',
      'Free retaining wall cap stones ($250 value) with any retaining wall project over $2,000',
      'Free colored concrete upgrade on 200 sqft ($400 value) for projects booked this month',
    ],
    'Marketing Agency': [
      'Free competitor analysis report ($500 value) for every business that books a discovery call this month',
      'Free 30-day social media calendar ($300 value) with any marketing strategy session booked this week',
      'Free website audit and written recommendations ($400 value)  -  first 8 businesses this month',
      'Free 90-day content strategy document ($500 value) for new clients who sign before end of month',
      'Free GHL setup and first automation built ($600 value) for any client who signs a 3-month agreement',
    ],
    'Plumbing': [
      'Free water heater flush and sediment inspection ($150 value) with any plumbing service this month',
      'Free whole-home water pressure test and report ($125 value)  -  first 12 clients this month',
      'Free drain camera inspection on one line ($200 value) with any drain service booked this week',
      'Free toilet tune-up on 2 toilets ($100 value) with any plumbing service over $300 this month',
      'Free main shut-off valve assessment ($125 value) for every new client who books this month',
    ],
    'Remodeling': [
      'Free 3D design rendering ($500 value) with any signed kitchen or bathroom contract this month',
      'Free material upgrade  -  cabinet hardware, tile, or fixtures up to $400  -  on any project started this month',
      'Free project scope and timeline document ($300 value)  -  first 8 consultations this month',
      'Free smart home device installation package ($350 value) with any remodel over $8,000 signed this quarter',
      'Free before/after professional photography ($400 value) on any completed project booked this month',
    ],
    
    'Electrician': [
      'Free whole-home safety inspection and written report ($200 value) for first 10 clients this month',
      'Free smart switch installation (2 switches, $150 value) with any electrical service over $400',
      'Free panel inspection and written assessment ($175 value) for every new client who books this month',
      'Free outdoor outlet installation ($200 value) with any interior electrical project over $500',
    ],
    'Window Cleaning': [
      'Free screen cleaning (all screens, $100 value) with any full window cleaning package',
      'Free track and sill cleaning included at no charge ($75 value) on all residential packages this month',
      'Free solar panel rinse ($150 value) with any window cleaning service booked this quarter',
    ],
    'Gutter Cleaning': [
      'Free gutter guard estimate and property evaluation ($150 value) with any cleaning service',
      'Free minor repair on up to 3 joints or hangers ($100 value) with any cleaning booked this fall',
      'Free downspout flush and inspection ($75 value) included with every cleaning this month',
    ],
    'General Contractor': [
      'Free permit research and written scope of work ($300 value) for first 8 project inquiries this month',
      'Free materials estimate and written bid ($250 value) with no obligation  -  first 10 clients',
      'Free project timeline and phasing plan ($200 value) with any signed contract this quarter',
    ],
    'default': [
      'Free consultation and written assessment report ($150 value) for first 10 new clients this month',
      'Free add-on service ($200 value) with any complete package booked before end of month',
      'Free 90-day follow-up inspection ($100 value) with any service over $500 this month',
      'Free priority scheduling for 12 months with any annual service agreement signed this week',
    ],
  },
  'giveaway': {
    'Tree Service': [
      'Grand Prize: Complete tree removal up to 60ft ($1,500 value)  -  FREE. Enter by sharing our page and tagging a neighbor.',
      'Grand Prize: Full property tree and stump removal package ($2,000 value)  -  FREE for 30 days',
      'Grand Prize: Yard transformation  -  remove up to 3 trees, grind stumps, chip debris ($1,800 value)',
      'Grand Prize: Complete hazard tree removal and lot line clearing ($1,600 value)  -  no purchase required to enter',
    ],
    'Lawn Care': [
      'Grand Prize: Full season lawn program (12 months, $1,200 value)  -  completely FREE. Enter by commenting your biggest lawn problem.',
      'Grand Prize: Complete yard transformation  -  aerate, overseed, fertilize, weed control for 1 full year ($1,400 value)',
      'Grand Prize: Professional lawn makeover including sod installation for damaged areas ($1,500 value)',
    ],
    'Roofing': [
      'Grand Prize: Complete roof inspection, minor repair, and gutter cleaning ($800 value)  -  FREE',
      'Grand Prize: Full roof repair up to $1,000 in labor  -  winner selected from all entries this month',
      'Grand Prize: New roof for the winner  -  $3,000 credit toward any full replacement booked this quarter',
    ],
    'Plumbing': [
      'Grand Prize: Complete plumbing inspection + water heater replacement if needed (up to $1,200 value)  -  FREE',
      'Grand Prize: Whole-home re-pipe for winner selected from all entries  -  $3,000 credit toward any project',
    ],
    'Remodeling': [
      'Grand Prize: Complete bathroom renovation for one winner ($5,000 value)  -  enter to win this month',
      'Grand Prize: Kitchen update package (cabinets, countertops, hardware, $3,500 value)  -  FREE for one winner',
    ],
    'Landscaping': [
      'Grand Prize: Complete front yard transformation  -  new plantings, mulch, edging, sod ($1,800 value)',
      'Grand Prize: Professional landscape design and full installation ($2,000 value)  -  one winner per month',
    ],
    'Painting': [
      'Grand Prize: Complete exterior house painting ($2,500 value)  -  FREE for one winner selected this month',
      'Grand Prize: Full interior repaint (up to 5 rooms, $1,800 value)  -  enter by sharing our before/after',
    ],
    'Electrician': [
      'Grand Prize: EV charger installation + panel upgrade ($2,000 value)  -  FREE for one winner',
      'Grand Prize: Full home electrical safety upgrade and smart device package ($1,500 value)',
    ],
    'default': [
      'Grand Prize: Complete service package ($1,000 value)  -  FREE for one winner this month',
      'Grand Prize: 1 full year of service ($1,200 value)  -  enter to win, no purchase required',
      'Grand Prize: Full premium service package ($800 value)  -  share to enter, winner announced in 30 days',
    ],
  },
  'deep-discount': {
    'Tree Service': [
      '40% off tree removal for the next 10 clients  -  crews available now, fill the schedule',
      '$200 off any job over $800  -  use code AUGUST when calling or booking online',
      'Buy 2 tree removals get the 3rd free  -  property cleanup special, first 8 clients only',
      '50% off stump grinding with any tree removal booked this week  -  limited crew availability',
    ],
    'Lawn Care': [
      'First month free on any annual lawn program  -  no contracts, cancel anytime',
      '3 months for the price of 2 on any lawn program signed before end of month',
      '$150 off your first season program  -  new clients only, first 12 to respond',
      '50% off fall aeration  -  crews have openings this week and next week only',
    ],
    'Roofing': [
      '$500 off any full replacement booked and deposited before end of month',
      'Free gutters included with any roof replacement  -  $400 value, this month only',
      '0% financing for 18 months on any replacement over $8,000  -  approved and scheduled in 72 hours',
      '15% off all repairs booked before September 30  -  beat the fall rush pricing',
    ],
    'Plumbing': [
      '$150 off any repair over $400  -  book before end of month, crews available this week',
      '50% off water heater replacement labor  -  parts at cost, we absorb the labor discount for 8 clients',
      'Free camera inspection included ($200 value) with any sewer or drain service booked this month',
    ],
    'Nail Salon': [
      'BOGO 50% off  -  book your set and bring a friend, their set is 50% off this week only',
      'First visit 30% off for new clients  -  mention this offer when booking, first 15 clients only',
      'Free upgrade to gel on any manicure booked before end of month  -  no extra charge',
    ],
    'Auto Detailing': [
      '30% off full detail package  -  8 slots available this month, first come first served',
      'Buy full detail get free wash included for 30 days  -  first 10 clients this month',
      '$50 off any ceramic coating or paint correction booked and deposited before end of month',
    ],
    'Concrete': [
      '$500 off any project over $5,000 signed and deposited before end of month  -  locked-in pricing',
      '10% off any patio or driveway if design is approved and contract signed this week',
      'Free concrete sealing included ($300 value) on any pour booked this month  -  first 6 projects',
    ],
    'Marketing Agency': [
      'First month 50% off  -  new clients only, first 5 businesses that respond this week',
      'Free setup month  -  no charge for month 1 if you commit to a 3-month agreement by Friday',
      '$500 off first 90 days if signed before end of month  -  price goes back up after that',
    ],

    'Gutter Cleaning': [
      '20% off any gutter cleaning booked this week  -  schedule filling fast for this season',
      'First cleaning 25% off for new clients  -  mention this offer, first 10 clients only',
      'Two cleanings for the price of one  -  book your fall and next spring cleaning together and save',
    ],
    'Remodeling': [
      '$500 off any project over $5,000 signed this month  -  locked-in pricing, no material escalation',
      '10% off complete kitchen or bathroom remodel if design is approved and deposit paid by end of month',
      'Free 3D rendering AND 15% labor discount for projects starting within 30 days of signing',
    ],
    'Landscaping': [
      '30% off all fall cleanup and winterization services  -  schedule filling fast, book this week',
      'Free mulch delivery and installation (2 yards, $200 value) with any landscaping project over $800',
      '$200 off spring planting and design project when you book your spot before March 31',
    ],
    'Painting': [
      '20% off all exterior painting for projects starting in the next 21 days  -  off-season pricing',
      'Free primer coat included ($300 value) on all exterior projects booked and scheduled this month',
      '$400 off full interior repaint (4+ rooms) when signed and scheduled before end of month',
    ],
    'Pool Service': [
      'First month free on annual maintenance plan  -  new clients only, first 10 to respond',
      '50% off pool opening or closing when you sign an annual maintenance agreement this week',
      '$200 off full equipment repair or replacement when scheduled before the season starts',
    ],
    'Electrician': [
      '$100 off any electrical job over $400  -  this month only, limited to first 12 clients',
      '15% off full panel upgrade booked and scheduled before end of month  -  crews available now',
      'Free smart thermostat installation ($200 value) with any electrical service over $600 this week',
    ],
    'default': [
      '25% off for the next 10 clients  -  crews are available and ready to start this week',
      '$100 off any service over $400  -  this month only, first 12 clients',
      'Buy one service get the second at 50%  -  stack your projects and save',
      'First service free when you sign an annual agreement  -  limited to first 8 clients',
    ],
  },
  'full-price': {
    'Tree Service': [
      'Premium Safety Package: full property audit, hazard removal, cleanup, and 12-month priority storm response  -  priced for value not for volume',
      'The Complete Property Tree Management Program: quarterly visits, annual pruning, storm response priority, and a written care plan  -  for property owners who want it done right',
      'White Glove Tree Service: uniformed crew, full property cleanup, before-and-after documentation, and a 5-year health guarantee on all preserved trees',
    ],
    'Lawn Care': [
      'The Lawn Excellence Program: weekly service, quarterly aeration, fertilization, weed control, and an annual overseeding  -  everything included, nothing to think about',
      'Premium Lawn Management: complete program with soil testing, custom fertilization plan, and a written guarantee that your lawn looks better than any other on your street',
    ],
    'default': [
      'The Premium Program: complete done-for-you service with a documented results guarantee  -  everything handled, nothing for you to manage',
      'The All-Inclusive Package: full service, guaranteed results, and ongoing support  -  for clients who want the best and are willing to pay for it',
    ],
  },
};

function getOfferSuggestions(offerType: string, niche: string): string[] {
  const byType = OFFER_SUGGESTIONS[offerType] || {};
  return byType[niche] || byType['default'] || [];
}

// ─── OFFER FRAMEWORKS ─────────────────────────────────────────────────────────
const OFFER_FRAMEWORKS = {
  'free-gift':     { name:'Free Gift Offer',    guarantee:'100% satisfaction guarantee  -  if you are not completely happy with the results we come back and make it right at no charge.', urgencyNote:'Limited to first N clients only  -  cannot extend after that without making it unsustainable' },
  'giveaway':      { name:'Giveaway Campaign',  guarantee:'Every entrant receives something of value. Grand prize winner gets the full service free. All second-place finalists receive a significant discount offer valid for 72 hours after notification.', urgencyNote:'Contest closes on a specific date  -  second-place offer expires 72 hours after notification' },

  'full-price':    { name:'Authority Offer',    guarantee:'Results guarantee  -  we guarantee the specified outcome within the timeframe or continue working at no additional charge until we achieve it.', urgencyNote:'Only N new clients accepted per month to maintain service quality  -  current spots filling fast' },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return available niches, months, offer types, and suggestions for the UI
    const niche = req.query.niche as string || 'Tree Service';
    const offerType = req.query.offerType as string || 'free-gift';
    return res.status(200).json({
      niches: Object.keys(SEASONAL),
      months: MONTHS,
      offerTypes: Object.keys(OFFER_FRAMEWORKS).map(k => ({ value: k, label: OFFER_FRAMEWORKS[k as keyof typeof OFFER_FRAMEWORKS].name })),
      offerSuggestions: getOfferSuggestions(offerType, niche),
      seasonal: SEASONAL[niche]?.[req.query.month as string] || null,
    });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { niche, month, offerType, brandName, ctaUrl, customOffer, clientCount } = req.body;
  if (!niche || !month || !offerType) return res.status(400).json({ error: 'niche, month, and offerType are required' });

  const seasonal = SEASONAL[niche]?.[month] || { trigger: month + ' campaign', pain: niche + ' businesses need more clients in ' + month, dream: 'Fully booked calendar with quality clients', urgency: 'Limited availability this month' };
  const framework = OFFER_FRAMEWORKS[offerType as keyof typeof OFFER_FRAMEWORKS] || OFFER_FRAMEWORKS['free-gift'];
  const suggestions = getOfferSuggestions(offerType, niche);
  const limit = clientCount || 12;
  const brand = brandName || 'Your Company';
  const booking = ctaUrl || '[your booking link]';

  const systemPrompt = 'You are a direct response marketer trained on Alex Hormozi Grand Slam Offer framework ($100M Offers). Every campaign you generate must follow these non-negotiable rules:\n\n' +
    'DREAM OUTCOME: Must be specific and measurable. BAD: get more clients. GOOD: book 12 new jobs in the next 30 days. BAD: improve your lawn. GOOD: the greenest lawn on your street by Memorial Day. Always include a specific number, timeframe, or transformation that can be verified.\n\n' +
    'PERCEIVED LIKELIHOOD: Include ALL of: (1) a specific mini case study or social proof reference, (2) a credentialing statement about the business, (3) a demonstration or proof element, (4) risk reversal guarantee. Do not just say done-for-you  -  specify what is done.\n\n' +
    'EFFORT REDUCTION: List every specific thing the customer does NOT have to do. Example: You never have to chase leads, remember to follow up, write a single text, or check if someone responded. We handle every touch automatically. Be exhaustive  -  the longer the list of things they do not have to do, the more powerful the offer.\n\n' +
    'PRICE ANCHOR: Always generate a totalPerceivedValue significantly higher than the price. The gap ratio (perceived value divided by price) should be 5x minimum, ideally 8-12x. A $397/month service should have a $2,500-$4,000 perceived value stack.\n\n' +
    'REASON WHY: Every discount or free gift MUST have a specific believable reason why the price is lower or the gift is free. Not: limited time offer. Yes: We have 3 crew openings this week that would otherwise sit empty, so we are passing the savings to the first clients who lock in. Without a reason why, discounts feel like tricks.\n\n' +
    'GIVEAWAY FRAMING: Never use the words second place or consolation. Use: finalist, selected, chosen, exclusive offer for our top entrants. The frame is: Out of everyone who entered, YOU were selected for a special offer we do not make available to the general public.\n\n' +
    'GUARANTEE HIERARCHY (use strongest applicable): (1) Satisfaction: if you are not happy, we make it right. (2) Results: if you do not get X result by Y date, we work for free until you do. (3) Unconditional: try it for 30 days, if you are not thrilled for any reason, full refund. Match guarantee strength to offer type.\n\n' +
    'Return ONLY a valid JSON object, no markdown, no explanation, no extra fields.';

  // Build giveaway schema snippet as plain string  -  NO backticks
  const giveawaySchemaField = offerType === 'giveaway'
    ? '"giveawayDetails": {"grandPrize": "string  -  full free service with specific dollar value", "entryMechanism": "string  -  simple shareable action to enter", "numberOfFinalists": "string  -  grand prize winner plus number of selected finalists", "finalistOffer": "string  -  exclusive offer made only to selected finalists, never called second place", "callbackScript": "string  -  250-300 word word-for-word phone script. NEVER use second place or consolation. Frame as finalist selected from all entrants. Open: Hi [name] I have exciting news  -  out of everyone who entered you were personally selected as one of our finalists qualifying for an exclusive offer we do not make available to the public. Handle hesitation: zero pressure  -  I just did not want you to miss this since you earned it. Close: only next step is a quick visit to lock this in  -  does [day] or [day] work better?"},'
    : '"giveawayDetails": null,';

  // Build offer suggestion as plain string  -  NO backticks
  const offerSuggestion = customOffer || suggestions[0] || ('Best ' + offerType + ' offer for ' + niche + ' in ' + month);

  const userPrompt = 'Generate a complete ' + offerType + ' campaign for a ' + niche + ' company in ' + month + '. Return ONLY a valid JSON object matching the exact schema below. No markdown, no explanation, no extra fields.\n\n' +
    'CAMPAIGN CONTEXT:\n' +
    '- Niche: ' + niche + '\n' +
    '- Month: ' + month + '\n' +
    '- Offer Type: ' + framework.name + '\n' +
    '- Brand: ' + brand + '\n' +
    '- Booking URL: ' + booking + '\n' +
    '- Seasonal trigger: ' + seasonal.trigger + '\n' +
    '- Customer pain point: ' + seasonal.pain + '\n' +
    '- Dream outcome: ' + seasonal.dream + '\n' +
    '- Urgency driver: ' + seasonal.urgency + '\n' +
    '- Client limit (for scarcity): ' + limit + '\n' +
    '- Specific offer to build: ' + offerSuggestion + '\n' +
    '- Guarantee approach: ' + framework.guarantee + '\n' +
    '- Urgency approach: ' + framework.urgencyNote + '\n\n' +
    'VALUE EQUATION REQUIREMENTS:\n' +
    '- Dream Outcome: paint the vivid specific end state with real numbers\n' +
    '- Perceived Likelihood: include case study reference, guarantee language, specific credentials\n' +
    '- Time Delay: show fast results  -  first win within days, full result within 30 days\n' +
    '- Effort Reduced: done-for-you framing, we handle everything, no work required from them\n\n' +
    'REQUIRED JSON SCHEMA:\n' +
    '{\n' +
    '  "offerName": "Specific M-A-G-I-C name: Magnet word + Avatar (for [niche] companies) + Goal (specific outcome) + Interval (this [month]) + Container (System/Blueprint/Package)",\n' +
    '  "tagline": "One punchy sentence under 15 words",\n' +
    '  "dreamOutcome": "The specific vivid transformation  -  measurable and emotional. What does their life/business look like after?",\n' +
    '  "valueStack": [{"item": "Core service", "perceivedValue": "$XXX", "description": "What they get"}, {"item": "Bonus 1", "perceivedValue": "$XXX", "description": "High value low cost"}, {"item": "Bonus 2", "perceivedValue": "$XXX", "description": "High value low cost"}, {"item": "Risk Reversal", "perceivedValue": "$XXX", "description": "Guarantee value"}],\n' +
    '  "totalPerceivedValue": "$X,XXX",\n' +
    '  "offerPrice": "' + (offerType === 'free-gift' ? 'Regular price for core service  -  free gift is the bonus' : offerType === 'giveaway' ? 'Free for grand prize winner / Exclusive finalist offer for selected finalists' : offerType === 'deep-discount' ? 'Promotional price with original price anchor' : 'Full price  -  value stack makes it feel like a steal') + '",\n' +
    '  "urgency": "Specific urgency statement with a real deadline date in ' + month + '",\n' +
    '  "scarcity": "Specific scarcity  -  limited to ' + limit + ' clients with a real reason why",\n' +
    '  "guarantee": "Bold specific guarantee with clear terms",\n' +
    '  "reasonWhy": "Specific believable operational reason why the price is lower or gift is free. NOT: limited time. YES: We have crew openings this week sitting idle so we pass the savings to clients who book now  -  must be specific and credible.",\n' +
    '  "effortReduction": ["5-8 specific things the customer NEVER has to do, remember, or worry about. Examples: never have to remember to follow up, never write a single text, never track who opened what, never guess which leads are hot. Be exhaustive."],\n' +
    '  "perceivedLikelihood": {"caseStudy": "Mini story: client type + situation + measurable result with real numbers", "credential": "Specific credentialing: years in business, number of clients served, specific result achieved", "demonstration": "Proof element prospect can see before buying: screenshot, before/after, data point"},\n' +
    '  "email": {"subject": "Subject under 50 chars  -  curiosity or benefit driven", "preheader": "Preview text under 85 chars", "body": "200-300 word email. Personal. Direct. Written from ' + brand + ' owner. One CTA. Use line breaks for scanning. NO corporate language."},\n' +
    '  "sms": [{"touch": 1, "timing": "Send immediately", "message": "Under 160 chars  -  punchy personal with link"}, {"touch": 2, "timing": "3 days later", "message": "Different angle under 160 chars"}, {"touch": 3, "timing": "48 hours before deadline", "message": "Final urgency under 160 chars with deadline"}],\n' +
    '  "facebook": "Facebook post 100-150 words. Conversational. Ask a question. Include offer details and CTA.",\n' +
    '  "instagram": "Instagram caption. Punchy first line. Bullet points for value. CTA. End with 5 relevant hashtags.",\n' +
    '  "nextdoor": "Nextdoor post. Hyper-local neighbor voice. Mention local area. 80-120 words.",\n' +
    '  "facebookGroup": "Facebook group post. Lead with value first. Never a hard sell. 80-120 words.",\n' +
    '  "gmb": "Google Business post. 150-300 chars. Keyword-rich. Include offer and CTA.",\n' +
    '  ' + giveawaySchemaField + '\n' +
    '  "ghlNotes": "3 specific GHL implementation notes  -  what workflow to build, what tags to use, what automation triggers to set",\n' +
    '  "magicHeadlines": ["Variation 1  -  curiosity angle", "Variation 2  -  benefit/number angle", "Variation 3  -  social proof angle"]\n' +
    '}';


  // Helper to call Claude with robust JSON parsing
  async function callClaude(prompt: string, maxTokens: number): Promise<any> {
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
        messages: [{ role: 'user', content: prompt }],
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
    } catch (parseErr) {
      // Response was likely truncated mid-JSON (hit max_tokens). Attempt a repair:
      // close any open strings/arrays/objects by trimming back to the last complete field.
      let repaired = candidate;
      // Trim trailing partial key/value after the last complete comma-separated entry
      const lastGoodComma = repaired.lastIndexOf(',');
      const lastCloseBrace = Math.max(repaired.lastIndexOf('}'), repaired.lastIndexOf(']'));
      if (lastGoodComma > lastCloseBrace) {
        repaired = repaired.slice(0, lastGoodComma);
      }
      // Count and close any unbalanced brackets
      const opens = (repaired.match(/\{/g) || []).length;
      const closes = (repaired.match(/\}/g) || []).length;
      const opensArr = (repaired.match(/\[/g) || []).length;
      const closesArr = (repaired.match(/\]/g) || []).length;
      repaired += ']'.repeat(Math.max(0, opensArr - closesArr));
      repaired += '}'.repeat(Math.max(0, opens - closes));
      try {
        return JSON.parse(repaired);
      } catch {
        throw new Error('Could not parse JSON even after repair attempt. Raw length: ' + raw.length + '. Tail: ' + raw.slice(-150));
      }
    }
  }

  try {
    // ── PASS 1: Core offer + email + SMS (fast, ~2500 tokens) ──────────────────
    const pass1Prompt = userPrompt.replace(
      '"facebook": "Facebook post 100-150 words. Conversational. Ask a question. Include offer details and CTA.",\n' +
      '  "instagram": "Instagram caption. Punchy first line. Bullet points for value. CTA. End with 5 relevant hashtags.",\n' +
      '  "nextdoor": "Nextdoor post. Hyper-local neighbor voice. Mention local area. 80-120 words.",\n' +
      '  "facebookGroup": "Facebook group post. Lead with value first. Never a hard sell. 80-120 words.",\n' +
      '  "gmb": "Google Business post. 150-300 chars. Keyword-rich. Include offer and CTA.",\n' +
      '  ' + giveawaySchemaField + '\n' +
      '  "ghlNotes": "3 specific GHL implementation notes  -  what workflow to build, what tags to use, what automation triggers to set",\n' +
      '  "magicHeadlines": ["Variation 1  -  curiosity angle", "Variation 2  -  benefit/number angle", "Variation 3  -  social proof angle"]',
      '"facebook": "GENERATE_IN_PASS_2",\n' +
      '  "instagram": "GENERATE_IN_PASS_2",\n' +
      '  "nextdoor": "GENERATE_IN_PASS_2",\n' +
      '  "facebookGroup": "GENERATE_IN_PASS_2",\n' +
      '  "gmb": "GENERATE_IN_PASS_2",\n' +
      '  "giveawayDetails": null,\n' +
      '  "ghlNotes": "GENERATE_IN_PASS_2",\n' +
      '  "magicHeadlines": ["GENERATE_IN_PASS_2"]'
    );

    // ── PASS 2: Social posts + headlines + giveaway  -  built from KNOWN inputs only (no dependency on pass 1) ─
    const pass2Prompt = 'You are a direct response copywriter for ' + niche + ' businesses. Generate the following content for a ' + offerType + ' campaign in ' + month + '. The offer: ' + offerSuggestion + '. Dream outcome to sell: ' + seasonal.dream + '. Customer pain point: ' + seasonal.pain + '. Brand: ' + brand + '. Return ONLY valid JSON.\n\n' +
      '{\n' +
      '  "facebook": "Facebook post 100-150 words. Open with a hook. Conversational. Include specific offer details and CTA.",\n' +
      '  "instagram": "Instagram caption. Bold first line that stops scroll. 3-5 bullet points of value. Clear CTA. 5 niche-relevant hashtags at end.",\n' +
      '  "nextdoor": "Nextdoor post. Hyper-local neighbor voice. Mention the local community. 80-120 words. No hard sell.",\n' +
      '  "facebookGroup": "Facebook community group post. Lead with value or a question. Helpful framing first. Soft CTA. 80-120 words.",\n' +
      '  "gmb": "Google Business post. 150-300 chars max. Keyword-rich for local SEO. Include the offer and a CTA.",\n' +
      (offerType === 'giveaway' ?
        '  "giveawayDetails": {"grandPrize": "Full free ' + niche.toLowerCase() + ' service with specific dollar value", "entryMechanism": "Simple shareable action to enter", "numberOfFinalists": "Total finalists including grand prize winner", "finalistOffer": "Exclusive offer made only to selected finalists  -  frame as exclusive access not consolation", "callbackScript": "250-300 word word-for-word phone callback script. NEVER say second place, consolation, or runner-up. Frame as: out of everyone who entered you were personally selected as a finalist qualifying for an exclusive offer we do not make available to the general public. [Deliver offer as exclusive access they won.] Handle hesitation: zero pressure  -  I just did not want you to miss this since you earned it. Close: The only next step is a quick visit to lock this in  -  does [day] or [day] work better?"},\n' :
        '  "giveawayDetails": null,\n'
      ) +
      '  "ghlNotes": "Note 1: specific GHL workflow to build for this campaign. Note 2: which tags to add and when. Note 3: what automation trigger fires and what sequence it starts.",\n' +
      '  "magicHeadlines": ["Curiosity angle headline using M-A-G-I-C formula", "Benefit and number angle headline", "Social proof or authority angle headline"]\n' +
      '}';

    // ── Fire both passes in PARALLEL  -  pass 2 no longer depends on pass 1's output ──
    const [core, social] = await Promise.all([
      callClaude(pass1Prompt, 2800),
      callClaude(pass2Prompt, 1800),
    ]);

    // ── MERGE both passes ──────────────────────────────────────────────────────
    const campaign = {
      ...core,
      facebook: social.facebook || '',
      instagram: social.instagram || '',
      nextdoor: social.nextdoor || '',
      facebookGroup: social.facebookGroup || '',
      gmb: social.gmb || '',
      giveawayDetails: social.giveawayDetails || null,
      ghlNotes: social.ghlNotes || '',
      magicHeadlines: social.magicHeadlines || [],
      meta: {
        niche, month, offerType,
        offerTypeName: framework.name,
        seasonal,
        offerSuggestions: suggestions,
      },
    };

    res.status(200).json(campaign);
  } catch (error) {
    console.error('Campaign error:', error);
    res.status(500).json({
      error: 'Campaign generation failed',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
