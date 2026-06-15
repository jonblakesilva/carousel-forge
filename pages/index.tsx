import { useState, useEffect, useCallback, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import Head from 'next/head';
import { CardData, generateCardHTML } from '../lib/cardTemplate';
import { ALL_TEMPLATES, CAROUSEL_TEMPLATES, TEMPLATE_CATEGORIES, SUGGESTED_BOOKS } from '../lib/templates';

type Step = 'form' | 'edit' | 'preview';
type TabType = 'generate' | 'templates' | 'ideas' | 'swipe' | 'tools' | 'library' | 'quote-image' | 'campaign';
type SlideCount = 3 | 5 | 7;

/* ─── THEMES ─────────────────────────────────────────────────── */
const THEMES = [
  { value: 'cream',     label: 'Aged Paper',   bg: '#F5F0E8', ink: '#0D0D0D' },
  { value: 'white',     label: 'Clean White',  bg: '#FFFFFF',  ink: '#0D0D0D' },
  { value: 'dark',      label: 'Dark Ink',     bg: '#0D0D0D',  ink: '#F5F0E8' },
  { value: 'newsprint', label: 'Newsprint',    bg: '#E8E4D9',  ink: '#2C2416' },
  { value: 'navy',      label: 'Navy',         bg: '#1B2A4A',  ink: '#E8DFC8' },
  { value: 'forest',    label: 'Forest',       bg: '#1B3A2D',  ink: '#E8F0E4' },
  { value: 'burgundy',  label: 'Burgundy',     bg: '#3A1220',  ink: '#F0E4E8' },
  { value: 'gold',      label: 'Gold',         bg: '#C8A96E',  ink: '#1A1208' },
  { value: 'slate',     label: 'Slate',        bg: '#2C3A4A',  ink: '#E4EAF0' },
  { value: 'rose',      label: 'Rose',         bg: '#FAF0F0',  ink: '#3A1520' },
];

/* ─── FORMATS ─────────────────────────────────────────────────── */
const NICHES = [
  { value: '', label: 'General / All Niches' },
  { value: 'Tree Service', label: '🌲 Tree Service' },
  { value: 'Roofing', label: '🏠 Roofing' },
  { value: 'Lawn Care', label: '🌿 Lawn Care' },
  { value: 'HVAC', label: '❄️ HVAC' },
  { value: 'Plumbing', label: '🔧 Plumbing' },
  { value: 'Remodeling', label: '🔨 Remodeling' },
  { value: 'Pest Control', label: '🐛 Pest Control' },
  { value: 'Pressure Washing', label: '💧 Pressure Washing' },
  { value: 'Electrician', label: '⚡ Electrician' },
  { value: 'Painting', label: '🎨 Painting' },
  { value: 'Landscaping', label: '🌱 Landscaping' },
  { value: 'Pool Service', label: '🏊 Pool Service' },
];

const FORMAT_GROUPS = [
  { label: 'Education', formats: [
    { value: 'history',       label: 'Historical Case Study', icon: '📜', desc: 'Real campaigns, real results' },
    { value: 'principle',     label: 'Timeless Principle',    icon: '⚖️', desc: 'Evergreen truths that still work' },
    { value: 'lesson',        label: 'Deep Lesson',           icon: '📖', desc: 'One concept, fully unpacked' },
    { value: 'case-study',    label: 'Case Study',            icon: '🔬', desc: 'Situation → strategy → result' },
    { value: 'famous-quote',  label: 'Famous Quote',          icon: '💬', desc: 'Quote + context + modern lesson' },
  ]},
  { label: 'Persuasion', formats: [
    { value: 'myth-truth',       label: 'Myth vs Truth',      icon: '🚫', desc: 'Bust the lies your market believes' },
    { value: 'problem-solution', label: 'Problem / Solution', icon: '🔧', desc: 'Pain → fix → transformation' },
    { value: 'pas',              label: 'PAS Framework',      icon: '🎯', desc: 'Problem → Agitate → Solution' },
    { value: 'hot-takes',        label: 'Hot Takes',          icon: '🔥', desc: 'Contrarian opinions that get comments' },
    { value: 'mistake',          label: 'Common Mistakes',    icon: '❌', desc: 'What they do wrong + the fix' },
    { value: 'offer',            label: 'Offer Presentation', icon: '🎁', desc: 'Problem-aware to CTA' },
  ]},
  { label: 'Actionable', formats: [
    { value: 'checklist',      label: 'Checklist',      icon: '✅', desc: 'Step-by-step tick boxes' },
    { value: 'authority-list', label: 'Authority List', icon: '📋', desc: '"X things the pros know"' },
    { value: 'quick-wins',     label: 'Quick Wins',     icon: '⚡', desc: 'Fast results, zero fluff' },
    { value: 'story',          label: 'Story Format',   icon: '📝', desc: 'Narrative arc in slides' },
  ]},
];

/* ─── CTA PRESETS ─────────────────────────────────────────────── */
const CTA_PRESETS = [
  'Book a Free Demo', 'Claim Your Free Setup', 'Show Me The System',
  'Get a Free Strategy Call', 'Start Your Free Trial', 'Download The Free Guide',
  'Join The Free Training', 'Apply For a Free Audit', 'Get The Free Checklist',
  'See It In Action', 'Follow For More', 'Save This For Later',
];

/* ─── TOPIC SUGGESTIONS ───────────────────────────────────────── */
const TOPIC_SUGGESTIONS: Record<string, string[]> = {
  history: ["Claude Hopkins and the Schlitz Beer campaign","David Ogilvy's Rolls-Royce headline","John Caples 'They Laughed When I Sat Down' ad","Volkswagen's 'Think Small' campaign by DDB","Gary Halbert's coat-of-arms letter","Leo Burnett creating the Marlboro Man","Rosser Reeves and the Anacin TV spots"],
  principle: ["The power of specificity in advertising copy","Why selling the benefit beats selling the feature","The rule of one: one reader, one idea, one action","Reason-why advertising and how it builds trust","Why your headline is 80% of the ad","Specificity creates believability"],
  "myth-truth": ["Marketing myths that cost contractors money","Biggest lies about social media for small business","What most people get wrong about email marketing","The biggest myths about SEO","Myths about cold outreach costing you deals"],
  "problem-solution": ["Why tree service businesses struggle to get repeat clients","The real reason lawn care companies can't scale past $500k","Why most service businesses lose money on their first customer","The lead quality problem every contractor faces"],
  "quick-wins": ["5 ways to get more Google reviews this week","Quick wins for your Google Business Profile","Simple changes that double your close rate on the phone","Fast ways to reactivate old customers this month"],
  "hot-takes": ["Unpopular truths about growing a service business","Hot takes on what actually drives revenue for contractors","Contrarian views on social media for local businesses"],
  "case-study": ["How a tree service went from $200k to $1M in 18 months","How one reactivation campaign made $18k in a weekend","The exact funnel that gets lawn care clients on autopilot"],
  checklist: ["The ultimate checklist for launching a marketing system","Pre-season marketing checklist for lawn care companies","The complete client onboarding checklist","Before you run Facebook ads: the contractor checklist"],
  lesson: ["The psychology behind why people buy from local service businesses","How direct mail still outperforms digital for contractors","Understanding LTV and why the first job is never about profit"],
  "authority-list": ["7 things top-earning contractors do that others don't","10 marketing principles from the 1920s that still print money","8 ways the best service businesses stay fully booked year-round"],
  story: ["How I went from zero to $1M in my service business","The mistake that almost killed my tree company","What a broken-down truck taught me about marketing"],
  pas: ["The pain of not having a predictable lead system","What happens when contractors rely only on word of mouth","The feast-or-famine cycle destroying service business owners"],
  mistake: ["Why most business owners write boring headlines","The biggest mistakes contractors make with their website","What kills most email marketing campaigns before they start"],
  offer: ["Our done-for-you marketing system for contractors","The complete digital marketing setup for tree service companies"],
  "famous-quote": ["Henry Ford on the danger of stopping advertising","Ogilvy on the importance of the headline","Claude Hopkins on reason-why advertising","Leo Burnett on simplicity in advertising"],
};

/* ─── CARD TYPE LABELS ────────────────────────────────────────── */
const CARD_TYPE_LABELS: Record<string, string> = {
  cover: 'Cover', lesson: 'Lesson', checklist: 'Checklist', myth: 'Myth vs Truth',
  stat: 'Stat', step: 'Step', problem: 'Problem', solution: 'Solution',
  'hot-take': 'Hot Take', story: 'Story', 'quick-win': 'Quick Win',
  quote: 'Quote', example: 'Case Study', cta: 'Call to Action', infographic: 'Infographic',
};

/* ─── COMPONENTS ─────────────────────────────────────────────── */
function CardPreview({ card, theme, logo }: { card: CardData; theme: string; logo: string }) {
  const t = THEMES.find(x => x.value === theme) || THEMES[0];
  const html = generateCardHTML(card, t.bg, t.ink, logo);
  return (
    <div className="lp-wrap">
      <div className="lp-label">Live Preview</div>
      <div className="lp-frame">
        <iframe srcDoc={html} style={{ width:1080, height:1080, border:'none', transform:'scale(0.22)', transformOrigin:'top left', pointerEvents:'none' }} title="preview" />
      </div>
    </div>
  );
}

function BulletEditor({ bullets, onChange, label = 'bullet' }: { bullets: string[]; onChange: (b: string[]) => void; label?: string }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
      {bullets.map((b, i) => (
        <div key={i} style={{ display:'flex', gap:5, alignItems:'center' }}>
          <span style={{ color:'#444', fontSize:11, minWidth:12 }}>›</span>
          <input type="text" value={b} onChange={e => { const n=[...bullets]; n[i]=e.target.value; onChange(n); }} style={{ flex:1 }} />
          <button className="icon-btn danger" onClick={() => onChange(bullets.filter((_,j)=>j!==i))}>✕</button>
        </div>
      ))}
      <button className="add-b-btn" onClick={() => onChange([...bullets, ''])}>+ Add {label}</button>
    </div>
  );
}

function CardEditor({ card, index, total, theme, logo, onChange, onMoveUp, onMoveDown, onDelete, onDuplicate, onRegenerate, isRegenerating }: {
  card: CardData; index: number; total: number; theme: string; logo: string;
  onChange: (c: CardData) => void; onMoveUp: ()=>void; onMoveDown: ()=>void;
  onDelete: ()=>void; onDuplicate: ()=>void; onRegenerate: ()=>void; isRegenerating: boolean;
}) {
  const [open, setOpen] = useState(index === 0);
  const f = (key: keyof CardData, lbl: string, multi=false, rows=3) => (
    <div className="ef">
      <label className="el">{lbl}</label>
      {multi
        ? <textarea value={(card[key] as string)||''} onChange={e=>onChange({...card,[key]:e.target.value})} rows={rows} />
        : <input type="text" value={(card[key] as string)||''} onChange={e=>onChange({...card,[key]:e.target.value})} />
      }
    </div>
  );

  return (
    <div className={`ce ${open?'open':''}`}>
      <div className="ce-h" onClick={()=>setOpen(o=>!o)}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <span className="ce-num">{index+1}</span>
          <div>
            <div className="ce-type">{CARD_TYPE_LABELS[card.type]||card.type}</div>
            <div className="ce-prev">{card.headline||card.quote||card.myth||card.stat||card.ctaText||'—'}</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:4, alignItems:'center' }} onClick={e=>e.stopPropagation()}>
          <button className="icon-btn" onClick={onRegenerate} disabled={isRegenerating} title="↺ Regenerate with AI">{isRegenerating?'…':'↺'}</button>
          <button className="icon-btn" onClick={onMoveUp} disabled={index===0}>↑</button>
          <button className="icon-btn" onClick={onMoveDown} disabled={index===total-1}>↓</button>
          <button className="icon-btn" onClick={onDuplicate}>⧉</button>
          <button className="icon-btn danger" onClick={onDelete}>✕</button>
          <span className="chevron">{open?'▲':'▼'}</span>
        </div>
      </div>
      {open && (
        <div className="ce-body">
          <div className="ce-split">
            <div className="ce-fields">
              {['cover','lesson','example','cta','problem','solution','step','hot-take','quick-win','checklist'].includes(card.type) && f('headline','Headline')}
              {card.type==='cover' && f('subheadline','Subheadline')}
              {['cover','lesson','example','cta','problem','solution','step','hot-take','quick-win','checklist','stat','quote','myth'].includes(card.type) && f('eyebrow','Eyebrow (short label)')}
              {['cover','lesson','example','quick-win'].includes(card.type) && f('tag','Tag / Badge')}
              {['example','problem','solution','step','story','quick-win','hot-take','stat'].includes(card.type) && f('body','Body Text',true)}
              {card.type==='story' && f('headline','Title / Hook')}
              {['lesson','problem','step'].includes(card.type) && (
                <div className="ef"><label className="el">Bullet Points</label><BulletEditor bullets={card.bullets||[]} onChange={b=>onChange({...card,bullets:b})} /></div>
              )}
              {card.type==='checklist' && (
                <div className="ef"><label className="el">Checklist Items</label><BulletEditor bullets={card.checks||[]} onChange={c=>onChange({...card,checks:c})} label="item" /></div>
              )}
              {card.type==='myth' && <>{f('myth','The Myth (crossed out)',true,2)}{f('truth','The Truth',true,2)}</>}
              {card.type==='stat' && <>{f('stat','The Number / Stat (e.g. 73%)')}{f('statLabel','Stat Label')}</>}
              {card.type==='step' && (
                <div className="ef"><label className="el">Step Number</label><input type="text" value={String(card.stepNumber||'')} onChange={e=>onChange({...card,stepNumber:parseInt(e.target.value)||undefined})} /></div>
              )}
              {['lesson','example','solution','story','quick-win'].includes(card.type) && <>{f('lesson','Lesson / Takeaway')}{f('lessonLabel','Lesson Label')}</>}
              {card.type==='quote' && <>{f('quote','Quote Text',true)}{f('author','Author')}</>}
              {card.type==='cta' && <>{f('body','Body / Subtext',true)}{f('ctaText','CTA Button Text')}{f('ctaUrl','CTA URL')}</>}
              {f('brandName','Brand / Handle (footer)')}
            </div>
            <CardPreview card={card} theme={theme} logo={logo} />
          </div>
        </div>
      )}
    </div>
  );
}

// Default brand preset for Jonathan Blake / Arbor Advantage
const DEFAULT_PRESET = {
  brandName: '@JonathanatArboradvantage',
  ctaText: 'Book a Free Demo',
  ctaUrl: '',
  logo: '',
  niche: 'Tree Service',
  ghlLocationId: '6B4reCngPYfDkJwOtiM0',
};

function useBrandPreset() {
  const load = () => {
    try {
      const s = localStorage.getItem('cf_preset2');
      if (s) {
        const parsed = JSON.parse(s);
        // Merge with defaults so any new default fields are picked up
        return { ...DEFAULT_PRESET, ...parsed };
      }
      return DEFAULT_PRESET;
    } catch {
      return DEFAULT_PRESET;
    }
  };
  const [preset, setPreset] = useState(DEFAULT_PRESET);
  useEffect(() => { setPreset(load()); }, []);
  const save = useCallback((p: typeof preset) => {
    setPreset(p);
    try { localStorage.setItem('cf_preset2', JSON.stringify(p)); } catch {}
  }, []);
  const reset = useCallback(() => {
    setPreset(DEFAULT_PRESET);
    try { localStorage.setItem('cf_preset2', JSON.stringify(DEFAULT_PRESET)); } catch {}
  }, []);
  return { preset, save, reset };
}

/* ─── MAIN ─────────────────────────────────────────────────── */
export default function Home() {
  const [step, setStep] = useState<Step>('form');
  const [niche, setNiche] = useState('');
  const [topic, setTopic] = useState('');
  const [format, setFormat] = useState('history');
  const [slideCount, setSlideCount] = useState<SlideCount>(5);
  // Hook A/B tester
  const [hookAbTopic, setHookAbTopic] = useState('');
  const [hookAbVariants, setHookAbVariants] = useState<any[]>([]);
  const [isTestingHooks, setIsTestingHooks] = useState(false);
  const [selectedHook, setSelectedHook] = useState<number|null>(null);
  // Competitor finder
  const [competitorInput, setCompetitorInput] = useState('');
  const [competitorResult, setCompetitorResult] = useState<any>(null);
  const [isAnalyzingCompetitor, setIsAnalyzingCompetitor] = useState(false);
  // Case study generator
  const [caseStudyClient, setCaseStudyClient] = useState('');
  const [caseStudyProblem, setCaseStudyProblem] = useState('');
  const [caseStudySolution, setCaseStudySolution] = useState('');
  const [caseStudyResult, setCaseStudyResult] = useState('');
  const [isGeneratingCaseStudy, setIsGeneratingCaseStudy] = useState(false);
  // Video script
  const [scriptFormat, setScriptFormat] = useState('reel');
  const [videoScript, setVideoScript] = useState('');
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [scriptCopied, setScriptCopied] = useState(false);
  // Saved library
  const [savedCarousels, setSavedCarousels] = useState<{id:string;label:string;cards:any[];savedAt:string}[]>([]);
  const [showSavedLibrary, setShowSavedLibrary] = useState(false);
  // Quote image generator
  const [qiQuote, setQiQuote] = useState('');
  const [qiName, setQiName] = useState('');
  const [qiHandle, setQiHandle] = useState('');
  const [qiAvatar, setQiAvatar] = useState(''); // base64
  const [qiBg, setQiBg] = useState('dark');
  const [qiFormat, setQiFormat] = useState('square');
  const [qiPreviewHtml, setQiPreviewHtml] = useState('');
  const [qiW, setQiW] = useState(1080);
  const [qiH, setQiH] = useState(1080);
  const [isGeneratingQi, setIsGeneratingQi] = useState(false);
  const [qiDownloading, setQiDownloading] = useState(false);
  // Background image per theme
  const [bgImage, setBgImage] = useState(''); // base64 for slide background
  // Campaign Engine
  const [campNiche, setCampNiche] = useState('Tree Service');
  const [campMonth, setCampMonth] = useState(new Date().toLocaleString('default', {month:'long'}));
  const [campOfferType, setCampOfferType] = useState<'free-gift'|'giveaway'|'deep-discount'|'full-price'>('free-gift');
  const [campCustomOffer, setCampCustomOffer] = useState('');
  const [campClientCount, setCampClientCount] = useState(12);
  const [campResult, setCampResult] = useState<any>(null);
  const [isGeneratingCampaign, setIsGeneratingCampaign] = useState(false);
  const [campCopied, setCampCopied] = useState('');
  const [campActiveSection, setCampActiveSection] = useState('offer');
  // Bulk template run
  const [bulkSelected, setBulkSelected] = useState<string[]>([]);
  const [bulkResults, setBulkResults] = useState<{id:string;label:string;cards:any[];done:boolean}[]>([]);
  const [isBulkRunning, setIsBulkRunning] = useState(false);
  const [bulkProgress, setBulkProgress] = useState(0);
  const [bulkCategory, setBulkCategory] = useState('');
  const [theme, setTheme] = useState('cream');
  const { preset, save: savePreset, reset: resetPreset } = useBrandPreset();
  const [brandName, setBrandName] = useState('');
  const [ctaText, setCtaText] = useState('Follow For More');
  const [ctaUrl, setCtaUrl] = useState('');
  const [logo, setLogo] = useState('');
  const [cards, setCards] = useState<CardData[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [renderingIdx, setRenderingIdx] = useState<number|null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [regenIdx, setRegenIdx] = useState<number|null>(null);
  const [hookScore, setHookScore] = useState<{score:number;feedback:string;suggestions:string[]} | null>(null);
  const [isScoringHook, setIsScoringHook] = useState(false);
  const [error, setError] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [presetSaved, setPresetSaved] = useState(false);
  const [showSugg, setShowSugg] = useState(false);
  const [templateCat, setTemplateCat] = useState('All');
  const [activeTab, setActiveTab] = useState<TabType>('templates');
  const logoInputRef = useRef<HTMLInputElement>(null);
  // Caption & GHL
  const [captionPlatform, setCaptionPlatform] = useState('instagram');
  const [upfrontPlatform, setUpfrontPlatform] = useState('instagram');
  const [aiCaption, setAiCaption] = useState('');
  // Multi-platform captions
  const [allCaptions, setAllCaptions] = useState<Record<string, string>>({});
  const [isGeneratingAllCaptions, setIsGeneratingAllCaptions] = useState(false);
  const [captionCopied, setCaptionCopied] = useState<string>('');
  const [activeCaptionTab, setActiveCaptionTab] = useState('instagram');
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);
  const [keywordTrigger, setKeywordTrigger] = useState('');
  const [keywordAction, setKeywordAction] = useState('and I\'ll DM you the link');
  const [ghlLocationId, setGhlLocationId] = useState('6B4reCngPYfDkJwOtiM0');
  const [scheduleDate, setScheduleDate] = useState('');
  const [ghlPlatforms, setGhlPlatforms] = useState<string[]>(['facebook']);
  const [isPushingGHL, setIsPushingGHL] = useState(false);
  const [ghlResult, setGhlResult] = useState('');
  // Repurpose
  const [repurposeFormat, setRepurposeFormat] = useState('blog');
  const [repurposedContent, setRepurposedContent] = useState('');
  const [isRepurposing, setIsRepurposing] = useState(false);
  const [repurposeCopied, setRepurposeCopied] = useState(false);
  // Topic ideas
  const [topicIdeasNiche, setTopicIdeasNiche] = useState('');
  const [topicIdeas, setTopicIdeas] = useState<{topic:string;hook:string;format:string}[]>([]);
  const [isGeneratingIdeas, setIsGeneratingIdeas] = useState(false);
  const [showTopicIdeas, setShowTopicIdeas] = useState(false);

  useEffect(() => {
    const p = preset;
    setBrandName(p.brandName || DEFAULT_PRESET.brandName);
    setCtaText(p.ctaText || DEFAULT_PRESET.ctaText);
    setCtaUrl(p.ctaUrl || '');
    setLogo(p.logo || '');
    if (p.niche) setNiche(p.niche);
    if ((p as any).ghlLocationId) setGhlLocationId((p as any).ghlLocationId);
  }, [preset.brandName]);

  const isLoading = isGenerating || isRendering;
  const activeTheme = THEMES.find(t=>t.value===theme)||THEMES[0];
  const suggestions = TOPIC_SUGGESTIONS[format] || TOPIC_SUGGESTIONS['history'];

  const filteredTemplates = templateCat === 'All'
    ? ALL_TEMPLATES
    : ALL_TEMPLATES.filter(t => t.category === templateCat);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 500000) { setError('Logo must be under 500kb'); return; }
    const reader = new FileReader();
    reader.onload = ev => { const result = ev.target?.result as string; setLogo(result); };
    reader.readAsDataURL(file);
  };

  const handleSavePreset = () => { savePreset({brandName,ctaText,ctaUrl,logo,niche,ghlLocationId} as any); setPresetSaved(true); setTimeout(()=>setPresetSaved(false),2000); };

  const handleLoadTemplate = (tpl: typeof CAROUSEL_TEMPLATES[0]) => {
    const enriched = tpl.cards.map(c => ({
      ...c,
      brandName: brandName || c.brandName || '',
      ctaText: c.type === 'cta' ? (ctaText || c.ctaText || '') : c.ctaText,
      ctaUrl: c.type === 'cta' ? (ctaUrl || c.ctaUrl || '') : c.ctaUrl,
    }));
    setCards(enriched);
    setTopic(tpl.topic);
    setFormat(tpl.format);
    setImages([]);
    setStep('edit');
  };

  // Load saved carousels from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cf_saved_carousels');
      if (saved) setSavedCarousels(JSON.parse(saved));
    } catch {}
  }, []);

  // Load niche from localStorage
  useEffect(() => {
    try {
      const savedNiche = localStorage.getItem('cf_niche');
      if (savedNiche) setNiche(savedNiche);
    } catch {}
  }, []);

  // Campaign Engine
  const handleGenerateCampaign = async () => {
    setIsGeneratingCampaign(true); setCampResult(null);
    try {
      const res = await fetch('/api/campaign', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          niche: campNiche, month: campMonth, offerType: campOfferType,
          brandName, ctaUrl, customOffer: campCustomOffer, clientCount: campClientCount,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Campaign generation failed');
      setCampResult(data);
      setCampActiveSection('offer');
    } catch(err) {
      const msg = err instanceof Error ? err.message : 'Campaign failed';
      setError('Campaign Engine: ' + msg);
      console.error('Campaign error:', err);
    }
    finally { setIsGeneratingCampaign(false); }
  };

  const copyCamp = async (key: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCampCopied(key);
    setTimeout(()=>setCampCopied(''),2000);
  };

  // Bulk template run
  const handleBulkRun = async () => {
    const toRun = ALL_TEMPLATES.filter(t => bulkSelected.includes(t.id));
    if (!toRun.length) return;
    setIsBulkRunning(true);
    setBulkProgress(0);
    setBulkResults([]);
    const results: typeof bulkResults = [];
    for (let i = 0; i < toRun.length; i++) {
      const tpl = toRun[i];
      try {
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({topic: tpl.topic, format: tpl.format, slideCount: tpl.cards.length, brandName, niche}),
        });
        const data = await res.json();
        if (res.ok && data.cards) {
          const entry = {id: tpl.id, label: tpl.label, cards: data.cards, done: true};
          results.push(entry);
          setBulkResults([...results]);
          // Auto-save to library
          const saved = JSON.parse(localStorage.getItem('cf_saved_carousels') || '[]');
          const updated = [{id: Date.now().toString() + i, label: tpl.label, cards: data.cards, savedAt: new Date().toLocaleDateString()}, ...saved].slice(0, 20);
          localStorage.setItem('cf_saved_carousels', JSON.stringify(updated));
          setSavedCarousels(updated);
        }
      } catch {}
      setBulkProgress(Math.round(((i + 1) / toRun.length) * 100));
    }
    setIsBulkRunning(false);
  };

  // Quote image generator
  const handleGenerateQuoteImage = async () => {
    if (!qiQuote.trim()) return;
    setIsGeneratingQi(true);
    try {
      const res = await fetch('/api/quote-image', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          quote: qiQuote, name: qiName || brandName || 'Jonathan Blake',
          handle: qiHandle, avatarBase64: qiAvatar,
          bgStyle: qiBg, format: qiFormat,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setQiPreviewHtml(data.html);
      setQiW(data.width); setQiH(data.height);
    } catch(err) { setError(err instanceof Error ? err.message : 'Failed'); }
    finally { setIsGeneratingQi(false); }
  };

  const handleDownloadQuoteImage = async () => {
    if (!qiPreviewHtml) return;
    setQiDownloading(true);
    try {
      const wrap = document.createElement('div');
      wrap.style.cssText = `position:fixed;left:-9999px;top:0;width:${qiW}px;height:${qiH}px;z-index:-1;overflow:hidden;`;
      wrap.innerHTML = qiPreviewHtml;
      document.body.appendChild(wrap);
      const el = wrap.firstElementChild as HTMLElement || wrap;
      el.style.width = qiW + 'px';
      el.style.height = qiH + 'px';
      await document.fonts.ready;
      await new Promise(r => setTimeout(r, 800));
      const dataUrl = await htmlToImage.toPng(el, {width: qiW, height: qiH, pixelRatio: 2});
      document.body.removeChild(wrap);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `quote-${qiFormat}-${Date.now()}.png`;
      a.click();
    } catch(err) { setError('Download failed: ' + (err instanceof Error ? err.message : 'Unknown')); }
    finally { setQiDownloading(false); }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const b64 = (reader.result as string).split(',')[1];
      setQiAvatar(b64);
    };
    reader.readAsDataURL(file);
  };

  const handleBgImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setBgImage(reader.result as string); // full data URL
    };
    reader.readAsDataURL(file);
  };

  const handleSaveNiche = (n: string) => {
    setNiche(n);
    try { localStorage.setItem('cf_niche', n); } catch {}
    // Also persist in brand preset
    savePreset({ ...preset, niche: n } as any);
  };

  const handleSaveCarousel = () => {
    const id = Date.now().toString();
    const label = cards[0]?.headline || topic || 'Untitled Carousel';
    const entry = { id, label, cards, savedAt: new Date().toLocaleDateString() };
    const updated = [entry, ...savedCarousels].slice(0, 20); // keep last 20
    setSavedCarousels(updated);
    try { localStorage.setItem('cf_saved_carousels', JSON.stringify(updated)); } catch {}
  };

  const handleDeleteSaved = (id: string) => {
    const updated = savedCarousels.filter(c => c.id !== id);
    setSavedCarousels(updated);
    try { localStorage.setItem('cf_saved_carousels', JSON.stringify(updated)); } catch {}
  };

  const handleLoadSaved = (entry: typeof savedCarousels[0]) => {
    setCards(entry.cards);
    setImages([]);
    setStep('edit');
    setShowSavedLibrary(false);
  };

  const handleHookAbTest = async () => {
    if (!hookAbTopic.trim()) return;
    setIsTestingHooks(true); setHookAbVariants([]); setSelectedHook(null);
    try {
      const res = await fetch('/api/hook-ab-test', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({topic: hookAbTopic, format, niche: niche || 'home service business marketing', brandName}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Hook test failed');
      setHookAbVariants(data.hooks || []);
    } catch(err) { setError(err instanceof Error ? err.message : 'Hook test failed'); }
    finally { setIsTestingHooks(false); }
  };

  const handleCompetitorAnalysis = async () => {
    if (!competitorInput.trim()) return;
    setIsAnalyzingCompetitor(true); setCompetitorResult(null);
    try {
      const res = await fetch('/api/competitor-angles', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({competitor: competitorInput, yourNiche: niche || 'marketing agency for home service businesses'}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Analysis failed');
      setCompetitorResult(data);
    } catch(err) { setError(err instanceof Error ? err.message : 'Analysis failed'); }
    finally { setIsAnalyzingCompetitor(false); }
  };

  const handleGenerateCaseStudy = async () => {
    if (!caseStudyProblem || !caseStudyResult) { setError('Problem and result are required'); return; }
    setIsGeneratingCaseStudy(true); setError('');
    try {
      const res = await fetch('/api/case-study', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({clientType: caseStudyClient, problem: caseStudyProblem, solution: caseStudySolution, result: caseStudyResult, niche: niche || 'home service business', brandName, ctaText, ctaUrl}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Case study generation failed');
      setCards(data.cards); setImages([]); setStep('edit');
    } catch(err) { setError(err instanceof Error ? err.message : 'Case study failed'); }
    finally { setIsGeneratingCaseStudy(false); }
  };

  const handleGenerateVideoScript = async () => {
    if (!cards.length) { setError('Generate a carousel first'); return; }
    setIsGeneratingScript(true); setVideoScript('');
    try {
      const res = await fetch('/api/video-script', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({cards, scriptFormat, topic, brandName, ctaText, ctaUrl, niche}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Script generation failed');
      setVideoScript(data.script);
    } catch(err) { setError(err instanceof Error ? err.message : 'Script failed'); }
    finally { setIsGeneratingScript(false); }
  };

  const handleScoreHook = async (headline: string) => {
    if (!headline.trim()) return;
    setIsScoringHook(true); setHookScore(null);
    try {
      const res = await fetch('/api/generate-caption', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          cards: [{type:'cover', headline}],
          platform: 'instagram',
          topic: `Score this headline for virality and engagement: "${headline}". Return JSON only: {score: 1-10, feedback: "one sentence", suggestions: ["alternative 1","alternative 2","alternative 3"]}`,
          brandName: '',
        }),
      });
      const data = await res.json();
      try {
        const parsed = JSON.parse(data.caption.replace(/```json\n?/g,'').replace(/```\n?/g,'').trim());
        setHookScore(parsed);
      } catch { setHookScore({score:7, feedback: data.caption?.slice(0,100)||'', suggestions:[]}); }
    } catch {}
    finally { setIsScoringHook(false); }
  };

  const handleGenerate = async () => {
    if (!topic.trim()) { setError('Please enter a topic or choose a template'); return; }
    setError(''); setIsGenerating(true); setStatusMsg('Crafting your carousel...');
    try {
      const res = await fetch('/api/generate', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({topic,brandName,ctaText,ctaUrl,format,slideCount}) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.details||data.error||'Generation failed');
      setCards(data.cards); setImages([]); setStep('edit');
    } catch(err) { setError(err instanceof Error?err.message:'Something went wrong'); }
    finally { setIsGenerating(false); setStatusMsg(''); }
  };

  const handleRenderAll = async () => {
    setError(''); setIsRendering(true); setStatusMsg('Rendering all slides...');
    try {
      const res = await fetch('/api/screenshot', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({cards, bg:activeTheme.bg, ink:activeTheme.ink, logo, bgImage}) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.details||data.error||'Rendering failed');
      setImages(data.images); setCurrentSlide(0); setStep('preview');
    } catch(err) { setError(err instanceof Error?err.message:'Something went wrong'); }
    finally { setIsRendering(false); setStatusMsg(''); }
  };

  const handleRenderOne = async (idx: number) => {
    setRenderingIdx(idx);
    try {
      const res = await fetch('/api/screenshot', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({cards:[cards[idx]], bg:activeTheme.bg, ink:activeTheme.ink, logo}) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error||'Render failed');
      const next=[...images]; next[idx]=data.images[0]; setImages(next); setCurrentSlide(idx);
    } catch(err) { setError(err instanceof Error?err.message:'Re-render failed'); }
    finally { setRenderingIdx(null); }
  };

  const handleRegenCard = async (idx: number) => {
    setRegenIdx(idx);
    try {
      const res = await fetch('/api/regenerate-card', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({topic,format,cardType:cards[idx].type,slideNumber:idx+1,totalSlides:cards.length,brandName,ctaText,ctaUrl}) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error||'Regen failed');
      const next=[...cards]; next[idx]=data.card; setCards(next);
    } catch(err) { setError(err instanceof Error?err.message:'Regeneration failed'); }
    finally { setRegenIdx(null); }
  };

  const updateCard = (i: number, c: CardData) => { const n=[...cards]; n[i]=c; setCards(n); };
  const moveCard = (i: number, d: -1|1) => { const n=[...cards]; const j=i+d; if(j<0||j>=n.length)return; [n[i],n[j]]=[n[j],n[i]]; setCards(n); };
  const deleteCard = (i: number) => setCards(cards.filter((_,j)=>j!==i));
  const dupCard = (i: number) => { const n=[...cards]; n.splice(i+1,0,{...cards[i]}); setCards(n); };
  const addCard = (type: CardData['type']) => setCards([...cards,{type,headline:'',eyebrow:'',brandName:brandName||'',bullets:type==='lesson'?['','']:undefined,checks:type==='checklist'?['','']:undefined}]);

  const caption = () => {
    const lines: string[] = [];
    cards.forEach(c => {
      if(c.headline) lines.push(c.headline);
      if(c.myth) lines.push(`❌ ${c.myth}`);
      if(c.truth) lines.push(`✅ ${c.truth}`);
      if(c.stat) lines.push(`${c.stat} — ${c.statLabel||''}`);
      if(c.bullets) c.bullets.forEach(b=>b&&lines.push(`• ${b}`));
      if(c.checks) c.checks.forEach(b=>b&&lines.push(`☑ ${b}`));
      if(c.lesson) lines.push(`💡 ${c.lesson}`);
      if(c.quote) lines.push(`"${c.quote}" — ${c.author||''}`);
    });
    if(ctaText) lines.push(`\n${ctaText}${ctaUrl?` → ${ctaUrl}`:''}`);
    return lines.join('\n');
  };

  const handleGenerateCaption = async () => {
    setIsGeneratingCaption(true);
    setAiCaption('');
    try {
      const res = await fetch('/api/generate-caption', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({cards, platform: captionPlatform, brandName, ctaText, ctaUrl, keywordTrigger, keywordAction, topic}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Caption generation failed');
      setAiCaption(data.caption);
    } catch(err) { setError(err instanceof Error ? err.message : 'Caption failed'); }
    finally { setIsGeneratingCaption(false); }
  };

  const handlePushGHL = async () => {
    if (!ghlLocationId) { setError('Enter your GHL Location ID first'); return; }
    setIsPushingGHL(true); setGhlResult('');
    try {
      const res = await fetch('/api/push-to-ghl', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          caption: allCaptions[activeCaptionTab] || aiCaption || '',
          images,
          scheduledAt: scheduleDate || null,
          locationId: ghlLocationId,
          platforms: ghlPlatforms,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'GHL push failed');
      setGhlResult(data.message || 'Pushed to GHL successfully');
    } catch(err) { setError(err instanceof Error ? err.message : 'GHL push failed'); }
    finally { setIsPushingGHL(false); }
  };

  const handleGenerateAllCaptions = async () => {
    if (!cards.length) return;
    setIsGeneratingAllCaptions(true);
    const platforms = ['instagram', 'facebook', 'linkedin', 'twitter', 'tiktok', 'youtube'];
    const results: Record<string, string> = {};
    // Generate all 6 in parallel
    await Promise.all(platforms.map(async (platform) => {
      try {
        const res = await fetch('/api/generate-caption', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({cards, platform, brandName, ctaText, ctaUrl, keywordTrigger, keywordAction, topic}),
        });
        const data = await res.json();
        if (res.ok) results[platform] = data.caption || '';
      } catch {}
    }));
    setAllCaptions(results);
    setIsGeneratingAllCaptions(false);
  };

  const handleRepurpose = async () => {
    setIsRepurposing(true); setRepurposedContent('');
    try {
      const res = await fetch('/api/repurpose', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({cards, format: repurposeFormat, topic, brandName, ctaText, ctaUrl}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Repurpose failed');
      setRepurposedContent(data.content);
    } catch(err) { setError(err instanceof Error ? err.message : 'Repurpose failed'); }
    finally { setIsRepurposing(false); }
  };

  const handleGenerateTopicIdeas = async () => {
    if (!topicIdeasNiche.trim()) { setError('Enter a niche or industry first'); return; }
    setIsGeneratingIdeas(true); setTopicIdeas([]);
    try {
      const res = await fetch('/api/topic-ideas', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({niche: topicIdeasNiche, count: 12}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Ideas generation failed');
      setTopicIdeas(data.ideas || []);
    } catch(err) { setError(err instanceof Error ? err.message : 'Ideas failed'); }
    finally { setIsGeneratingIdeas(false); }
  };

  const handleCopy = async () => { await navigator.clipboard.writeText(aiCaption || caption()); setCopied(true); setTimeout(()=>setCopied(false),2500); };
  const dl = (img: string, name: string) => { const a=document.createElement('a'); a.href=img; a.download=name; a.click(); };

  return (
    <>
      <Head>
        <title>CarouselForge — Vintage Ad Carousel Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Oswald:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{background:#090909;color:#EDE8DC;font-family:'EB Garamond',Georgia,serif;min-height:100vh}
        .app{min-height:100vh;display:flex;flex-direction:column}
        header{border-bottom:1px solid #161616;padding:16px 36px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:#090909;z-index:100}
        .logo{font-family:'Playfair Display',serif;font-size:17px;font-weight:900;letter-spacing:0.06em;text-transform:uppercase}
        .logo span{color:#C8A96E}
        .nav-steps{display:flex;gap:3px;align-items:center}
        .ns{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#222;padding:5px 10px;border:1px solid #161616}
        .ns.active{color:#C8A96E;border-color:#C8A96E}
        .ns.done{color:#444;border-color:#222;cursor:pointer}
        .ns.done:hover{color:#EDE8DC;border-color:#3a3a3a}
        .nsep{color:#1a1a1a;font-size:9px;padding:0 2px}
        main{flex:1;padding:40px 36px;max-width:1120px;margin:0 auto;width:100%}

        /* TABS */
        .tab-row{display:flex;gap:0;margin-bottom:32px;border-bottom:1px solid #161616}
        .tab{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#333;padding:10px 20px;border:none;background:transparent;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all 0.15s}
        .tab:hover{color:#888}
        .tab.active{color:#C8A96E;border-bottom-color:#C8A96E}

        /* FORM */
        .form-ey{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.4em;text-transform:uppercase;color:#C8A96E;margin-bottom:8px}
        .form-h{font-family:'Playfair Display',serif;font-size:44px;font-weight:900;line-height:1;margin-bottom:6px}
        .form-sub{font-size:16px;font-style:italic;color:#444;margin-bottom:36px}

        /* FORMAT GRID */
        .fg{display:flex;flex-direction:column;gap:16px;margin-bottom:28px}
        .fg-label{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.35em;text-transform:uppercase;color:#2a2a2a;margin-bottom:6px}
        .fg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:5px}
        .fc{border:1px solid #141414;padding:10px 12px;cursor:pointer;background:transparent;color:inherit;text-align:left;font-family:inherit;transition:all 0.12s;display:flex;align-items:flex-start;gap:8px}
        .fc:hover{border-color:#2a2a2a;background:#0d0d0d}
        .fc.sel{border-color:#C8A96E;background:#11100a}
        .fc-icon{font-size:14px;flex-shrink:0;margin-top:1px}
        .fc-label{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:#aaa;margin-bottom:1px}
        .fc.sel .fc-label{color:#C8A96E}
        .fc-desc{font-size:11px;color:#333;font-style:italic}

        /* FIELDS */
        .field{margin-bottom:18px}
        .fr2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px}
        .label{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#3a3a3a;display:block;margin-bottom:6px}
        .req{color:#C8A96E}
        input[type="text"],textarea{width:100%;background:#050505;border:1px solid #161616;color:#EDE8DC;font-family:'EB Garamond',serif;font-size:16px;padding:9px 12px;outline:none;transition:border-color 0.15s}
        input[type="text"]:focus,textarea:focus{border-color:#C8A96E}
        textarea{resize:vertical;min-height:72px;line-height:1.5}
        input::placeholder,textarea::placeholder{color:#1e1e1e;font-style:italic}

        /* PILLS */
        .pr{display:flex;gap:4px;flex-wrap:wrap}
        .pill{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;border:1px solid #161616;padding:5px 12px;cursor:pointer;background:transparent;color:#3a3a3a;transition:all 0.12s}
        .pill:hover{border-color:#2a2a2a;color:#777}
        .pill.sel{border-color:#C8A96E;color:#C8A96E;background:#11100a}
        .tpill{display:flex;align-items:center;gap:5px}
        .sw{width:12px;height:12px;border-radius:50%;flex-shrink:0;border:1px solid #2a2a2a}

        /* THEMES GRID — all 10 */
        .theme-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}

        /* SUGGESTIONS */
        .sugg-btn{background:transparent;border:none;font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#C8A96E;cursor:pointer;padding:0;margin-bottom:6px;opacity:0.6;transition:opacity 0.15s}
        .sugg-btn:hover{opacity:1}
        .sugg-list{display:flex;flex-direction:column;gap:2px;margin-bottom:10px;padding:10px 12px;border:1px solid #141414;background:#060606}
        .sugg-item{font-family:'EB Garamond',serif;font-size:14px;color:#444;cursor:pointer;padding:4px 0;border-bottom:1px solid #0e0e0e;transition:color 0.12s;font-style:italic}
        .sugg-item:last-child{border-bottom:none}
        .sugg-item:hover{color:#C8A96E}

        /* CTA PRESETS */
        .cta-ps{display:flex;gap:4px;flex-wrap:wrap;margin-top:5px}
        .cta-p{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;border:1px dashed #161616;padding:3px 9px;cursor:pointer;background:transparent;color:#2a2a2a;transition:all 0.12s}
        .cta-p:hover{border-color:#C8A96E;color:#C8A96E}

        /* LOGO UPLOAD */
        .logo-upload{display:flex;align-items:center;gap:10px}
        .logo-preview{width:48px;height:32px;object-fit:contain;border:1px solid #161616;background:#0a0a0a;padding:2px}
        .logo-placeholder{width:48px;height:32px;border:1px dashed #1e1e1e;background:#0a0a0a;display:flex;align-items:center;justify-content:center;font-size:10px;color:#2a2a2a;cursor:pointer}
        .logo-btn{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;border:1px solid #1e1e1e;padding:6px 12px;cursor:pointer;background:transparent;color:#3a3a3a;transition:all 0.12s}
        .logo-btn:hover{border-color:#C8A96E;color:#C8A96E}
        .logo-clear{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;border:none;background:transparent;color:#2a2a2a;cursor:pointer;transition:color 0.12s}
        .logo-clear:hover{color:#ff4444}

        /* PRESET */
        .preset-bar{display:flex;align-items:center;justify-content:flex-end;gap:7px;margin-bottom:16px}
        .preset-btn{background:transparent;border:1px solid #161616;color:#2a2a2a;font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;padding:5px 10px;cursor:pointer;transition:all 0.12s}
        .preset-btn:hover{border-color:#C8A96E;color:#C8A96E}
        .preset-ok{color:#4a8a3a;font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase}

        /* BUTTONS */
        .btn-p{background:#C8A96E;color:#090909;border:none;font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;padding:13px 32px;cursor:pointer;transition:background 0.15s;display:inline-flex;align-items:center;gap:7px;white-space:nowrap}
        .btn-p:hover{background:#d4b77a}
        .btn-p:disabled{opacity:0.35;cursor:not-allowed}
        .btn-s{background:transparent;color:#444;border:1px solid #1a1a1a;font-family:'Oswald',sans-serif;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;padding:9px 20px;cursor:pointer;transition:all 0.12s;white-space:nowrap}
        .btn-s:hover:not(:disabled){border-color:#3a3a3a;color:#EDE8DC}
        .btn-s:disabled{opacity:0.25;cursor:not-allowed}
        .btn-g{background:transparent;color:#2a2a2a;border:1px dashed #161616;font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;padding:5px 10px;cursor:pointer;transition:all 0.12s}
        .btn-g:hover{border-color:#3a3a3a;color:#777}
        .err{background:#0a0404;border:1px solid #280a0a;color:#ff5050;padding:9px 12px;font-family:'Oswald',sans-serif;font-size:10px;margin-bottom:14px}
        .loading-ov{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;gap:14px}
        .spin{width:28px;height:28px;border:2px solid #161616;border-top-color:#C8A96E;border-radius:50%;animation:spin 0.7s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
        .loading-t{font-family:'Oswald',sans-serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#333}

        /* TEMPLATES */
        .tpl-cats{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:16px}
        .tpl-cat{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;border:1px solid #141414;padding:5px 12px;cursor:pointer;background:transparent;color:#2a2a2a;transition:all 0.12s}
        .tpl-cat:hover{border-color:#2a2a2a;color:#666}
        .tpl-cat.sel{border-color:#C8A96E;color:#C8A96E;background:#11100a}
        .tpl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;margin-bottom:28px}
        .tpl-card{border:1px solid #141414;padding:16px 18px;background:#060606;cursor:pointer;transition:all 0.12s;text-align:left}
        .tpl-card:hover{border-color:#2a2a2a;background:#0c0c0c}
        .tpl-icon{font-size:20px;margin-bottom:8px}
        .tpl-cat-badge{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.3em;text-transform:uppercase;color:#C8A96E;margin-bottom:5px}
        .tpl-label{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:#EDE8DC;margin-bottom:4px}
        .tpl-desc{font-size:13px;color:#3a3a3a;font-style:italic;margin-bottom:12px}
        .tpl-slides{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.15em;text-transform:uppercase;color:#2a2a2a;margin-bottom:10px}
        .tpl-load-btn{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;border:1px solid #1e1e1e;padding:6px 14px;background:transparent;color:#555;cursor:pointer;transition:all 0.12s;width:100%}
        .tpl-card:hover .tpl-load-btn{border-color:#C8A96E;color:#C8A96E}

        /* EDITOR */
        .eh{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px;gap:12px}
        .et{font-family:'Playfair Display',serif;font-size:28px;font-weight:900}
        .esub{font-size:13px;font-style:italic;color:#3a3a3a;margin-top:3px}
        .ea{display:flex;gap:6px;flex-shrink:0;padding-top:3px}
        .cl{display:flex;flex-direction:column;gap:4px;margin-bottom:16px}
        .ce{border:1px solid #121212;background:#060606}
        .ce.open{border-color:#1c1c1c}
        .ce-h{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;cursor:pointer;gap:10px;user-select:none}
        .ce-h:hover{background:#0a0a0a}
        .ce-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#1e1e1e;min-width:18px}
        .ce-type{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#C8A96E;margin-bottom:1px}
        .ce-prev{font-size:12px;color:#444;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:340px}
        .chevron{font-size:8px;color:#222;margin-left:4px}
        .ce-body{padding:14px 13px 18px;border-top:1px solid #0f0f0f}
        .ce-split{display:grid;grid-template-columns:1fr 238px;gap:18px;align-items:start}
        .ce-fields{display:flex;flex-direction:column;gap:10px}
        .ef{display:flex;flex-direction:column;gap:3px}
        .el{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.25em;text-transform:uppercase;color:#2a2a2a}
        .icon-btn{background:transparent;border:1px solid #161616;color:#2a2a2a;font-size:10px;width:24px;height:24px;cursor:pointer;transition:all 0.1s;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
        .icon-btn:hover:not(:disabled){border-color:#3a3a3a;color:#EDE8DC}
        .icon-btn:disabled{opacity:0.12;cursor:not-allowed}
        .icon-btn.danger:hover:not(:disabled){border-color:#4a0f0f;color:#ff3333}
        .add-b-btn{background:transparent;border:1px dashed #161616;color:#2a2a2a;font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 9px;cursor:pointer;transition:all 0.12s;text-align:left;margin-top:1px}
        .add-b-btn:hover{border-color:#3a3a3a;color:#666}
        .add-card-row{display:flex;gap:4px;flex-wrap:wrap}
        .render-bar{background:#060606;border:1px solid #121212;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;margin-top:20px;gap:10px}
        .rbi{font-size:12px;color:#333;font-style:italic}
        .rbi strong{color:#888;font-style:normal}

        /* LIVE PREVIEW */
        .lp-wrap{display:flex;flex-direction:column;gap:4px}
        .lp-label{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.25em;text-transform:uppercase;color:#222}
        .lp-frame{width:238px;height:238px;overflow:hidden;border:1px solid #121212;background:#0a0a0a;flex-shrink:0}

        /* PREVIEW */
        .pvh{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px;gap:12px}
        .pvt{font-family:'Playfair Display',serif;font-size:28px;font-weight:900}
        .pva{display:flex;gap:6px;flex-shrink:0;align-items:center;flex-wrap:wrap}
        .cv{display:flex;gap:12px;align-items:flex-start}
        .thumbs{display:flex;flex-direction:column;gap:4px;width:72px;flex-shrink:0}
        .thumb{width:72px;height:72px;object-fit:cover;cursor:pointer;border:2px solid transparent;opacity:0.3;transition:all 0.12s;display:block}
        .thumb.active{border-color:#C8A96E;opacity:1}
        .thumb:hover{opacity:0.6}
        .slide-main{flex:1}
        .siw{aspect-ratio:1;background:#0d0d0d;overflow:hidden;position:relative}
        .siw img{width:100%;height:100%;object-fit:contain;display:block}
        .rr-btn{position:absolute;bottom:7px;right:7px;background:rgba(0,0,0,0.85);border:1px solid #222;color:#555;font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 9px;cursor:pointer;transition:all 0.12s}
        .rr-btn:hover{border-color:#C8A96E;color:#C8A96E}
        .sc{display:flex;align-items:center;justify-content:space-between;margin-top:8px}
        .sct{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;color:#222;text-transform:uppercase}
        .dl-btn{width:100%;margin-top:6px;background:transparent;border:1px solid #161616;color:#333;font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.2em;text-transform:uppercase;padding:7px;cursor:pointer;transition:all 0.12s}
        .dl-btn:hover{border-color:#C8A96E;color:#C8A96E}
        .cap-box{background:#060606;border:1px solid #121212;padding:14px 18px;margin-top:20px}
        .cap-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
        .cap-title{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.3em;text-transform:uppercase;color:#2a2a2a}
        .cap-text{font-size:12px;line-height:1.65;color:#3a3a3a;white-space:pre-wrap;font-style:italic}
        .back-btn{display:flex;align-items:center;gap:4px;background:transparent;border:none;color:#2a2a2a;font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;padding:0;transition:color 0.12s;margin-bottom:16px}
        .back-btn:hover{color:#C8A96E}
        .hr{border:none;border-top:1px solid #0e0e0e;margin:28px 0}
        .slabel{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.3em;text-transform:uppercase;color:#222;margin-bottom:7px;display:block}

        /* SECTION BOX */
        .section-box{border:1px solid #141414;background:#060606;padding:20px 22px;margin-bottom:12px}
        .section-box-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #0f0f0f}
        .section-box-title{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#666}

        /* BOOK CARDS */
        .book-card{border:1px solid #141414;padding:14px 16px;background:#080808;cursor:pointer;transition:all 0.12s;margin-bottom:0}
        .book-card:hover{border-color:#C8A96E;background:#0f0d08}
        .book-title{font-family:'Playfair Display',serif;font-size:14px;font-weight:700;color:#CCC;margin-bottom:2px}
        .book-author{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:#C8A96E;margin-bottom:5px}
        .book-why{font-size:12px;color:#3a3a3a;font-style:italic;line-height:1.4;margin-bottom:8px}
        .book-load{font-family:'Oswald',sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:#444;transition:color 0.12s}
        .book-card:hover .book-load{color:#C8A96E}

        /* IDEA CARDS */
        .idea-card{border:1px solid #141414;padding:14px 16px;background:#080808;cursor:pointer;transition:all 0.12s}
        .idea-card:hover{border-color:#C8A96E;background:#0f0d08}
        .idea-topic{font-family:'EB Garamond',serif;font-size:16px;color:#CCC;margin-bottom:4px}
        .idea-hook{font-size:13px;color:#333;font-style:italic}
        .idea-format{font-family:'Oswald',sans-serif;font-size:8px;letter-spacing:0.2em;text-transform:uppercase;color:#C8A96E;border:1px solid #C8A96E;padding:2px 8px;white-space:nowrap;flex-shrink:0;opacity:0.6}
      `}</style>

      <div className="app">
        <header>
          <div className="logo">Carousel<span>Forge</span></div>
          <div className="nav-steps">
            <div className={`ns ${step==='form'?'active':'done'}`} onClick={()=>step!=='form'&&setStep('form')}>01 Create</div>
            <span className="nsep">—</span>
            <div className={`ns ${step==='edit'?'active':step==='preview'?'done':''}`} onClick={()=>step==='preview'&&setStep('edit')}>02 Edit</div>
            <span className="nsep">—</span>
            <div className={`ns ${step==='preview'?'active':''}`}>03 Export</div>
          </div>
        </header>

        <main>

          {/* ── FORM ── */}
          {step==='form' && !isLoading && (<>
            <div className="form-ey">Vintage Ad Carousel Generator</div>
            <h1 className="form-h">Make Content Worth Saving.</h1>
            <p className="form-sub">Pick a template to start instantly, or build from scratch.</p>

            <div className="tab-row">
              <button className={`tab ${activeTab==='templates'?'active':''}`} onClick={()=>setActiveTab('templates')}>⚡ Templates</button>
              <button className={`tab ${activeTab==='generate'?'active':''}`} onClick={()=>setActiveTab('generate')}>✏️ AI Generate</button>
              <button className={`tab ${activeTab==='ideas'?'active':''}`} onClick={()=>setActiveTab('ideas')}>💡 Topic Ideas</button>
              <button className={`tab ${activeTab==='swipe'?'active':''}`} onClick={()=>setActiveTab('swipe')}>🔥 Swipe File</button>
              <button className={`tab ${activeTab==='tools'?'active':''}`} onClick={()=>setActiveTab('tools')}>🛠 Tools</button>
              <button className={`tab ${activeTab==='library'?'active':''}`} onClick={()=>setActiveTab('library')}>📁 Library ({savedCarousels.length})</button>
              <button className={`tab ${activeTab==='quote-image'?'active':''}`} onClick={()=>setActiveTab('quote-image')}>🐦 Quote Image</button>
              <button className={`tab ${activeTab==='campaign'?'active':''}`} onClick={()=>setActiveTab('campaign')}>🚀 Campaign Engine</button>
            </div>

            {/* TEMPLATES TAB */}
            {activeTab==='templates' && (<>
              <div className="tpl-cats">
                {TEMPLATE_CATEGORIES.map(cat => (
                  <button key={cat} className={`tpl-cat ${templateCat===cat?'sel':''}`} onClick={()=>setTemplateCat(cat)}>{cat}</button>
                ))}
              </div>
              <div className="tpl-grid">
                {filteredTemplates.map(tpl => (
                  <div key={tpl.id} className="tpl-card" onClick={()=>handleLoadTemplate(tpl)}>
                    <div className="tpl-icon">{tpl.icon}</div>
                    <div className="tpl-cat-badge">{tpl.category}</div>
                    <div className="tpl-label">{tpl.label}</div>
                    <div className="tpl-desc">{tpl.desc}</div>
                    <div className="tpl-slides">{tpl.cards.length} slides included</div>
                    <button className="tpl-load-btn">Load Template →</button>
                  </div>
                ))}
              </div>

              {/* SUGGESTED BOOKS */}
              <div style={{marginBottom:24,borderTop:'1px solid #141414',paddingTop:20}}>
                <div className="slabel" style={{marginBottom:10}}>📚 Book Lessons — Learn from the Greats</div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:6,marginBottom:16}}>
                  {SUGGESTED_BOOKS.map(book=>{
                    const tpl = ALL_TEMPLATES.find(t=>t.id===book.templateId);
                    return (
                      <div key={book.templateId} className="book-card" onClick={()=>tpl&&handleLoadTemplate(tpl)}>
                        <div style={{display:'flex',alignItems:'flex-start',gap:10}}>
                          <span style={{fontSize:20}}>{book.icon}</span>
                          <div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-author">{book.author} · {book.year}</div>
                            <div className="book-why">{book.why}</div>
                          </div>
                        </div>
                        {tpl && <div className="book-load">Load {tpl.cards.length}-slide carousel →</div>}
                        {!tpl && <div className="book-load" style={{opacity:0.3}}>Coming soon</div>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Brand settings even in template tab */}
              <div style={{borderTop:'1px solid #141414',paddingTop:20}}>
                <div className="slabel">Brand Settings (applied to templates)</div>
                <div className="fr2" style={{marginBottom:14}}>
                  <div className="field" style={{marginBottom:0}}>
                    <label className="label">Brand / Handle</label>
                    <input type="text" value={brandName} onChange={e=>setBrandName(e.target.value)} placeholder="@yourbrand" />
                  </div>
                  <div className="field" style={{marginBottom:0}}>
                    <label className="label">CTA Text</label>
                    <input type="text" value={ctaText} onChange={e=>setCtaText(e.target.value)} placeholder="Follow For More" />
                    <div className="cta-ps">{CTA_PRESETS.map(c=><button key={c} className="cta-p" onClick={()=>setCtaText(c)}>{c}</button>)}</div>
                  </div>
                </div>
                <div className="fr2" style={{marginBottom:14}}>
                  <div className="field" style={{marginBottom:0}}>
                    <label className="label">Logo (optional)</label>
                    <div className="logo-upload">
                      {logo
                        ? <img src={logo} alt="logo" className="logo-preview" />
                        : <div className="logo-placeholder" onClick={()=>logoInputRef.current?.click()}>+</div>
                      }
                      <button className="logo-btn" onClick={()=>logoInputRef.current?.click()}>
                        {logo ? 'Change Logo' : 'Upload Logo'}
                      </button>
                      {logo && <button className="logo-clear" onClick={()=>setLogo('')}>Remove</button>}
                      <input ref={logoInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={handleLogoUpload} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Slide Background Image <span style={{fontSize:10,color:'#333',fontWeight:400,fontStyle:'italic'}}>(optional — overlays on theme)</span></label>
                    <div style={{display:'flex',alignItems:'center',gap:8}}>
                      <label style={{padding:'6px 14px',border:'1px solid #1a1a1a',background:'#080808',color:'#555',fontSize:11,fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em',textTransform:'uppercase',cursor:'pointer',whiteSpace:'nowrap'}}>
                        {bgImage ? '↺ Change Image' : '+ Background Image'}
                        <input type="file" accept="image/*" style={{display:'none'}} onChange={handleBgImageUpload} />
                      </label>
                      {bgImage && <>
                        <img src={bgImage} style={{width:36,height:36,objectFit:'cover',border:'1px solid #1a1a1a',flexShrink:0}} />
                        <span style={{fontSize:10,color:'#333',fontStyle:'italic'}}>Image set — will overlay on slide background</span>
                        <button className="logo-clear" onClick={()=>setBgImage('')} style={{marginLeft:'auto'}}>Remove</button>
                      </>}
                    </div>
                  </div>
                  <div className="field" style={{marginBottom:0}}>
                    <label className="label">Color Theme</label>
                    <div className="theme-grid">
                      {THEMES.map(t=>(
                        <button key={t.value} className={`pill tpill ${theme===t.value?'sel':''}`} style={{fontSize:'8px',padding:'4px 8px'}} onClick={()=>setTheme(t.value)}>
                          <span className="sw" style={{background:t.bg,borderColor:theme===t.value?'#C8A96E':'#2a2a2a'}} />
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="preset-bar">
                  {presetSaved&&<span className="preset-ok">✓ Saved</span>}
                  <button className="preset-btn" onClick={handleSavePreset}>Save Brand Preset</button>
                  <button className="preset-btn" style={{opacity:0.5}} onClick={()=>{
                    resetPreset();
                    setBrandName(DEFAULT_PRESET.brandName);
                    setCtaText(DEFAULT_PRESET.ctaText);
                    setCtaUrl('');
                    setNiche(DEFAULT_PRESET.niche || '');
                    setGhlLocationId(DEFAULT_PRESET.ghlLocationId || '');
                  }}>Reset Defaults</button>
                </div>
              </div>
            </>)}

            {/* GENERATE TAB */}
            {activeTab==='generate' && (<>
              {/* NICHE SELECTOR */}
              <div style={{background:'#080808',border:'1px solid #141414',padding:'12px 16px',marginBottom:20,display:'flex',alignItems:'center',gap:12}}>
                <span style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.25em',textTransform:'uppercase',color:'#555',whiteSpace:'nowrap'}}>Your Niche</span>
                <select value={niche} onChange={e=>handleSaveNiche(e.target.value)}
                  style={{flex:1,background:'#050505',border:'1px solid #1a1a1a',color: niche ? '#EDE8DC' : '#444',fontFamily:"'EB Garamond',serif",fontSize:15,padding:'8px 12px',outline:'none',cursor:'pointer'}}>
                  {NICHES.map(n=><option key={n.value} value={n.value}>{n.label}</option>)}
                </select>
                {niche && <span style={{fontSize:11,color:'#555',fontStyle:'italic',whiteSpace:'nowrap'}}>AI will tailor content for {niche}</span>}
              </div>

              <div className="fg">
                {FORMAT_GROUPS.map(group => (
                  <div key={group.label}>
                    <div className="fg-label">{group.label}</div>
                    <div className="fg-grid">
                      {group.formats.map(f=>(
                        <button key={f.value} className={`fc ${format===f.value?'sel':''}`} onClick={()=>{setFormat(f.value);setShowSugg(false);}}>
                          <span className="fc-icon">{f.icon}</span>
                          <div><div className="fc-label">{f.label}</div><div className="fc-desc">{f.desc}</div></div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="fr2" style={{marginBottom:14}}>
                <div className="field" style={{marginBottom:0}}>
                  <label className="label">Number of Slides</label>
                  <div className="pr">{([3,5,7] as SlideCount[]).map(n=><button key={n} className={`pill ${slideCount===n?'sel':''}`} onClick={()=>setSlideCount(n)}>{n} slides</button>)}</div>
                </div>
                <div className="field" style={{marginBottom:0}}>
                  <label className="label">Color Theme</label>
                  <div className="theme-grid">
                    {THEMES.map(t=>(
                      <button key={t.value} className={`pill tpill ${theme===t.value?'sel':''}`} style={{fontSize:'8px',padding:'4px 8px'}} onClick={()=>setTheme(t.value)}>
                        <span className="sw" style={{background:t.bg,borderColor:theme===t.value?'#C8A96E':'#2a2a2a'}} />
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Topic or Subject <span className="req">*</span></label>
                <div style={{background:'#0a0a08',border:'1px solid #1a1808',padding:'10px 14px',marginBottom:8,display:'flex',gap:10,alignItems:'flex-start'}}>
                  <span style={{fontSize:14,flexShrink:0}}>💡</span>
                  <p style={{fontSize:12,color:'#555',fontStyle:'italic',lineHeight:1.5}}>
                    <strong style={{color:'#C8A96E',fontStyle:'normal'}}>Context:</strong> All content is written for your audience — home service business owners (roofing, tree service, lawn care, contractors). Topics should be about their <strong style={{color:'#aaa',fontStyle:'normal'}}>marketing, sales, lead gen, operations, and growth</strong> — not about the trade itself.
                  </p>
                </div>
                <button className="sugg-btn" onClick={()=>setShowSugg(s=>!s)}>{showSugg?'▲ Hide suggestions':'▼ Show topic ideas'}</button>
                {showSugg && (
                  <div className="sugg-list">
                    {suggestions.map((s,i)=><div key={i} className="sugg-item" onClick={()=>{setTopic(s);setShowSugg(false);}}>{s}</div>)}
                  </div>
                )}
                <textarea value={topic} onChange={e=>setTopic(e.target.value)} placeholder={suggestions[0]||'Describe your topic...'} />
                {topic.length > 10 && (
                  <div style={{marginTop:6,display:'flex',alignItems:'center',gap:8}}>
                    <button className="btn-g" onClick={()=>handleScoreHook(topic)} disabled={isScoringHook} style={{fontSize:'9px'}}>
                      {isScoringHook ? '...' : '⚡ Score My Hook'}
                    </button>
                    {hookScore && (
                      <div style={{display:'flex',alignItems:'center',gap:8,flex:1}}>
                        <div style={{
                          fontFamily:"'Oswald',sans-serif",fontSize:11,letterSpacing:'0.1em',
                          color: hookScore.score >= 8 ? '#5aaa4a' : hookScore.score >= 6 ? '#C8A96E' : '#ff5555',
                          border:'1px solid currentColor',padding:'2px 8px',whiteSpace:'nowrap'
                        }}>{hookScore.score}/10</div>
                        <span style={{fontSize:12,color:'#444',fontStyle:'italic'}}>{hookScore.feedback}</span>
                      </div>
                    )}
                  </div>
                )}
                {(hookScore?.suggestions?.length || 0) > 0 && (
                  <div style={{marginTop:8,display:'flex',flexDirection:'column',gap:3}}>
                    <span style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#333'}}>Try these instead:</span>
                    {(hookScore?.suggestions||[]).map((s:string,i:number)=>(
                      <div key={i} style={{fontSize:13,color:'#555',cursor:'pointer',padding:'4px 8px',border:'1px solid #141414',fontStyle:'italic',transition:'all 0.12s'}}
                        onClick={()=>{setTopic(s);setHookScore(null);}}
                        onMouseEnter={e=>(e.currentTarget.style.borderColor='#C8A96E')}
                        onMouseLeave={e=>(e.currentTarget.style.borderColor='#141414')}>
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="fr2">
                <div className="field" style={{marginBottom:0}}>
                  <label className="label">Brand / Handle</label>
                  <input type="text" value={brandName} onChange={e=>setBrandName(e.target.value)} placeholder="@yourbrand" />
                </div>
                <div className="field" style={{marginBottom:0}}>
                  <label className="label">CTA Text</label>
                  <input type="text" value={ctaText} onChange={e=>setCtaText(e.target.value)} placeholder="Follow For More" />
                  <div className="cta-ps">{CTA_PRESETS.map(c=><button key={c} className="cta-p" onClick={()=>setCtaText(c)}>{c}</button>)}</div>
                </div>
              </div>

              <div className="fr2">
                <div className="field" style={{marginBottom:0}}>
                  <label className="label">CTA Link (optional)</label>
                  <input type="text" value={ctaUrl} onChange={e=>setCtaUrl(e.target.value)} placeholder="https://yoursite.com" />
                </div>
                <div className="field" style={{marginBottom:0}}>
                  <label className="label">Logo (optional)</label>
                  <div className="logo-upload">
                    {logo ? <img src={logo} alt="logo" className="logo-preview" /> : <div className="logo-placeholder" onClick={()=>logoInputRef.current?.click()}>+</div>}
                    <button className="logo-btn" onClick={()=>logoInputRef.current?.click()}>{logo?'Change':'Upload Logo'}</button>
                    {logo && <button className="logo-clear" onClick={()=>setLogo('')}>Remove</button>}
                    <input ref={logoInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={handleLogoUpload} />
                  </div>
                </div>
              </div>

              <div className="preset-bar">
                {presetSaved&&<span className="preset-ok">✓ Saved</span>}
                <button className="preset-btn" onClick={handleSavePreset}>Save Brand Preset</button>
              </div>

              {error&&<div className="err">{error}</div>}
              <button className="btn-p" onClick={handleGenerate} disabled={isLoading}>Generate {slideCount} Slides →</button>
            </>)}

            {/* IDEAS TAB */}
            {activeTab==='ideas' && (<>
              <div style={{marginBottom:24}}>
                <div className="form-ey">AI Topic Idea Generator</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,marginBottom:6}}>Never Run Out of Content Ideas</h2>
                <p style={{fontSize:15,fontStyle:'italic',color:'#444',marginBottom:24}}>Enter your niche or industry and get 12 specific carousel topic ideas instantly.</p>

                <div className="fr2" style={{marginBottom:14}}>
                  <div className="field" style={{marginBottom:0}}>
                    <label className="label">Your Niche / Industry <span className="req">*</span></label>
                    <input type="text" value={topicIdeasNiche} onChange={e=>setTopicIdeasNiche(e.target.value)} placeholder="e.g. tree service businesses, direct response marketing, lawn care..." />
                  </div>
                  <div style={{display:'flex',alignItems:'flex-end',paddingBottom:0}}>
                    <button className="btn-p" onClick={handleGenerateTopicIdeas} disabled={isGeneratingIdeas} style={{width:'100%'}}>
                      {isGeneratingIdeas ? '...' : 'Generate 12 Ideas →'}
                    </button>
                  </div>
                </div>

                {error&&<div className="err">{error}</div>}

                {topicIdeas.length > 0 && (
                  <div>
                    <span className="slabel" style={{marginBottom:10}}>Click any idea to use it</span>
                    <div style={{display:'flex',flexDirection:'column',gap:6}}>
                      {topicIdeas.map((idea,i) => (
                        <div key={i} className="idea-card" onClick={()=>{setTopic(idea.topic);setFormat(idea.format||'history');setActiveTab('generate');}}>
                          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
                            <div>
                              <div className="idea-topic">{idea.topic}</div>
                              <div className="idea-hook">{idea.hook}</div>
                            </div>
                            <span className="idea-format">{idea.format}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>)}

            {/* SWIPE FILE TAB */}
            {activeTab==='swipe' && (<>
              <div>
                <div className="form-ey">Swipe File</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,marginBottom:6}}>Steal These Hooks</h2>
                <p style={{fontSize:14,fontStyle:'italic',color:'#444',marginBottom:24}}>The highest-performing carousel hooks by format — with the formula behind each one. Click any to load it as a template.</p>

                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:8,marginBottom:24}}>
                  {ALL_TEMPLATES.filter(t=>t.category==='Swipe File').map(tpl=>(
                    <div key={tpl.id} className="tpl-card" onClick={()=>handleLoadTemplate(tpl)}>
                      <div className="tpl-icon">{tpl.icon}</div>
                      <div className="tpl-cat-badge">{tpl.category}</div>
                      <div className="tpl-label">{tpl.label}</div>
                      <div className="tpl-desc">{tpl.desc}</div>
                      <div className="tpl-slides">{tpl.cards.length} slides · formulas + examples</div>
                      <button className="tpl-load-btn">Study This Format →</button>
                    </div>
                  ))}
                </div>

                {/* Inline hook formulas */}
                <div className="section-box" style={{marginBottom:16}}>
                  <div className="section-box-head"><span className="section-box-title">⚡ Hook Formulas — Copy & Adapt</span></div>
                  <div style={{display:'flex',flexDirection:'column',gap:8}}>
                    {[
                      {type:'CHECKLIST', formula:'The [N]-point checklist that [specific result]', examples:['The 9-point checklist that doubled our close rate','12 things every roofing company should audit before storm season']},
                      {type:'STORY', formula:'[Specific number] from [surprisingly simple action]', examples:['$18,000 from one email to 340 people we already knew','9 jobs booked in 72 hours without a single ad']},
                      {type:'HOT TAKE', formula:'Stop [thing they are doing] — [the painful consequence]', examples:['Stop buying leads — you are paying to be in a price war.','Stop posting every day — you are training an algorithm with content that does not convert.']},
                      {type:'CONTRAST', formula:'[Painful before] → [remarkable after]. Here is what changed.', examples:['In January we had 3 jobs. In March we had 31. Here is what changed.','12 months ago I quoted every job at cost. Today I turned down a $4,000 job.']},
                      {type:'MYTH-TRUTH', formula:'MYTH: [Common belief]. TRUTH: [The counter-evidence].', examples:['MYTH: You need more leads. TRUTH: You need better follow-up.','MYTH: Homeowners always choose the lowest price. TRUTH: They choose the contractor they trust most.']},
                      {type:'NUMBERED', formula:'[N] things or mistakes that [result or cost]', examples:['5 marketing mistakes costing contractors $100k per year','7 automations keeping client calendars full year-round']},
                      {type:'CONFESSION', formula:'For [time] I thought [wrong belief]. I was wrong. Here is what I learned.', examples:['For 3 years I thought more leads was the answer. I was completely wrong.','I spent $12,000 on ads before I realized my follow-up was the problem.']},
                    ].map((hook,i)=>(
                      <div key={i} style={{background:'#080808',border:'1px solid #141414',padding:'12px 14px'}}>
                        <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
                          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#C8A96E',border:'1px solid #1a1a1a',padding:'2px 7px',whiteSpace:'nowrap',flexShrink:0,marginTop:2}}>{hook.type}</div>
                          <div style={{flex:1}}>
                            <div style={{fontSize:13,color:'#888',fontStyle:'italic',marginBottom:6}}>"{hook.formula}"</div>
                            <div style={{display:'flex',flexDirection:'column',gap:3}}>
                              {hook.examples.map((ex,j)=>(
                                <div key={j} style={{fontSize:11,color:'#444',cursor:'pointer',lineHeight:1.4}}
                                  onClick={()=>{setTopic(ex);setActiveTab('generate');}}>
                                  → {ex}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{background:'#080808',border:'1px solid #141414',padding:'12px 16px'}}>
                  <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'#333',marginBottom:6}}>How to Use</div>
                  <p style={{fontSize:12,color:'#444',fontStyle:'italic',lineHeight:1.6}}>Load any template above into the editor. Study the hook formula on the cover slide. Hit "Regenerate with AI" on any slide to customize it to your niche and audience. Click any formula example below to use it as your topic in the AI Generator.</p>
                </div>
              </div>
            </>)}

            {/* TOOLS TAB */}
            {activeTab==='tools' && (<>
              <div>
                <div className="form-ey">Power Tools</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,marginBottom:6}}>Content Intelligence</h2>
                <p style={{fontSize:14,fontStyle:'italic',color:'#444',marginBottom:28}}>Advanced tools for research, testing, and strategy.</p>

                {error&&<div className="err">{error}</div>}

                {/* HOOK A/B TESTER */}
                <div className="section-box" style={{marginBottom:16}}>
                  <div className="section-box-head">
                    <span className="section-box-title">⚡ Hook A/B Tester — 3 Cover Variations Side by Side</span>
                  </div>
                  <div style={{marginBottom:12}}>
                    <span className="slabel">Topic or Headline to Test</span>
                    <div style={{display:'flex',gap:8}}>
                      <input type="text" value={hookAbTopic} onChange={e=>setHookAbTopic(e.target.value)} placeholder="e.g. Why most contractors lose money on their first customer" style={{flex:1}} />
                      <button className="btn-p" onClick={handleHookAbTest} disabled={isTestingHooks} style={{whiteSpace:'nowrap'}}>
                        {isTestingHooks ? '...' : 'Generate 3 Hooks →'}
                      </button>
                    </div>
                  </div>
                  {hookAbVariants.length > 0 && (
                    <div>
                      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:12}}>
                        {hookAbVariants.map((hook,i)=>(
                          <div key={i} style={{border:`1px solid ${selectedHook===i?'#C8A96E':'#141414'}`,background: selectedHook===i?'#11100a':'#080808',padding:14,cursor:'pointer',transition:'all 0.12s'}}
                            onClick={()=>setSelectedHook(selectedHook===i?null:i)}>
                            <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#C8A96E',marginBottom:6}}>Hook {i+1} — {hook.hookType}</div>
                            <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,fontWeight:700,color:'#EDE8DC',lineHeight:1.3,marginBottom:8}}>{hook.headline}</div>
                            <div style={{fontSize:11,color:'#444',fontStyle:'italic',lineHeight:1.4,marginBottom:8}}>{hook.subheadline}</div>
                            <div style={{fontSize:10,color:'#333',lineHeight:1.4}}>Why: {hook.hookExplanation}</div>
                          </div>
                        ))}
                      </div>
                      {selectedHook !== null && (
                        <button className="btn-p" onClick={()=>{
                          const winner = hookAbVariants[selectedHook];
                          setTopic(hookAbTopic);
                          setCards([{type:'cover',eyebrow:winner.eyebrow,headline:winner.headline,subheadline:winner.subheadline,tag:winner.tag,brandName}]);
                          setStep('edit');
                          setActiveTab('generate');
                        }}>
                          Use Hook {selectedHook+1} as Cover Slide →
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* COMPETITOR ANGLE FINDER */}
                <div className="section-box" style={{marginBottom:16}}>
                  <div className="section-box-head">
                    <span className="section-box-title">🔍 Competitor Angle Finder</span>
                  </div>
                  <div style={{marginBottom:12}}>
                    <span className="slabel">Competitor Name or Account / Niche to Analyze</span>
                    <div style={{display:'flex',gap:8}}>
                      <input type="text" value={competitorInput} onChange={e=>setCompetitorInput(e.target.value)} placeholder="e.g. @marketingaccount, 'contractor marketing coaches', 'roofing business coaches'" style={{flex:1}} />
                      <button className="btn-p" onClick={handleCompetitorAnalysis} disabled={isAnalyzingCompetitor} style={{whiteSpace:'nowrap'}}>
                        {isAnalyzingCompetitor ? '...' : 'Find Gaps →'}
                      </button>
                    </div>
                  </div>
                  {competitorResult && (
                    <div>
                      <div style={{background:'#0a0808',border:'1px solid #1a1010',padding:'10px 14px',marginBottom:12,fontSize:12,color:'#666',fontStyle:'italic'}}>
                        <strong style={{color:'#888',fontStyle:'normal'}}>Their profile:</strong> {competitorResult.competitorProfile}
                      </div>
                      <div style={{display:'flex',flexDirection:'column',gap:6}}>
                        {(competitorResult.gaps||[]).map((gap:any,i:number)=>(
                          <div key={i} className="idea-card" onClick={()=>{setTopic(gap.topicIdeas?.[0]||gap.angle);setFormat(gap.format||'lesson');setActiveTab('generate');}}>
                            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:10}}>
                              <div style={{flex:1}}>
                                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:4}}>
                                  <span style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,color:'#CCC'}}>{gap.angle}</span>
                                  <span style={{fontFamily:"'Oswald',sans-serif",fontSize:8,border:'1px solid #C8A96E',color:'#C8A96E',padding:'1px 6px',opacity:0.7}}>{gap.opportunityScore}/10</span>
                                </div>
                                <div style={{fontSize:11,color:'#333',fontStyle:'italic',marginBottom:6}}>{gap.why}</div>
                                <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
                                  {(gap.topicIdeas||[]).map((t:string,j:number)=>(
                                    <span key={j} style={{fontSize:10,color:'#555',background:'#0d0d0d',border:'1px solid #141414',padding:'2px 7px',cursor:'pointer'}}
                                      onClick={e=>{e.stopPropagation();setTopic(t);setActiveTab('generate');}}>{t}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {competitorResult.positioningAdvice && (
                        <div style={{background:'#080808',border:'1px solid #141414',padding:'12px 14px',marginTop:12,fontSize:12,color:'#555',fontStyle:'italic',lineHeight:1.6}}>
                          <strong style={{color:'#888',fontStyle:'normal'}}>Positioning advice:</strong> {competitorResult.positioningAdvice}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* CASE STUDY GENERATOR */}
                <div className="section-box">
                  <div className="section-box-head">
                    <span className="section-box-title">📊 Case Study Generator</span>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:10}}>
                    <div className="fr2">
                      <div>
                        <span className="slabel">Client Type</span>
                        <input type="text" value={caseStudyClient} onChange={e=>setCaseStudyClient(e.target.value)} placeholder="e.g. Tree service company, roofing contractor..." />
                      </div>
                      <div>
                        <span className="slabel">The Result <span className="req">*</span></span>
                        <input type="text" value={caseStudyResult} onChange={e=>setCaseStudyResult(e.target.value)} placeholder="e.g. $18k revenue in 72 hours, 3x close rate..." />
                      </div>
                    </div>
                    <div>
                      <span className="slabel">The Problem They Had <span className="req">*</span></span>
                      <textarea value={caseStudyProblem} onChange={e=>setCaseStudyProblem(e.target.value)} rows={2} placeholder="e.g. No follow-up system, relying on word of mouth, slow season with empty pipeline..." />
                    </div>
                    <div>
                      <span className="slabel">The Solution (optional — AI will infer if blank)</span>
                      <textarea value={caseStudySolution} onChange={e=>setCaseStudySolution(e.target.value)} rows={2} placeholder="e.g. Implemented automated follow-up, reactivation campaign, review system..." />
                    </div>
                    {error&&<div className="err">{error}</div>}
                    <button className="btn-p" onClick={handleGenerateCaseStudy} disabled={isGeneratingCaseStudy}>
                      {isGeneratingCaseStudy ? '...' : 'Generate Case Study Carousel →'}
                    </button>
                  </div>
                </div>
              </div>

              {/* BULK TEMPLATE RUN */}
              <div className="section-box" style={{marginTop:16}}>
                <div className="section-box-head">
                  <span className="section-box-title">⚡ Bulk Template Run</span>
                  <span style={{fontSize:11,color:'#2a2a2a',fontStyle:'italic'}}>Generate multiple carousels at once — auto-saved to Library</span>
                </div>

                <div style={{marginBottom:12}}>
                  <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:10}}>
                    <span className="slabel" style={{marginBottom:0}}>Filter by Category</span>
                    <select value={bulkCategory} onChange={e=>setBulkCategory(e.target.value)}
                      style={{flex:1,background:'#050505',border:'1px solid #1a1a1a',color:'#EDE8DC',fontFamily:"'EB Garamond',serif",fontSize:13,padding:'6px 10px',outline:'none'}}>
                      <option value="">All Categories</option>
                      {TEMPLATE_CATEGORIES.filter(c=>c!=='All').map(c=>(
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <button className="btn-s" style={{fontSize:10,padding:'4px 10px',whiteSpace:'nowrap'}}
                      onClick={()=>{
                        const filtered = ALL_TEMPLATES.filter(t=>!bulkCategory||t.category===bulkCategory).map(t=>t.id);
                        setBulkSelected(prev=>prev.length===filtered.length?[]:filtered);
                      }}>
                      {bulkSelected.length > 0 ? 'Clear All' : 'Select All'}
                    </button>
                  </div>

                  <div style={{maxHeight:240,overflowY:'auto',display:'flex',flexDirection:'column',gap:4}}>
                    {ALL_TEMPLATES.filter(t=>!bulkCategory||t.category===bulkCategory).map(tpl=>(
                      <div key={tpl.id}
                        style={{display:'flex',alignItems:'center',gap:10,padding:'7px 10px',background: bulkSelected.includes(tpl.id)?'#0a0a08':'#080808',border:`1px solid ${bulkSelected.includes(tpl.id)?'#1a1a10':'#0d0d0d'}`,cursor:'pointer'}}
                        onClick={()=>setBulkSelected(prev=>prev.includes(tpl.id)?prev.filter(x=>x!==tpl.id):[...prev,tpl.id])}>
                        <div style={{width:14,height:14,border:`1px solid ${bulkSelected.includes(tpl.id)?'#C8A96E':'#2a2a2a'}`,background:bulkSelected.includes(tpl.id)?'#C8A96E':'transparent',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                          {bulkSelected.includes(tpl.id) && <span style={{fontSize:9,color:'#080808',fontWeight:900}}>✓</span>}
                        </div>
                        <span style={{fontSize:10,color:'#555',fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em',textTransform:'uppercase',flexShrink:0,width:120}}>{tpl.category}</span>
                        <span style={{fontSize:13,color:'#888',flex:1}}>{tpl.label}</span>
                        <span style={{fontSize:10,color:'#2a2a2a'}}>{tpl.cards.length} slides</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:12}}>
                  <button className="btn-p" onClick={handleBulkRun}
                    disabled={isBulkRunning || bulkSelected.length === 0}
                    style={{flex:1}}>
                    {isBulkRunning
                      ? `Generating... ${bulkProgress}% (${bulkResults.length}/${bulkSelected.length})`
                      : bulkSelected.length === 0 ? 'Select templates above'
                      : `Generate ${bulkSelected.length} Carousel${bulkSelected.length===1?'':'s'} →`}
                  </button>
                </div>

                {isBulkRunning && (
                  <div style={{background:'#0a0a08',border:'1px solid #141414',height:4,marginBottom:10,overflow:'hidden'}}>
                    <div style={{height:'100%',background:'#C8A96E',width:`${bulkProgress}%`,transition:'width 0.3s'}} />
                  </div>
                )}

                {bulkResults.length > 0 && (
                  <div style={{display:'flex',flexDirection:'column',gap:4}}>
                    <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'#555',marginBottom:4}}>
                      ✓ {bulkResults.length} carousels generated — auto-saved to Library
                    </div>
                    {bulkResults.map((r,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'7px 10px',background:'#0a1a0a',border:'1px solid #1a3a1a'}}>
                        <span style={{fontSize:10,color:'#5aaa4a'}}>✓</span>
                        <span style={{fontSize:13,color:'#888',flex:1}}>{r.label}</span>
                        <button className="btn-s" style={{fontSize:10,padding:'4px 10px'}}
                          onClick={()=>{setCards(r.cards);setImages([]);setStep('edit');}}>
                          Open →
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>)}

            {/* LIBRARY TAB */}
            {activeTab==='library' && (<>
              <div>
                <div className="form-ey">Saved Carousels</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,marginBottom:6}}>My Library</h2>
                <p style={{fontSize:14,fontStyle:'italic',color:'#444',marginBottom:24}}>Carousels you've saved. Stored locally in your browser. Click any to reload into the editor.</p>

                {savedCarousels.length === 0 && (
                  <div style={{border:'1px dashed #1a1a1a',padding:'32px',textAlign:'center',color:'#2a2a2a',fontStyle:'italic',fontSize:14}}>
                    No saved carousels yet. Hit the 💾 Save button in the editor to save your work here.
                  </div>
                )}

                <div style={{display:'flex',flexDirection:'column',gap:6}}>
                  {savedCarousels.map(entry=>(
                    <div key={entry.id} style={{border:'1px solid #141414',background:'#080808',padding:'12px 16px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontFamily:"'EB Garamond',serif",fontSize:15,color:'#CCC',marginBottom:2,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{entry.label}</div>
                        <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.15em',textTransform:'uppercase',color:'#2a2a2a'}}>{entry.cards.length} slides · Saved {entry.savedAt}</div>
                      </div>
                      <div style={{display:'flex',gap:6,flexShrink:0}}>
                        <button className="btn-s" style={{padding:'6px 14px',fontSize:10}} onClick={()=>handleLoadSaved(entry)}>Load →</button>
                        <button className="icon-btn danger" onClick={()=>handleDeleteSaved(entry.id)}>✕</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>)}

            {/* QUOTE IMAGE TAB */}
            {activeTab==='quote-image' && (<>
              <div>
                <div className="form-ey">Quote Image</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,marginBottom:6}}>Tweet / Quote Card</h2>
                <p style={{fontSize:14,fontStyle:'italic',color:'#444',marginBottom:24}}>Generate a branded quote image for Twitter/X, LinkedIn, or Instagram. Your photo, your name, your words.</p>

                {error&&<div className="err">{error}</div>}

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
                  {/* Left: inputs */}
                  <div style={{display:'flex',flexDirection:'column',gap:12}}>
                    <div>
                      <span className="slabel">Your Quote / Statement <span className="req">*</span></span>
                      <textarea value={qiQuote} onChange={e=>setQiQuote(e.target.value)} rows={4}
                        placeholder="It takes more information to make people believe what they want to believe." />
                    </div>
                    <div className="fr2">
                      <div>
                        <span className="slabel">Your Name</span>
                        <input type="text" value={qiName} onChange={e=>setQiName(e.target.value)}
                          placeholder={brandName || 'Jonathan Blake'} />
                      </div>
                      <div>
                        <span className="slabel">Handle</span>
                        <input type="text" value={qiHandle} onChange={e=>setQiHandle(e.target.value)}
                          placeholder="@JonathanatArboradvantage" />
                      </div>
                    </div>
                    <div>
                      <span className="slabel">Profile Photo</span>
                      <label style={{display:'flex',alignItems:'center',gap:10,padding:'8px 12px',border:'1px solid #1a1a1a',background:'#080808',cursor:'pointer'}}>
                        {qiAvatar
                          ? <><img src={`data:image/png;base64,${qiAvatar}`} style={{width:36,height:36,borderRadius:'50%',objectFit:'cover'}} /><span style={{fontSize:12,color:'#555'}}>✓ Photo uploaded — click to change</span></>
                          : <><span style={{fontSize:18}}>📷</span><span style={{fontSize:12,color:'#444'}}>Upload profile photo (PNG/JPG)</span></>}
                        <input type="file" accept="image/*" style={{display:'none'}} onChange={handleAvatarUpload} />
                      </label>
                    </div>
                    <div>
                      <span className="slabel">Background Style</span>
                      <div className="pr" style={{flexWrap:'wrap'}}>
                        {[
                          {v:'dark', l:'⬛ Dark'},
                          {v:'light', l:'⬜ Light'},
                          {v:'green', l:'🌲 Green'},
                          {v:'gold', l:'🪙 Gold'},
                        ].map(s=>(
                          <button key={s.v} className={`pill ${qiBg===s.v?'sel':''}`}
                            onClick={()=>{setQiBg(s.v);setQiPreviewHtml('');}}>
                            {s.l}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="slabel">Format / Size</span>
                      <div className="pr" style={{flexWrap:'wrap'}}>
                        {[
                          {v:'square',   l:'◼ Square 1:1',    hint:'Instagram/Facebook'},
                          {v:'portrait', l:'▮ Portrait 4:5',  hint:'Instagram Feed'},
                          {v:'twitter',  l:'▬ Twitter/LinkedIn', hint:'1200×628'},
                          {v:'story',    l:'▯ Story 9:16',    hint:'TikTok/Reels'},
                        ].map(f=>(
                          <button key={f.v} className={`pill ${qiFormat===f.v?'sel':''}`}
                            onClick={()=>{setQiFormat(f.v);setQiPreviewHtml('');setQiW(f.v==='twitter'?1200:1080);setQiH(f.v==='portrait'?1350:f.v==='story'?1920:1080);}}>
                            {f.l}
                          </button>
                        ))}
                      </div>
                      {qiFormat && <div style={{fontSize:10,color:'#333',fontStyle:'italic',marginTop:4}}>
                        {qiFormat==='square'?'1080×1080px — Instagram / Facebook':qiFormat==='portrait'?'1080×1350px — Instagram Portrait':qiFormat==='twitter'?'1200×628px — Twitter / LinkedIn':qiFormat==='story'?'1080×1920px — Stories / TikTok / Reels':''}
                      </div>}
                    </div>
                    <button className="btn-p" onClick={handleGenerateQuoteImage} disabled={isGeneratingQi||!qiQuote.trim()}>
                      {isGeneratingQi ? '...' : 'Generate Quote Card →'}
                    </button>
                    {qiPreviewHtml && (
                      <button className="btn-s" onClick={handleDownloadQuoteImage} disabled={qiDownloading}>
                        {qiDownloading ? '...' : '⬇ Download PNG'}
                      </button>
                    )}
                  </div>

                  {/* Right: preview */}
                  <div>
                    <span className="slabel">Preview</span>
                    {qiPreviewHtml ? (
                      <div style={{
                        border:'1px solid #141414',
                        background:'#050505',
                        overflow:'hidden',
                        position:'relative',
                        width:'100%',
                        paddingTop: qiFormat==='twitter' ? '24%' : qiFormat==='portrait' ? '86%' : qiFormat==='story' ? '88%' : '88%',
                      }}>
                        <div style={{
                          position:'absolute',top:0,left:0,width:'100%',height:'100%',
                          overflow:'hidden',
                        }}>
                          <div style={{
                            transform: `scale(${qiFormat==='twitter'?0.19:qiFormat==='story'?0.155:0.285})`,
                            transformOrigin:'top left',
                            width: qiW + 'px',
                            height: qiH + 'px',
                          }} dangerouslySetInnerHTML={{__html: qiPreviewHtml.replace(/<html[^>]*>|<\/html>|<head>[\s\S]*?<\/head>|<body[^>]*>|<\/body>/gi,'')}} />
                        </div>
                      </div>
                    ) : (
                      <div style={{border:'1px dashed #1a1a1a',background:'#050505',aspectRatio:'1',display:'flex',alignItems:'center',justifyContent:'center',color:'#222',fontSize:12,fontStyle:'italic'}}>
                        Preview appears here
                      </div>
                    )}
                    {qiPreviewHtml && (
                      <div style={{marginTop:8,fontSize:11,color:'#333',fontStyle:'italic'}}>
                        {qiW}×{qiH}px · 2x retina on download
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick quote ideas */}
                <div style={{background:'#080808',border:'1px solid #141414',padding:'12px 16px'}}>
                  <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'#333',marginBottom:8}}>Quick Quote Ideas — Click to Use</div>
                  <div style={{display:'flex',flexDirection:'column',gap:4}}>
                    {[
                      'The business that stays in front of the lead wins. Your competitors stop at one follow-up.',
                      'Speed is the most underrated variable in lead conversion. Five minutes beats five hours every time.',
                      'You do not have a lead problem. You have a follow-up problem.',
                      'The best time to upsell is immediately after delivering a great result.',
                      'Recurring revenue is the only revenue that lets you plan, hire, and grow.',
                      'A customer who leaves you a 5-star review is your best possible salesperson.',
                    ].map((q,i)=>(
                      <div key={i} style={{fontSize:12,color:'#444',fontStyle:'italic',padding:'6px 0',borderBottom:'1px solid #111',cursor:'pointer',lineHeight:1.4}}
                        onClick={()=>{setQiQuote(q);setQiPreviewHtml('');}}>
                        "{q}"
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>)}
          </>)}

            {/* CAMPAIGN ENGINE TAB */}
            {activeTab==='campaign' && (<>
              <div>
                <div className="form-ey">Campaign Engine</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,marginBottom:4}}>Seasonal Campaign Builder</h2>
                <p style={{fontSize:13,fontStyle:'italic',color:'#444',marginBottom:8}}>Pick your niche, month, and offer type. Get a complete campaign — email, SMS, social posts, value stack, and the full strategy — in 30 seconds.</p>
                <div style={{background:'#080808',border:'1px solid #141414',padding:'10px 14px',marginBottom:20,fontSize:11,color:'#444',fontStyle:'italic',lineHeight:1.6}}>
                  📐 Built on Hormozi Value Equation: <strong style={{color:'#888',fontStyle:'normal'}}>Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort)</strong> — every campaign maximizes perceived value without changing your price.
                </div>

                {error&&<div className="err">{error}</div>}

                {/* CONFIG */}
                <div className="section-box" style={{marginBottom:16}}>
                  <div className="section-box-head"><span className="section-box-title">⚙️ Campaign Setup</span></div>

                  <div className="fr2" style={{marginBottom:12}}>
                    <div>
                      <span className="slabel">Industry / Niche</span>
                      <select value={campNiche} onChange={e=>setCampNiche(e.target.value)}
                        style={{width:'100%',background:'#050505',border:'1px solid #1a1a1a',color:'#EDE8DC',fontFamily:"'EB Garamond',serif",fontSize:15,padding:'9px 12px',outline:'none'}}>
                        {['Tree Service','Lawn Care','Roofing','HVAC','Plumbing','Pressure Washing','Pest Control','Remodeling','Landscaping','Painting','Pool Service','Electrician','General Contractor','Med Spa','Dental Practice','Nail Salon','Auto Detailing','Auto Repair','Concrete','Marketing Agency','Restaurant & Cafe','Gutter Cleaning','Window Cleaning'].map(n=>(
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <span className="slabel">Campaign Month</span>
                      <select value={campMonth} onChange={e=>setCampMonth(e.target.value)}
                        style={{width:'100%',background:'#050505',border:'1px solid #1a1a1a',color:'#EDE8DC',fontFamily:"'EB Garamond',serif",fontSize:15,padding:'9px 12px',outline:'none'}}>
                        {['January','February','March','April','May','June','July','August','September','October','November','December'].map(m=>(
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{marginBottom:12}}>
                    <span className="slabel">Offer Type</span>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                      {[
                        {v:'free-gift',    icon:'🎁', label:'Free Gift',     desc:'Free add-on service with core purchase. First 10-15 clients only. Highest conversion.'},
                        {v:'giveaway',     icon:'🏆', label:'Giveaway',      desc:'30-day contest. Grand prize winner gets free service. Second-place callback script included.'},
                        {v:'deep-discount',icon:'💰', label:'Deep Discount', desc:'Time-limited price drop with strong reason-why. Anchor original price. Add bonus.'},
                        {v:'full-price',   icon:'💼', label:'Authority Offer', desc:'No discount. Stack value, guarantee, and social proof until price feels like a steal.'},
                      ].map(o=>(
                        <div key={o.v}
                          onClick={()=>setCampOfferType(o.v as any)}
                          style={{
                            padding:'12px 14px',cursor:'pointer',
                            border:`1px solid ${campOfferType===o.v?'#C8A96E':'#141414'}`,
                            background:campOfferType===o.v?'#0d0c08':'#080808',
                          }}>
                          <div style={{fontSize:18,marginBottom:4}}>{o.icon}</div>
                          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:campOfferType===o.v?'#C8A96E':'#555',marginBottom:4}}>{o.label}</div>
                          <div style={{fontSize:11,color:'#333',lineHeight:1.4}}>{o.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="fr2" style={{marginBottom:12}}>
                    <div>
                      <span className="slabel">Client Limit <span style={{fontSize:10,color:'#333'}}>(for scarcity)</span></span>
                      <input type="number" value={campClientCount} onChange={e=>setCampClientCount(Number(e.target.value))}
                        min={3} max={100} style={{width:'100%'}} />
                    </div>
                    <div>
                      <span className="slabel">Booking URL <span style={{fontSize:10,color:'#333'}}>(optional)</span></span>
                      <input type="text" value={ctaUrl} onChange={e=>setCtaUrl(e.target.value)}
                        placeholder="arboradvantage.com/demo" />
                    </div>
                  </div>

                  {/* Offer Suggestions */}
                  <div style={{marginBottom:14}}>
                    <span className="slabel">Offer Ideas — Click to Use or Write Your Own</span>
                    <div style={{display:'flex',flexDirection:'column',gap:4,marginBottom:8,maxHeight:140,overflowY:'auto'}}>
                      {(campOfferType === 'free-gift' ? {
                        'Tree Service': ['Free stump grinding ($350 value) with every tree removal — first 10 clients','Free lot line clearing (up to 50ft) with any removal over $800 — 8 clients only','Free wood chip delivery (1 truckload, $200 value) with any pruning service','Free emergency priority status for 12 months with any service over $500','Free property hazard report ($150 value) for every new client this month'],
                        'Lawn Care': ['Free fall aeration ($200 value) with any annual lawn program signed this month','Free first fertilization ($120 value) for new clients who sign before end of month','Free weed pre-emergent ($150 value) with spring clean-up booked this week','Free lawn health report ($100 value) for every new program client'],
                        'Roofing': ['Free gutters cleaned ($250 value) with any roof repair or replacement','Free chimney inspection report ($175 value) with any roofing work this fall','Free ridge vent installation ($300 value) with any full replacement this month','Free 5-year inspection plan ($400 value) with every full replacement'],
                        'HVAC': ['Free air quality report ($150 value) with any tune-up booked this month','Free smart thermostat installation ($250 value) with any system replacement','Free duct leakage test ($200 value) with spring AC tune-up before May 1','Free 1-year maintenance plan ($350 value) with any new system installation'],
                        'Pressure Washing': ['Free deck sealing ($150 value) with house washing booked this month','Free driveway sealing ($120 value) with any complete exterior package','Free gutter flush ($100 value) with any house or roof washing service','Free fence washing ($150 value) with any driveway and house wash combo'],
                        'Pest Control': ['Free mosquito treatment ($150 value) with any new quarterly plan this spring','Free rodent inspection report ($175 value) with first quarterly service','Free termite inspection ($200 value) for every new client who signs a plan','Free fire ant treatment ($125 value) with any lawn pest plan signed in May'],
                        'Plumbing': ['Free water heater flush and inspection ($175 value) with any service','Free whole-home pressure test report ($150 value) — first 10 clients','Free drain camera inspection ($200 value) with any drain service over $300'],
                        'Painting': ['Free color consultation ($150 value) for every new exterior project','Free deck staining up to 200sqft ($250 value) with any house paint job','Free trim and shutters at no charge ($400 value) on all exterior projects this month'],
                        'Pool Service': ['Free pool opening or closing ($200 value) with any annual plan signed','Free chemical kit and 60-day supply ($150 value) for every new service client'],
                        'Electrician': ['Free whole-home safety inspection report ($200 value) — first 10 clients','Free smart switch installation 2 switches ($150 value) with any service over $400'],
                      }[campNiche] || ['Free consultation and written report ($150 value) — first 10 clients','Free add-on service ($200 value) with any complete package this month'] :
                      campOfferType === 'giveaway' ? {
                        'Tree Service': ['Grand Prize: Complete tree removal up to 60ft ($1,500 value) — FREE','Grand Prize: Full property tree and stump removal ($2,000 value) — FREE 30 days','Grand Prize: Yard transformation — remove 3 trees, grind stumps, chip debris ($1,800 value)'],
                        'Lawn Care': ['Grand Prize: Full season lawn program 12 months ($1,200 value) — FREE','Grand Prize: Complete yard transformation — aerate, overseed, fertilize, weed control for 1 year ($1,400 value)'],
                        'Roofing': ['Grand Prize: Complete roof repair up to $1,000 in labor — FREE','Grand Prize: $3,000 credit toward any full replacement booked this quarter'],
                        'Painting': ['Grand Prize: Complete exterior house painting ($2,500 value) — FREE winner this month','Grand Prize: Full interior repaint 5 rooms ($1,800 value) — share to enter'],
                        'Remodeling': ['Grand Prize: Complete bathroom renovation ($5,000 value) — one winner this month','Grand Prize: Kitchen update package ($3,500 value) — FREE for one winner'],
                      }[campNiche] || ['Grand Prize: Complete service package ($1,000 value) — FREE this month','Grand Prize: 1 full year of service ($1,200 value) — no purchase required'] :
                      campOfferType === 'deep-discount' ? {
                        'Tree Service': ['40% off tree removal for next 10 clients this month','$200 off any job over $800 — schedule fills this week','50% off stump grinding with any tree removal booked this week'],
                        'Lawn Care': ['First month free on any annual program — no contracts cancel anytime','3 months for price of 2 on any program signed before end of month','$150 off first season program — new clients only first 12 to respond'],
                        'Roofing': ['$500 off any full replacement booked and deposited before end of month','Free gutters included with any roof replacement — $400 value this month only','15% off all repairs booked before September 30'],
                        'HVAC': ['Free tune-up included with any repair over $300 this month','$200 off any new system installation scheduled before end of month'],
                        'Painting': ['20% off all exterior painting for projects starting in 21 days','$400 off full interior repaint 4+ rooms signed and scheduled before end of month'],
                        'Plumbing': ['$150 off any repair over $400 — book before end of month','50% off water heater replacement labor — parts at cost for 8 clients'],
                      }[campNiche] || ['25% off for next 10 clients — crews available this week','$100 off any service over $400 — this month only first 12 clients'] :
                      ['Premium done-for-you service with documented results guarantee','Complete program — everything handled nothing to manage','White glove service with written guarantee and priority response']
                      ).map((s:string,i:number)=>(
                        <div key={i}
                          onClick={()=>setCampCustomOffer(s)}
                          style={{
                            padding:'7px 10px',fontSize:12,color: campCustomOffer===s?'#C8A96E':'#555',
                            background: campCustomOffer===s?'#0d0c08':'#080808',
                            border:`1px solid ${campCustomOffer===s?'#1a1a10':'#0d0d0d'}`,
                            cursor:'pointer',lineHeight:1.4,
                          }}>
                          {campCustomOffer===s ? '✓ ' : '→ '}{s}
                        </div>
                      ))}
                    </div>
                    <span className="slabel" style={{marginBottom:4}}>Or Write Your Own</span>
                    <textarea value={campCustomOffer} onChange={e=>setCampCustomOffer(e.target.value)} rows={2}
                      placeholder="Customize the offer — or leave blank to use selected idea above" />
                  </div>

                  {/* Offer suggestions */}
                  <div style={{marginBottom:14}}>
                    <span className="slabel" style={{display:'block',marginBottom:6}}>💡 Offer Ideas for {campNiche} — Click to Use</span>
                    <div style={{display:'flex',flexDirection:'column',gap:4,maxHeight:140,overflowY:'auto'}}>
                      {([
                        ...(campNiche==='Tree Service'&&campOfferType==='free-gift'?['Free stump grinding ($350 value) with every tree removal this month — first 10 clients only','Free wood chip delivery (1 truckload, $200 value) with any pruning service booked this week','Free emergency priority status for 12 months with any service over $500','Free property hazard report ($150 value) for every new client this month']
                        :campNiche==='Lawn Care'&&campOfferType==='free-gift'?['Free fall aeration ($200 value) with any annual lawn program signed this month','Free first fertilization treatment ($120 value) for new clients before end of month','Free weed pre-emergent ($150 value) with spring clean-up booked this week','Free overseeding of bare patches (500 sqft) with fall aeration booked this September']
                        :campNiche==='Roofing'&&campOfferType==='free-gift'?['Free gutters cleaned ($250 value) with any roof repair or replacement this month','Free chimney inspection ($175 value) with any roofing work this fall','Free 5-year maintenance inspection plan ($400 value) with every full replacement']
                        :campOfferType==='giveaway'?['Grand Prize: Complete service package ($1,000+ value) — FREE for one winner this month. Enter by sharing this post and tagging a neighbor.','Grand Prize: 1 full year of service ($1,200 value) — no purchase required to enter. Winner announced in 30 days.','Grand Prize: Full premium service package — share this post to enter. Multiple winners selected.']
                        :campOfferType==='deep-discount'?['40% off for the next 10 clients — crews available now','First month free on any annual program — no contracts cancel anytime','$150 off any job over $500 booked before end of month','Buy 2 services get the 3rd free — limited to 8 clients only']
                        :['The Premium Program: complete done-for-you service with a documented results guarantee','The All-Inclusive Package: full service guaranteed results and ongoing support','White Glove Service: uniformed crew full cleanup before-and-after documentation and a satisfaction guarantee'])
                      ].map((s,i)=>(
                        <div key={i} style={{fontSize:11,color:'#444',padding:'5px 8px',background:'#080808',border:'1px solid #0d0d0d',cursor:'pointer',lineHeight:1.4}}
                          onClick={()=>setCampCustomOffer(s)}>
                          → {s}
                        </div>
                      )))}
                    </div>
                  </div>

                  <button className="btn-p" onClick={handleGenerateCampaign} disabled={isGeneratingCampaign} style={{width:'100%'}}>
                    {isGeneratingCampaign ? '⚡ Building your campaign...' : `Generate ${campMonth} ${campNiche} Campaign →`}
                  </button>
                </div>

                {/* RESULTS */}
                {campResult && (<>

                  {/* Copy Full Brief button */}
                  <div style={{display:'flex',justifyContent:'flex-end',marginBottom:8}}>
                    <button className="btn-s" style={{fontSize:10,padding:'5px 12px'}}
                      onClick={async()=>{
                        const r = campResult;
                        const brief = [
                          '═══ CAMPAIGN BRIEF: ' + (r.offerName||'') + ' ═══',
                          '',
                          'TAGLINE: ' + (r.tagline||''),
                          'DREAM OUTCOME: ' + (r.dreamOutcome||''),
                          '',
                          '── VALUE STACK ──',
                          ...(r.valueStack||[]).map((v:any)=>v.perceivedValue + '  ' + v.item + '  -  ' + v.description),
                          'TOTAL PERCEIVED VALUE: ' + (r.totalPerceivedValue||''),
                          'YOUR PRICE: ' + (r.offerPrice||''),
                          '',
                          '── REASON WHY ──',
                          r.reasonWhy||'',
                          '',
                          '── WHAT THEY NEVER HAVE TO DO ──',
                          ...(r.effortReduction||[]).map((s:string)=>'✓ '+s),
                          '',
                          '── PROOF STACK ──',
                          'Case Study: ' + (r.perceivedLikelihood?.caseStudy||''),
                          'Credential: ' + (r.perceivedLikelihood?.credential||''),
                          'Demonstration: ' + (r.perceivedLikelihood?.demonstration||''),
                          '',
                          '── URGENCY ──',
                          r.urgency||'',
                          '',
                          '── SCARCITY ──',
                          r.scarcity||'',
                          '',
                          '── GUARANTEE ──',
                          r.guarantee||'',
                          '',
                          '── EMAIL ──',
                          'Subject: ' + (r.email?.subject||''),
                          'Preheader: ' + (r.email?.preheader||''),
                          '',
                          r.email?.body||'',
                          '',
                          '── SMS SEQUENCE ──',
                          ...(r.sms||[]).map((s:any)=>'Touch ' + s.touch + ' (' + s.timing + '): ' + s.message),
                          '',
                          '── SOCIAL POSTS ──',
                          'FACEBOOK:', r.facebook||'',
                          '', 'INSTAGRAM:', r.instagram||'',
                          '', 'NEXTDOOR:', r.nextdoor||'',
                          '', 'FACEBOOK GROUP:', r.facebookGroup||'',
                          '', 'GMB:', r.gmb||'',
                          '',
                          '── GHL IMPLEMENTATION ──',
                          r.ghlNotes||'',
                          '',
                          '── HEADLINE VARIATIONS ──',
                          ...(r.magicHeadlines||[]).map((h:string,i:number)=>(i+1)+'. '+h),
                        ].join('\n');
                        await navigator.clipboard.writeText(brief);
                        setCampCopied('fullbrief');
                        setTimeout(()=>setCampCopied(''),3000);
                      }}>
                      {campCopied==='fullbrief' ? '✓ Copied Full Brief!' : '📋 Copy Full Campaign Brief'}
                    </button>
                  </div>

                  {/* Section Nav */}
                  <div style={{display:'flex',gap:0,borderBottom:'1px solid #141414',marginBottom:16,flexWrap:'wrap'}}>
                    {[
                      {id:'offer',   label:'🎯 The Offer'},
                      {id:'email',   label:'📧 Email'},
                      {id:'sms',     label:'💬 SMS'},
                      {id:'social',  label:'📱 Social'},
                      {id:'strategy',label:'🧠 Strategy'},
                      ...(campResult.giveawayDetails ? [{id:'giveaway', label:'🏆 Giveaway'}] : []),
                    ].map(s=>(
                      <button key={s.id} onClick={()=>setCampActiveSection(s.id)}
                        style={{padding:'8px 14px',background:'transparent',border:'none',borderBottom:`2px solid ${campActiveSection===s.id?'#C8A96E':'transparent'}`,
                          color:campActiveSection===s.id?'#C8A96E':'#444',fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.15em',textTransform:'uppercase',cursor:'pointer',whiteSpace:'nowrap'}}>
                        {s.label}
                      </button>
                    ))}
                  </div>

                  {/* OFFER SECTION */}
                  {campActiveSection==='offer' && (
                    <div style={{display:'flex',flexDirection:'column',gap:12}}>

                      {/* Offer name + tagline */}
                      <div style={{background:'#080808',border:'1px solid #1a1a10',padding:'16px 20px'}}>
                        <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'#555',marginBottom:6}}>{campResult.meta?.offerTypeName}</div>
                        <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:900,color:'#EDE8DC',lineHeight:1.1,marginBottom:8}}>{campResult.offerName}</div>
                        <div style={{fontSize:14,color:'#888',fontStyle:'italic'}}>{campResult.tagline}</div>
                      </div>

                      {/* Dream outcome */}
                      <div style={{background:'#08100a',border:'1px solid #1a3a1a',padding:'12px 16px'}}>
                        <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#5aaa4a',marginBottom:4}}>Dream Outcome</div>
                        <div style={{fontSize:14,color:'#EDE8DC',lineHeight:1.5}}>{campResult.dreamOutcome}</div>
                      </div>

                      {/* Value stack */}
                      <div className="section-box">
                        <div className="section-box-head"><span className="section-box-title">Value Stack</span></div>
                        <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:10}}>
                          {(campResult.valueStack||[]).map((item: any, i: number)=>(
                            <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid #0d0d0d'}}>
                              <div style={{fontFamily:"'Oswald',sans-serif",fontSize:10,color:'#C8A96E',minWidth:60,textAlign:'right',flexShrink:0}}>{item.perceivedValue}</div>
                              <div style={{flex:1}}>
                                <div style={{fontSize:13,color:'#CCC',fontWeight:600}}>{item.item}</div>
                                <div style={{fontSize:11,color:'#444',fontStyle:'italic'}}>{item.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderTop:'1px solid #1a1a1a'}}>
                          <span style={{fontFamily:"'Oswald',sans-serif",fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',color:'#555'}}>Total Perceived Value</span>
                          <span style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:900,color:'#C8A96E',textDecoration:'line-through',opacity:0.7}}>{campResult.totalPerceivedValue}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderTop:'2px solid #C8A96E',marginTop:4}}>
                          <div>
                            <div style={{fontFamily:"'Oswald',sans-serif",fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',color:'#C8A96E',marginBottom:2}}>Your Price</div>
                            <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:900,color:'#EDE8DC',lineHeight:1}}>{campResult.offerPrice}</div>
                          </div>
                          <div style={{background:'#C8A96E',padding:'8px 16px',textAlign:'center'}}>
                            <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#0d0c08',marginBottom:2}}>Value Ratio</div>
                            <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:900,color:'#0d0c08',lineHeight:1}}>
                              {(()=>{
                                const total = parseFloat((campResult.totalPerceivedValue||'').replace(/[$,]/g,'')) || 0;
                                const price = parseFloat((campResult.offerPrice||'').replace(/[$,]/g,'')) || 0;
                                if (total > 0 && price > 0) {
                                  const ratio = Math.round(total / price);
                                  return ratio + 'x';
                                }
                                return 'High';
                              })()}
                            </div>
                            <div style={{fontSize:8,color:'rgba(13,12,8,0.6)',fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em'}}>VALUE</div>
                          </div>
                        </div>
                      </div>

                      {/* Urgency + Scarcity + Guarantee */}
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}}>
                        {[
                          {label:'⏰ Urgency', text: campResult.urgency, key:'urgency'},
                          {label:'🔒 Scarcity', text: campResult.scarcity, key:'scarcity'},
                          {label:'✅ Guarantee', text: campResult.guarantee, key:'guarantee'},
                        ].map(box=>(
                          <div key={box.key} style={{background:'#080808',border:'1px solid #141414',padding:'10px 12px'}}>
                            <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.15em',textTransform:'uppercase',color:'#555',marginBottom:5}}>{box.label}</div>
                            <div style={{fontSize:11,color:'#666',lineHeight:1.5}}>{box.text}</div>
                            <button style={{marginTop:8,fontSize:9,color:'#333',background:'transparent',border:'1px solid #141414',padding:'2px 8px',cursor:'pointer'}}
                              onClick={()=>copyCamp(box.key, box.text||'')}>
                              {campCopied===box.key?'✓ Copied':'Copy'}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Reason Why (deep-discount) */}
                      {campResult.reasonWhy && (
                        <div style={{background:'#080808',border:'1px solid #141414',padding:'12px 14px',marginTop:4}}>
                          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#555',marginBottom:5}}>📌 The Reason Why</div>
                          <div style={{fontSize:12,color:'#666',lineHeight:1.5,fontStyle:'italic'}}>{campResult.reasonWhy}</div>
                          <button style={{marginTop:8,fontSize:9,color:'#333',background:'transparent',border:'1px solid #141414',padding:'2px 8px',cursor:'pointer'}}
                            onClick={()=>copyCamp('reasonWhy', campResult.reasonWhy||'')}>
                            {campCopied==='reasonWhy'?'✓ Copied':'Copy'}
                          </button>
                        </div>
                      )}

                      {/* Effort Reduction */}
                      {campResult.effortReduction?.length > 0 && (
                        <div style={{background:'#080808',border:'1px solid #141414',padding:'12px 14px',marginTop:4}}>
                          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#555',marginBottom:8}}>⚡ What They Never Have to Do</div>
                          <div style={{display:'flex',flexDirection:'column',gap:4}}>
                            {(campResult.effortReduction as string[]).map((item:string,i:number)=>(
                              <div key={i} style={{fontSize:12,color:'#555',lineHeight:1.4,display:'flex',gap:8}}>
                                <span style={{color:'#2a6a3a',flexShrink:0}}>✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                          <button style={{marginTop:8,fontSize:9,color:'#333',background:'transparent',border:'1px solid #141414',padding:'2px 8px',cursor:'pointer'}}
                            onClick={()=>copyCamp('effort', (campResult.effortReduction||[]).map((s:string)=>'✓ '+s).join('\n'))}>
                            {campCopied==='effort'?'✓ Copied':'Copy List'}
                          </button>
                        </div>
                      )}

                      {/* Perceived Likelihood */}
                      {campResult.perceivedLikelihood && (
                        <div style={{background:'#08100a',border:'1px solid #1a2a1a',padding:'12px 14px',marginTop:4}}>
                          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.2em',textTransform:'uppercase',color:'#2a6a3a',marginBottom:8}}>🏆 Perceived Likelihood Stack</div>
                          {[
                            {label:'Case Study', key:'caseStudy', text: campResult.perceivedLikelihood?.caseStudy},
                            {label:'Credentials', key:'credential', text: campResult.perceivedLikelihood?.credential},
                            {label:'Demonstration', key:'demonstration', text: campResult.perceivedLikelihood?.demonstration},
                          ].filter(f=>f.text).map((f,i)=>(
                            <div key={i} style={{marginBottom:8,paddingBottom:8,borderBottom:'1px solid #0d0d0d'}}>
                              <div style={{fontSize:9,color:'#333',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:"'Oswald',sans-serif",marginBottom:3}}>{f.label}</div>
                              <div style={{fontSize:12,color:'#555',lineHeight:1.45,fontStyle:'italic'}}>{f.text}</div>
                              <button style={{marginTop:4,fontSize:9,color:'#333',background:'transparent',border:'1px solid #141414',padding:'2px 8px',cursor:'pointer'}}
                                onClick={()=>copyCamp('pl'+f.key, f.text||'')}>
                                {campCopied==='pl'+f.key?'✓':'Copy'}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* M-A-G-I-C Headlines */}
                      {campResult.meta?.magicHeadlines?.length > 0 && (
                        <div className="section-box">
                          <div className="section-box-head"><span className="section-box-title">M-A-G-I-C Headline Variations</span></div>
                          {campResult.meta.magicHeadlines.map((h: string, i: number)=>(
                            <div key={i} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 0',borderBottom:'1px solid #0d0d0d'}}>
                              <span style={{fontSize:12,color:'#666',flex:1,fontStyle:'italic'}}>"{h}"</span>
                              <button style={{fontSize:9,color:'#333',background:'transparent',border:'1px solid #141414',padding:'2px 8px',cursor:'pointer',flexShrink:0}}
                                onClick={()=>copyCamp('headline'+i, h)}>
                                {campCopied==='headline'+i?'✓':'Copy'}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* EMAIL SECTION */}
                  {campActiveSection==='email' && campResult.email && (
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {[
                        {label:'Subject Line', key:'subject', text: campResult.email.subject},
                        {label:'Preview Text', key:'preheader', text: campResult.email.preheader},
                        {label:'Email Body', key:'body', text: campResult.email.body, tall: true},
                      ].map(f=>(
                        <div key={f.key} className="cap-box">
                          <div className="cap-head">
                            <span className="cap-title">{f.label}</span>
                            <button className="btn-g" onClick={()=>copyCamp(f.key, f.text||'')}>
                              {campCopied===f.key?'✓ Copied':'Copy'}
                            </button>
                          </div>
                          <textarea value={f.text||''} readOnly
                            style={{width:'100%',minHeight:f.tall?240:48,background:'transparent',border:'none',color:'#4a4a4a',fontFamily:"'EB Garamond',serif",fontSize:13,lineHeight:1.65,resize:'vertical',outline:'none',padding:0}} />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SMS SECTION */}
                  {campActiveSection==='sms' && campResult.sms && (
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {(campResult.sms as any[]).map((sms: any, i: number)=>(
                        <div key={i} className="cap-box">
                          <div className="cap-head">
                            <div>
                              <span className="cap-title">Touch {sms.touch}</span>
                              <span style={{fontSize:10,color:'#333',marginLeft:8,fontStyle:'italic'}}>{sms.timing}</span>
                            </div>
                            <button className="btn-g" onClick={()=>copyCamp('sms'+i, sms.message||'')}>
                              {campCopied==='sms'+i?'✓ Copied':'Copy'}
                            </button>
                          </div>
                          <div style={{fontSize:14,color:'#666',fontStyle:'italic',lineHeight:1.5,fontFamily:"'EB Garamond',serif"}}>{sms.message}</div>
                          <div style={{marginTop:6,fontSize:10,color:sms.message?.length>160?'#aa4a4a':'#333'}}>{sms.message?.length||0}/160 chars</div>
                        </div>
                      ))}
                      <div style={{background:'#080808',border:'1px solid #141414',padding:'10px 14px',fontSize:11,color:'#444',fontStyle:'italic'}}>
                        💡 Load all 3 touches into a GHL workflow with the delays shown. Set trigger: tag added = "[niche]-campaign-[month]"
                      </div>
                    </div>
                  )}

                  {/* SOCIAL SECTION */}
                  {campActiveSection==='social' && (
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {[
                        {label:'📘 Facebook Post', key:'facebook', text: campResult.facebook || campResult.socialPosts?.facebook},
                        {label:'📸 Instagram Caption', key:'instagram', text: campResult.instagram || campResult.socialPosts?.instagram},
                        {label:'🏘️ Nextdoor Post', key:'nextdoor', text: campResult.nextdoor || campResult.socialPosts?.nextdoor},
                        {label:'👥 Facebook Group Post', key:'facebookGroup', text: campResult.facebookGroup || campResult.socialPosts?.facebookGroup},
                        {label:'📍 Google Business Profile Post', key:'gmb', text: campResult.gmb || campResult.socialPosts?.gmb},
                      ].map(p=>(
                        <div key={p.key} className="cap-box">
                          <div className="cap-head">
                            <span className="cap-title">{p.label}</span>
                            <button className="btn-g" onClick={()=>copyCamp(p.key, p.text||'')}>
                              {campCopied===p.key?'✓ Copied':'Copy'}
                            </button>
                          </div>
                          <textarea value={p.text||''} readOnly
                            style={{width:'100%',minHeight:100,background:'transparent',border:'none',color:'#4a4a4a',fontFamily:"'EB Garamond',serif",fontSize:13,lineHeight:1.65,resize:'vertical',outline:'none',padding:0}} />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* GIVEAWAY SECTION */}
                  {campActiveSection==='giveaway' && (campResult.giveawayDetails || campResult.secondPlaceScript) && (
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                        {[
                          {label:'Grand Prize', text: campResult.giveawayDetails.grandPrize},
                          {label:'Entry Mechanism', text: campResult.giveawayDetails.entryMechanism},
                          {label:'Number of Winners', text: campResult.giveawayDetails.numberOfWinners},
                          {label:'Second Place Offer', text: campResult.giveawayDetails.secondPlaceOffer},
                        ].map((item,i)=>(
                          <div key={i} style={{background:'#080808',border:'1px solid #141414',padding:'10px 12px'}}>
                            <div style={{fontFamily:"'Oswald',sans-serif",fontSize:8,letterSpacing:'0.15em',textTransform:'uppercase',color:'#555',marginBottom:5}}>{item.label}</div>
                            <div style={{fontSize:13,color:'#888'}}>{item.text}</div>
                          </div>
                        ))}
                      </div>
                      <div className="cap-box">
                        <div className="cap-head">
                          <span className="cap-title">🏆 Second-Place Callback Script</span>
                          <button className="btn-g" onClick={()=>copyCamp('script', campResult.giveawayDetails.secondPlaceScript||'')}>
                            {campCopied==='script'?'✓ Copied':'Copy Script'}
                          </button>
                        </div>
                        <div style={{background:'#050505',padding:'10px',marginBottom:4,fontSize:11,color:'#333',fontStyle:'italic'}}>
                          Use this word-for-word on the callback call. This is a warm sales call framed as great news.
                        </div>
                        <textarea value={campResult.giveawayDetails.secondPlaceScript||''} readOnly
                          style={{width:'100%',minHeight:200,background:'transparent',border:'none',color:'#4a4a4a',fontFamily:"'EB Garamond',serif",fontSize:13,lineHeight:1.65,resize:'vertical',outline:'none',padding:0}} />
                      </div>
                    </div>
                  )}

                  {/* STRATEGY SECTION */}
                  {campActiveSection==='strategy' && (
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      <div style={{background:'#080808',border:'1px solid #141414',padding:'16px'}}>
                        <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'#555',marginBottom:10}}>Seasonal Context</div>
                        <div style={{display:'flex',flexDirection:'column',gap:8}}>
                          <div><span style={{fontSize:10,color:'#333',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:"'Oswald',sans-serif"}}>Trigger: </span><span style={{fontSize:13,color:'#666'}}>{campResult.meta?.seasonal?.trigger}</span></div>
                          <div><span style={{fontSize:10,color:'#333',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:"'Oswald',sans-serif"}}>Pain: </span><span style={{fontSize:13,color:'#666'}}>{campResult.meta?.seasonal?.pain}</span></div>
                          <div><span style={{fontSize:10,color:'#333',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:"'Oswald',sans-serif"}}>Urgency: </span><span style={{fontSize:13,color:'#666'}}>{campResult.meta?.seasonal?.urgency}</span></div>
                        </div>
                      </div>
                      {campResult.ghlNotes || campResult.implementationNotes && (
                        <div className="cap-box">
                          <div className="cap-head"><span className="cap-title">GHL Implementation Notes</span></div>
                          <div style={{fontSize:13,color:'#666',lineHeight:1.6,fontStyle:'italic',fontFamily:"'EB Garamond',serif"}}>{campResult.implementationNotes}</div>
                        </div>
                      )}
                      <div style={{background:'#0a0808',border:'1px solid #1a1010',padding:'12px 16px'}}>
                        <div style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'#553333',marginBottom:8}}>Value Equation Check</div>
                        <div style={{fontSize:12,color:'#555',lineHeight:1.6}}>
                          This campaign is optimized for: <br/>
                          ✓ Dream Outcome: <span style={{color:'#888'}}>{campResult.dreamOutcome?.slice(0,80)}...</span><br/>
                          ✓ Perceived Likelihood: Guarantee + specific results framing<br/>
                          ✓ Time Delay: Urgency deadline + limited availability<br/>
                          ✓ Effort Reduced: Done-for-you framing throughout
                        </div>
                      </div>
                    </div>
                  )}

                </>)}
              </div>
            </>)}

          {/* ── LOADING ── */}
          {isLoading&&<div className="loading-ov"><div className="spin"/><div className="loading-t">{statusMsg||'Working...'}</div></div>}

          {/* ── EDIT ── */}
          {step==='edit' && !isLoading && (<>
            <div className="eh">
              <div>
                <h2 className="et">Edit Your Slides</h2>
                <p className="esub">Live preview updates as you type. ↺ regenerates with AI.</p>
              </div>
              <div className="ea">
                <button className="btn-s" onClick={()=>setStep('form')}>← Back</button>
                <button className="btn-s" onClick={()=>{handleSaveCarousel();}} title="Save to library">💾 Save</button>
                <button className="btn-p" onClick={handleRenderAll}>Render All →</button>
              </div>
            </div>

            {error&&<div className="err">{error}</div>}

            <div className="cl">
              {cards.map((card,i)=>(
                <CardEditor key={i} card={card} index={i} total={cards.length} theme={theme} logo={logo}
                  onChange={c=>updateCard(i,c)}
                  onMoveUp={()=>moveCard(i,-1)} onMoveDown={()=>moveCard(i,1)}
                  onDelete={()=>deleteCard(i)} onDuplicate={()=>dupCard(i)}
                  onRegenerate={()=>handleRegenCard(i)} isRegenerating={regenIdx===i}
                />
              ))}
            </div>

            <div style={{marginBottom:10}}>
              <span className="slabel">Add a Slide</span>
              <div className="add-card-row">
                {(Object.keys(CARD_TYPE_LABELS) as CardData['type'][]).map(type=>(
                  <button key={type} className="btn-g" onClick={()=>addCard(type)}>+ {CARD_TYPE_LABELS[type]}</button>
                ))}
              </div>
            </div>

            <div className="render-bar">
              <div className="rbi"><strong>{cards.length} slides</strong> · {THEMES.find(t=>t.value===theme)?.label} · 1080×1080</div>
              <button className="btn-p" onClick={handleRenderAll}>Render All →</button>
            </div>
          </>)}

          {/* ── PREVIEW ── */}
          {step==='preview' && images.length>0 && !isLoading && (<>
            <button className="back-btn" onClick={()=>setStep('edit')}>← Back to Editor</button>

            <div className="pvh">
              <h2 className="pvt">Your Carousel</h2>
              <div className="pva">
                <button className="btn-s" onClick={()=>setStep('form')}>Start Over</button>
                <button className="btn-p" onClick={()=>images.forEach((img,i)=>dl(img,`carousel-slide-${i+1}.png`))}>↓ Download All ({images.length})</button>
              </div>
            </div>

            <div className="cv">
              <div className="thumbs">
                {images.map((img,i)=>(
                  <img key={i} src={img} alt={`Slide ${i+1}`} className={`thumb ${currentSlide===i?'active':''}`} onClick={()=>setCurrentSlide(i)} />
                ))}
              </div>
              <div className="slide-main">
                <div className="siw">
                  <img src={images[currentSlide]} alt={`Slide ${currentSlide+1}`} />
                  <button className="rr-btn" onClick={()=>handleRenderOne(currentSlide)} disabled={renderingIdx===currentSlide}>
                    {renderingIdx===currentSlide?'…':'↺ Re-render'}
                  </button>
                </div>
                <div className="sc">
                  <button className="btn-s" style={{padding:'7px 14px',fontSize:10}} onClick={()=>setCurrentSlide(p=>Math.max(0,p-1))} disabled={currentSlide===0}>← Prev</button>
                  <span className="sct">{currentSlide+1} / {images.length}</span>
                  <button className="btn-s" style={{padding:'7px 14px',fontSize:10}} onClick={()=>setCurrentSlide(p=>Math.min(images.length-1,p+1))} disabled={currentSlide===images.length-1}>Next →</button>
                </div>
                <button className="dl-btn" onClick={()=>dl(images[currentSlide],`carousel-slide-${currentSlide+1}.png`)}>↓ Download Slide {currentSlide+1}</button>
              </div>
            </div>

            {/* ── CAPTION GENERATOR ── */}
            <div className="section-box" style={{marginTop:24}}>
              <div className="section-box-head">
                <span className="section-box-title">📝 AI Caption Generator</span>
              </div>

              {/* Platform Picker */}
              <div style={{marginBottom:14}}>
                <span className="slabel">Platform</span>
                <div className="pr">
                  {['instagram','facebook','linkedin','tiktok','twitter','youtube'].map(p=>(
                    <button key={p} className={`pill ${captionPlatform===p?'sel':''}`} onClick={()=>{setCaptionPlatform(p);setAiCaption('');}}>
                      {p==='instagram'?'📸':p==='facebook'?'👍':p==='linkedin'?'💼':p==='tiktok'?'🎵':p==='twitter'?'🐦':'📺'} {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyword Trigger */}
              <div className="fr2" style={{marginBottom:14}}>
                <div>
                  <span className="slabel">Keyword Trigger (optional)</span>
                  <input type="text" value={keywordTrigger} onChange={e=>setKeywordTrigger(e.target.value)} placeholder='e.g. AUDIT, GUIDE, PIF, SYSTEM' />
                  <div style={{display:'flex',gap:4,flexWrap:'wrap',marginTop:4}}>
                    {['AUDIT','GUIDE','SYSTEM','PIF','CHECKLIST','DEMO','PLAYBOOK','TEMPLATE'].map(k=>(
                      <button key={k} className="cta-p" onClick={()=>setKeywordTrigger(k)}>{k}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="slabel">What happens when they comment?</span>
                  <input type="text" value={keywordAction} onChange={e=>setKeywordAction(e.target.value)} placeholder="and I'll DM you the link" />
                  <div style={{display:'flex',gap:4,flexWrap:'wrap',marginTop:4}}>
                    {["and I'll DM you the link","and I'll send the free guide","and I'll send the checklist","and I'll book you a free call"].map(a=>(
                      <button key={a} className="cta-p" onClick={()=>setKeywordAction(a)}>{a}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Generate all 6 at once */}
              <button className="btn-p" onClick={handleGenerateAllCaptions} disabled={isGeneratingAllCaptions} style={{marginBottom:14}}>
                {isGeneratingAllCaptions ? 'Generating all 6 platforms...' : '⚡ Generate All 6 Platform Captions →'}
              </button>

              {/* Or generate one at a time */}
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <span style={{fontSize:10,color:'#2a2a2a',fontStyle:'italic',whiteSpace:'nowrap'}}>or single platform:</span>
                <button className="btn-s" onClick={handleGenerateCaption} disabled={isGeneratingCaption} style={{fontSize:10,padding:'4px 10px'}}>
                  {isGeneratingCaption ? '...' : `Gen ${captionPlatform} →`}
                </button>
              </div>

              {/* 6 platform tabs */}
              {(Object.keys(allCaptions).length > 0 || aiCaption) && (
                <div className="cap-box" style={{marginTop:0}}>
                  {/* Tab row */}
                  <div style={{display:'flex',borderBottom:'1px solid #141414',marginBottom:12,gap:0,flexWrap:'wrap'}}>
                    {[
                      {id:'instagram', icon:'📸', label:'Instagram'},
                      {id:'facebook',  icon:'👥', label:'Facebook'},
                      {id:'linkedin',  icon:'💼', label:'LinkedIn'},
                      {id:'twitter',   icon:'🐦', label:'Twitter'},
                      {id:'tiktok',    icon:'🎵', label:'TikTok'},
                      {id:'youtube',   icon:'▶️', label:'YouTube'},
                    ].map(tab => {
                      const hasContent = !!(allCaptions[tab.id] || (tab.id === captionPlatform && aiCaption));
                      return (
                        <button key={tab.id}
                          onClick={() => setActiveCaptionTab(tab.id)}
                          style={{
                            padding:'7px 12px',
                            fontFamily:"'Oswald',sans-serif",
                            fontSize:9,
                            letterSpacing:'0.15em',
                            textTransform:'uppercase',
                            border:'none',
                            borderBottom: activeCaptionTab===tab.id ? '2px solid #C8A96E' : '2px solid transparent',
                            background:'transparent',
                            color: activeCaptionTab===tab.id ? '#C8A96E' : hasContent ? '#555' : '#2a2a2a',
                            cursor:'pointer',
                            whiteSpace:'nowrap',
                          }}>
                          {tab.icon} {tab.label}{hasContent?' ✓':''}
                        </button>
                      );
                    })}
                  </div>

                  {/* Caption content for active tab */}
                  {[
                    {id:'instagram'}, {id:'facebook'}, {id:'linkedin'},
                    {id:'twitter'}, {id:'tiktok'}, {id:'youtube'},
                  ].map(tab => {
                    const captionText = allCaptions[tab.id] || (tab.id === captionPlatform ? aiCaption : '');
                    const setCaptionText = (v: string) => {
                      if (tab.id === captionPlatform) setAiCaption(v);
                      setAllCaptions(prev => ({...prev, [tab.id]: v}));
                    };
                    return activeCaptionTab === tab.id ? (
                      <div key={tab.id}>
                        <div className="cap-head" style={{marginBottom:8}}>
                          <span className="cap-title">{tab.id.toUpperCase()}</span>
                          <div style={{display:'flex',gap:6}}>
                            {!captionText && (
                              <button className="btn-s" style={{fontSize:10,padding:'4px 10px'}}
                                onClick={()=>{setCaptionPlatform(tab.id);setTimeout(handleGenerateCaption,0);}}>
                                Generate →
                              </button>
                            )}
                            {captionText && (
                              <button className="btn-g" onClick={async()=>{
                                await navigator.clipboard.writeText(captionText);
                                setCaptionCopied(tab.id);
                                setTimeout(()=>setCaptionCopied(''),2000);
                              }}>{captionCopied===tab.id?'✓ Copied!':'Copy'}</button>
                            )}
                          </div>
                        </div>
                        {captionText ? (
                          <textarea
                            value={captionText}
                            onChange={e=>setCaptionText(e.target.value)}
                            style={{width:'100%',minHeight:160,background:'transparent',border:'none',color:'#4a4a4a',fontFamily:"'EB Garamond',serif",fontSize:13,lineHeight:1.65,fontStyle:'italic',resize:'vertical',outline:'none',padding:0}}
                          />
                        ) : (
                          <div style={{color:'#2a2a2a',fontStyle:'italic',fontSize:12,padding:'12px 0'}}>
                            No caption generated yet — click Generate above or use "Generate All 6" to fill all platforms at once.
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {/* ── GHL SOCIAL SCHEDULER ── */}
            <div className="section-box" style={{marginTop:16}}>
              <div className="section-box-head">
                <span className="section-box-title">🚀 Push to GoHighLevel Social Planner</span>
              </div>

              <div className="fr2" style={{marginBottom:12}}>
                <div>
                  <span className="slabel">GHL Location ID <span className="req">*</span></span>
                  <input type="text" value={ghlLocationId} onChange={e=>{setGhlLocationId(e.target.value);savePreset({...preset,ghlLocationId:e.target.value} as any);}} placeholder="6B4reCngPYfDkJwOtiM0" />
                  <div style={{fontSize:11,color:'#2a2a2a',marginTop:3,fontStyle:'italic'}}>Found in GHL → Settings → Business Info</div>
                </div>
                <div>
                  <span className="slabel">Schedule Date & Time (optional)</span>
                  <input type="datetime-local" value={scheduleDate} onChange={e=>setScheduleDate(e.target.value)}
                    style={{width:'100%',background:'#050505',border:'1px solid #161616',color:'#EDE8DC',fontFamily:"'EB Garamond',serif",fontSize:15,padding:'9px 12px',outline:'none'}} />
                  <div style={{fontSize:11,color:'#2a2a2a',marginTop:3,fontStyle:'italic'}}>
                    {scheduleDate
                      ? <span style={{color:'#4a8a3a'}}>✓ Will be scheduled for {new Date(scheduleDate).toLocaleString()}</span>
                      : 'Leave blank to save as draft in GHL'}
                  </div>
                </div>
              </div>

              <div style={{marginBottom:12}}>
                <span className="slabel">Post to Platforms</span>
                <div className="pr">
                  {['facebook','instagram','linkedin','twitter','tiktok','gmb'].map(p=>(
                    <button key={p} className={`pill ${ghlPlatforms.includes(p)?'sel':''}`}
                      onClick={()=>setGhlPlatforms(prev=>prev.includes(p)?prev.filter(x=>x!==p):[...prev,p])}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {ghlResult && <div style={{background:'#0a1a0a',border:'1px solid #1a3a1a',color:'#5aaa4a',padding:'9px 12px',fontFamily:"'Oswald',sans-serif",fontSize:11,letterSpacing:'0.05em',marginBottom:10}}>{ghlResult}</div>}
              {error && error.includes('GHL') && <div className="err">{error}</div>}

              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <button className="btn-p" onClick={handlePushGHL} disabled={isPushingGHL||!ghlLocationId}>
                  {isPushingGHL ? '...' : scheduleDate ? 'Schedule Post in GHL →' : 'Save Draft to GHL →'}
                </button>
                <span style={{fontSize:12,color:'#2a2a2a',fontStyle:'italic'}}>
                  {!ghlLocationId ? 'Enter Location ID to enable' : `Will push to: ${ghlPlatforms.join(', ') || 'no platforms selected'}`}
                </span>
              </div>
              <div style={{fontSize:11,color:'#222',marginTop:8,fontStyle:'italic'}}>
                Note: Caption and post settings are pushed. Attach downloaded PNG slides manually in GHL Social Planner → find your draft → add media.
              </div>
            </div>

            {/* ── REPURPOSE CONTENT ── */}
            <div className="section-box" style={{marginTop:16}}>
              <div className="section-box-head">
                <span className="section-box-title">♻️ One-Click Repurpose</span>
                <span style={{fontSize:11,color:'#2a2a2a',fontStyle:'italic'}}>Turn this carousel into long-form content</span>
              </div>

              <div style={{marginBottom:14}}>
                <span className="slabel">Repurpose As</span>
                <div className="pr">
                  {[
                    {value:'blog', label:'📝 Blog Post'},
                    {value:'email', label:'📧 Email'},
                    {value:'linkedin', label:'💼 LinkedIn Article'},
                    {value:'thread', label:'🐦 Twitter Thread'},
                  ].map(f=>(
                    <button key={f.value} className={`pill ${repurposeFormat===f.value?'sel':''}`}
                      onClick={()=>{setRepurposeFormat(f.value);setRepurposedContent('');}}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-p" onClick={handleRepurpose} disabled={isRepurposing} style={{marginBottom:14}}>
                {isRepurposing ? '...' : `Generate ${repurposeFormat==='blog'?'Blog Post':repurposeFormat==='email'?'Email':repurposeFormat==='linkedin'?'LinkedIn Article':'Twitter Thread'} →`}
              </button>

              {repurposedContent && (
                <div className="cap-box" style={{marginTop:0}}>
                  <div className="cap-head">
                    <span className="cap-title">{repurposeFormat.toUpperCase()}</span>
                    <button className="btn-g" onClick={async()=>{
                      await navigator.clipboard.writeText(repurposedContent);
                      setRepurposeCopied(true);
                      setTimeout(()=>setRepurposeCopied(false),2000);
                    }}>{repurposeCopied?'✓ Copied!':'Copy Content'}</button>
                  </div>
                  <textarea
                    value={repurposedContent}
                    onChange={e=>setRepurposedContent(e.target.value)}
                    style={{width:'100%',minHeight:280,background:'transparent',border:'none',color:'#4a4a4a',fontFamily:"'EB Garamond',serif",fontSize:13,lineHeight:1.7,resize:'vertical',outline:'none',padding:0}}
                  />
                </div>
              )}
            </div>

            {/* ── VIDEO SCRIPT ── */}
            <div className="section-box" style={{marginTop:16}}>
              <div className="section-box-head">
                <span className="section-box-title">🎬 Video Script Generator</span>
                <span style={{fontSize:11,color:'#2a2a2a',fontStyle:'italic'}}>Turn this carousel into a short video script</span>
              </div>

              <div style={{marginBottom:14}}>
                <span className="slabel">Script Format</span>
                <div className="pr">
                  {[
                    {value:'reel', label:'📱 Instagram Reel (30-60s)'},
                    {value:'shorts', label:'⚡ YouTube Shorts (15-30s)'},
                    {value:'youtube', label:'▶️ YouTube Video (3-5min)'},
                    {value:'podcast', label:'🎙️ Podcast Segment'},
                    {value:'vsl', label:'💰 VSL (90s Sales Script)'},
                  ].map(f=>(
                    <button key={f.value} className={`pill ${scriptFormat===f.value?'sel':''}`}
                      onClick={()=>{setScriptFormat(f.value);setVideoScript('');}}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-p" onClick={handleGenerateVideoScript} disabled={isGeneratingScript} style={{marginBottom:14}}>
                {isGeneratingScript ? '...' : `Write ${scriptFormat==='reel'?'Reel':scriptFormat==='shorts'?'Shorts':scriptFormat==='youtube'?'YouTube':scriptFormat==='podcast'?'Podcast':'VSL'} Script →`}
              </button>

              {videoScript && (
                <div className="cap-box" style={{marginTop:0}}>
                  <div className="cap-head">
                    <span className="cap-title">{scriptFormat.toUpperCase()} SCRIPT</span>
                    <button className="btn-g" onClick={async()=>{
                      await navigator.clipboard.writeText(videoScript);
                      setScriptCopied(true);
                      setTimeout(()=>setScriptCopied(false),2000);
                    }}>{scriptCopied?'✓ Copied!':'Copy Script'}</button>
                  </div>
                  <textarea
                    value={videoScript}
                    onChange={e=>setVideoScript(e.target.value)}
                    style={{width:'100%',minHeight:260,background:'transparent',border:'none',color:'#4a4a4a',fontFamily:"'EB Garamond',serif",fontSize:13,lineHeight:1.7,resize:'vertical',outline:'none',padding:0}}
                  />
                </div>
              )}
            </div>

            <hr className="hr" />
            <div style={{textAlign:'center'}}>
              <button className="btn-s" onClick={()=>setStep('form')}>Generate Another Carousel</button>
            </div>
          </>)}

        </main>
      </div>
    </>
  );
}
