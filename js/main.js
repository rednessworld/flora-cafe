/* ============================================================
   FLORA CAFE — main.js
   ============================================================ */

/* ── Nav: transparent over hero → solid on scroll ─────────── */

(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function syncNav() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', syncNav, { passive: true });
  syncNav();
})();

/* ── Mobile nav toggle ─────────────────────────────────────── */

(function () {
  const toggle  = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-links');
  if (!toggle || !navList) return;

  function getFocusable() {
    return Array.from(
      navList.querySelectorAll('a[href], button:not([disabled])')
    ).filter(el => {
      const s = window.getComputedStyle(el);
      return s.display !== 'none' && s.visibility !== 'hidden';
    });
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const els = getFocusable();
    if (!els.length) return;
    const first = els[0];
    const last  = els[els.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }

  function syncAriaHidden() {
    if (window.innerWidth >= 768) {
      navList.removeAttribute('aria-hidden');
      /* Clean up dialog state if resized while menu was open */
      if (navList.getAttribute('role') === 'dialog') {
        navList.setAttribute('role', 'list');
        navList.removeAttribute('aria-modal');
        document.removeEventListener('keydown', trapFocus);
        document.body.style.overflow = '';
      }
    } else if (!navList.classList.contains('nav__links--open')) {
      navList.setAttribute('aria-hidden', 'true');
    }
  }

  function openMenu() {
    navList.classList.add('nav__links--open');
    navList.removeAttribute('aria-hidden');
    navList.setAttribute('role', 'dialog');
    navList.setAttribute('aria-modal', 'true');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('data-i18n-aria', 'nav.toggle.close');
    const t = (typeof translations !== 'undefined' && translations[getLang()]) || {};
    toggle.setAttribute('aria-label', t['nav.toggle.close'] || 'Cerrar menú');
    document.body.style.overflow = 'hidden';
    const els = getFocusable();
    if (els.length) els[0].focus();
    document.addEventListener('keydown', trapFocus);
  }

  function closeMenu() {
    navList.classList.remove('nav__links--open');
    navList.setAttribute('role', 'list');
    navList.removeAttribute('aria-modal');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('data-i18n-aria', 'nav.toggle.open');
    const t = (typeof translations !== 'undefined' && translations[getLang()]) || {};
    toggle.setAttribute('aria-label', t['nav.toggle.open'] || 'Abrir menú');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', trapFocus);
    syncAriaHidden();
  }

  syncAriaHidden();
  window.addEventListener('resize', syncAriaHidden, { passive: true });

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  /* Close on any link click inside overlay */
  navList.addEventListener('click', e => {
    if (e.target.tagName === 'A' || e.target.closest('a')) closeMenu();
  });

  /* Close on Escape — return focus to toggle */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navList.classList.contains('nav__links--open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();

/* ── Menu tabs ─────────────────────────────────────────────── */

(function () {
  const tabList = document.querySelector('[role="tablist"]');
  if (!tabList) return;

  const tabs   = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

  function activateTab(tab) {
    tabs.forEach(t => {
      t.classList.remove('menu__tab--active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    panels.forEach(p => { if (p) p.classList.add('menu__panel--hidden'); });

    tab.classList.add('menu__tab--active');
    tab.setAttribute('aria-selected', 'true');
    tab.removeAttribute('tabindex');

    const target = document.getElementById(tab.getAttribute('aria-controls'));
    if (target) target.classList.remove('menu__panel--hidden');
  }

  tabList.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) activateTab(tab);
  });

  tabList.addEventListener('keydown', e => {
    const current = document.activeElement;
    if (!tabs.includes(current)) return;
    const idx = tabs.indexOf(current);
    let next;
    if (e.key === 'ArrowRight')     next = tabs[(idx + 1) % tabs.length];
    else if (e.key === 'ArrowLeft') next = tabs[(idx - 1 + tabs.length) % tabs.length];
    else if (e.key === 'Home')      next = tabs[0];
    else if (e.key === 'End')       next = tabs[tabs.length - 1];
    if (next) { e.preventDefault(); activateTab(next); next.focus(); }
  });

  tabs.forEach((t, i) => { if (i !== 0) t.setAttribute('tabindex', '-1'); });
})();

/* ── Scroll reveal — IntersectionObserver ──────────────────── */

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal, .reveal--fade, .reveal--heading, .reveal--scale')
      .forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal--fade, .reveal--heading, .reveal--scale')
    .forEach(el => observer.observe(el));
})();

/* ── Loading screen ─────────────────────────────────────────── */

(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const dismiss = () => {
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  };

  if (sessionStorage.getItem('flora_visited')) {
    loader.remove();
  } else {
    sessionStorage.setItem('flora_visited', '1');
    if (document.readyState === 'complete') {
      setTimeout(dismiss, 600);
    } else {
      window.addEventListener('load', () => setTimeout(dismiss, 600), { once: true });
    }
  }
})();

/* ── Back to top ────────────────────────────────────────────── */

(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('back-to-top--visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── Cookie consent ─────────────────────────────────────────── */

const CONSENT_KEY = 'flora_cookie_consent';

function loadGA4() {
  const id = window.GA_MEASUREMENT_ID;
  if (!id || id === 'G-XXXXXXXXXX') return;
  const s = document.createElement('script');
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
}

(function () {
  const banner      = document.getElementById('cookie-banner');
  const btnAccept   = document.getElementById('cookie-accept');
  const btnNecessary= document.getElementById('cookie-necessary');

  function applyConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
    if (banner) banner.hidden = true;
    if (value === 'accepted') loadGA4();
  }

  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted') {
    loadGA4();
  } else if (!stored && banner) {
    setTimeout(() => {
      banner.hidden = false;
      btnAccept?.focus();
    }, 800);
  }

  btnAccept?.addEventListener('click',     () => applyConsent('accepted'));
  btnNecessary?.addEventListener('click',  () => applyConsent('necessary'));
})();

/* ── Lenis smooth scroll ────────────────────────────────────── */

;(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof Lenis === 'undefined') return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
})();
