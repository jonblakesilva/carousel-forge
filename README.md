# CarouselForge — Vintage Ad Carousel Generator

Generate Frank Kern / Claude Hopkins style educational carousel images using AI + Puppeteer.

## What It Does

- Enter a topic (marketing lesson, case study, principle, or common mistake)
- AI generates slide content in the vintage ad style
- Puppeteer renders each slide to a 1080x1080px PNG
- Download individual slides or all at once

## Tech Stack

- **Next.js 14** — Frontend + API routes
- **Puppeteer + @sparticuz/chromium** — Headless browser for rendering cards to PNG
- **Claude API (claude-sonnet-4-6)** — AI content generation
- **Google Fonts** — Playfair Display, EB Garamond, Oswald

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
# Add your Anthropic API key to .env.local
```

### 3. Install puppeteer for local dev (separate from puppeteer-core)

```bash
npm install puppeteer --save-dev
```

### 4. Run dev server

```bash
npm run dev
```

Open http://localhost:3000

---

## Deploy to Netlify (Recommended)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/carousel-generator.git
git push -u origin main
```

### 2. Connect to Netlify

1. Go to [netlify.com](https://netlify.com) → New Site from Git
2. Select your repo
3. Build settings are auto-detected from `netlify.toml`
4. Add environment variable: `ANTHROPIC_API_KEY` = your key
5. Deploy

### 3. Install Netlify Next.js plugin

```bash
npm install @netlify/plugin-nextjs --save-dev
```

---

## Deploy to Vercel (Alternative)

```bash
npm install -g vercel
vercel
# Follow prompts, add ANTHROPIC_API_KEY in Vercel dashboard
```

**Note:** On Vercel, increase function memory to 3009MB for the screenshot function (configured in `vercel.json`).

---

## Customizing the Aesthetic

The card visual design lives in `lib/cardTemplate.ts`. Key things to tweak:

- **Colors**: Change `#F5F0E8` (paper), `#0D0D0D` (ink), `#C8A96E` (gold accents) in `styles/globals.css`
- **Fonts**: Swap Google Fonts in `generateCardHTML()` base styles
- **Layout**: Each card type has its own template in the switch statement
- **Brand logo**: Add your logo as an `<img>` in the `brand-footer` div

---

## Card Types

| Type | Use Case |
|------|----------|
| `cover` | Hook slide — the headline that stops the scroll |
| `lesson` | Teaching slide with bullets + lesson callout box |
| `example` | Case study / real-world application |
| `quote` | Pull quote from a marketing legend |
| `cta` | Final slide — your call to action |

---

## Roadmap Ideas

- [ ] Manual card editor (edit AI-generated text before rendering)
- [ ] Custom color themes
- [ ] Logo upload support
- [ ] Portrait / landscape format toggle (9:16 for Reels)
- [ ] Batch topic upload (CSV → multiple carousels)
- [ ] Direct publish to Buffer/Hootsuite

---

Built with obsession for old-school marketing principles that still work.
