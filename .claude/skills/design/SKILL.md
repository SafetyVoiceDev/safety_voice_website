---
name: design
description: SafetyVoice design guidelines — safety-orange palette, Aeonik type, spacing, components and motion, all taken from PRD.md §5. Load before making any visual decision (colors, type, layout, components, motion).
---

# Design Guidelines

`PRD.md` §5 is the source of truth. Its values come from the Flutter app (`lib/core/theme/`), so the site and the app look like the same product. If this file and the PRD disagree, the PRD wins. Update this file to match.

## Visual Style
- **Aesthetic**: Hi-vis gear. Safety orange on clean white, with charcoal text. Bold, legible and confident.
- **Mood**: Plain, direct and job-site practical. It should look like a tool, not a startup pitch.
- **Restraint**: Orange keeps its punch because it's used sparingly. It goes on CTAs, step numbers, icon accents and the final CTA band. Everything else is white, light gray and charcoal.

---

## Color Palette

One brand color and one highlight, both from `AppColors`:

- **Safety Orange** (`--primary`): `#FE5000`. Used for CTAs, accents, icons and the final band.
- **Signal Yellow** (`--secondary`): `#FFCC00`. Only for small highlights (badges, underline marks) and the focus ring.

> ⚠️ These two hex values are authoritative. Don't substitute a generic orange or yellow, and don't invent new brand hues.

**Full token set** (PRD §5.2):

| Token | Light | Dark | Use |
|---|---|---|---|
| `--primary` | `#FE5000` | `#FE5000` | CTAs, accents, icons, final band |
| `--primary-hover` | `#E54800` | `#FF6A26` | Button hover |
| `--primary-ink` | `#C43E00` | `#FF7A3D` | Orange **text** (links, eyebrows) |
| `--primary-tint` | `#FFF1EA` | `#2A1810` | Hero glow, icon chip backgrounds |
| `--secondary` | `#FFCC00` | `#FFCC00` | Small highlights, focus ring |
| `--ink` | `#1A1A1A` | `#0A0A0A` | Dark sections, footer |
| `--text` | `#333333` | `#EDEDED` | Body and heading text |
| `--text-muted` | `#6B6B6B` | `#A3A3A3` | Secondary text (never `#808080`) |
| `--border` | `#E0E0E0` | `#2E2E2E` | Card borders, dividers |
| `--surface` | `#F5F5F5` | `#1F1F1F` | Alternate section background, cards |
| `--bg` | `#FFFFFF` | `#141414` | Page background |
| `--success` | `#22C55E` | `#22C55E` | "Synced" or check icons only |
| `--danger` | `#D92D20` | `#F04438` | Not expected on the landing page |

The light values come straight from the PRD. The PRD doesn't define a dark theme, so the dark values are derived to satisfy the frontend skill's light/dark parity rule. They keep the same orange and yellow, and every text pair passes AA.

**Mapping to shadcn tokens** (in `app/globals.css`): `--background` → `--bg`, `--foreground` → `--text`, `--card` → `--bg` (light) / `--surface` (dark), `--muted` → `--surface`, `--muted-foreground` → `--text-muted`, `--border` / `--input` → `--border`, `--primary` → `--primary`, `--primary-foreground` → `--ink` (see contrast rules), `--ring` → `--secondary`, `--destructive` → `--danger`. Components read the shadcn names, never raw hex.

### Contrast rules (WCAG AA, measured)

| Pair | Ratio | Verdict |
|---|---|---|
| White on `#FE5000` | 3.30 | ⚠️ Large text only (≥24px regular or ≥18.66px bold) |
| `#1A1A1A` on `#FE5000` | 5.27 | ✅ Any size |
| `#FE5000` on white | 3.30 | ⚠️ Large text and icons only |
| `#C43E00` on white | 5.20 | ✅ Any size |
| `#6B6B6B` on white | 5.33 | ✅ (`#808080` fails at 3.95) |
| `#333333` on white | 12.63 | ✅ |
| `#333333` on `#FFCC00` | 8.36 | ✅ |
| `#EDEDED` on `#141414` | 15.74 | ✅ (dark) |
| `#A3A3A3` on `#1F1F1F` | 6.53 | ✅ (dark) |
| `#FF7A3D` on `#141414` | 7.11 | ✅ (dark) |

What follows from these:
- **Primary button labels** are white at **18px / 700 or larger**. Smaller orange buttons, like the header CTA, use `--ink` text.
- **Small orange text** uses `--primary-ink`, never `--primary`.
- **Final CTA band**: a white headline at ≥32px is fine. Body copy under it is ≥20px bold, or uses `--ink`.

---

## Typography

**Font: Aeonik**, the app's font. It's self-hosted as `woff2` from `aeonik-regular` and `aeonik-bold`, loaded via `next/font/local` with `display: swap`, and the Bold file is preloaded.

- Only **400 and 700** exist. Never use 500, 600 or 800, because the browser synthesizes them and they look smeared. Map the app's 600 and 800 weights to 700.
- Aeonik is commercial (CoType Foundry), so the web license must be confirmed before launch. If it isn't covered, use **Inter** via `next/font/google`.
- Fallback stack: `"Aeonik", "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

**Type scale** (fluid `clamp()`, matched to `AppTypography`):

| Role | Mobile → Desktop | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display (H1) | 40 → 64px | 700 | 1.05 | -0.02em |
| H2 | 28 → 40px | 700 | 1.15 | -0.015em |
| H3 (card title) | 20 → 22px | 700 | 1.3 | -0.01em |
| Lead | 18 → 20px | 400 | 1.55 | 0 |
| Body | 16 → 17px | 400 | 1.6 | 0 |
| Small / caption | 14px | 400 | 1.5 | 0 |
| Eyebrow | 13px | 700 | 1.2 | 0.12em, uppercase |
| Button | 18px | 700 | 1 | 0 |

**Rules.**
- Body text is capped at 65ch.
- Headlines use sentence case. Eyebrows are the only uppercase text.
- There is one H1 per page, and every section starts with an H2.
- Hero text is centered on mobile and left-aligned on desktop.
- Form inputs are never below 16px.

---

## Spacing, Grid & Layout

**Spacing scale** (`AppSizes`, base 4): `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 72 · 96 · 128`

- **Container**: max-width 1200px. Side padding is 16px on mobile, 24px on tablet and 32px on desktop.
- **Section padding**: 64px on mobile and 96px on desktop. The final CTA band uses 72px / 112px.
- **Grid**: 12 columns with a 24px gutter on desktop. The hero is a 6/6 split, and features are 3 × 4-column cards.
- **Breakpoints**: `sm 640 · md 768 · lg 1024 · xl 1280`. Design at 375px first.

**Radii:** `sm 8px` (chips, inputs) · `md 10px` (buttons) · `lg 16px` (cards) · `xl 32px` (device mock, CTA band) · `full 9999px` (pills, icon chips, mic motif)

---

## Elevation

Keep shadows subtle and neutral. Orange glow is reserved for the primary button.

```
--shadow-card  0 1px 2px rgb(0 0 0 / .04), 0 4px 16px rgb(0 0 0 / .06)
--shadow-cta   0 8px 24px rgb(254 80 0 / .28)   /* primary button only */
```

In dark mode, cards separate by `--surface` and `--border` rather than shadow.

---

## Iconography & Imagery

- **Icons**: reuse the SVGs from the app's `assets/icons/`, and fill gaps with `lucide-react`. They use a 2px stroke, `stroke="currentColor"`, and 20/24px sizes. Decorative icons are `aria-hidden`.
- **Screenshots**: use real app screenshots in device frames, not illustrations of the UI. Capture them at 3x from the iOS simulator and export as AVIF or WebP.
- **Photography** (optional, "Built for the job site" only): an authentic supervisor-and-crew shot with hi-vis and hard hats. No glossy stock.
- Every image goes through `next/image` with explicit dimensions, lazy loading below the fold and meaningful `alt` text. No text is baked into images.

---

## Components

These are built on shadcn/ui primitives (`@/components/ui`) and restyled through the tokens above.

**Buttons**

| Variant | Style |
|---|---|
| Primary | `--primary` bg, white 18px/700 label, `--radius-md`, 56px tall (48px on mobile), padding `0 28px`, `--shadow-cta`. Hover: `--primary-hover` with a 1px lift. Active: no lift. |
| Secondary | `--bg` bg, `--text` label, 1.5px `--border` outline. Hover: the border becomes `--text`. |
| Header (small) | `--primary` bg, `--ink` 15px/700 label, 40px tall. |
| Text link | `--primary-ink`, underline on hover, trailing `→`. |

The focus ring is always `outline: 3px solid var(--secondary); outline-offset: 2px`. Yellow reads clearly on white, orange and dark. Touch targets are at least 44×44px.

- **Feature card**: `--bg` (or `--surface` in dark), a 1px `--border`, `--radius-lg`, and 24px padding (32px on desktop). It holds a 48px circular `--primary-tint` chip with a 24px `--primary` icon, then the H3, then body text in `--text-muted`. Desktop hover: the border becomes `--primary` at 40% opacity, with a 2px lift.
- **Step (How it works)**: a 40px circle with the number in bold `--ink` on a `--primary` fill, followed by the title and body. A dashed `--border` connector runs between steps.
- **FAQ item**: shadcn `Accordion` (or native `<details>`) with a 1px `--border` bottom edge and a 20px/700 summary. A `+` icon rotates 45° when the item opens. The answer is in `--text-muted`.
- **Badges**: `--secondary` fill with `--text` label, used for small highlights only.
- **Header**: sticky, white (or `--bg`) with a `--border` bottom edge once scrolled. It holds anchor links (`#features`, `#how-it-works`, `#faq`) and the small header CTA.
- **Final CTA band**: a `--primary` background, `--radius-xl` on desktop, and store badges.

Every interactive element ships hover, focus-visible, active and disabled states, verified in both themes.

---

## Motion Principles

Keep it light. The page is mostly static, and the JS budget is under 50KB gzipped, so **no animation libraries** (no GSAP, Lenis or carousels). Use CSS transitions and an `IntersectionObserver`.

- **Section reveal**: fade up 12px over 300ms `ease-out` on viewport entry, with a 60ms stagger across cards.
- **Hero signature**: a slow pulsing ring around the mic in the device mock (2s loop), echoing the app's live recording indicator. This is the only looping animation.
- **Hover**: 150ms on color, border and the 1–2px lift. Animate only `transform` and `opacity` (plus color).
- **Reduced motion**: all motion sits inside `@media (prefers-reduced-motion: no-preference)`. Under `reduce`, content renders in its final state, with no pulse and no smooth scroll.

---

## Replication Notes

- Safety Orange `#FE5000` and Signal Yellow `#FFCC00` are the only brand hues. Don't add accent colors.
- Orange is an accent, not a background. Its only full-bleed use is the final CTA band.
- Never put small text in `--primary`. Use `--primary-ink`, or `--ink` on orange fills.
- Text is charcoal (`#333333`), not pure black. Muted text is `#6B6B6B`, never `#808080`.
- Use flat colors with no gradients. The hero "glow" is a flat `--primary-tint` shape.
- Don't use font weights other than 400 and 700.
- Verify both light and dark themes for every component.
- Performance budget: Lighthouse ≥95 on mobile, LCP < 2.0s, JS < 50KB gzipped.
