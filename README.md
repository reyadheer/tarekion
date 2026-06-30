# Tarekion — Heavy Equipment Rental Website

Production-ready, bilingual (English/Arabic), SEO-optimised Next.js website for Tarekion Establishment.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel (Free Plan)

**Option A — Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

**Option B — GitHub:**
1. Push to GitHub
2. Import at vercel.com → New Project
3. Framework: Next.js (auto-detected)
4. Click Deploy

## Configuration — Update Before Launch

### 1. Contact Details (`/lib/utils.ts`)
```ts
export const WHATSAPP_NUMBER = '966500000000'; // Your number without +
export const PHONE_NUMBER = '+966-50-000-0000';
export const EMAIL = 'info@tarekion.com';
export const SITE_URL = 'https://www.tarekion.com';
```

### 2. Replace Placeholder Images
Drop real photos into `/public/images/equipment/` and `/public/images/gallery/`
then change `.svg` → `.jpg` in `data/equipment.json`.

### 3. Google Maps Embed
In `components/sections/MapSection.tsx` replace the iframe `src` with your real embed URL.

## Project Structure

```
app/              Pages (Home, Equipment, Gallery, About, Blog, Contact)
components/
  layout/         Header, Footer, FloatingCTA (sticky WhatsApp + call)
  sections/       Hero, EquipmentCategories, WhyChooseUs, Testimonials, FAQ, Map, CTA
  ui/             SectionHeader, EquipmentCard
data/             equipment.json (8 items), blog.json (3 posts)
lib/utils.ts      WhatsApp link helpers, contact constants
public/images/    Equipment + gallery SVG placeholders
```

## What's Built

- 6 pages (Home, Equipment, Gallery, About, Blog, Contact)
- 3 full blog articles with dynamic [slug] routing
- 8 equipment cards with WhatsApp + Call buttons
- Floating WhatsApp + Phone CTAs (desktop + mobile sticky bar)
- WhatsApp contact form (no backend — opens pre-filled WA message)
- Full SEO: sitemap.xml, robots.txt, OG tags, Twitter cards, Schema.org JSON-LD
- Arabic SEO keywords naturally embedded throughout
- Bilingual content (EN + AR) across all pages
- FAQ with Schema markup
- Google Maps section
- 95+ PageSpeed target (static generation, lazy images, no blocking resources)
