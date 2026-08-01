# Pro Craft Reklama

Marketing website for Pro Craft Reklama, a signage and advertising structure manufacturer serving Kosovo and the Balkans — totems, LED signage, 3D letters, vehicle branding, billboards, large format printing and full store branding rollouts.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP-ready motion primitives
- Lenis smooth scroll
- Radix UI (accordion, dialog) + shadcn-style component patterns
- Embla Carousel (testimonials)
- Lucide icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes: home, about, services, portfolio, projects (+ case study detail), blog (+ post detail), contact, quote
- `src/components/sections` — page-level sections (hero, services, testimonials, FAQ, contact, etc.)
- `src/components/shared` — reusable pieces (service/portfolio cards, animated counter, reveal text, before/after slider, forms)
- `src/components/layout` — navbar, footer, smooth scroll, loading screen, scroll progress, WhatsApp button
- `src/lib/data.ts` — all site content (services, portfolio, testimonials, FAQ, blog posts, case studies)

## Notes

- All photography is placeholder — gradient/grid `VisualTile` components stand in for real product and installation photography, category-tinted (yellow/blue) to keep the system consistent. Swap in real assets via `next/image` when available.
- Content (copy, case study numbers, testimonials) is representative placeholder text, not verified client data.

## Build

```bash
npm run build
```
