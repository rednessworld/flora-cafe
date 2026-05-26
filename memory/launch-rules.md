# Launch Rules — Audit Pipeline, Fixes, Checklist, Vercel

## Testing Pipeline (Run In This Order)

```
/audit
Fix all issues found, then:

/harden
Fix all issues found, then:

/clarify
Fix all issues found, then:

/adapt
Fix all issues found, then:

/normalize
Fix all issues found, then:

/polish
Fix all issues found, then:

/audit
```

**Target: 20/20.** Do not push to GitHub until final audit is 20/20.

> `/clarify` and `/adapt` are optional — run only if the build has ambiguous copy or responsiveness issues. Core required pipeline: `/audit` → `/harden` → `/normalize` → `/polish` → `/audit`

---

## Spell Check (Before Every Push)

Run after the audit pipeline, before pushing:
- Check ES, CA, EN separately
- Verify all accented characters render: á é í ó ú ñ ü · à è ò ç l·l
- Check price format consistency (e.g. `16.0€` throughout — pick one format)
- Check Korean text renders correctly (no garbled characters)
- Check dish names consistent across tabs, cards, and any other mentions
- Check section labels, buttons, nav links, footer, cookie banner, 404 page

---

## Mobile Lighthouse Audit (After Every Vercel Deploy)

```bash
npx lighthouse https://[site].vercel.app --preset=mobile --output=html --output-path=./lighthouse-mobile.html --chrome-flags="--headless"
```

Open `lighthouse-mobile.html` and check scores. All must be **90+**:
- Performance ≥ 90
- Accessibility ≥ 90
- Best Practices ≥ 90
- SEO ≥ 90

Performance below 90 is a **launch blocker** — fix before sending to client.

Common mobile performance fixes:
- Hero image too large → create `Hero-mobile.webp` at 750px, ≤50KB, add to srcset
- Background texture `loading="eager"` → change to `loading="lazy"`
- Google Fonts CDN → self-host WOFF2
- Missing `fetchpriority="high"` on hero → add it

---

## Common Audit Fixes

| Issue | Fix |
|-------|-----|
| `og:type="restaurant"` | → `og:type="website"` |
| `reviewCount` as String | → Number (no quotes) |
| Star rating `#F59E0B` | → `#B45309` |
| Gold on light bg fails contrast | → `--gold-dk` or `--color-label` |
| Active lang on dark hero invisible | → `var(--white)` override for transparent nav state |
| Skip-nav uses `top` | → `transform: translateY()` |
| `background-attachment: fixed` | → fixed `<img>` with JS rAF transform |
| `100vh` | → `100svh` |
| Touch targets under 44px | → `min-height: var(--touch-min)` |
| Tailwind CDN in `<head>` | → remove, write native CSS |
| Google Fonts CDN | → self-host WOFF2 |
| `aria-live` on tab panels | → remove entirely |
| Maps deprecated URL `maps.google.com/maps?q=` | → `maps/embed?pb=` format |
| Mobile tabs overflow | → `overflow-x: auto` + `white-space: nowrap` + `scrollbar-width: none` |
| Panel height jump on tab switch | → fixed container height from tallest panel |
| Cookie banner privacy link inside data-i18n | → separate `<p><a>` element |
| `aria-hidden` missing on closed mobile nav | → toggle in `openMenu()` / `closeMenu()` |
| Nav aria-labels hardcoded Spanish | → `data-i18n-aria` on all nav landmarks |
| Focus ring `var(--gold)` | → `var(--gold-dk)` (WCAG 2.2 compliant) |
| Background texture `loading="eager"` | → `loading="lazy"` |
| Missing mobile hero srcset | → `Hero-mobile.webp` + responsive srcset + `imagesrcset` preload |
| Mobile menu won't close | → check hamburger toggles `aria-expanded`, all links call `closeMenu()` |
| Duplicate close buttons | → one `×` button in HTML only, remove any JS-injected close button |
| Raw hex outside `:root` | → tokenize in CSS custom properties |
| White opacity not tokenized | → use `--white-XX` scale |
| `applyLang()` uses `textContent` | → always `innerHTML` |
| Orphaned font files | → delete unused fonts before launch |
| `reviewCount` String | → Number |
| `font-display` missing | → add `font-display: swap` to all `@font-face` |
| Missing `preload` for heading font | → add `<link rel="preload" as="font" type="font/woff2" crossorigin>` |
| Copyright year hardcoded | → use `{year}` placeholder resolved dynamically in `i18n.js` |
| Font not loading | → check exact filename case with `ls fonts/` and match `@font-face src` exactly |
| Empty space in section | → check DevTools Network for 404 `.webp` files from `<source>` tags — remove `<source>` tags until WebP files exist |
| Background not showing on mobile | → use `html::before` pseudo-element, not `background-attachment: fixed` |

---

## Before Launch Checklist

### Client content (get from client):
- [ ] Real WhatsApp number → `data-phone` on floating btn + Find Us card
- [ ] Google Maps embed URL (`maps/embed?pb=` from Google Maps → Share → Embed a map)
- [ ] GA4 Measurement ID → replace `G-XXXXXXXXXX`
- [ ] Real domain → `robots.txt`, `sitemap.xml`, `og:url`, canonical, Schema.org
- [ ] Privacy policy → fill all `<!-- UPDATE -->` comments
- [ ] Menu content verified — all dishes, prices, descriptions in 3 languages
- [ ] Opening hours confirmed (Barcelona: many close Mon–Tue)
- [ ] Address confirmed
- [ ] Real phone number → Schema.org `telephone` field

### Code checks:
- [ ] No Tailwind CDN: `grep -r "cdn.tailwindcss" .` returns nothing
- [ ] No Google Fonts CDN: `grep -r "fonts.googleapis" .` returns nothing
- [ ] No placeholder phone numbers visible
- [ ] No lorem ipsum visible
- [ ] No `src/` folder — all files at root
- [ ] Star rating color is `#B45309` not `#F59E0B`
- [ ] `og:type="website"` not `"restaurant"`
- [ ] `reviewCount` is Number not String
- [ ] All nav landmark aria-labels use `data-i18n-aria`
- [ ] No `aria-live` on tab panels
- [ ] Cookie banner privacy link in separate `<p><a>`
- [ ] `btnAccept.focus()` in cookie banner JS
- [ ] Lenis initialized in `main.js` with `prefers-reduced-motion` guard
- [ ] All WebP `<source>` tags only present if WebP files actually exist on disk
- [ ] Font filenames in `@font-face` match exact case from `ls fonts/` output

### Images:
- [ ] Hero desktop WebP ≤200KB
- [ ] Hero mobile WebP ≤50KB (`Hero-mobile.webp`)
- [ ] Logo WebP ≤30KB
- [ ] All gallery images ≤200KB
- [ ] Background texture `loading="lazy"`
- [ ] og-image.jpg created (1200×630)
- [ ] PWA icons created (180×180, 192×192, 512×512)
- [ ] favicon.png created (512×512 from logo) and added to `images/`
- [ ] All unused font files deleted from `fonts/`
- [ ] All unused images deleted from `images/`

### Final checks:
- [ ] Spell check ES / CA / EN completed
- [ ] Final audit score 20/20
- [ ] Vercel Deployment Protection → Off (Settings → Deployment Protection → Off)
- [ ] Mobile Lighthouse 90+ all categories
- [ ] Tested on real phone via Vercel URL
- [ ] `prefers-reduced-motion` disables all animations correctly
- [ ] Scroll animations tested on real Android phone

---

## Vercel Deployment

- Root Directory: **leave blank** (default `./`)
- After first deploy: **Settings → Deployment Protection → Off** — clients get login wall otherwise
- Auto-deploys on every `git push` to `main`

> ⚠️ All git commands must be run through Claude Code bash — never ask to run them in a separate terminal.

**First deploy (new project):**
```bash
git init
git add .
git commit -m "feat: [Restaurant Name] — production ready 20/20"
git branch -M main
git remote add origin https://github.com/rednessworld/[repo-name].git
git push -u origin main
```

**Subsequent pushes:**
```bash
git add .
git commit -m "fix: description of change"
git push origin main
```

Always test on real phone via Vercel URL after every push.

---

## How to Start a New Project

1. Duplicate the `Stitch Restaurant Template` folder
2. Rename to restaurant name
3. Open in VS Code
4. Add fonts to `fonts/` (WOFF2 only, active fonts only)
5. Add photos to `images/` — compress all to WebP before build
6. Drop extracted Stitch ZIP folders in `design/`
7. Tell Claude Code:
   ```
   Read memory/taste-skill/SKILL.md and memory/redmotion/SKILL.md before building.
   Then read memory/build-rules.md for HTML patterns.
   Then build the website from the Stitch files in the design folder.
   Use screen.png files as visual reference.
   ```
8. Preview locally
9. Review section by section via screenshots
10. Run full audit pipeline
11. Spell check all 3 languages
12. Push to GitHub
13. Run mobile Lighthouse
14. Test on real phone
15. Send Vercel URL to client
