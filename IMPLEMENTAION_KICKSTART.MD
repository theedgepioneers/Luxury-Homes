# IMPLEMENTATION KICKSTART

## Project: Vance & Co. — Luxury Custom Home Builder

A high-end, multi-page marketing site for a luxury custom home builder. Front-end only (no backend, database, or form submission logic). Cinematic, editorial, motion-rich, conversion-focused.

---

## 1. Decisions Locked In (from client answers)

| # | Topic | Decision |
|---|-------|----------|
| 1 | Overall goal | Build whatever delights a luxury home buyer — premium, polished, trustworthy |
| 2 | Typography | **Serif for headings** (Cormorant Garamond), **Sans for body** (Inter). No specific preference, so we choose. |
| 3 | Images | **Generate all images** with the image tool — no placeholders |
| 4 | Scope | **Front-end only**. Landing/marketing site. No DB, no email, no CRM, no form persistence. |
| 5 | Motion | **Everything in motion** — scroll reveals, hover states, staggered entrances to sustain attention |
| 6 | Copy | **Write professional text** ourselves in a luxury/editorial voice |
| 7 | Routing | **Multi-page routing** (Next.js App Router) |
| 8 | Responsive | **Multi-column layouts collapse** gracefully to single column on mobile; hamburger menu on mobile |
| 9 | Case studies | **10 case studies**, written as real-feeling projects, **some with images** |
| 10 | CTAs | **"Schedule Private Consultation" does the same action everywhere** → routes to the Consultation page |

---

## 2. Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + design tokens in `globals.css`
- **Animation**: Framer Motion (`motion`) — scroll reveals, hover, staggered children, respects `prefers-reduced-motion`
- **Icons**: `lucide-react`
- **Components**: shadcn/ui (Button, Accordion, Input, Select, Textarea, Label, Card)
- **Fonts**: `next/font/google` — Cormorant Garamond (serif) + Inter (sans)
- **Images**: AI-generated PNGs stored in `/public/images`

> Note: The form on the Consultation page is **visual/UI only**. It will validate client-side and show a success state, but will NOT send data anywhere (front-end only per scope).

---

## 3. Design System

### Color Palette (3–5 colors, themed via tokens)
| Token | Role | Value |
|-------|------|-------|
| `--background` | Warm alabaster / cream | `#F9F6F0` |
| `--foreground` | Deep charcoal | `#1A1A1A` |
| `--primary` | Champagne gold accent | `#B8985A` (muted, desaturated) |
| `--muted` | Soft warm gray | `#E8E3D9` |
| `--card` | Off-white surface | `#FFFFFF` |

- Gold used sparingly: CTA buttons, thin borders, small accents, hover underlines.
- Dark sections invert (charcoal background, cream text) for editorial contrast.

### Typography
- **Headings**: Cormorant Garamond — weights 500/600, generous letter-spacing on eyebrows
- **Body**: Inter — weights 400/500, `leading-relaxed`
- Scale (responsive): H1 ~clamp 40→72px, H2 ~32→48px, body 16→18px
- Eyebrow labels: uppercase, tracked-out, small, gold

### Motion Principles
- Scroll-triggered fade + slide-up (`whileInView`, `viewport={{ once: true }}`)
- Staggered children for grids/lists
- Subtle hover lift/scale on cards and buttons
- Parallax-ish hero image reveal
- All gated behind `prefers-reduced-motion`

---

## 4. Page / Route Structure (Multi-page)

```
app/
  layout.tsx            // fonts, metadata, html bg, header + footer wrap
  page.tsx              // Home (/)
  portfolio/page.tsx    // Portfolio — 10 case studies (/portfolio)
  process/page.tsx      // The Process (/process)
  investment/page.tsx   // Investment / Pricing (/investment)
  faq/page.tsx          // FAQ (/faq)
  consultation/page.tsx // Schedule Private Consultation — CTA target (/consultation)
```

### Navigation
- Sticky header, transparent over hero → solid on scroll
- Links: Portfolio · The Process · Investment · FAQ
- Persistent gold CTA button → `/consultation`
- Mobile: hamburger → slide-in menu

---

## 5. Page-by-Page Content Plan

### Home (`/`)
1. **Sticky Header** (shared component)
2. **Hero** — full-bleed cinematic waterfront estate image, serif headline, sub-copy, primary CTA → `/consultation`. Studio locations strip: Malibu / Aspen / Greenwich.
3. **Bento Grid Features** — irregular asymmetric grid (1 large + smaller cards), 4 feature pillars, each with icon + image where appropriate.
4. **Featured Case Studies Preview** — 3 highlighted projects pulled from the portfolio set, link to `/portfolio`.
5. **Sovereign Assurance** — dark section, thin gold top border, trust commitments (5-year warranty, bi-weekly briefings).
6. **Social Proof** — multi-column → single column on mobile; testimonials + publication logos (Architectural Digest, Robb Report, Luxe).
7. **Final CTA band** — centered, CTA → `/consultation`.
8. **Footer** (shared component)

### Portfolio (`/portfolio`)
- Intro header.
- **10 case study cards** in a responsive grid (3-col → 1-col). Some include generated images; each has project name, location, scope, short narrative, and a stat (sqft / timeline / investment tier).

### The Process (`/process`)
- Step-by-step build journey (e.g., Discovery → Design → Pre-Construction → Build → Handover), numbered, motion-revealed, with supporting imagery.

### Investment (`/investment`)
- Pricing tiers: New Custom Build (from $2.5M), Whole-Home Transformation (from $6.0M). What's included, value framing, CTA.

### FAQ (`/faq`)
- shadcn Accordion. Professional Q&A (expand the 3 sample items + add more). Smooth expand/collapse, multiple-open allowed.

### Consultation (`/consultation`)
- The single CTA destination. Elegant form UI: Name, Email, Phone, Project Scope (Select: New Custom Build / Whole-Home Transformation), Location, Message.
- Client-side validation + success state (toast/inline confirmation). **No backend submission.**

---

## 6. Shared Components

```
components/
  site-header.tsx       // sticky nav + mobile menu
  site-footer.tsx       // asymmetric footer, socials, legal
  cta-button.tsx        // gold consultation CTA (Link to /consultation)
  section-heading.tsx   // eyebrow + serif title pattern
  motion/reveal.tsx     // reusable scroll-reveal wrapper (Framer Motion)
  bento-grid.tsx        // home feature grid
  case-study-card.tsx   // reused on home + portfolio
  testimonial-card.tsx
  consultation-form.tsx // UI-only form
```

Shared data:
```
lib/case-studies.ts     // array of 10 case study objects
lib/faqs.ts             // FAQ items
lib/process-steps.ts    // process steps
```

---

## 7. Image Generation List (all AI-generated)

1. Hero — cinematic modern waterfront estate at golden hour
2. Bento feature images (2–3) — architectural details, craftsmanship, interiors
3. Process page supporting images (2–3)
4. Investment page accent image
5. Case study images for ~6 of the 10 projects (varied: modern, coastal, mountain, estate)

All saved to `/public/images`, referenced by local path, with descriptive `alt` text.

---

## 8. Accessibility & SEO

- Per-page `metadata` (title, description, OpenGraph)
- Semantic landmarks (`header`, `main`, `nav`, `footer`)
- ARIA on accordion, mobile menu, form fields with `<Label>`
- Alt text on all generated images
- Color contrast verified (charcoal on cream passes AA)
- `prefers-reduced-motion` respected globally

---

## 9. Build Order

1. Fonts + design tokens (`layout.tsx`, `globals.css`)
2. Shared motion `Reveal` wrapper + design primitives
3. Header + Footer
4. Data files (case studies, FAQs, process steps)
5. Home page sections
6. Portfolio, Process, Investment, FAQ, Consultation pages
7. Generate + wire all images
8. Responsive pass (mobile collapse, hamburger)
9. Motion polish + reduced-motion check
10. Browser verification (snapshot + screenshot key routes)

---

## 10. Out of Scope (explicit)

- No database, no auth, no API routes, no email/CRM
- Form does not persist or send data (UI + success state only)
- No analytics integration
- No CMS — content lives in typed data files
