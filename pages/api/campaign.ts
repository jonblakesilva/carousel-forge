import type { NextApiRequest, NextApiResponse } from 'next';


// ─── SEASONAL TRIGGERS — all 12 months for all niches ─────────────────────────
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

type SeasonalHook = { trigger: string; pain: string; dream: string; urgency: string };
type NicheSeasons = Record<string, SeasonalHook>;

const SEASONAL: Record<string, NicheSeasons> = {
  'Tree Service': {
    January:   { trigger:'winter storm cleanup', pain:'Dangerous hanging limbs from ice and snow are a liability sitting on their property right now', dream:'Property protected and safe before the next storm hits', urgency:'Ice damage gets worse every freeze-thaw cycle — this window is closing fast' },
    February:  { trigger:'pre-spring tree assessment', pain:'Winter-damaged trees look fine from the ground but are structurally compromised', dream:'Know exactly what needs to go before spring growth hides the damage', urgency:'Spring green-up makes damage invisible and doubles removal cost' },
    March:     { trigger:'spring storm prep', pain:'That big oak over the house survived winter but one spring storm could end that streak', dream:'Go into storm season with every hazard tree already gone', urgency:'Spring storm season starts in 6-8 weeks — booked crews cannot fit emergencies' },
    April:     { trigger:'spring cleanup and trimming', pain:'Winter left a mess — dead branches, debris, trees that did not survive', dream:'Property looking its best as neighbors start spending time outside', urgency:'Spring books up faster than any other season — crews fill up by mid-April' },
    May:       { trigger:'pre-summer shade trimming', pain:'Overgrown trees blocking views, dropping sap on cars, creating privacy issues', dream:'Perfectly shaped trees giving ideal shade without the mess', urgency:'Summer heat makes this work brutal — prices go up and availability drops fast' },
    June:      { trigger:'summer storm prep', pain:'Hurricane and severe storm season is here — one bad night can total everything', dream:'Every tree properly pruned to let wind through rather than resist it', urgency:'Storm calls book out instantly — only pre-booked customers get priority response' },
    July:      { trigger:'summer stump removal', pain:'Dead stumps are an eyesore and a tripping hazard all summer', dream:'Clean usable yard space where that stump used to ruin the view', urgency:'Summer is the best time for grinding — stumps are dry and grind faster' },
    August:    { trigger:'late summer trimming', pain:'Trees that were beautiful in spring are now blocking light and dropping debris all over the deck', dream:'Clear canopy, clean yard, unobstructed view going into fall', urgency:'August lull means faster scheduling — slots fill back up in September' },
    September: { trigger:'fall preparation', pain:'Those leaves are coming down and that means branches will not be hidden much longer', dream:'Know exactly what to remove before leaf-off makes neighbors notice everything', urgency:'Fall is peak tree season — book in September or wait until February' },
    October:   { trigger:'leaf-off assessment season', pain:'When the leaves drop, the dead wood shows — what is up there that you have not seen all year', dream:'Complete property tree audit and removal plan locked in before ground freezes', urgency:'Ground stays workable for heavy equipment until mid-November — then prices jump' },
    November:  { trigger:'pre-winter removal', pain:'Ice is coming and those weak spots in the canopy will be the first thing to fail', dream:'Every hazard identified and removed before the first ice storm', urgency:'Last practical window before frozen ground and holiday crew schedules' },
    December:  { trigger:'end of year property prep', pain:'Year-end property cleanup often reveals deferred tree work that became urgent', dream:'Starting the new year with a clean safe properly maintained property', urgency:'Holiday booking window — schedule January work now at current pricing' },
  },
  'Lawn Care': {
    January:{ trigger:'early season booking', pain:'Best lawn care companies book out months in advance and every spring you scramble', dream:'First on the schedule when the grass starts growing', urgency:'Spring crew spots fill up completely by February — this is the last call' },
    February:{ trigger:'pre-season fertilization', pain:'Lawn that looks thin and yellow when the neighbors lawn looks green', dream:'First spring green-up so early the neighbors ask what you did', urgency:'Pre-emergent window opens March 1 and closes fast — miss it and weeds own the yard' },
    March:{ trigger:'spring clean-up and first cut', pain:'Winter debris, matted leaves, and brown patches that did not survive', dream:'Lawn looking pristine for the first time anyone spends time outside', urgency:'March clean-up slots book in days — the company that does your clean-up keeps your account all season' },
    April:{ trigger:'core aeration and overseeding', pain:'Compacted soil and bare patches that fertilizer cannot fix alone', dream:'Thick dense lawn that chokes out weeds and handles foot traffic', urgency:'Spring aeration window is 6 weeks — after May 15 it is too hot and results suffer' },
    May:{ trigger:'weed control and lawn program enrollment', pain:'Dandelions and crabgrass spreading faster than any homeowner can keep up', dream:'Weed-free lawn without spending every weekend pulling them', urgency:'Weed treatments need time to work — waiting until summer means a full season of loss' },
    June:{ trigger:'summer heat prep', pain:'Lawn that burns out by July no matter what they do', dream:'Green resilient lawn through the hottest summer weeks', urgency:'June is the last chance to strengthen root systems before summer stress hits' },
    July:{ trigger:'drought and heat management', pain:'Brown patches spreading despite watering — something is wrong', dream:'Understanding exactly what the lawn needs and someone handling it', urgency:'Heat damage compounds weekly — every week without treatment is two weeks of recovery' },
    August:{ trigger:'late summer aeration prep', pain:'Tired worn lawn that needs recovery before fall', dream:'Strong going into fall so it comes back thick next spring', urgency:'Fall aeration window opens in 4-6 weeks — early booking locks in the best slots' },
    September:{ trigger:'fall aeration and overseeding', pain:'Sparse patchy lawn that is embarrassing when everyone is outside in fall', dream:'Dense thick lawn that looks like a golf course going into winter', urgency:'Fall is THE best time to seed — soil temps are perfect for 3 more weeks only' },
    October:{ trigger:'winterization and final fertilization', pain:'Lawn that barely survives winter and starts spring thin and pale', dream:'Protecting all the work done this season so it comes back even better', urgency:'Winterization must happen before first hard frost — usually 3-5 weeks away' },
    November:{ trigger:'leaf cleanup and final cut', pain:'Buried lawn under leaves that will suffocate it all winter', dream:'Clean properly cut lawn going into dormancy for the best spring recovery', urgency:'Leave leaves on the lawn through November and you will pay for it in bare patches all next year' },
    December:{ trigger:'next season early enrollment', pain:'Another year of scrambling to find a reliable lawn company at the last minute', dream:'Best lawn on the street next summer locked in before the rush', urgency:'Early enrollment pricing ends January 1 — save 15% and get first-pick scheduling' },
  },
  'Roofing': {
    January:{ trigger:'ice dam and winter damage', pain:'Ice dams causing leaks that are damaging ceilings walls and insulation right now', dream:'Damage stopped claim filed and repair scheduled before it gets worse', urgency:'Every freeze-thaw cycle makes ice dam damage exponentially worse' },
    February:{ trigger:'winter damage assessment', pain:'Unknown damage from winter storms that will become obvious as a leak in spring', dream:'Complete roof assessment before any moisture causes interior damage', urgency:'Spring rain is 4-6 weeks away — hidden damage becomes a full leak with the first downpour' },
    March:{ trigger:'spring storm prep', pain:'Aging roof that survived last storm season but feels like borrowed time', dream:'Going into storm season knowing the roof is solid', urgency:'Storm season booking fills up completely — emergency work gets 40% premium pricing' },
    April:{ trigger:'spring inspection and repair', pain:'Winter damage that shows up as stains soft spots and missing shingles', dream:'Clean bill of health on the roof or a clear plan to fix it', urgency:'Spring inspection window before heavy rain season — catch small repairs before they become replacements' },
    May:{ trigger:'pre-summer replacement', pain:'Roof that will not survive another summer of heat cycling and storms', dream:'New roof installed before summer heat with full warranty protection', urgency:'Summer scheduling is fully booked by June 1 every year' },
    June:{ trigger:'storm season insurance response', pain:'Recent storm damage that insurance will cover but needs documentation fast', dream:'Insurance claim maximized and repair scheduled before more weather hits', urgency:'Insurance claims have documentation deadlines — waiting loses money' },
    July:{ trigger:'mid-summer inspection', pain:'Summer heat is cooking shingles that are already near end-of-life', dream:'Know exactly where the roof stands before fall storm season', urgency:'Heat damage identified in July can be addressed in August — wait and it is an emergency' },
    August:{ trigger:'pre-fall replacement booking', pain:'Dreading another fall and winter on a roof that is clearly failing', dream:'New roof done before leaves fall and cold weather sets in', urgency:'September-October is peak replacement season — August is the last chance for good scheduling' },
    September:{ trigger:'fall storm prep', pain:'Vulnerable roof going into the most active severe weather months', dream:'Fully repaired and sealed before the first fall storm system', urgency:'October storm season is coming — repair windows are closing fast' },
    October:{ trigger:'pre-winter repairs', pain:'Any damage that is not fixed before winter freeze becomes a major problem', dream:'Weathertight roof before temperatures drop and installation becomes difficult', urgency:'Cold weather installation is possible but harder and more expensive — do it now' },
    November:{ trigger:'winter-ready repairs', pain:'Ice dams snow load and freeze-thaw will exploit any weakness that exists', dream:'Every vulnerability sealed before the first snow', urgency:'November is the last practical window before winter pricing and delays' },
    December:{ trigger:'year-end insurance and replacement', pain:'Waiting until spring means another winter of risk and another deductible year', dream:'New roof on tax year timeline insurance claim closed peace of mind for winter', urgency:'December 31 insurance and tax deadline — year-end replacements must be booked now' },
  },
  'HVAC': {
    January:{ trigger:'winter emergency prep', pain:'Furnace running but not serviced and could fail on the coldest night of the year', dream:'Heating system that runs perfectly all winter without a single anxious moment', urgency:'January is peak furnace failure month — tune-up now or risk a weekend emergency call at 3x the price' },
    February:{ trigger:'heating efficiency audit', pain:'Energy bills climbing even though the thermostat has not moved', dream:'Lower bills and a system running at peak efficiency for the rest of winter', urgency:'February cold snaps are coming — energy waste compounds every degree of inefficiency' },
    March:{ trigger:'spring AC prep', pain:'AC unit not touched since last summer and first hot day is coming fast', dream:'AC running perfectly when the first hot week hits — no emergency calls no panic', urgency:'Spring tune-ups book up in 3-4 weeks — wait and pay emergency pricing for first breakdowns' },
    April:{ trigger:'AC tune-up season', pain:'That first 80-degree day will reveal every weakness in a system that sat dormant all winter', dream:'Reliable cooling through the entire summer with no breakdowns', urgency:'April is the last practical window before summer surge pricing kicks in' },
    May:{ trigger:'pre-summer system replacement', pain:'Summer is coming fast and the AC unit is already 10-15 years old', dream:'New system installed and running before summer heat arrives', urgency:'May is the last month for new system installation before summer backlog — 6-week lead times in June' },
    June:{ trigger:'summer cooling optimization', pain:'AC struggling to keep up with heat when it needs to perform most', dream:'Cool comfortable home through the hottest months without a single breakdown', urgency:'Summer repair slots are booking 5-7 days out — breakdowns in July mean days of heat' },
    July:{ trigger:'peak heat system check', pain:'System running constantly but never quite getting the house cool enough', dream:'System optimized to handle peak heat load without strain or high bills', urgency:'Every day of inefficiency in July adds to the energy bill and shortens equipment life' },
    August:{ trigger:'pre-fall system checkup', pain:'System has been running hard all summer and needs assessment before fall', dream:'Fall and winter heading into shoulder season with full confidence in both systems', urgency:'August tune-ups catch summer damage before it becomes a fall repair' },
    September:{ trigger:'fall heating prep', pain:'First cold snap of fall always reveals the furnace problems from last year', dream:'Heating system serviced and ready before the first time you need it', urgency:'September furnace tune-ups book up fast — October is emergency season' },
    October:{ trigger:'winter prep', pain:'Another winter of worrying whether the furnace will make it through', dream:'Heating system inspected cleaned and certified before the first freeze', urgency:'October is the last month before winter emergency pricing — regular service is 40% less than emergency' },
    November:{ trigger:'emergency heat prep', pain:'Temperatures dropping and the furnace has not been serviced in years', dream:'Complete peace of mind going into the coldest months of the year', urgency:'November is the final pre-winter service window — December calls are emergency pricing' },
    December:{ trigger:'holiday season reliability', pain:'House full of family and a furnace that picks the worst possible time to fail', dream:'Guaranteed reliable heat through the entire holiday season', urgency:'Holiday season means no available technicians — pre-service now or risk the worst timing' },
  },
  'Pressure Washing': {
    January:{ trigger:'winter prep booking', pain:'Properties getting grimy from winter weather and no plan to address it', dream:'Clean property lined up for the first warm day of spring', urgency:'Best pressure washing companies fill their spring schedules in January and February' },
    February:{ trigger:'early spring booking', pain:'Another spring scramble to find a pressure washer when everyone wants one at the same time', dream:'First pick of scheduling slots and guaranteed availability for spring clean-up', urgency:'Spring slots book out completely — call now or wait until summer' },
    March:{ trigger:'spring exterior refresh', pain:'House driveway and deck covered in a winters worth of grime mold and algae', dream:'Property looking brand new before the first outdoor gathering of the season', urgency:'Spring pressure washing slots fill in the first 2 weeks of March every year' },
    April:{ trigger:'spring clean-up peak', pain:'Winter algae and mold already turning the driveway green', dream:'Every surface sparkling clean as neighbors start spending time outside', urgency:'April is the peak spring booking month — availability drops weekly' },
    May:{ trigger:'pre-summer exterior cleaning', pain:'Dirty house exterior stained deck and grimy patio making entertaining embarrassing', dream:'Outdoor living spaces that look as good as the inside of the house', urgency:'Deck and patio cleaning needs to cure before heavy summer use — do it in May' },
    June:{ trigger:'summer mold prevention', pain:'Mold and mildew getting worse with summer humidity', dream:'Clean exterior that stays cleaner longer with proper summer treatment', urgency:'June humidity accelerates mold — cleaning now prevents retreating in August' },
    July:{ trigger:'mid-summer refresh', pain:'Summer foot traffic and outdoor entertaining leaving everything dirty', dream:'Clean outdoor spaces for the rest of summer entertaining season', urgency:'Midsummer slots are limited — crews at peak capacity' },
    August:{ trigger:'late summer cleaning', pain:'End of summer grime buildup before fall entertaining begins', dream:'Fresh clean surfaces going into the best outdoor weather of the year', urgency:'August slots book fast — September is the second peak season' },
    September:{ trigger:'fall prep cleaning', pain:'Summer has left a layer of algae pollen and grime on everything', dream:'Fresh clean surfaces going into fall entertaining season', urgency:'Fall is the second-best time to pressure wash — before leaves drop and coat everything again' },
    October:{ trigger:'pre-winter surface treatment', pain:'Mold and algae left on surfaces will freeze and cause damage all winter', dream:'All surfaces properly cleaned and treated before freeze-thaw season', urgency:'Last clean of the season — mold left through winter causes double the damage' },
    November:{ trigger:'final season cleaning', pain:'One last chance to protect surfaces before winter sets in', dream:'Surfaces sealed and clean heading into winter with no regrets', urgency:'November cold makes pressure washing harder — act before temperatures drop below 40' },
    December:{ trigger:'new year prep', pain:'Starting the new year with a grimy property when a clean start costs less than you think', dream:'Clean property going into the new year with early spring booking locked in', urgency:'December deals and January availability — the easiest time to book before spring rush' },
  },
  'Pest Control': {
    January:{ trigger:'winter rodent control', pain:'Mice and rats already inside looking for warmth and food through the coldest months', dream:'Mouse-free home through winter — no traps no droppings no stress', urgency:'Winter rodent populations double indoors by February without treatment' },
    February:{ trigger:'pre-season perimeter treatment', pain:'Spring is coming and with it every ant spider and insect that spent winter hiding in the walls', dream:'Barrier in place before bugs wake up — not reacting after they are already inside', urgency:'Pre-emergent pest treatment must happen before soil temps hit 45F — usually 4-6 weeks away' },
    March:{ trigger:'spring pest prevention', pain:'Every spring the same battle — ants in the kitchen spiders in the basement stink bugs everywhere', dream:'No bugs inside this spring — guaranteed', urgency:'March treatment prevents the entire spring and summer cycle — waiting until May means fighting all season' },
    April:{ trigger:'ant and spider season', pain:'Ants finding every crack and spiders taking over the garage and basement', dream:'Protected home where bugs stay outside where they belong', urgency:'April colonies are small and easy to treat — wait until June and treatment takes twice as long' },
    May:{ trigger:'mosquito and tick season', pain:'Kids and pets cannot enjoy the backyard because of mosquitoes and the tick risk is real', dream:'Backyard that is safe and comfortable for the whole summer', urgency:'Mosquito season peaks in 4-6 weeks — treatment needs time to establish before peak activity' },
    June:{ trigger:'summer pest peak', pain:'Peak pest season and currently no protection in place', dream:'Protected home and yard through the entire summer', urgency:'June is peak pest activity — unprotected homes see 3x the infestation rate by August' },
    July:{ trigger:'mid-summer pest protection', pain:'Summer heat driving more insects inside looking for cool and water', dream:'Home that is a barrier not a welcome mat for summer pests', urgency:'July is the peak of mosquito wasp and ant activity — protection now covers the rest of summer' },
    August:{ trigger:'stink bug and spider prevention', pain:'Stink bugs and spiders move inside as temperatures drop — it starts in September', dream:'Pre-treatment that stops the fall invasion before it starts', urgency:'Stink bug prevention must happen in August — September is too late to prevent entry' },
    September:{ trigger:'fall perimeter treatment', pain:'Fall is when mice spiders and stink bugs come inside looking for warmth', dream:'Sealed protected home that pests cannot penetrate this fall and winter', urgency:'Fall treatment window is 6 weeks — after first frost it is reactive not preventive' },
    October:{ trigger:'winter rodent prevention', pain:'Mice and rats move inside when temperatures drop and they are already scouting entry points', dream:'Mouse-free winter — no traps no droppings no stress', urgency:'Rodent exclusion must happen before first hard frost when they commit to indoor living' },
    November:{ trigger:'pre-winter sealing', pain:'Every gap and crack in the home exterior is a potential winter pest entry point', dream:'Sealed home that stays pest-free through the coldest months', urgency:'November is the last month before ground freeze makes exterior treatment less effective' },
    December:{ trigger:'holiday pest prevention', pain:'House guests arriving and the last thing you need is a mouse or roach sighting', dream:'Clean pest-free home through the entire holiday entertaining season', urgency:'December treatment protects through the holidays and sets up a clean start to the new year' },
  },
  'Painting': {
    January:{ trigger:'interior painting season', pain:'House interior looking dingy and dated going into another year without change', dream:'Fresh updated interior ready for the new year at the best price of the year', urgency:'January is slowest month for painters — lowest prices and most flexible scheduling of the year' },
    February:{ trigger:'pre-spring interior refresh', pain:'Same dated colors and scuffed walls going into spring when guests start visiting', dream:'Fresh interior completed before the spring social season begins', urgency:'Winter scheduling fills up fast once word gets out about January pricing' },
    March:{ trigger:'spring exterior prep booking', pain:'Exterior paint peeling and fading after another winter — curb appeal suffering', dream:'Fresh exterior ready as neighbors start spending time outside and noticing everything', urgency:'Exterior painting season books up completely by April — March is the last chance for good scheduling' },
    April:{ trigger:'exterior painting season opens', pain:'Peeling chipping exterior that looks worse every day as spring sun reveals the damage', dream:'Beautiful curb appeal that makes the property look like the best on the street', urgency:'April through September is the exterior painting window — prime slots fill fast' },
    May:{ trigger:'exterior peak booking', pain:'That curb appeal project that gets pushed every year while the paint keeps peeling', dream:'Stunning exterior that makes neighbors stop and ask who did the work', urgency:'May is peak booking for premium painters — availability drops every week' },
    June:{ trigger:'summer exterior painting', pain:'Long sunny days perfect for exterior work and not taking advantage of the weather', dream:'Exterior completed in ideal conditions with fast dry times and perfect results', urgency:'June scheduling is competitive — crews book 3-4 weeks out minimum' },
    July:{ trigger:'mid-summer interior cooling', pain:'Too hot to enjoy outdoor projects but indoor painting is comfortable all summer', dream:'Fresh interior rooms completed during the heat without disrupting summer life', urgency:'Interior painters have summer availability gaps — fastest scheduling of the season' },
    August:{ trigger:'back to school refresh', pain:'Kids going back to school and the house needs a reset after a summer of activity', dream:'Refreshed home interior ready for fall routines and entertaining season', urgency:'August interior projects can finish before September school and activity schedules get hectic' },
    September:{ trigger:'fall exterior painting last call', pain:'Last chance to get exterior painting done before cold weather makes it impossible', dream:'Exterior completed in perfect fall temperatures before the season closes', urgency:'Exterior painting window closes when temps drop below 50F consistently — usually mid-October' },
    October:{ trigger:'fall color refresh', pain:'Interior looking dated and tired as the entertaining season begins', dream:'Fresh interior colors that make the home feel new for fall and holiday season', urgency:'October interior projects can finish before holiday decorating season — prime time slots filling now' },
    November:{ trigger:'pre-holiday interior painting', pain:'Hosting holidays in a home that needs paint but running out of time to do something about it', dream:'Fresh painted home ready to impress guests through the entire holiday season', urgency:'November 1 start is the last realistic date to finish before Thanksgiving hosting begins' },
    December:{ trigger:'new year prep painting', pain:'Another year of looking at the same dingy walls and promising to do something about it', dream:'Starting the new year with a fresh painted home and that project finally done', urgency:'December-January is the best time to book — slowest season means best pricing and fastest start' },
  },
  'Landscaping': {
    January:{ trigger:'spring landscape design booking', pain:'Another year of the same boring landscape while neighbors keep improving theirs', dream:'Landscape design locked in and materials ordered before spring rush', urgency:'Top landscaping designers book out 3-4 months in advance — January secures spring installation' },
    February:{ trigger:'spring planting prep', pain:'Spring is 6-8 weeks away and no plan in place for landscape improvements', dream:'Beautiful spring landscape that looks intentional not accidental', urgency:'Soil prep and design must happen in late winter for spring installation to go smoothly' },
    March:{ trigger:'spring landscape installation', pain:'Property that looks bare and neglected as everything starts greening up around it', dream:'First spring with a properly designed and planted landscape that makes visitors stop', urgency:'Spring planting window is short — top landscapers fill up within 2 weeks of opening their schedule' },
    April:{ trigger:'spring landscape peak', pain:'Outdoor space that is not ready for the outdoor entertaining season starting now', dream:'Fully landscaped yard ready for spring gatherings and neighborhood visibility', urgency:'April is peak season — every week you wait is another week without enjoying your outdoor space' },
    May:{ trigger:'outdoor living season prep', pain:'Summer is coming and the outdoor space is still not what you want it to be', dream:'Outdoor living area that becomes the place everyone wants to spend time', urgency:'May installations need to establish before summer heat — timing matters for survival rates' },
    June:{ trigger:'summer landscape maintenance', pain:'Spring plantings getting overgrown and the property losing the clean look it had', dream:'Maintained landscape that looks professionally managed all summer long', urgency:'June growth is aggressive — maintenance now prevents August recovery work' },
    July:{ trigger:'summer drought management', pain:'New or existing plantings struggling in summer heat without proper care', dream:'Thriving landscape through the hottest months with the right watering and treatment plan', urgency:'July heat stress kills plants that survive everything else — intervention now saves the investment' },
    August:{ trigger:'fall landscape planning', pain:'Disappointed in how the landscape looked all summer and ready to do something about fall', dream:'Fall landscape that peaks in September and October when everyone is outside', urgency:'Fall planting materials sell out fast — August booking secures the best selection' },
    September:{ trigger:'fall landscape installation', pain:'Fall is the best time to plant and another year is passing without capitalizing on it', dream:'New trees shrubs and plantings that will establish all fall and explode in spring', urgency:'Fall planting window is September through mid-October — miss it and wait until spring' },
    October:{ trigger:'fall cleanup and winterization', pain:'Landscape heading into winter without proper cleanup and protection', dream:'Property looking clean going into winter with everything protected for spring return', urgency:'Hard frost deadline — winterization must happen before the first freeze damages unprotected plantings' },
    November:{ trigger:'hardscape and design planning', pain:'Another winter without making progress on the hardscape or design projects that keep getting pushed', dream:'Spring ready to install a project that has been designed all winter', urgency:'Winter is design season — contractors available now who will be completely booked by March' },
    December:{ trigger:'spring project early booking', pain:'Spring always comes and the landscape is never what you imagined it could be', dream:'Spring 2025 being the year the landscape finally looks like the vision', urgency:'Best landscapers book their spring calendar completely before January 1 — book now or wait until fall' },
  },
  'Pool Service': {
    January:{ trigger:'early season pool opening booking', pain:'Pool opening gets pushed every year and the first warm day is always a scramble', dream:'Pool open and ready on the first warm day without a single phone call or scramble', urgency:'Top pool service companies fill their spring opening schedule in January and February' },
    February:{ trigger:'spring pool prep', pain:'Pool that sat all winter without proper care will take weeks to get swim-ready', dream:'Pool opening that takes days not weeks because prep work is done right', urgency:'Spring opening schedule is booking now — wait until April and you will wait in line' },
    March:{ trigger:'spring pool opening', pain:'First warm week of spring revealing a green swampy mess that was a pool', dream:'Crystal clear pool ready to swim from the first warm weekend of the year', urgency:'March openers finish faster and pay less than April and May when everyone calls at once' },
    April:{ trigger:'peak pool opening', pain:'Every other family on the block has their pool open while yours is still covered', dream:'Swim-ready pool before spring breaks and early season gatherings', urgency:'April is the single busiest month for pool opening — booking slots are filling daily' },
    May:{ trigger:'pre-summer pool service enrollment', pain:'Summer is 4 weeks away and pool maintenance plan is not in place', dream:'Perfectly balanced pool maintained all summer without lifting a finger', urgency:'Summer maintenance plans fill up in May — late bookers get leftover time slots' },
    June:{ trigger:'summer pool maintenance', pain:'Summer pool ownership is supposed to be fun but chemicals and green water are exhausting', dream:'Pool that is always swim-ready when you want it without doing anything yourself', urgency:'June is when green water problems peak — weekly service now prevents costly emergency treatments' },
    July:{ trigger:'peak summer pool care', pain:'Pool that turns green in 3 days every time you skip a treatment', dream:'Crystal clear pool through the entire summer that your kids and guests love', urgency:'July chemical demand is highest of the year — service companies prioritize enrolled customers' },
    August:{ trigger:'late summer pool perfection', pain:'Summer slipping away and pool still not running the way you want it', dream:'Perfect pool through August and September — the best months for swimming', urgency:'August treatments protect pool equipment through the final heavy-use weeks of summer' },
    September:{ trigger:'fall pool transition', pain:'Pool owners who skip fall prep pay double for spring opening', dream:'Easy spring opening because fall closing was done properly', urgency:'September closing window — pools left open through first freeze sustain equipment damage' },
    October:{ trigger:'fall pool closing', pain:'First freeze is 4-6 weeks away and pool is not yet winterized', dream:'Pool properly closed and protected so it opens perfectly next spring', urgency:'Freeze damage to unprotected pool equipment costs $2,000 to $8,000 to repair — close before the frost' },
    November:{ trigger:'winterization', pain:'Pool not properly winterized and winter is here', dream:'Equipment fully protected and pool ready to open quickly next spring', urgency:'November is the final closing window — pools that freeze without proper winterization have serious damage' },
    December:{ trigger:'next season early enrollment', pain:'Another summer of green water and weekend pool maintenance ruining the enjoyment', dream:'Next summer with a perfectly maintained pool that someone else handles completely', urgency:'Early enrollment pricing available through December 31 — locks in best rates before spring increases' },
  },
  'Electrician': {
    January:{ trigger:'electrical safety inspection', pain:'Older home with original wiring that has never been professionally inspected — this is not fine', dream:'Full safety assessment and clear understanding of exactly where the electrical system stands', urgency:'January is the slowest month for electricians — fastest scheduling and best availability of the year' },
    February:{ trigger:'winter electrical load issues', pain:'Circuit breakers tripping from winter heating loads and holiday electronics still connected', dream:'Electrical system properly sized for actual usage with no more nuisance trips', urgency:'Winter peak demand reveals overloaded circuits — ignoring it is a fire risk not an inconvenience' },
    March:{ trigger:'spring home improvement electrical', pain:'Home improvement season starting and every project seems to need electrical work', dream:'All planned projects properly permitted and safely wired before contractors arrive', urgency:'Electricians fill spring schedules in March — project delays from unavailable electricians are expensive' },
    April:{ trigger:'panel upgrade season', pain:'Old panel with fuses or outdated breakers that cannot support modern electrical loads', dream:'New panel that handles everything — EV charger home office and all the rest safely', urgency:'Panel upgrades take 4-6 weeks with permits — book in April for spring completion' },
    May:{ trigger:'outdoor electrical and lighting', pain:'Outdoor outlets fixtures and lighting that are either missing or unsafe', dream:'Outdoor space with proper GFCi protected outlets and beautiful landscape lighting', urgency:'Summer entertaining season starts soon — outdoor electrical must be done before the gatherings start' },
    June:{ trigger:'summer AC electrical support', pain:'Air conditioning running on circuits that were not designed for the load', dream:'Dedicated properly sized circuits for all major appliances running safely all summer', urgency:'Summer peak electrical load is coming — overloaded circuits in summer heat are a fire hazard' },
    July:{ trigger:'generator and backup power', pain:'Power outages in summer storms leaving family without AC and food spoiling', dream:'Whole-home generator or transfer switch that kicks in automatically when power goes out', urgency:'Hurricane and storm season is peak generator installation demand — book now or wait months' },
    August:{ trigger:'EV charger installation', pain:'Electric vehicle sitting in the garage charging on a regular outlet taking 3 days to charge', dream:'Level 2 charger installed and car fully charged every morning without thinking about it', urgency:'EV charger installations are booking 3-4 weeks out as adoption accelerates — schedule now' },
    September:{ trigger:'fall electrical prep', pain:'Heading into winter with electrical issues that cold weather and holiday loads will expose', dream:'Electrical system ready for winter loads holiday lighting and indoor living season', urgency:'Fall is the last comfortable weather window for exterior electrical work before winter' },
    October:{ trigger:'holiday lighting circuits', pain:'Holiday lighting tripping breakers and burning up extension cords every December', dream:'Dedicated outdoor circuits that handle full holiday lighting displays without issues', urgency:'October installation means everything is ready before Thanksgiving — November bookings are always rushed' },
    November:{ trigger:'winter electrical safety', pain:'Older home heading into winter with unresolved electrical concerns', dream:'Complete peace of mind that the electrical system is safe through the coldest darkest months', urgency:'November is the last pre-winter booking window before December holiday emergency premium rates' },
    December:{ trigger:'new year electrical planning', pain:'Another year of putting off the panel upgrade EV charger or whole-home generator project', dream:'Starting the new year with the project planned permitted and scheduled to start in January', urgency:'January is the only month when premium electricians have open schedule — book it now' },
  },
  'Window Cleaning': {
    January:{ trigger:'winter window cleaning', pain:'Windows covered in winter grime and condensation stains making the house feel darker', dream:'Clean clear windows that let in maximum light through the short winter days', urgency:'January is slowest month — easiest scheduling and best pricing of the year' },
    February:{ trigger:'pre-spring cleaning', pain:'Winter leaving film and calcium deposits that dull every room despite sunshine', dream:'Crystal clear windows ready to make the house feel bright as days get longer', urgency:'Spring cleaning rush starts in March — February pricing is significantly better' },
    March:{ trigger:'spring clean-up window washing', pain:'Winter film on windows makes every room feel darker than it should', dream:'Sparkling clean windows for the first spring days when light finally feels like it is back', urgency:'Spring window cleaning books up faster than any other season — slots fill in days' },
    April:{ trigger:'spring exterior window cleaning', pain:'Pollen season coating every window the moment they get cleaned', dream:'Professional treatment that repels pollen and keeps windows cleaner between visits', urgency:'April pollen peaks in 2-3 weeks — professional treatment now protects through peak season' },
    May:{ trigger:'pre-summer exterior wash', pain:'Summer is about to start and windows are the first thing visitors notice from outside', dream:'Property with gleaming windows that make the entire exterior look well-maintained', urgency:'Summer scheduling fills fast as outdoor season begins — May is the last easy booking window' },
    June:{ trigger:'summer window maintenance', pain:'Summer rain and dust cycling constantly leaving windows streaky and spotted', dream:'Clean windows maintained through the entire summer entertaining and outdoor season', urgency:'Summer maintenance plans book out — single-service clients get leftover slots' },
    July:{ trigger:'mid-summer clarity', pain:'Mid-summer haze film and water spots dulling every view from inside the house', dream:'Crystal clear views of the garden and outdoor spaces through every window', urgency:'July water spotting compounds quickly — each rain cycle adds more mineral deposits' },
    August:{ trigger:'back to school refresh', pain:'House looking tired after a summer of outdoor activity and traffic', dream:'Fresh clean windows that make the whole house feel reset heading into fall', urgency:'August scheduling is competitive — best crews book first' },
    September:{ trigger:'fall window cleaning', pain:'Fall is peak visibility season but summer has left windows dirty for it', dream:'Crystal clear windows for fall light which is the most beautiful light of the year', urgency:'Fall window cleaning is second-peak season — September slots go fast' },
    October:{ trigger:'pre-holiday cleaning', pain:'Holiday season coming and windows are the first impression guests get from outside', dream:'Gleaming windows that make the home look its very best through the entertaining season', urgency:'October cleaning is the last before holiday season — November slots are holiday rush premium' },
    November:{ trigger:'pre-winter cleaning', pain:'Last chance to get clean windows before winter weather makes outdoor cleaning difficult', dream:'Clean windows that stay cleaner longer with proper winter treatment', urgency:'Cold weather makes window cleaning harder and less effective — do it before temperatures drop below 40' },
    December:{ trigger:'holiday season sparkle', pain:'Holiday lights and decorations deserve spotless windows to show them off properly', dream:'Beautifully clean windows that make holiday lighting sparkle and glow from inside and out', urgency:'December scheduling is extremely limited — holiday clean must be booked now to guarantee a slot' },
  },
};

// Fill in any missing months with a sensible default
const ALL_NICHES = Object.keys(SEASONAL);
MONTHS.forEach(m => {
  ALL_NICHES.forEach(n => {
    if (!SEASONAL[n][m]) {
      SEASONAL[n][m] = {
        trigger: `${m.toLowerCase()} seasonal campaign`,
        pain: `${n} businesses lose thousands every ${m} to competitors who run smarter campaigns`,
        dream: `Fully booked calendar through ${m} with quality clients who pay on time`,
        urgency: `${m} availability is filling — once the schedule is full new clients wait weeks`,
      };
    }
  });
});

// ─── OFFER SUGGESTIONS by niche ──────────────────────────────────────────────
const OFFER_SUGGESTIONS: Record<string, Record<string, string[]>> = {
  'free-gift': {
    'Tree Service': [
      'Free stump grinding ($350 value) with every tree removal booked this month — first 10 clients',
      'Free lot line clearing (up to 50 feet) with any removal over $800 — limited to 8 clients',
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
    'Plumbing': [
      'Free water heater flush and inspection ($175 value) with any plumbing service booked this month',
      'Free whole-home water pressure test and written report ($150 value) — first 10 clients',
      'Free drain camera inspection ($200 value) with any drain service over $300 booked this week',
      'Free shut-off valve upgrade for main line ($125 value) with any plumbing repair this month',
      'Free water quality test kit and report ($100 value) for every new client this month',
    ],
    'Remodeling': [
      'Free 3D design rendering ($500 value) with signed contract for any kitchen or bathroom project this month',
      'Free material upgrade (cabinet hardware, tile upgrade, or light fixtures up to $400 value) on any project started this month',
      'Free project management consultation and written scope document ($300 value) — first 8 clients',
      'Free smart home device installation package ($350 value) with any remodel over $10,000 signed this quarter',
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
      'Free materials estimate and written bid ($250 value) with no obligation — first 10 clients',
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
      'Grand Prize: Complete tree removal up to 60ft ($1,500 value) — FREE. Enter by sharing our page and tagging a neighbor.',
      'Grand Prize: Full property tree and stump removal package ($2,000 value) — FREE for 30 days',
      'Grand Prize: Yard transformation — remove up to 3 trees, grind stumps, chip debris ($1,800 value)',
      'Grand Prize: Complete hazard tree removal and lot line clearing ($1,600 value) — no purchase required to enter',
    ],
    'Lawn Care': [
      'Grand Prize: Full season lawn program (12 months, $1,200 value) — completely FREE. Enter by commenting your biggest lawn problem.',
      'Grand Prize: Complete yard transformation — aerate, overseed, fertilize, weed control for 1 full year ($1,400 value)',
      'Grand Prize: Professional lawn makeover including sod installation for damaged areas ($1,500 value)',
    ],
    'Roofing': [
      'Grand Prize: Complete roof inspection, minor repair, and gutter cleaning ($800 value) — FREE',
      'Grand Prize: Full roof repair up to $1,000 in labor — winner selected from all entries this month',
      'Grand Prize: New roof for the winner — $3,000 credit toward any full replacement booked this quarter',
    ],
    'Plumbing': [
      'Grand Prize: Complete plumbing inspection + water heater replacement if needed (up to $1,200 value) — FREE',
      'Grand Prize: Whole-home re-pipe for winner selected from all entries — $3,000 credit toward any project',
    ],
    'Remodeling': [
      'Grand Prize: Complete bathroom renovation for one winner ($5,000 value) — enter to win this month',
      'Grand Prize: Kitchen update package (cabinets, countertops, hardware, $3,500 value) — FREE for one winner',
    ],
    'Landscaping': [
      'Grand Prize: Complete front yard transformation — new plantings, mulch, edging, sod ($1,800 value)',
      'Grand Prize: Professional landscape design and full installation ($2,000 value) — one winner per month',
    ],
    'Painting': [
      'Grand Prize: Complete exterior house painting ($2,500 value) — FREE for one winner selected this month',
      'Grand Prize: Full interior repaint (up to 5 rooms, $1,800 value) — enter by sharing our before/after',
    ],
    'Electrician': [
      'Grand Prize: EV charger installation + panel upgrade ($2,000 value) — FREE for one winner',
      'Grand Prize: Full home electrical safety upgrade and smart device package ($1,500 value)',
    ],
    'default': [
      'Grand Prize: Complete service package ($1,000 value) — FREE for one winner this month',
      'Grand Prize: 1 full year of service ($1,200 value) — enter to win, no purchase required',
      'Grand Prize: Full premium service package ($800 value) — share to enter, winner announced in 30 days',
    ],
  },
  'deep-discount': {
    'Tree Service': [
      '40% off tree removal for the next 10 clients — crews available now, fill the schedule',
      '$200 off any job over $800 — use code AUGUST when calling or booking online',
      'Buy 2 tree removals get the 3rd free — property cleanup special, first 8 clients only',
      '50% off stump grinding with any tree removal booked this week — limited crew availability',
    ],
    'Lawn Care': [
      'First month free on any annual lawn program — no contracts, cancel anytime',
      '3 months for the price of 2 on any lawn program signed before end of month',
      '$150 off your first season program — new clients only, first 12 to respond',
      '50% off fall aeration — crews have openings this week and next week only',
    ],
    'Roofing': [
      '$500 off any full replacement booked and deposited before end of month',
      'Free gutters included with any roof replacement — $400 value, this month only',
      '0% financing for 18 months on any replacement over $8,000 — approved and scheduled in 72 hours',
      '15% off all repairs booked before September 30 — beat the fall rush pricing',
    ],
    'Plumbing': [
      '$150 off any repair over $400 — book before end of month, crews available this week',
      '50% off water heater replacement labor — parts at cost, we absorb the labor discount for 8 clients',
      'Free camera inspection included ($200 value) with any sewer or drain service booked this month',
    ],
    'Remodeling': [
      '$500 off any project over $5,000 signed this month — locked-in pricing, no material escalation',
      '10% off complete kitchen or bathroom remodel if design is approved and deposit paid by end of month',
      'Free 3D rendering AND 15% labor discount for projects starting within 30 days of signing',
    ],
    'Landscaping': [
      '30% off all fall cleanup and winterization services — schedule filling fast, book this week',
      'Free mulch delivery and installation (2 yards, $200 value) with any landscaping project over $800',
      '$200 off spring planting and design project when you book your spot before March 31',
    ],
    'Painting': [
      '20% off all exterior painting for projects starting in the next 21 days — off-season pricing',
      'Free primer coat included ($300 value) on all exterior projects booked and scheduled this month',
      '$400 off full interior repaint (4+ rooms) when signed and scheduled before end of month',
    ],
    'Pool Service': [
      'First month free on annual maintenance plan — new clients only, first 10 to respond',
      '50% off pool opening or closing when you sign an annual maintenance agreement this week',
      '$200 off full equipment repair or replacement when scheduled before the season starts',
    ],
    'Electrician': [
      '$100 off any electrical job over $400 — this month only, limited to first 12 clients',
      '15% off full panel upgrade booked and scheduled before end of month — crews available now',
      'Free smart thermostat installation ($200 value) with any electrical service over $600 this week',
    ],
    'default': [
      '25% off for the next 10 clients — crews are available and ready to start this week',
      '$100 off any service over $400 — this month only, first 12 clients',
      'Buy one service get the second at 50% — stack your projects and save',
      'First service free when you sign an annual agreement — limited to first 8 clients',
    ],
  },
  'full-price': {
    'Tree Service': [
      'Premium Safety Package: full property audit, hazard removal, cleanup, and 12-month priority storm response — priced for value not for volume',
      'The Complete Property Tree Management Program: quarterly visits, annual pruning, storm response priority, and a written care plan — for property owners who want it done right',
      'White Glove Tree Service: uniformed crew, full property cleanup, before-and-after documentation, and a 5-year health guarantee on all preserved trees',
    ],
    'Lawn Care': [
      'The Lawn Excellence Program: weekly service, quarterly aeration, fertilization, weed control, and an annual overseeding — everything included, nothing to think about',
      'Premium Lawn Management: complete program with soil testing, custom fertilization plan, and a written guarantee that your lawn looks better than any other on your street',
    ],
    'default': [
      'The Premium Program: complete done-for-you service with a documented results guarantee — everything handled, nothing for you to manage',
      'The All-Inclusive Package: full service, guaranteed results, and ongoing support — for clients who want the best and are willing to pay for it',
    ],
  },
};

function getOfferSuggestions(offerType: string, niche: string): string[] {
  const byType = OFFER_SUGGESTIONS[offerType] || {};
  return byType[niche] || byType['default'] || [];
}

// ─── OFFER FRAMEWORKS ─────────────────────────────────────────────────────────
const OFFER_FRAMEWORKS = {
  'free-gift':     { name:'Free Gift Offer',    guarantee:'100% satisfaction guarantee — if you are not completely happy with the results we come back and make it right at no charge.', urgencyNote:'Limited to first N clients only — cannot extend after that without making it unsustainable' },
  'giveaway':      { name:'Giveaway Campaign',  guarantee:'Every entrant receives something of value. Grand prize winner gets the full service free. All second-place finalists receive a significant discount offer valid for 72 hours after notification.', urgencyNote:'Contest closes on a specific date — second-place offer expires 72 hours after notification' },
  'deep-discount': { name:'Deep Discount Offer', guarantee:'Price-lock guarantee — if you find a licensed insured competitor offering the same scope for less we will match it and add a free bonus.', urgencyNote:'Promotional pricing only valid through deadline date — returns to standard after that with no exceptions' },
  'full-price':    { name:'Authority Offer',    guarantee:'Results guarantee — we guarantee the specified outcome within the timeframe or continue working at no additional charge until we achieve it.', urgencyNote:'Only N new clients accepted per month to maintain service quality — current spots filling fast' },
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

  const seasonal = SEASONAL[niche]?.[month] || { trigger: `${month} campaign`, pain: `${niche} businesses need more clients in ${month}`, dream: 'Fully booked calendar with quality clients', urgency: 'Limited availability this month' };
  const framework = OFFER_FRAMEWORKS[offerType as keyof typeof OFFER_FRAMEWORKS] || OFFER_FRAMEWORKS['free-gift'];
  const suggestions = getOfferSuggestions(offerType, niche);
  const limit = clientCount || 12;
  const brand = brandName || 'Your Company';
  const booking = ctaUrl || '[your booking link]';

  const systemPrompt = 'You are an expert direct response marketer for home service businesses. You apply the Hormozi Value Equation to every campaign: VALUE = (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort). Every campaign must maximize Dream Outcome and Perceived Likelihood while minimizing Time Delay and Effort. You write specific, punchy, peer-to-peer copy — never corporate, never vague. Return ONLY a valid JSON object, no markdown, no explanation.';

  // Build giveaway schema snippet as plain string — NO backticks
  const giveawaySchemaField = offerType === 'giveaway'
    ? '"giveawayDetails": {"grandPrize": "string — full free service with dollar value", "entryMechanism": "string — simple shareable entry method", "numberOfWinners": "string — total including second place", "secondPlaceOffer": "string — specific dollar savings for second place", "secondPlaceScript": "string — 200-300 word word-for-word callback phone script. Opens with great news they won second place. Explains grand prize was claimed but they won the runner-up offer. Delivers discount as exciting news not consolation. Handles hesitation. Closes with booking inspection or next step. Warm framing throughout."},'
    : '"giveawayDetails": null,';

  // Build offer suggestion as plain string — NO backticks
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
    '- Time Delay: show fast results — first win within days, full result within 30 days\n' +
    '- Effort Reduced: done-for-you framing, we handle everything, no work required from them\n\n' +
    'REQUIRED JSON SCHEMA:\n' +
    '{\n' +
    '  "offerName": "Specific M-A-G-I-C name: Magnet word + Avatar (for [niche] companies) + Goal (specific outcome) + Interval (this [month]) + Container (System/Blueprint/Package)",\n' +
    '  "tagline": "One punchy sentence under 15 words",\n' +
    '  "dreamOutcome": "The specific vivid transformation — measurable and emotional. What does their life/business look like after?",\n' +
    '  "valueStack": [{"item": "Core service", "perceivedValue": "$XXX", "description": "What they get"}, {"item": "Bonus 1", "perceivedValue": "$XXX", "description": "High value low cost"}, {"item": "Bonus 2", "perceivedValue": "$XXX", "description": "High value low cost"}, {"item": "Risk Reversal", "perceivedValue": "$XXX", "description": "Guarantee value"}],\n' +
    '  "totalPerceivedValue": "$X,XXX",\n' +
    '  "offerPrice": "' + (offerType === 'free-gift' ? 'Regular price for core service — free gift is the bonus' : offerType === 'giveaway' ? 'Free for grand prize winner / [specific discount] for second place' : offerType === 'deep-discount' ? 'Promotional price with original price anchor' : 'Full price — value stack makes it feel like a steal') + '",\n' +
    '  "urgency": "Specific urgency statement with a real deadline date in ' + month + '",\n' +
    '  "scarcity": "Specific scarcity — limited to ' + limit + ' clients with a real reason why",\n' +
    '  "guarantee": "Bold specific guarantee with clear terms",\n' +
    '  "email": {"subject": "Subject under 50 chars — curiosity or benefit driven", "preheader": "Preview text under 85 chars", "body": "200-300 word email. Personal. Direct. Written from ' + brand + ' owner. One CTA. Use line breaks for scanning. NO corporate language."},\n' +
    '  "sms": [{"touch": 1, "timing": "Send immediately", "message": "Under 160 chars — punchy personal with link"}, {"touch": 2, "timing": "3 days later", "message": "Different angle under 160 chars"}, {"touch": 3, "timing": "48 hours before deadline", "message": "Final urgency under 160 chars with deadline"}],\n' +
    '  "facebook": "Facebook post 100-150 words. Conversational. Ask a question. Include offer details and CTA.",\n' +
    '  "instagram": "Instagram caption. Punchy first line. Bullet points for value. CTA. End with 5 relevant hashtags.",\n' +
    '  "nextdoor": "Nextdoor post. Hyper-local neighbor voice. Mention local area. 80-120 words.",\n' +
    '  "facebookGroup": "Facebook group post. Lead with value first. Never a hard sell. 80-120 words.",\n' +
    '  "gmb": "Google Business post. 150-300 chars. Keyword-rich. Include offer and CTA.",\n' +
    '  ' + giveawaySchemaField + '\n' +
    '  "ghlNotes": "3 specific GHL implementation notes — what workflow to build, what tags to use, what automation triggers to set",\n' +
    '  "magicHeadlines": ["Variation 1 — curiosity angle", "Variation 2 — benefit/number angle", "Variation 3 — social proof angle"]\n' +
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
    const e = jsonStr.lastIndexOf('}');
    if (s === -1 || e === -1) throw new Error('No JSON in response: ' + raw.slice(0, 200));
    return JSON.parse(jsonStr.slice(s, e + 1));
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
      '  "ghlNotes": "3 specific GHL implementation notes — what workflow to build, what tags to use, what automation triggers to set",\n' +
      '  "magicHeadlines": ["Variation 1 — curiosity angle", "Variation 2 — benefit/number angle", "Variation 3 — social proof angle"]',
      '"facebook": "GENERATE_IN_PASS_2",\n' +
      '  "instagram": "GENERATE_IN_PASS_2",\n' +
      '  "nextdoor": "GENERATE_IN_PASS_2",\n' +
      '  "facebookGroup": "GENERATE_IN_PASS_2",\n' +
      '  "gmb": "GENERATE_IN_PASS_2",\n' +
      '  "giveawayDetails": null,\n' +
      '  "ghlNotes": "GENERATE_IN_PASS_2",\n' +
      '  "magicHeadlines": ["GENERATE_IN_PASS_2"]'
    );

    const core = await callClaude(pass1Prompt, 1500);

    // ── PASS 2: Social posts + headlines + giveaway (parallel-safe, ~2500 tokens) ─
    const pass2Prompt = 'You are a direct response copywriter for ' + niche + ' businesses. Generate the following content for a ' + offerType + ' campaign called "' + (core.offerName || offerSuggestion) + '" running in ' + month + '. Dream outcome: ' + (core.dreamOutcome || seasonal.dream) + '. Brand: ' + brand + '. Return ONLY valid JSON.\n\n' +
      '{\n' +
      '  "facebook": "Facebook post 100-150 words. Open with a hook. Conversational. Include specific offer details and CTA.",\n' +
      '  "instagram": "Instagram caption. Bold first line that stops scroll. 3-5 bullet points of value. Clear CTA. 5 niche-relevant hashtags at end.",\n' +
      '  "nextdoor": "Nextdoor post. Hyper-local neighbor voice. Mention the local community. 80-120 words. No hard sell.",\n' +
      '  "facebookGroup": "Facebook community group post. Lead with value or a question. Helpful framing first. Soft CTA. 80-120 words.",\n' +
      '  "gmb": "Google Business post. 150-300 chars max. Keyword-rich for local SEO. Include the offer and a CTA.",\n' +
      (offerType === 'giveaway' ?
        '  "giveawayDetails": {"grandPrize": "Full free ' + niche.toLowerCase() + ' service with specific dollar value", "entryMechanism": "Simple shareable action to enter", "numberOfWinners": "Total winners including second place", "secondPlaceOffer": "Specific second place discount with dollar amount", "secondPlaceScript": "200-300 word word-for-word phone callback script. Open with: Hi [name], this is [name] from [company] — I have some great news. You entered our giveaway and I am calling because you are one of our winners. The grand prize was claimed but you won our second place award. Here is what that means for you... [deliver the offer as exciting news, not consolation]. Handle hesitation with: I completely understand, and there is absolutely no pressure here — I just wanted to make sure you got the full picture of what you won. Close with: All I need to do is get you scheduled for a quick visit so we can confirm the details. Does [day] or [day] work better for you?"},\n' :
        '  "giveawayDetails": null,\n'
      ) +
      '  "ghlNotes": "Note 1: specific GHL workflow to build for this campaign. Note 2: which tags to add and when. Note 3: what automation trigger fires and what sequence it starts.",\n' +
      '  "magicHeadlines": ["Curiosity angle headline using M-A-G-I-C formula", "Benefit and number angle headline", "Social proof or authority angle headline"]\n' +
      '}';

    const social = await callClaude(pass2Prompt, 1500);

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
