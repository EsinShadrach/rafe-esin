# Rafe Esin Portfolio — AGENTS.md

## Commands

- `npm run dev` — dev server (uses bun.lockb + package-lock.json; prefer npm)
- `npm run build` — production build
- `npm run lint` — ESLint via `next lint` (config: `next/core-web-vitals`)
- No test framework is installed; no test commands exist

## Project structure

- **Next.js 14** with **App Router** (`app/` directory)
- **Path alias**: `~/*` maps to project root (tsconfig `paths`)
- `app/page.tsx` — home page (client component, `"use client"`)
- `app/layout.tsx` — root layout, metadata, Geist font
- `app/nori/` — sub-route with Appwrite email verification (`app/nori/verify/`)
- `components/` — shared UI (nav, hero, social buttons, icons, utils)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- No tests or CI workflows exist

## Key dependencies

- `motion` (not `framer-motion` directly; import from `"motion/react"`)
- `appwrite` ^18.2.0 — used in `nori/verify` for email verification
- `geist` — font (import `GeistSans` from `"geist/font/sans"`)
- `lucide-react` — icons
- `tailwind-merge` + `clsx` — class merging via `cn()`

## Design & UI Theme

- **Aesthetic**: Neo-brutalist, high-contrast monochrome (black, white, off-white/`white-bg`). Wireframe-like layouts with persistent visible grid lines dividing sections.
- **Typography**: Heavy, oversized, bold headings (using Geist Sans), often fully uppercase.
- **Components**: Sharp corners, prominent 1px solid black borders on most containers, buttons, and grid cells.
- **Interactions**: Color inversion on hover (solid black backgrounds with white text), sharp translating shadows, and staggered 3D text effects.
- **Global CSS**: Hidden scrollbars globally (`globals.css`), custom animations (`height`/`width` for grid drawing effects).
- **Icons**: Lucide-react for minimal line icons; custom icons use snake_case (`components/icons/rsty_rafe.tsx`).
