# SafetyVoice — Landing Page Spec

A single-page marketing site for SafetyVoice. Everything a visitor needs is on one scrolling page. There is no navigation to other routes, only in-page anchor links and outbound CTAs (App Store / Google Play / contact email).

This doc is the source of truth for building the page in TypeScript. Colors, type and spacing come from the Flutter app (`lib/core/theme/`) so the site and the app look like the same product.

---

## 1. Goals

| | |
|---|---|
| **Primary goal** | Get the visitor to download the app (iOS first, then Android). |
| **Secondary goal** | Get owners or safety managers to email for a demo or pilot. |
| **Audience** | Construction supervisors and safety managers (users), plus owners and executives of small and mid-sized contractors (buyers). Canada and the U.S. |
| **One-line pitch** | Record your toolbox talk. Get an audit-ready report. |
| **Tone** | Plain, direct, job-site practical. Short sentences. No AI hype and no "revolutionize". Write the way a superintendent talks. |

### Rules

1. **One page only.** No `/about`, `/pricing` or `/blog` routes. Header links scroll to sections on the page (`#features`, `#how-it-works`, `#faq`).
2. **Only claim what ships.** Feature copy is limited to what the MVP actually does (see §4). Roadmap items (semantic search, multi-language, dashboards, digital signatures) must not appear as current features.
3. **Two CTAs, repeated.** "Download for iPhone" (primary) and "Get it on Google Play" (secondary) appear in the hero and in the final CTA band. "Talk to us" (`mailto:`) is a tertiary text link.
4. **Mobile first.** Most visitors arrive from a phone. Design at 375px first, then scale up.

---

## 2. Page structure

```
┌──────────────────────────────────────────┐
│ Header (sticky): logo · anchors · CTA    │
├──────────────────────────────────────────┤
│ 1. Hero: headline, sub, CTAs, phone mock │
│ 2. Problem strip: 3 pain points          │
│ 3. How it works: Record → Assign → Report│
│ 4. Features grid (6 cards)               │
│ 5. Compliance callout (OSHA / CCOHS)     │
│ 6. Built for the job site (3 points)     │
│ 7. FAQ (accordion)                       │
│ 8. Final CTA band (orange)               │
├──────────────────────────────────────────┤
│ Footer: logo · © · privacy · contact     │
└──────────────────────────────────────────┘
```

Privacy and Terms links in the footer may point to hosted documents. They are the only outbound links besides the store badges and email.

---

## 3. Section-by-section content

The copy below is a starting draft. Keep headline lengths roughly the same when editing so the layout holds.

### Header
- Left: `logo_colored_no_background.svg` (from `assets/images/`), 32px tall on mobile, 40px on desktop.
- Center or right (desktop only): anchor links **Features · How it works · FAQ**.
- Right: small primary button **Download**, which scrolls to `#download`.
- On mobile, hide the anchor links. Don't add a hamburger menu; the page is short enough to scroll.
- Sticky, with a white background and a 1px `--border` bottom edge that appears after 8px of scroll.

### 1. Hero (`#top`)
- **Eyebrow:** `VOICE-POWERED SAFETY REPORTING`
- **H1:** Talk safety. We'll write the report.
- **Sub:** Record your toolbox talk hands-free. SafetyVoice transcribes it, fills in the report and suggests the OSHA and CCOHS clauses that apply, ready to export as a PDF before you leave the site.
- **CTAs:** `Download for iPhone` (primary) · `Get it on Google Play` (secondary)
- **Microcopy under CTAs:** Free trial · No credit card to start *(confirm with the business before launch)*
- **Visual:** an iPhone or tablet frame showing the Record screen (big orange mic button, timer). On desktop, place it to the right of the text. On mobile, place it below the CTAs.
- Background: white, with a soft `--primary-tint` radial glow behind the device.

### 2. Problem strip
Three short columns on a `--surface` (`#F5F5F5`) background. Each has an icon and one line of text.

| Icon (`assets/icons/`) | Text |
|---|---|
| `file.svg` | Paper sign-in sheets and handwritten notes get lost, misfiled or scanned days late. |
| `hard-hat.svg` | You can't stop work to type notes on a noisy job site. |
| `toolbox.svg` | Looking up the right OSHA or CCOHS clause eats hours you don't have. |

### 3. How it works (`#how-it-works`)
- **H2:** From talk to report in three steps.
- A numbered horizontal row on desktop, stacked vertically on mobile, with a thin connector line between steps.

| # | Title | Body |
|---|---|---|
| 1 | **Record** | Open the app and tap the mic. Talk to your crew like you normally do. Sessions run up to 60 minutes. |
| 2 | **Assign** | When you stop, pick the project and meeting type. No digging through folders first. |
| 3 | **Review & export** | Your Toolbox Talk report is pre-filled. Edit anything, attach the sign-in sheet photo, finalize and export to PDF. |

### 4. Features (`#features`)
- **H2:** Everything your safety paperwork needs. Nothing it doesn't.
- 6 cards: 3 columns on desktop, 2 on tablet, 1 on mobile.

| Icon | Title | Body |
|---|---|---|
| `microphone.svg` | **Hands-free voice capture** | Real-time transcription tuned for loud, busy job sites. One tap to start, one tap to stop. |
| `file.svg` | **Auto-filled Toolbox Talk reports** | Topics discussed, actions to take, injuries reviewed and supervisor remarks are pulled straight from the conversation. |
| `star.svg` | **Clause Assistant** | Suggests relevant OSHA and CCOHS clauses with references and source text. Add or remove them with a tap. |
| `folder.svg` | **Organized by project** | Every report lives in its project folder. Search projects and filter by meeting type in seconds. |
| `pickaxe.svg` | **Sign-in sheet photos** | Snap the clipboard your crew signed. It's stored right alongside the report. |
| `megaphone.svg` | **One-tap PDF export** | Audit-ready PDFs for clients, insurers and inspectors. |

Optional 7th item, shown as a wide card or a badge row: **Works offline**. If you lose signal, the recording is saved on the device and transcribes automatically when you reconnect.

### 5. Compliance callout
- Full-width dark band (`--ink` background, white text).
- **H2:** Built around OSHA and CCOHS.
- **Body:** Reports follow the CCOHS Toolbox Talk template, and the Clause Assistant cites the regulation that matches what was discussed. That makes COR audits and GC pre-qualification easier.
- Right side or below: 3 stat-style chips, e.g. `19 meeting types` · `60-min sessions` · `PDF in one tap`. Only use numbers that are true in the app.
- Don't show regulator logos (OSHA and CCOHS are government bodies, and their logos imply endorsement).

### 6. Built for the job site
- **H2:** Made for supervisors, not desk jockeys.
- Three bullets with icons:
  - **Big buttons, fewer steps.** Designed for tablets and gloves-on use.
  - **Offline-ready.** It keeps recording when the signal drops.
  - **Your whole team.** Invite your supervisors and keep every project's records in one place.

### 7. FAQ (`#faq`)
An accordion built on native `<details>/<summary>` so it works without JS.

1. **Which devices does it work on?** iPhone and iPad (iOS), and Android phones and tablets.
2. **Does it work without internet?** Yes. Recordings are saved on your device and transcribed once you're back online.
3. **What report types are supported?** Every meeting type gets a full transcript. Toolbox Talks also get a structured, auto-filled report.
4. **Which regulations does the Clause Assistant cover?** OSHA (U.S.) and CCOHS (Canada).
5. **Can I edit the report?** Yes. Every field is editable. Save as a draft, finalize when ready, and unfinalize if something changes.
6. **How much does it cost?** Plans are billed per company, with a free trial. *(Fill in final pricing before launch. Don't publish the PRD's draft numbers.)*

### 8. Final CTA band (`#download`)
- Full-width `--primary` background with `--primary-ink-on` text (see §5.3 for contrast rules).
- **H2:** Your next toolbox talk could write itself.
- Store badges (official Apple and Google badge artwork) side by side.
- Text link below: `Running a bigger crew? Talk to us →` (`mailto:`).

### Footer
- Logo (white variant `logo_white.svg` if the footer is dark), `© 2026 SafetyVoice`, Privacy, Terms, contact email.
- One row on desktop, stacked on mobile. Keep it minimal.

---

## 4. Feature claims: allowed vs. not allowed

| ✅ OK to claim (shipping) | ❌ Don't claim yet (roadmap) |
|---|---|
| Voice recording + live transcription | Multi-language / translation |
| Toolbox Talk structured report | Structured reports for every meeting type |
| OSHA / CCOHS clause suggestions | Semantic or full-text transcript search |
| Projects, search by name, filter by meeting type | Date-range filtering |
| Sign-in sheet photo attachment | Digital worker signatures |
| Draft / finalize / PDF export | Shareable links, OSHA 300 logs, COR packages |
| Offline capture with auto-sync | Compliance dashboards, analytics, alerts |
| Team members, company settings, subscriptions | Custom templates or branding |

---

## 5. Design system

### 5.1 Brand direction
Safety orange on clean white, with charcoal text. It should feel like hi-vis gear: bold, legible and confident. Use orange sparingly so it keeps its punch: CTAs, step numbers, icon accents and the final band. Everything else is white, light gray and charcoal.

### 5.2 Color tokens

From `lib/core/theme/app_colors.dart`, plus a few web-only tokens added for accessibility:

| Token | Hex | Source | Use |
|---|---|---|---|
| `--primary` | `#FE5000` | `AppColors.primary` | CTAs, accents, icons, final band |
| `--primary-hover` | `#E54800` | web | Button hover |
| `--primary-ink` | `#C43E00` | web | Orange **text** on white (links, eyebrows) |
| `--primary-tint` | `#FFF1EA` | web | Hero glow, icon chip backgrounds |
| `--secondary` | `#FFCC00` | `AppColors.secondary` | Small highlights only (badges, underline marks) |
| `--ink` | `#1A1A1A` | web | Dark sections, footer |
| `--text` | `#333333` | `AppColors.black` | Body and heading text |
| `--text-muted` | `#6B6B6B` | web | Secondary text (replaces `#808080` on the web) |
| `--border` | `#E0E0E0` | `AppColors.borderColor` | Card borders, dividers |
| `--surface` | `#F5F5F5` | `AppColors.cardBackground` | Alternate section background, cards |
| `--bg` | `#FFFFFF` | `AppColors.white` | Page background |
| `--success` | `#22C55E` | `AppColors.success` | "Synced" or check icons only |
| `--danger` | `#D92D20` | `AppColors.red` | Not expected on the landing page |

### 5.3 Contrast rules (WCAG AA), measured

| Pair | Ratio | Verdict |
|---|---|---|
| White on `#FE5000` | 3.30 | ⚠️ Large text only (≥24px regular or ≥18.66px bold) |
| `#1A1A1A` on `#FE5000` | 5.27 | ✅ Any size |
| `#FE5000` on white | 3.30 | ⚠️ Large text and icons only |
| `#C43E00` on white | 5.20 | ✅ Any size, so use this for small orange text |
| `#808080` on white | 3.95 | ❌ Fails for body text, so use `#6B6B6B` (5.33) |
| `#333333` on white | 12.63 | ✅ |
| `#333333` on `#FFCC00` | 8.36 | ✅ |

The rules that follow from this:
- **Primary button labels:** white text at **18px / 700 or larger** (counts as large text). For smaller buttons, like the header button, use `--ink` text on orange.
- **Small orange text** (eyebrows, inline links) uses `--primary-ink`, never `--primary`.
- **Final CTA band:** white headline at ≥32px is fine. Body copy under it should be ≥20px bold or use `--ink`.

### 5.4 Typography

**Font: Aeonik** (the app's font, files in `assets/fonts/aeonik-regular.ttf` and `aeonik-bold.ttf`).

- Aeonik is a commercial typeface (CoType Foundry). **Confirm the license covers web embedding** before you ship it. Convert to `woff2` and self-host it.
- Only Regular (400) and Bold (700) files exist. Don't use 500, 600 or 800 on the web, because browsers will synthesize them and they'll look smeared. Map the app's 600 and 800 weights to 700.
- Fallback stack: `"Aeonik", "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. If the license blocks web use, **Inter** (Google Fonts) is the closest free substitute.
- Use `font-display: swap` and preload the Bold file (it's used above the fold).

**Type scale.** Fluid sizes use `clamp()`, and the mobile → desktop values match the app's `AppTypography` tokens.

| Role | Mobile → Desktop | Weight | Line height | Letter spacing | App token |
|---|---|---|---|---|---|
| Display (H1) | 40 → 64px | 700 | 1.05 | -0.02em | `displayXl` (40) |
| H2 | 28 → 40px | 700 | 1.15 | -0.015em | `headlineM` (28) |
| H3 (card title) | 20 → 22px | 700 | 1.3 | -0.01em | `titleS` / `titleM` |
| Lead (hero sub) | 18 → 20px | 400 | 1.55 | 0 | `bodyM` / `bodyL` |
| Body | 16 → 17px | 400 | 1.6 | 0 | `bodyS` (16) |
| Small / caption | 14px | 400 | 1.5 | 0 | `bodyXS` (14) |
| Eyebrow | 13px | 700 | 1.2 | 0.12em, uppercase | `labelS` |
| Button | 18px | 700 | 1 | 0 | `buttonLarge` |

Guidelines:
- Keep body text to a max line length of **65ch**. Center the hero text on mobile and left-align it on desktop.
- Headlines use sentence case, never ALL CAPS (eyebrows are the only uppercase text).
- Use one H1 per page. Each section starts with an H2.

### 5.5 Spacing, radius and layout

The spacing scale matches `AppSizes` (base 4):

```
4  8  12  16  20  24  32  40  48  56  72  96  128
```

- **Container:** max-width 1200px, side padding 16px (mobile) / 24px (tablet) / 32px (desktop).
- **Section padding (vertical):** 64px mobile, 96px desktop. The final CTA band uses 72px / 112px.
- **Grid:** 12 columns, 24px gutter on desktop. The hero is a 6/6 split, and features are 3 × 4-column cards.
- **Breakpoints:** `sm 640` · `md 768` · `lg 1024` · `xl 1280`.

| Radius token | px | Use |
|---|---|---|
| `--radius-sm` | 8 | Chips, inputs |
| `--radius-md` | 10 | Buttons |
| `--radius-lg` | 16 | Cards |
| `--radius-xl` | 32 | Device mock, CTA band (desktop) |
| `--radius-full` | 9999 | Pills, icon chips, the hero mic motif |

**Shadows.** Keep them subtle:
- `--shadow-card: 0 1px 2px rgb(0 0 0 / .04), 0 4px 16px rgb(0 0 0 / .06)`
- `--shadow-cta: 0 8px 24px rgb(254 80 0 / .28)` (primary button only)

### 5.6 Components

**Buttons**
| Variant | Style |
|---|---|
| Primary | `--primary` bg, white 18px/700 label, `--radius-md`, height 56px (48px on mobile), padding 0 28px, `--shadow-cta`. Hover: `--primary-hover` plus a 1px lift. Active: no lift. |
| Secondary | White bg, `--text` label, 1.5px `--border` outline. Hover: border becomes `--text`. |
| Header (small) | `--primary` bg, `--ink` 15px/700 label, height 40px. |
| Text link | `--primary-ink`, underline on hover, trailing `→`. |

Every button gets a visible focus ring: `outline: 3px solid var(--secondary); outline-offset: 2px`. The yellow reads clearly on both white and orange.

**Feature card:** `--bg` background, 1px `--border`, `--radius-lg`, 24px padding (32px on desktop). A 48px circular `--primary-tint` chip with a 24px `--primary` icon, then the H3, then body text in `--text-muted`. Hover (desktop only): border becomes `--primary` at 40% opacity, with a 2px lift.

**Step (How it works):** a 40px circle with the number in `--primary` bg and `--ink` text (bold), then the title and body. A dashed `--border` connector runs between steps.

**FAQ item:** `<details>` with a 1px `--border` bottom edge, a 20px/700 summary, and a `+` icon that rotates 45° when open. The answer uses body text in `--text-muted`.

**Icons:** reuse the SVGs in `assets/icons/` (Lucide-style, 2px stroke). If you need more, use **Lucide** so the style stays consistent. Set `stroke="currentColor"` so they pick up the text color.

### 5.7 Imagery
- Use real app screenshots in device frames, not illustrations of the UI. Take them from the iOS simulator at 3x and export as `webp` or `avif`.
- Optional: one photo of a supervisor talking to a crew (hi-vis, hard hats) in the "Built for the job site" section. Use authentic photos, not glossy stock.
- Every image needs `width`/`height` set (to avoid layout shift), `loading="lazy"` below the fold, and meaningful `alt` text.

### 5.8 Motion
- Keep it light. Sections fade up 12px with 300ms `ease-out` when they enter the viewport, staggered 60ms across cards.
- Hero signature: a slow pulsing ring around the mic in the device mock (2s loop), echoing the app's "live" recording indicator.
- Wrap all motion in `@media (prefers-reduced-motion: no-preference)`.

---

## 6. TypeScript implementation notes

The stack is up to you (Next.js, Astro or Vite + React all work). Astro is the lightest fit for a static one-pager. Whichever you pick, keep the tokens in one file.

### 6.1 Tokens (`src/styles/tokens.ts`)

```ts
export const colors = {
  primary: '#FE5000',
  primaryHover: '#E54800',
  primaryInk: '#C43E00',
  primaryTint: '#FFF1EA',
  secondary: '#FFCC00',
  ink: '#1A1A1A',
  text: '#333333',
  textMuted: '#6B6B6B',
  border: '#E0E0E0',
  surface: '#F5F5F5',
  bg: '#FFFFFF',
  success: '#22C55E',
} as const;

export const radius = { sm: 8, md: 10, lg: 16, xl: 32, full: 9999 } as const;

export const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 72, 96, 128] as const;

export const font = {
  family: `"Aeonik", "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,
  weight: { regular: 400, bold: 700 },
} as const;

export const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;

export type ColorToken = keyof typeof colors;
```

### 6.2 CSS variables (`src/styles/globals.css`)

```css
@font-face {
  font-family: "Aeonik";
  src: url("/fonts/aeonik-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Aeonik";
  src: url("/fonts/aeonik-bold.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}

:root {
  --primary: #FE5000;
  --primary-hover: #E54800;
  --primary-ink: #C43E00;
  --primary-tint: #FFF1EA;
  --secondary: #FFCC00;
  --ink: #1A1A1A;
  --text: #333333;
  --text-muted: #6B6B6B;
  --border: #E0E0E0;
  --surface: #F5F5F5;
  --bg: #FFFFFF;

  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 32px;

  --shadow-card: 0 1px 2px rgb(0 0 0 / .04), 0 4px 16px rgb(0 0 0 / .06);
  --shadow-cta: 0 8px 24px rgb(254 80 0 / .28);

  --fs-display: clamp(2.5rem, 1.6rem + 3.6vw, 4rem);    /* 40 → 64 */
  --fs-h2:      clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem); /* 28 → 40 */
  --fs-h3:      clamp(1.25rem, 1.2rem + 0.25vw, 1.375rem);
  --fs-lead:    clamp(1.125rem, 1.08rem + 0.25vw, 1.25rem);
  --fs-body:    clamp(1rem, 0.98rem + 0.1vw, 1.0625rem);

  --font: "Aeonik", "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

html { scroll-behavior: smooth; scroll-padding-top: 80px; } /* clears the sticky header */
body { margin: 0; background: var(--bg); color: var(--text); font: 400 var(--fs-body)/1.6 var(--font); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

If you use Tailwind, put the same values in `theme.extend` (`colors`, `borderRadius`, `fontFamily`, `fontSize`) instead of writing raw CSS.

### 6.3 Suggested component tree

```
<LandingPage>
  <SiteHeader />            // sticky, anchor links, small CTA
  <main>
    <Hero />                // #top
    <ProblemStrip />
    <HowItWorks />          // #how-it-works
    <Features />            // #features  → <FeatureCard /> × 6
    <ComplianceBand />
    <JobSiteReady />
    <Faq />                 // #faq       → <FaqItem /> (details/summary)
    <FinalCta />            // #download  → <StoreBadges />
  </main>
  <SiteFooter />
</LandingPage>
```

Keep the copy in a typed content file (`src/content/landing.ts`) so it can be edited without touching the components:

```ts
export interface Feature { icon: string; title: string; body: string }
export interface Step { n: number; title: string; body: string }
export interface Faq { q: string; a: string }
```

### 6.4 SEO and meta
- `<title>`: `SafetyVoice | Voice-powered toolbox talk reports`
- `<meta name="description">`: `Record toolbox talks hands-free. SafetyVoice transcribes, fills your report, cites OSHA & CCOHS clauses and exports a PDF.`
- Open Graph image: 1200×630, orange background, logo and the hero headline.
- Favicon from `logo_512.png`. Set `theme-color` to `#FE5000`.
- Use semantic landmarks: `header`, `main`, `section[aria-labelledby]`, `footer`.

### 6.5 Performance budget
- Lighthouse ≥ 95 on every category, mobile.
- LCP < 2.0s. Preload the hero device image and Aeonik Bold.
- Total JS < 50KB gzipped. The page is mostly static, so don't add a carousel or animation library.

---

## 7. Accessibility checklist

- [ ] Every text pair meets the §5.3 contrast rules
- [ ] Visible yellow focus ring on all interactive elements, with a logical tab order
- [ ] "Skip to content" link as the first focusable element
- [ ] Store badges have `alt` like "Download on the App Store"
- [ ] The FAQ works with keyboard only (native `<details>`)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Tap targets ≥ 44×44px
- [ ] No text baked into images

## 8. Launch checklist

- [ ] Aeonik web license confirmed (or switched to Inter)
- [ ] App Store and Play Store URLs filled in
- [ ] Pricing / trial copy confirmed with the business
- [ ] Privacy policy and terms URLs live
- [ ] Contact email set
- [ ] Real app screenshots captured
- [ ] Feature copy re-checked against §4 (no roadmap claims)
- [ ] OG image and favicon in place
