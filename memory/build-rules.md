# Build Rules — HTML Patterns & Sections

## Building from Stitch

1. Extract Stitch ZIP into `design/`
2. Use `screen.png` files as pixel-accurate visual reference
3. Extract design tokens into `:root` in `css/style.css`
4. Build HTML section by section matching the screen
5. Drop optimised photos into `images/`

Tips:
- Zoom into `screen.png` at 2x to read exact spacing and font sizes
- Stitch uses 4px or 8px base unit — set `--sp-1` accordingly
- Start mobile, layer up with breakpoints

---

## Sections in index.html

| Section | ID | Description |
|---|---|---|
| Navigation | `#nav` | Fixed: logo left, links center, lang + reserve right, hamburger mobile |
| Hero | `#hero` | Full-bleed photo, heading bottom-aligned, editorial feel |
| About | `#about` | Restaurant story, 2-column desktop |
| Experience | `#experience` | BBQ experience, grill explanation (if relevant) |
| Menu | `#menu` | Tabbed menu, all categories |
| Gallery | `#gallery` | Asymmetric grid, Instagram link |
| Reviews | `#reviews` | 4 real Google reviews, rating, Maps link |
| Find Us | `#find-us` | Address, hours, WhatsApp card, Maps embed |
| Footer | `footer` | Brand statement, nav links, lang switcher, copyright |

---

## Hero Section

```html
<section id="hero">
  <picture>
    <source srcset="images/Hero-mobile.webp" media="(max-width: 767px)" type="image/webp">
    <source srcset="images/Hero.webp" type="image/webp">
    <img src="images/Hero.png" alt="" id="hero-img"
         fetchpriority="high" loading="eager" decoding="auto"
         width="1440" height="810">
  </picture>
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <img src="images/logo.webp" alt="Restaurant name" class="hero__logo">
    <h2 class="hero__title" data-i18n="hero.title">Tagline</h2>
  </div>
</section>
```

- Single `h1` is `sr-only` — visible headline uses `h2`
- `fetchpriority="high"` + `<link rel="preload">` in `<head>` — always keep in sync
- Never `loading="lazy"` on hero — always `loading="eager"`
- Mobile hero: `Hero-mobile.webp` at 750px wide ≤50KB in `srcset`
- Parallax: JS `requestAnimationFrame` + `transform: translateY()` on `#hero-img`
- Hero content bottom-aligned — editorial, not centered template

---

## Background Texture

Add as FIRST child of `<body>`:
```html
<img id="bg-texture" src="images/Background1.webp" alt="" aria-hidden="true"
     loading="lazy" decoding="async" width="1920" height="1080">
```

```css
#bg-texture {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}
```

- Always `loading="lazy"` — never competes with hero for bandwidth
- Wrap in `<picture>` with WebP source + PNG fallback
- Alternating section overlays via `::before` — odd sections lighter, even sections darker

---

## Navigation

```css
#nav { position: fixed; top: 0; background: transparent; }
#nav.nav--scrolled {
  background: rgba(240,236,228,0.96);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--shadow-nav);
}
```

- Hamburger hidden on desktop (`display: none` above 768px)
- Reserve button hidden on mobile nav bar — it's in the mobile overlay
- Mobile nav: `role="dialog"`, `aria-modal="true"`, `aria-hidden` toggled (NOT `display:none`)
- Focus trap: Tab/Shift+Tab cycles within menu, Escape closes, focus returns to hamburger
- Close button (×) always in top-right corner — `min-width: 44px; min-height: 44px`
- `body { overflow: hidden }` when menu is open
- `aria-expanded` on hamburger button
- Active lang button on transparent dark hero: override to `var(--white)` — gold is invisible on dark

Mobile nav hamburger toggle:
```javascript
hamburger.addEventListener('click', () => {
  if (hamburger.getAttribute('aria-expanded') === 'true') {
    closeMenu()
  } else {
    openMenu()
  }
})
```

Every `<a>` inside mobile menu must call `closeMenu()` on click.

---

## Menu Section (Tabbed)

```html
<div class="menu__tabs" role="tablist" aria-label="..." data-i18n-aria="menu.aria.tabs">
  <button role="tab" aria-selected="true" aria-controls="panel-bbq" id="tab-bbq">Korean BBQ</button>
  ...
</div>
<div class="menu__panels">
  <div id="panel-bbq" role="tabpanel" aria-labelledby="tab-bbq">...</div>
  ...
</div>
```

- `role="tablist"` + `aria-selected` + `aria-controls` on tabs
- Keyboard: Arrow Left/Right, Home, End
- **Do NOT add `aria-live="polite"` to tab panels** — causes unwanted announcements on language switch
- Mobile tabs: `overflow-x: auto`, `white-space: nowrap`, `scrollbar-width: none`

Fix panel height jump on tab switch:
```javascript
function setMenuHeight() {
  const panels = document.querySelectorAll('.menu__panel')
  const container = document.querySelector('.menu__panels')
  let max = 0
  panels.forEach(p => {
    p.style.display = 'block'
    max = Math.max(max, p.scrollHeight)
    p.style.display = ''
  })
  container.style.minHeight = max + 'px'
}
document.addEventListener('DOMContentLoaded', setMenuHeight)
window.addEventListener('resize', setMenuHeight)
```

---

## Gallery Section

- Asymmetric grid — varied column spans (e.g. 5-col, 4-col, 3-col)
- Not a uniform equal-grid — editorial, intentional layout
- All images: `<picture>` with WebP source + JPG fallback, `loading="lazy"`, `decoding="async"`
- Specific alt text per image — describe the actual dish or scene, not "food photo"
- Instagram link: `data-i18n-aria` on the link element

---

## Reviews Section

- 4 real Google reviews — get from client
- 4 equal cards in a row (2×2 on tablet, 1 column mobile)
- `grid-template-columns: repeat(4, 1fr)` desktop, `repeat(2, 1fr)` tablet, `1fr` mobile
- Star rating: `role="img"` + `aria-label` describing the rating
- Star color: `#B45309` — never `#F59E0B`
- Average rating + star display above cards
- "View on Google Maps" link: real Maps URL, `target="_blank" rel="noopener noreferrer"`
- No "Leave a review" button needed — Maps link covers it

---

## Find Us Section

- Address, opening hours table
- WhatsApp reserve card (dark background, primary CTA)
- Google Maps iframe — `maps/embed?pb=` URL only
- "Open in Google Maps" text link below map
- All Maps links: `target="_blank" rel="noopener noreferrer"`

Hours table using `<dl>/<dt>/<dd>`:
```html
<dl class="hours__list">
  <dt data-i18n="hours.wed_sun">Wednesday – Sunday</dt>
  <dd>13:00–16:30 · 19:30–23:30</dd>
  <dt data-i18n="hours.mon_tue">Monday – Tuesday</dt>
  <dd data-i18n="hours.closed">Closed</dd>
</dl>
```

---

## Footer

Full-width statement layout on dark charcoal:
1. Thin gold top rule
2. Large restaurant name in display font (clamp 3.5rem–6rem)
3. Korean/secondary subtitle
4. Nav links in single horizontal row — centered, separated by `·`
5. Bottom bar: copyright left, lang switcher right

```css
.footer { padding-top: var(--sp-16); background: var(--charcoal); }
.footer__brand { font-size: clamp(3.5rem, 7vw, 6rem); text-align: center; }
.footer__nav { display: flex; gap: var(--sp-6); justify-content: center; flex-wrap: wrap; }
```

---

## WhatsApp

```html
<!-- Floating button -->
<button id="whatsapp-btn" data-phone="+34XXXXXXXXX"
        aria-label="..." data-i18n-aria="whatsapp.aria">
  <!-- WhatsApp SVG icon -->
</button>

<!-- Find Us card -->
<a id="whatsapp-find-us" data-phone="+34XXXXXXXXX">...</a>
```

- Pre-fill message translated per language in `i18n.js`
- Placeholder: `+34600000000` — update `data-phone` before launch
- Floating button bottom-right, above back-to-top button
- Both buttons update href on language switch

---

## Loading Screen

```javascript
window.addEventListener('load', () => {
  if (sessionStorage.getItem('visited')) {
    document.getElementById('loading-screen').style.display = 'none'
    return
  }
  sessionStorage.setItem('visited', '1')
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden')
  }, 700)
})
```

Shows on first visit only (sessionStorage). Brand personality moment — use restaurant name + Korean characters if applicable.

---

## Back to Top Button

```javascript
window.addEventListener('scroll', () => {
  backTopBtn.classList.toggle('visible', window.scrollY > 400)
}, { passive: true })
```

Sits above WhatsApp button, bottom-right.

---

## Google Analytics 4

```javascript
function loadGA4() {
  const s = document.createElement('script')
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
  s.async = true
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', 'G-XXXXXXXXXX')
}
```

Placeholder: `G-XXXXXXXXXX` — replace before launch. Only call after cookie consent.

---

## Cookie Consent (GDPR / Spain)

- Consent stored in `localStorage`
- GA4 only loads after consent accepted
- Privacy link: separate `<a>` in its own `<p>` — NOT inside `data-i18n` paragraph (innerHTML wipes child nodes)
- `btnAccept.focus()` when banner appears — keyboard accessibility
- Reset for testing: `localStorage.removeItem('cookie_consent')` in console

---

## SEO and Schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Restaurant Name",
  "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "Barcelona" },
  "telephone": "+34XXXXXXXXX",
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "ratingValue": 4.7,
    "reviewCount": 47
  }
}
```

- `reviewCount` must be Number (no quotes)
- `og:type` must be `"website"` (not `"restaurant"`)
- Update domain in: canonical, `og:url`, Schema.org URL, `robots.txt`, `sitemap.xml`

---

## CSS Conventions

- All colors, typography, spacing in CSS custom properties on `:root`
- Mobile-first: `@media (min-width: 768px)` and `@media (min-width: 1200px)`
- Never `!important`
- Cards: no hard borders — soft `box-shadow`
- Only animate `transform` and `opacity`
- Skip-nav: `transform: translateY()` not `top`
- `prefers-reduced-motion`: wrap all animations in media query AND JS early exit

---

## Print Stylesheet

`css/print.css` linked with `media="print"`. Hides everything except menu. Test with Cmd+P.

---

## Privacy, 404, robots, sitemap

- `privacy.html` — GDPR Spanish law. Replace all `<!-- UPDATE -->` comments. `noindex`.
- `404.html` — branded, Vercel serves automatically
- `robots.txt` / `sitemap.xml` — replace placeholder domain before launch

---

## Restaurant Design Guidelines

- **Korean/Asian:** bold display font + warm palette + bilingual Korean/Spanish typography
- **Mediterranean/casual:** warm, inviting — cream/terracotta, not fast food
- **Nightlife/bar:** dark moody, bold typography
- **Pet friendly:** feature prominently — big selling point in Barcelona
- Always real Google Reviews — social proof is critical
- Instagram handle always in gallery section
- Schema.org JSON-LD with real address, hours, phone — required for Google rich results
