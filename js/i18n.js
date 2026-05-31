/* ============================================================
   FLORA CAFE — i18n.js
   Multi-language: Español (es) / Català (ca) / English (en)
   ============================================================ */

const LANG_KEY = 'flora_lang';

const translations = {
  es: {
    /* Nav */
    'nav.about':       'Nosotros',
    'nav.menu':        'Carta',
    'nav.gallery':     'Galería',
    'nav.find':        'Encuéntranos',
    'nav.reserve':     'Reservar',
    'nav.toggle.open': 'Abrir menú',
    'nav.toggle.close':'Cerrar menú',
    'nav.aria':        'Navegación principal',
    'nav.lang.aria':   'Idioma',

    /* Hero */
    'hero.tagline':   'Brunch · Tapas · Café',
    'hero.subtitle':  'El rincón del parque que siempre buscabas',
    'hero.cta':       'Ver la carta',
    'hero.cta2':      'Encuéntranos',

    /* About */
    'about.label':   'Nuestra historia',
    'about.heading': 'Una pausa que merece la pena',
    'about.p1':      'FLORA nació de una idea sencilla: la mejor parte del día merece la mejor comida. Horneamos nuestros croissants frescos cada mañana, hacemos la pasta a mano y preparamos un café del que nos sentimos orgullosos.',
    'about.p2':      'Nuestro espacio está diseñado para quedarse — luz natural, texturas cálidas y un equipo que trata a cada cliente como si fuera de la casa. Ven a desayunar, quédate a comer.',
    'about.cta':     'Ver la carta',

    /* Menu */
    'menu.label':         'Lo que servimos',
    'menu.heading':       'La Carta',
    'menu.tab.croissants':'Brunch',
    'menu.tab.pasta':     'Tapas',
    'menu.tab.drinks':    'Bebidas',
    'menu.tabs.aria':     'Categorías del menú',

    /* Gallery */
    'gallery.label':         'La experiencia',
    'gallery.heading':       'Un anticipo de lo que te espera',
    'gallery.instagram':     'Síguenos en Instagram',
    'gallery.instagram.aria':'Síguenos en Instagram — @floracafe.barcelona',

    /* Reviews */
    'reviews.label':   'Lo que dicen',
    'reviews.heading': 'Nuestros clientes nos quieren',
    'reviews.cta':     'Ver todas las reseñas en Google ↗',
    'review.stars':    '5 de 5 estrellas',
    'review.1.text':   '"Flora se ha convertido en nuestro lugar favorito para el brunch del domingo. Los croissants son increíbles y el ambiente es precioso."',
    'review.1.author': 'María G.',
    'review.2.text':   '"La pasta pistacchiosa es lo mejor que he probado en Barcelona. El espacio tiene una luz increíble y el café de especialidad es excelente."',
    'review.2.author': 'David S.',
    'review.3.text':   '"Un café de ensueño. El cappuccino es perfecto, los croissants están siempre frescos y el equipo es absolutamente encantador."',
    'review.3.author': 'Emma R.',
    'review.4.text':   '"Ambiente agradable, buena música y una carta difícil de resistir. La carbonara es auténtica y la relación calidad-precio es muy buena."',
    'review.4.author': 'Carlos M.',

    /* Find Us */
    'find.label':        'Encuéntranos',
    'find.heading':      'Ven a visitarnos',
    'find.address':      'Dirección',
    'find.address.text': 'Passeig de Pujades, 21<br>Sant Martí, 08018 Barcelona',
    'find.hours':        'Horario',
    'find.wa.label':     'Reserva una mesa',
    'find.wa.sub':       'Rápido y fácil por WhatsApp',
    'find.wa.cta':       'Escribir por WhatsApp',
    'find.maps':         'Abrir en Google Maps ↗',

    /* Hours */
    'hours.mon_thu': 'Lun – Jue',
    'hours.fri_sat': 'Vie – Sáb',
    'hours.sun':     'Dom',

    /* Footer */
    'footer.tagline':  'Brunch · Tapas · Café',
    'footer.privacy':  'Política de privacidad',
    'footer.nav.aria': 'Navegación del pie de página',
    'footer.copy':     `© ${new Date().getFullYear()} FLORA. Todos los derechos reservados.`,

    /* Cookie */
    'cookie.text':      'Usamos cookies para analizar el tráfico y mejorar tu experiencia.',
    'cookie.accept':    'Aceptar todo',
    'cookie.necessary': 'Solo necesarias',

    /* WhatsApp */
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en FLORA.',
    'whatsapp.aria':    'Reservar vía WhatsApp',

    /* Misc */
    'backtop.aria': 'Volver arriba',
    'skip.nav':     'Ir al contenido principal',
  },

  ca: {
    /* Nav */
    'nav.about':       'Nosaltres',
    'nav.menu':        'Carta',
    'nav.gallery':     'Galeria',
    'nav.find':        'Troba\'ns',
    'nav.reserve':     'Reservar',
    'nav.toggle.open': 'Obrir menú',
    'nav.toggle.close':'Tancar menú',
    'nav.aria':        'Navegació principal',
    'nav.lang.aria':   'Idioma',

    /* Hero */
    'hero.tagline':   'Brunch · Tapas · Cafè',
    'hero.subtitle':  'El racó del parc que sempre buscaves',
    'hero.cta':       'Veure la carta',
    'hero.cta2':      'Troba\'ns',

    /* About */
    'about.label':   'La nostra història',
    'about.heading': 'Una pausa que val la pena',
    'about.p1':      'FLORA va néixer d\'una idea senzilla: la millor part del dia mereix el millor menjar. Coem els nostres croissants frescos cada matí, fem la pasta a mà i preparem un cafè del qual ens sentim orgullosos.',
    'about.p2':      'El nostre espai està dissenyat per quedar-se — llum natural, textures càlides i un equip que tracta cada client com si fos de casa. Vine a esmorzar, queda\'t a dinar.',
    'about.cta':     'Veure la carta',

    /* Menu */
    'menu.label':         'El que servim',
    'menu.heading':       'La Carta',
    'menu.tab.croissants':'Brunch',
    'menu.tab.pasta':     'Tapas',
    'menu.tab.drinks':    'Begudes',
    'menu.tabs.aria':     'Categories del menú',

    /* Gallery */
    'gallery.label':         'L\'experiència',
    'gallery.heading':       'Un tast del que t\'espera',
    'gallery.instagram':     'Segueix-nos a Instagram',
    'gallery.instagram.aria':'Segueix-nos a Instagram — @floracafe.barcelona',

    /* Reviews */
    'reviews.label':   'El que diuen',
    'reviews.heading': 'Els nostres clients ens estimen',
    'reviews.cta':     'Veure totes les ressenyes a Google ↗',
    'review.stars':    '5 de 5 estrelles',
    'review.1.text':   '"Flora s\'ha convertit en el nostre lloc favorit per al brunch del diumenge. Els croissants són increïbles i l\'ambient és preciós."',
    'review.1.author': 'María G.',
    'review.2.text':   '"La pasta pistacchiosa és el millor que he tastat a Barcelona. L\'espai té una llum increïble i el cafè d\'especialitat és excel·lent."',
    'review.2.author': 'David S.',
    'review.3.text':   '"Un cafè de somni. El cappuccino és perfecte, els croissants sempre estan frescos i l\'equip és absolutament encantador."',
    'review.3.author': 'Emma R.',
    'review.4.text':   '"Ambient agradable, bona música i una carta difícil de resistir. La carbonara és autèntica i la relació qualitat-preu és molt bona."',
    'review.4.author': 'Carlos M.',

    /* Find Us */
    'find.label':        'Troba\'ns',
    'find.heading':      'Vine a visitar-nos',
    'find.address':      'Adreça',
    'find.address.text': 'Passeig de Pujades, 21<br>Sant Martí, 08018 Barcelona',
    'find.hours':        'Horari',
    'find.wa.label':     'Reserva una taula',
    'find.wa.sub':       'Ràpid i fàcil per WhatsApp',
    'find.wa.cta':       'Escriure per WhatsApp',
    'find.maps':         'Obrir a Google Maps ↗',

    /* Hours */
    'hours.mon_thu': 'Dl – Dj',
    'hours.fri_sat': 'Dv – Ds',
    'hours.sun':     'Dg',

    /* Footer */
    'footer.tagline':  'Brunch · Tapas · Cafè',
    'footer.privacy':  'Política de privacitat',
    'footer.nav.aria': 'Navegació del peu de pàgina',
    'footer.copy':     `© ${new Date().getFullYear()} FLORA. Tots els drets reservats.`,

    /* Cookie */
    'cookie.text':      'Fem servir cookies per analitzar el tràfic i millorar la teva experiència.',
    'cookie.accept':    'Acceptar tot',
    'cookie.necessary': 'Només necessàries',

    /* WhatsApp */
    'whatsapp.message': 'Hola, m\'agradaria fer una reserva a FLORA.',
    'whatsapp.aria':    'Reservar via WhatsApp',

    /* Misc */
    'backtop.aria': 'Tornar amunt',
    'skip.nav':     'Anar al contingut principal',
  },

  en: {
    /* Nav */
    'nav.about':       'About',
    'nav.menu':        'Menu',
    'nav.gallery':     'Gallery',
    'nav.find':        'Find Us',
    'nav.reserve':     'Book a Table',
    'nav.toggle.open': 'Open menu',
    'nav.toggle.close':'Close menu',
    'nav.aria':        'Main navigation',
    'nav.lang.aria':   'Language',

    /* Hero */
    'hero.tagline':   'Brunch · Tapas · Café',
    'hero.subtitle':  'The park corner you\'ve always been looking for',
    'hero.cta':       'See the Menu',
    'hero.cta2':      'Find Us',

    /* About */
    'about.label':   'Our Story',
    'about.heading': 'A slow morning, made right',
    'about.p1':      'FLORA was born from a simple belief: the best part of the day deserves the best food. We bake our croissants fresh each morning, roll our pasta by hand, and brew coffee we&rsquo;re genuinely proud of.',
    'about.p2':      'Our space is designed for lingering &mdash; natural light, warm textures, and a team that treats every guest like a regular. Stop in for brunch, stay for the pasta.',
    'about.cta':     'Explore the Menu',

    /* Menu */
    'menu.label':         'What We Serve',
    'menu.heading':       'The Menu',
    'menu.tab.croissants':'Brunch',
    'menu.tab.pasta':     'Tapas',
    'menu.tab.drinks':    'Drinks',
    'menu.tabs.aria':     'Menu categories',

    /* Gallery */
    'gallery.label':         'The Experience',
    'gallery.heading':       'A taste of what awaits',
    'gallery.instagram':     'Follow us on Instagram',
    'gallery.instagram.aria':'Follow us on Instagram — @floracafe.barcelona',

    /* Reviews */
    'reviews.label':   'What People Say',
    'reviews.heading': 'Our Guests Love Us',
    'reviews.cta':     'See all reviews on Google ↗',
    'review.stars':    '5 out of 5 stars',
    'review.1.text':   '"Flora has become our favourite spot for Sunday brunch. The croissants are incredible and the atmosphere is beautiful."',
    'review.1.author': 'María G.',
    'review.2.text':   '"The pistacchiosa pasta is the best thing I\'ve tried in Barcelona. The space has incredible light and the specialty coffee is excellent."',
    'review.2.author': 'David S.',
    'review.3.text':   '"A dream café. The cappuccino is perfect, the croissants are always fresh and the team is absolutely delightful."',
    'review.3.author': 'Emma R.',
    'review.4.text':   '"Pleasant atmosphere, good music and a menu that\'s hard to resist. The carbonara is authentic and the value for money is excellent."',
    'review.4.author': 'Carlos M.',

    /* Find Us */
    'find.label':        'Find Us',
    'find.heading':      'Come Visit FLORA',
    'find.address':      'Address',
    'find.address.text': 'Passeig de Pujades, 21<br>Sant Martí, 08018 Barcelona',
    'find.hours':        'Opening Hours',
    'find.wa.label':     'Reserve a table',
    'find.wa.sub':       'Quick and easy via WhatsApp',
    'find.wa.cta':       'Message on WhatsApp',
    'find.maps':         'Open in Google Maps ↗',

    /* Hours */
    'hours.mon_thu': 'Mon – Thu',
    'hours.fri_sat': 'Fri – Sat',
    'hours.sun':     'Sun',

    /* Footer */
    'footer.tagline':  'Brunch · Tapas · Café',
    'footer.privacy':  'Privacy Policy',
    'footer.nav.aria': 'Footer navigation',
    'footer.copy':     `© ${new Date().getFullYear()} FLORA. All rights reserved.`,

    /* Cookie */
    'cookie.text':      'We use cookies to analyse traffic and improve your experience.',
    'cookie.accept':    'Accept All',
    'cookie.necessary': 'Necessary Only',

    /* WhatsApp */
    'whatsapp.message': 'Hello, I\'d like to make a reservation at FLORA.',
    'whatsapp.aria':    'Reserve via WhatsApp',

    /* Misc */
    'backtop.aria': 'Back to top',
    'skip.nav':     'Skip to main content',
  },
};

/* ── Public API ────────────────────────────────────────────── */

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'es';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Swap innerHTML (not textContent — supports &rsquo; etc.) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Swap aria-label attributes */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  /* Update all WhatsApp links with localised pre-fill message */
  const msg = t['whatsapp.message'] || '';
  document.querySelectorAll('[data-phone]').forEach(el => {
    const phone = el.dataset.phone.replace(/\D/g, '');
    if (el.tagName === 'A') {
      el.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }
  });

  /* Sync lang switcher button states across all instances */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Update <html lang> attribute */
  document.documentElement.lang = lang;

  /* Persist preference */
  localStorage.setItem(LANG_KEY, lang);
}

function initLang() {
  applyLang(getLang());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

initLang();
