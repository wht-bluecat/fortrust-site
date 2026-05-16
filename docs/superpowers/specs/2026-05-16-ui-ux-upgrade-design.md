# Fortrust Website UI/UX Upgrade — Design Spec

**Date:** 2026-05-16
**Status:** Approved
**Scope:** Visual polish, animations, logo integration, hero system, card redesign, mobile optimizations

---

## Design Direction

**Tone:** Clean & professional + warm & approachable. Established institution that feels human and welcoming to Filipino students aged 18-35.

**Animation intensity:** Medium — noticeable. Staggered card entrances, scroll reveals, animated stat counters, subtle parallax decorations. All CSS-only (no JS animation libraries).

**Approach:** Zero new dependencies. All animations via CSS `@keyframes` + Intersection Observer. Images via Next.js `<Image>`.

---

## 1. Global Foundation

### 1.1 Logo Integration
- **Navbar:** Replace text wordmark with `<Image src="/logo.jpg" />` at ~40px height. Keep "Fortrust" + "Education Services" text beside it for brand recognition.
- **Footer:** Same logo mark + styled text wordmark below it.
- **Implementation:** Update `navbar.tsx` and `footer.tsx` to use `next/image`.

### 1.2 Animation System
- **No dependencies.** Pure CSS + one custom hook.
- **`useScrollReveal` hook:** Uses `IntersectionObserver` to add `.revealed` class when elements enter viewport (threshold: 0.1).
- **CSS classes in `globals.css`:**
  - `animate-fade-up` — translateY(20px) + opacity(0) → translateY(0) + opacity(1), 600ms ease-out
  - `animate-fade-in` — opacity(0) → opacity(1), 500ms ease-out
  - `animate-scale-in` — scale(0.95) + opacity(0) → scale(1) + opacity(1), 500ms ease-out
  - `animate-slide-left` — translateX(-20px) + opacity(0) → normal, 600ms ease-out
  - `animate-slide-right` — translateX(20px) + opacity(0) → normal, 600ms ease-out
- **Stagger delays:** `animation-delay-100` through `animation-delay-500` (100ms increments)
- **`useCountUp` hook:** Animates numbers from 0 to target value over 2 seconds when element enters viewport. Used on StatBar.
- **Performance:** All animations use only `transform` and `opacity` (GPU-accelerated, no layout thrash).

### 1.3 Card System
- **Base:** `rounded-2xl bg-white shadow-sm border border-gray-100`
- **Hover:** `hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300`
- **Gradient border variant:** Wrapper div with `bg-gradient-to-r from-teal-400 to-cyan-400 p-[1px] rounded-2xl`, inner div with `bg-white rounded-2xl`
- **Image card variant:** Background image with `bg-cover bg-center`, gradient overlay `bg-gradient-to-t from-black/70 via-black/30 to-transparent`, white text on top.

### 1.4 Section Backgrounds
- **Dot grid pattern:** CSS `radial-gradient` dots, very subtle (opacity 0.03-0.05), used on 1-2 sections per page.
- **Gradient blobs:** Absolute-positioned `bg-gradient-radial` circles with blur, very low opacity. Used in heroes.
- **Angled divider:** CSS `clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)` on hero sections for Variant 2.

---

## 2. Hero System (3 Variants)

### Variant 1 — Grand (Homepage only)
- Full-width gradient `from-teal-900 via-teal-800 to-teal-700` (keep existing).
- Add animated gradient blob decorations (2-3 circles, absolute positioned, slow CSS animation, very low opacity).
- **Left:** Existing text content with fade-up animations.
- **Right (desktop only):** Floating glassmorphism card showing stat highlights (95%, 3000+, 300+). Card has `backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl`. Hidden on mobile.
- Buttons: keep rounded-full style.
- Height: `py-20 sm:py-28 lg:py-36` (keep existing).

### Variant 2 — Angled (Refused, PR Planning, Seminars)
- Gradient background with `clip-path` angle on bottom edge.
- Accent badge at top (colored pill — red for Refused, teal for others).
- Text left-aligned, no right-side element.
- Height: `py-16 sm:py-24` (slightly shorter than homepage).

### Variant 3 — Compact (About, Contact, FAQ, Blog, Destinations hub, Success Stories)
- Compact gradient header, ~200px tall.
- Centered title + subtitle.
- Subtle decorative circle in background.
- Height: `py-12 sm:py-16`.

---

## 3. Page-by-Page Upgrades

### 3.1 Homepage (`/`)
- Hero: Variant 1 with floating glassmorphism stats card.
- Destination cards: Image-backed with country photos (Unsplash, royalty-free). Gradient overlay + white text. On hover: image zooms slightly.
- 8-Step Journey: Add connecting dotted line between steps on desktop. Stagger-animate cards on scroll.
- Why Fortrust: Icon containers get teal gradient backgrounds. Cards get hover lift.
- Seminar banner: Add subtle background pattern for visual distinction.
- FAQ: Add fade-in animation.
- CTA: Add subtle floating decorative elements.

### 3.2 Refused Page (`/refused`) — Highest conversion priority
- Hero: Variant 2 (angled) with red accent badge (already exists).
- Refusal reason cards: Add left-border accent (red-400 for problem side, teal-400 for solution side).
- 3-step process: Horizontal connected timeline on desktop (circles + lines), vertical on mobile.
- Assessment form: Add subtle gray-50 background, improve focus states with ring-2, slightly larger inputs.
- Add social proof: "Join 500+ students who turned their refusal into an approval" above the form.

### 3.3 Standard Inner Pages
- Hero Variant 3 for: About, Contact, FAQ, Blog, Destinations hub, Success Stories, Privacy, Terms.
- Hero Variant 2 for: PR Planning, Seminars (these are conversion pages).
- All cards get new card system.
- All sections get scroll reveal animations.

### 3.4 Destination Country Pages (`/destinations/[country]`)
- Hero: Blurred country photo background with gradient overlay.
- Cost/work-rights info cards: improved shadow + border styling.

---

## 4. Mobile Experience (80% of traffic)

### 4.1 Touch & Sizing
- All buttons: minimum 44px tall (update any that are 40px).
- Form inputs: `py-3.5` (up from `py-3`).
- Tap targets: ensure 44x44px minimum.

### 4.2 Mobile Navigation
- Slide-down animation (CSS transition on max-height) instead of instant show/hide.
- Backdrop blur overlay behind mobile menu.

### 4.3 Mobile Layouts
- Destination cards: Horizontal scroll strip (swipeable) on mobile instead of stacked grid.
- Cards: Full-width on mobile with proper spacing.
- No cramped 2-column grids on screens < 640px (except stat bar which works well at 2-col).

### 4.4 Sticky Mobile CTA
- Fixed bottom bar on mobile (below `lg:` breakpoint).
- Contains "Book Free Consultation" button.
- Appears after user scrolls past the hero section (Intersection Observer).
- Semi-transparent background with backdrop-blur.
- Hides on scroll down, shows on scroll up (like iOS Safari toolbar).
- Implemented as a new `<MobileCTA />` client component.

### 4.5 Performance Budget
- All animations: `transform` + `opacity` only (GPU-accelerated).
- Images: Next.js `<Image>` with `sizes` attribute, `placeholder="blur"` for country photos.
- No JS animation libraries.
- Target: < 100KB additional JS, < 500KB additional images (optimized).

---

## 5. New Files

| File | Type | Purpose |
|------|------|---------|
| `src/hooks/use-scroll-reveal.ts` | Hook | IntersectionObserver for scroll animations |
| `src/hooks/use-count-up.ts` | Hook | Number counting animation for stat bar |
| `src/components/mobile-cta.tsx` | Component | Sticky bottom CTA bar on mobile |
| `src/components/scroll-reveal.tsx` | Component | Wrapper component for scroll reveal animations |
| `public/destinations/canada.jpg` | Image | Canada landmark photo (Unsplash) |
| `public/destinations/australia.jpg` | Image | Australia landmark photo (Unsplash) |
| `public/destinations/new-zealand.jpg` | Image | New Zealand landmark photo (Unsplash) |
| `public/destinations/uk.jpg` | Image | UK landmark photo (Unsplash) |

## 6. Modified Files

| File | Changes |
|------|---------|
| `src/app/globals.css` | Add @keyframes, animation classes, utility classes |
| `src/components/navbar.tsx` | Wire in logo image, improve mobile menu animation |
| `src/components/footer.tsx` | Wire in logo image |
| `src/components/stat-bar.tsx` | Add counting animation |
| `src/app/page.tsx` | Homepage hero upgrade, destination cards, section animations |
| `src/app/refused/page.tsx` | Angled hero, improved cards, timeline, social proof |
| `src/app/about/page.tsx` | Compact hero, scroll animations |
| `src/app/contact/page.tsx` | Compact hero, form improvements |
| `src/app/seminars/page.tsx` | Angled hero, scroll animations |
| `src/app/pr-planning/page.tsx` | Angled hero, scroll animations |
| `src/app/faq/page.tsx` | Compact hero, scroll animations |
| `src/app/blog/page.tsx` | Compact hero, card improvements |
| `src/app/destinations/page.tsx` | Compact hero, image-backed cards |
| `src/app/destinations/[country]/page.tsx` | Photo hero background |
| `src/app/success-stories/page.tsx` | Compact hero, improved testimonial cards |
| `src/app/layout.tsx` | Import MobileCTA component |

---

## 7. Country Photos (Unsplash, royalty-free)

We need 4 landscape photos (~1200x800, will be optimized by Next.js):
- **Canada:** Mountain/lake landscape (Banff, Lake Louise, or similar)
- **Australia:** Sydney Opera House or Great Barrier Reef
- **New Zealand:** Milford Sound or rolling green hills
- **UK:** London skyline or Big Ben

These will be downloaded from Unsplash (royalty-free) and placed in `public/destinations/`.

---

## 8. Out of Scope (This Upgrade)

- Form submission webhooks (Make.com → Notion) — separate task
- Blog post template (`/blog/[slug]`) — separate task
- Real student/team photos — requires actual photos from client
- GA4/Meta Pixel/GTM env vars — requires client's account IDs
- Custom domain (fortrust.ph) — DNS configuration task
- Newsletter subscription form — separate feature
