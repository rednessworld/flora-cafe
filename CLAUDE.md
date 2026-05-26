# Stitch Restaurant Template — Claude Instructions
> v6.0 — Read this first. For details, read the memory files listed below.

## Who I Am
**Andrii** — freelance web designer in Barcelona building restaurant websites. I work in English.

## Read Before Every Build
```
Read memory/taste-skill/SKILL.md and memory/redmotion/SKILL.md before building anything.
```
For HTML patterns, sections, nav, hero, menu: read `memory/build-rules.md`
For tokens, fonts, Lenis, images, i18n, WCAG: read `memory/tech-rules.md`
For audit pipeline, checklist, common fixes, Vercel: read `memory/launch-rules.md`

---

## Directory Structure
```
restaurant-name/          ← ALL files at ROOT (required for Vercel)
├── index.html
├── privacy.html
├── 404.html
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── css/
│   ├── style.css
│   └── print.css
├── js/
│   ├── main.js
│   ├── i18n.js
│   └── lenis.min.js
├── fonts/                ← active fonts only, WOFF2
├── images/
│   ├── Logo.webp
│   ├── Hero.webp
│   ├── Hero-mobile.webp  ← 750px, ≤50KB
│   ├── Background1.webp  ← lazy loaded
│   ├── og-image.jpg      ← 1200×630
│   ├── apple-touch-icon.png (180×180)
│   ├── icon-192.png
│   └── icon-512.png
├── design/               ← Stitch ZIP extracted here
└── memory/
    ├── redmotion/SKILL.md
    ├── taste-skill/SKILL.md
    ├── build-rules.md
    ├── tech-rules.md
    ├── launch-rules.md
    └── project_overview.md
```
> ⚠️ NEVER use a `src/` subfolder. Vercel serves `index.html` from root.

---

## Critical Rules (Always Apply)

- **No Tailwind** — native CSS only. Never use Tailwind CDN. Forbidden.
- **No Google Fonts CDN** — self-host all fonts including body font
- **No `background-attachment: fixed`** — broken on iOS Safari
- **No `100vh`** — use `100svh`
- **No `top` animation** — use `transform: translateY()`
- **No `aria-live` on tab panels** — causes unwanted announcements on language switch
- **No raw hex outside `:root`** — full CSS token system required
- **`og:type="website"`** — never `"restaurant"`
- **`reviewCount` must be Number** — never String
- **Star rating color: `#B45309`** — never `#F59E0B`
- **`applyLang()` uses `innerHTML`** — never `textContent`
- **Maps embed: `maps/embed?pb=` URL** — never `maps.google.com/maps?q=`
- **Audit target: 20/20** — do not push until final audit is 20/20

---

## Workflow
1. Design in Stitch → export ZIP → drop in `design/`
2. Read both skills + relevant memory files
3. Build from `screen.png` visual references
4. Preview locally
5. Review section by section via screenshots
6. Run full audit pipeline (see `memory/launch-rules.md`)
7. Spell check ES / CA / EN
8. Push to GitHub → Vercel auto-deploys
9. Run mobile Lighthouse (90+ required)
10. Test on real phone via Vercel URL
11. Send URL to client

---

## Completed Projects
| Project | URL | Type | Score |
|---|---|---|---|
| Monalisa BCN | monalisa-bcn.vercel.app | LGBT Gastrobar | ✅ Live |
| Brunch.ar BCN | brunch-ar.vercel.app | Argentine Brunch | ✅ Live |
| Seoul Nadri | seoul-nadri.vercel.app | Korean BBQ | ✅ 20/20 |
| Pan & Más | pan-mas.vercel.app | Spanish-Asian Brunch Café | ✅ Live — 18/20 audit |
