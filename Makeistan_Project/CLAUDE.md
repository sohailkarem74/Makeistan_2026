# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Makeistan** — a Next.js 15 / React 19 marketing + shop site for the Makeistan makerspace (Gilgit Baltistan, Pakistan). Sells robotics/AI lab kits and curriculum for schools, plus a small e-commerce shop (products listed in `src/data/products.ts`, cart persisted in client state via React Context).

Single-domain product; no separate backend. Content is hand-coded in TSX components. The site is **light-mode only** (a deliberate design choice — `color-scheme: light` in `globals.css`, no theme switch).

## Commands

All commands run from `Makeistan_Project/` (the Next.js app root).

```bash
npm run dev      # next dev --turbopack, defaults to port 3000
npm run build    # production build (eslint is disabled during builds — see next.config.ts)
npm run start    # next start (run after build)
npm run lint     # next lint
```

Notes:
- Dev server uses Turbopack (`--turbopack`).
- ESLint errors are **skipped during `next build`** (`ignoreDuringBuilds: true`). Lint via `npm run lint` separately.
- For Windows-specific detached launchers the team also keeps `run-dev-server.cmd` and `start-dev-detached.cjs` (both target port 3010) — not required for normal development.
- The dev server logs to stdout. If a port is busy, Next picks the next free one — check the actual URL in the terminal.

There are **no tests** in this repo. There is no separate `test` script.

## Architecture

### Directory layout

```
Makeistan_Project/
├── src/
│   ├── app/                    Next.js App Router routes
│   │   ├── layout.tsx          Root layout: fonts (Geist Sans/Mono), CartProvider, FloatingContactButton, Analytics
│   │   ├── page.tsx            Homepage — composes top-level sections from src/components
│   │   ├── globals.css         Design tokens, tone colors, scrollbar, fade-in-up keyframes
│   │   ├── about/              /about
│   │   ├── labs/               /labs index + 3 lab detail pages (climate, energy, robotics)
│   │   ├── programs/           /programs
│   │   ├── projects/[id]/      /projects/:id
│   │   ├── team/               /team
│   │   ├── work/               /work (portfolio)
│   │   ├── shop/               /shop (uses CartProvider)
│   │   └── cart/               /cart (uses CartProvider)
│   ├── components/             Reusable UI — one per file
│   │   ├── ui/                 Lower-level building blocks (see "UI primitives" below)
│   │   ├── Navbar.tsx, Footer.tsx, Hero.tsx, About.tsx, …
│   │   ├── Stats.tsx, WhatWeOffer.tsx, HomeCta.tsx       Homepage-only sections
│   │   ├── why-choose-makeistan.tsx, our-partners.tsx    Homepage-only sections (kebab-case names)
│   │   ├── CartProvider.tsx    React Context for cart state
│   │   ├── FloatingContactButton.tsx, BackButton.tsx
│   │   ├── FounderMessage.tsx, OurWork.tsx
│   ├── lib/
│   │   ├── utils.ts            `cn(...)` className helper
│   │   └── motion.tsx          Shared framer-motion variants (containerVariants, fadeUpVariant, subtleScaleVariant, hoverLift, MotionContainer, MotionItem)
│   └── data/
│       └── products.ts         Product catalog (types + data); imported by CartProvider and shop pages
├── public/images/              Static images (features/, home1-5.jpg, partners/, etc.)
├── next.config.ts              images.dangerouslyAllowSVG + ignoreDuringBuilds
├── tailwind via @tailwindcss/postcss (Tailwind v4)
└── package.json
```

### Homepage composition (`src/app/page.tsx`)

The homepage is a flat composition of section components, imported from `src/components/`. Current order:

`Navbar → Hero → About → WhatWeOffer → Stats → WhyChooseMakeistan → OurPartners → FounderMessage → HomeCta → Footer`

When adding/removing homepage sections, edit `page.tsx` only — each section is self-contained.

### Design tokens & tones

Single source of truth is `src/app/globals.css` (top of file). Pages consume tokens via Tailwind v4 `@theme inline` mapping. Important conventions:

- **Layout tokens:** `--background`, `--foreground`, `--muted`, `--border`, `--card`.
- **Brand:** `--brand` (blue-700) and `--brand-header` (`#00072D`) for the header/navbar chrome.
- **Tone accents:** `[data-tone="blue|green|purple|orange|amber|pink|teal|indigo"] { --tone: <h s% l%> }`. Each tone sets `--surface` and `--surface-strong` (10% / 18% tint).
- **Use the design tokens, not raw hex.** Cards use `border-border bg-background`, hover `border-foreground/30 hover:shadow-md`, icon containers `inline-flex h-11 w-11 rounded-xl surface` with `tone-text` for the icon color.
- **Common card pattern:** `rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-md`. See `WhatWeOffer.tsx` for the canonical reference.
- **Typography:** headings `text-4xl font-semibold tracking-tight text-foreground sm:text-5xl`; eyebrows `text-xs font-medium uppercase tracking-[0.2em] text-muted`; body `text-base text-muted leading-relaxed`.
- The `animate-fade-in-up` and `animation-delay-{200,400}` classes used in some sections are defined as CSS keyframes further down `globals.css`.
- **Path alias:** `@/*` → `./src/*` (`tsconfig.json`).

### UI primitives (`src/components/ui/`)

- **`feature-section.tsx`** — numbered checkmark carousel (`FeatureSteps`); older layout using left-rail steps with single image.
- **`logo-marquee.tsx`** — infinite-scrolling logo row (`LogoMarquee`).
- **`parallax-feature-section.tsx`** — sticky-pinned scroll reveal (`ParallaxScrollFeatureSection` + `ParallaxFeature`). Each feature row gets `useScroll` over the section itself, drives `contentOpacity` (0→1→1→0 across the scroll progress) and `contentY` (40→0→0→-30) on the wrapper, with a separate parallax track on the inner image (`imageY`, `imageScale`). **Important:** don't switch to `whileInView` here — it doesn't trigger reliably inside sticky/overflow containers. Each section is `h-[80vh]` with `sticky top-0` inside.

### Motion conventions

- Two motion libraries are listed: **`framer-motion`** and **`motion`**. The codebase uses `framer-motion` (visible across `src/components/*.tsx` and `src/lib/motion.tsx`). `motion` is in `package.json` but not actively imported anywhere — don't add new imports from it.
- Shared variants live in `src/lib/motion.tsx`: `containerVariants`, `fadeUpVariant`, `subtleScaleVariant`, `hoverLift`, plus the `<MotionContainer>` / `<MotionItem>` convenience components that auto-respect `prefers-reduced-motion`. Prefer these for new sections.
- For custom animations inside sticky/overflow contexts (like `parallax-feature-section.tsx`), drive values via `useScroll`/`useTransform`, not `whileInView`.

### Cart

`src/components/CartProvider.tsx` wraps the app in `layout.tsx`. Use `useCart()` in any client component that needs cart state. Cart state is **in-memory only** (not persisted), lives for the tab session.

### Adding a homepage section — checklist

1. Create `src/components/<Name>.tsx` (PascalCase) — start with the card pattern from `WhatWeOffer.tsx` for styling reference.
2. Use design tokens (`bg-background`, `border-border`, `surface`, `tone-text`).
3. Import + slot the component into `src/app/page.tsx`.
4. Keep sections self-contained — no shared state across homepage sections except via `useCart()`.
5. Don't break the convention of flat homepage composition.

### Things to watch out for

- **No tests, no CI.** Don't run tests that don't exist.
- **`globals.css` is light-only.** Don't add dark-mode selectors.
- **Multiple lockfiles warning** at dev startup because both `Makeistan_Project/package-lock.json` and the parent dir's `package-lock.json` exist — harmless, just messy.
- **`next.config.ts` skips ESLint during build.** Lint with `npm run lint` separately.
- **Images live under `public/images/`** (`features/`, `home1-5.jpg`, `partners/`, `climate-lab.jpg`, `main1-4.jpg`, etc.). Several feature images are referenced by `.jpg` vs `.JPG` vs `.jpeg` — case matters on Linux deploys.

## User preferences (from this project's history)

- The user wants **section content kept exact** — when they paste copy (eyebrow, headline, subtext, card titles, descriptions), use it verbatim. Same card structure, same tone mapping, same hover behavior.
- The user prefers **per-section placement over auto-rewrites** — when adding/removing a section, expect a follow-up "move it to position X" rather than trying to predict it.
- The user is on **Windows** with `bash` shell (Git Bash). The harness uses forward slashes in paths.
