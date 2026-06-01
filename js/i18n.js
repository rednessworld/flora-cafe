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
    'nav.logo.aria':   'FLORA — Inicio',

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
    'cookie.text':        'Usamos cookies para analizar el tráfico y mejorar tu experiencia.',
    'cookie.accept':      'Aceptar todo',
    'cookie.necessary':   'Solo necesarias',
    'cookie.banner.aria': 'Aviso de cookies',

    /* Find us — map */
    'find.map.aria': 'Mapa de FLORA Cafè en Passeig de Pujades, Barcelona',

    /* WhatsApp */
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en FLORA.',
    'whatsapp.aria':    'Reservar vía WhatsApp',

    /* Misc */
    'backtop.aria': 'Volver arriba',
    'skip.nav':     'Ir al contenido principal',

    /* Menu — tabs */
    'menu.tab.cafe':   'CAFÉ',
    'menu.tab.dulces': 'DULCES',

    /* Menu — sub-category headings */
    'menu.cat.cafe':       'CAFÉ · TÉS · INFUSIONES',
    'menu.cat.cold':       'BEBIDAS',
    'menu.cat.dulces':     'DULCES CASEROS',
    'menu.cat.zumos':      'ZUMOS NATURALES',
    'menu.cat.tostadas':   'TOSTADAS',
    'menu.cat.sandwiches': 'SANDWICHES',
    'menu.cat.benedictos': 'HUEVOS BENEDICTOS',
    'menu.cat.especial':   'ESPECIAL DE INVIERNO',
    'menu.cat.tapas':      'TAPAS',
    'menu.cat.ensaladas':  'ENSALADAS',
    'menu.cat.extras':     'EXTRAS',
    'menu.cat.vinos':      'VINOS',
    'menu.cat.tintos':     'TINTOS',
    'menu.cat.blancos':    'BLANCOS',
    'menu.cat.rosado':     'ROSADO',
    'menu.cat.cava':       'CAVA',
    'menu.cat.cervezas':   'CERVEZAS',
    'menu.cat.barril':     'BARRIL',
    'menu.cat.botellas':   'BOTELLAS',
    'menu.cat.ogham':      'LATAS OGHAM — Artesanales, sin gluten',
    'menu.cat.aperitivos': 'APERITIVOS',
    'menu.cat.cocktails':  'COCKTAILS',

    /* Menu — notes */
    'menu.note.cafe.addons': 'Leche de avena / soja / sin lactosa +0.20 · Vainilla / caramelo +1',
    'menu.note.sandwiches':  'Acompañados de patatas rústicas, con boniatos +1',
    'menu.note.benedictos':  'De 9.30h a 16.00h — Dos huevos pochados sobre english muffin cubiertos de salsa holandesa y acompañados de patatas rústicas y ensalada, con boniatos +1',

    /* Menu — CAFÉ */
    'menu.item.cafe.solo':            'Café solo',
    'menu.item.cafe.cortado':         'Cortado',
    'menu.item.cafe.conleche':        'Café con leche',
    'menu.item.cafe.latte':           'Latte',
    'menu.item.cafe.americano':       'Americano',
    'menu.item.cafe.cappuccino':      'Cappuccino',
    'menu.item.cafe.carajillo':       'Carajillo',
    'menu.item.cafe.carajillo.desc':  'Baileys · Whiskey · Ron',
    'menu.item.cafe.iced':            'Iced Latte',
    'menu.item.cafe.doble':           'Espresso doble',
    'menu.item.cafe.flatwhite':       'Flat White',
    'menu.item.cafe.chai':            'Chai Latte',
    'menu.item.cafe.dirtychai':       'Dirty Chai Latte',
    'menu.item.cafe.matcha':          'Matcha Latte',
    'menu.item.cafe.chocolate':       'Chocolate caliente',
    'menu.item.cafe.te':              'Tés e infusiones',
    'menu.item.cafe.te.desc':         'Manzanilla · Earl Grey floral · Té verde · Rooibos tropical · Té rojo · Poleo menta',
    'menu.item.agua':                 'Agua',
    'menu.item.agua.gas':             'Agua con gas',
    'menu.item.fontdor':              'Agua Font d&rsquo;Or',
    'menu.item.vichy':                'Vichy Catalán',
    'menu.item.refrescos':            'Ginger Beer · Lemonade · Fanta · Pomelo · Fuze Tea · Aquarius · Cacaolat',

    /* Menu — DULCES */
    'menu.item.granola':               'Granola casera',
    'menu.item.granola.desc':          'Con yogur natural, granola casera, frutas de temporada y miel',
    'menu.item.zanahoria':             'Tarta de zanahoria',
    'menu.item.zanahoria.desc':        'Glaseado con granola casera',
    'menu.item.banana':                'Banana bread',
    'menu.item.banana.desc':           'Con dulce de leche y banana caramelizada',
    'menu.item.brownie':               'Brownie',
    'menu.item.brownie.desc':          'Con helado de vainilla y frutas de temporada',
    'menu.item.cookie':                'Chocolate chunk cookie XL',
    'menu.item.croissant.dulce':       'Croissant dulce',
    'menu.item.croissant.dulce.desc':  'Con nutella o dulce de leche',
    'menu.item.limonada':              'Limonada casera',
    'menu.item.naranja':               'Naranja',
    'menu.item.fresa':                 'Fresa y plátano',
    'menu.item.fresa.desc':            '45cl · Con leche o zumo de naranja +1',
    'menu.item.verde':                 'Verde',
    'menu.item.verde.desc':            '45cl · Manzana, pepino y apio',
    'menu.item.vitamina':              'Vitamina',
    'menu.item.vitamina.desc':         '45cl · Naranja, zanahoria y jengibre',

    /* Menu — BRUNCH */
    'menu.item.toast.aguacate':        'Tostada de aguacate',
    'menu.item.toast.aguacate.desc':   'Aguacate, tomate cherry, queso feta y cebollino · +dos huevos pochados o salmón +3',
    'menu.item.toast.setas':           'Tostada con mix de setas',
    'menu.item.toast.setas.desc':      'Mix de setas en reducción de salsa de soja y aguacate',
    'menu.item.toast.burrata':         'Tostada de burrata',
    'menu.item.toast.burrata.desc':    'Burrata de búfala, tomate, albahaca y crema balsámica',
    'menu.item.toast.serrano':         'Tostada de jamón serrano',
    'menu.item.toast.serrano.desc':    'Jamón serrano, queso crema, rúcula, tomate cherry y pesto',
    'menu.item.bikini':                'Bikini',
    'menu.item.bikini.desc':           'Jamón york y doble queso edam',
    'menu.item.flora.croissant':       'Flora croissant',
    'menu.item.flora.croissant.desc':  'Jamón york, queso edam, rúcula, aguacate y tomate cherry',
    'menu.item.bagel':                 'Bagel de salmón',
    'menu.item.bagel.desc':            'Bagel de semillas con salmón ahumado, aguacate, rúcula, queso crema de eneldo y alcaparras',
    'menu.item.brioche':               'Brioche de pollo',
    'menu.item.brioche.desc':          'Pan brioche con pollo al horno, queso fundido, bacon, cebolla caramelizada, rúcula, tomate y mayonesa rosa casera',
    'menu.item.grilled':               'Triple grilled cheese',
    'menu.item.grilled.desc':          'Pan rústico con queso edam, brie y queso azul',
    'menu.item.benedict.salmon':       'Salmón',
    'menu.item.benedict.serrano':      'Jamón serrano',
    'menu.item.benedict.aguacate':     'Aguacate',
    'menu.item.sopa':                  'Sopa de tomate asado',
    'menu.item.sopa.desc':             'Servido con bikini de queso',

    /* Menu — TAPAS */
    'menu.item.olivas':                'Olivas',
    'menu.item.frutos':                'Frutos secos',
    'menu.item.pan.tomate':            'Pan con tomate',
    'menu.item.bravas':                'Patatas bravas rústicas',
    'menu.item.boniatos':              'Boniatos',
    'menu.item.dips':                  'Plato de tres dips',
    'menu.item.dips.desc':             'Hummus de remolacha, guacamole y tzatziki servidos con crudités y pan de coca',
    'menu.item.nachos':                'Nachos',
    'menu.item.nachos.desc':           'Tortillas de maíz, queso cheddar, guacamole, yogur, jalapeños y pico de gallo · con pollo asado +2.5',
    'menu.item.empanadas':             'Empanadas',
    'menu.item.empanadas.desc':        'Carne · Queso y cebolla · Espinaca',
    'menu.item.quesos':                'Tabla de quesos',
    'menu.item.quesos.desc':           'Brie, Roquefort, Manchego y Edam con uvas asadas, frutas de temporada, nueces y pan tostado',
    'menu.item.ensalada.cabra':        'Cabra',
    'menu.item.ensalada.cabra.desc':   'Rúcula y espinacas con queso de cabra, boniato asado, cebolla caramelizada, manzana, nueces, pasas y crema balsámica',
    'menu.item.ensalada.pollo':        'Pollo',
    'menu.item.ensalada.pollo.desc':   'Mâroûn, pollo al horno, aguacate, tomate cherry, mozzarella, pistachos y vinagreta de mostaza y miel',
    'menu.item.ensalada.burrata':      'Burrata de búfala',
    'menu.item.ensalada.burrata.desc': 'Rúcula y espinacas con burrata de búfala, uvas asadas, calabacín, pistachos, menta y crema balsámica',
    'menu.item.extra.aguacate':        'Aguacate',
    'menu.item.extra.bacon':           'Bacon',
    'menu.item.extra.salmon':          'Salmón',
    'menu.item.extra.feta':            'Queso feta',
    'menu.item.extra.pollo':           'Pollo',
    'menu.item.extra.burrata':         'Burrata',
    'menu.item.extra.serrano':         'Jamón Serrano',
    'menu.item.extra.setas':           'Setas',

    /* Menu — BEBIDAS */
    'menu.item.vino.caliente':              'Vino Caliente Glögg',
    'menu.item.vino.particular.tinto':      'Particular',
    'menu.item.vino.particular.tinto.desc': 'Cariñena · Garnacha',
    'menu.item.vino.fulanito':              'Fulanito',
    'menu.item.vino.particular.blanco':     'Particular',
    'menu.item.vino.afortunado':            'Afortunado',
    'menu.item.vino.particular.rosado':     'Particular',
    'menu.item.vino.particular.rosado.desc':'Cariñena · Garnacha',
    'menu.item.cava.terra':                 'Terra terrae',
    'menu.item.cava.terra.desc':            'Brut ecológico',
    'menu.item.moritz7':                    'Moritz 7',
    'menu.item.radler':                     'Radler clara',
    'menu.item.epidor':                     'Epidor triple malta',
    'menu.item.aigua.moritz':               'Aigua de Moritz',
    'menu.item.sinalcohol':                 'Sin alcohol',
    'menu.item.corona':                     'Corona',
    'menu.item.ambar':                      'Ambar',
    'menu.item.singluten':                  'Sin gluten',
    'menu.item.ogham.pilsen':               'Pilsen',
    'menu.item.ogham.red':                  'Red Ale',
    'menu.item.ogham.ipa':                  'IPA',
    'menu.item.spritz':                     'Spritz',
    'menu.item.sangria':                    'Sangría',
    'menu.item.sangria.cava':               'Sangría Cava',
    'menu.item.mimosa':                     'Mimosa',
    'menu.item.mimosa.desc':                'Copa / 1l',
    'menu.item.vermut.cinzano':             'Vermut Cinzano',
    'menu.item.vermut1757':                 'Vermut 1757 Reserva',
    'menu.item.americano.bev':              'Americano',
    'menu.item.americano.bev.desc':         'Campari, vermut, soda',
    'menu.item.caipirinha':                 'Caipirinha',
    'menu.item.caipirinha.desc':            'Cachaça, lima, azúcar',
    'menu.item.mojito':                     'Mojito',
    'menu.item.mojito.desc':                'Ron, limón, azúcar, menta, soda',
    'menu.item.moscow':                     'Moscow Mule',
    'menu.item.moscow.desc':                'Vodka, limón, ginger beer',
    'menu.item.darkstormy':                 'Dark &amp; Stormy',
    'menu.item.darkstormy.desc':            'Ron, ginger beer',
    'menu.item.paloma':                     'Paloma',
    'menu.item.paloma.desc':                'Tequila, limón, pomelo',
    'menu.item.negroni':                    'Negroni',
    'menu.item.negroni.desc':               'Gin, Campari, vermut',
    'menu.item.espmartini':                 'Espresso Martini',
    'menu.item.espmartini.desc':            'Vodka, licor de café, vainilla, espresso',
    'menu.item.devilsmarg':                 'Devil&rsquo;s Margarita',
    'menu.item.devilsmarg.desc':            'Tequila, triple seco, limón, vino tinto seco',
    'menu.item.fernet':                     'Fernet cola',
    'menu.item.gin':                        'Gin',
    'menu.item.ron':                        'Ron',
    'menu.item.whiskey':                    'Whiskey',
    'menu.item.vodka':                      'Vodka',
    'menu.item.tequila':                    'Tequila / Mezcal',
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
    'nav.logo.aria':   'FLORA — Inici',

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
    'cookie.text':        'Fem servir cookies per analitzar el tràfic i millorar la teva experiència.',
    'cookie.accept':      'Acceptar tot',
    'cookie.necessary':   'Només necessàries',
    'cookie.banner.aria': 'Avís de galetes',

    /* Find us — map */
    'find.map.aria': 'Mapa de FLORA Cafè al Passeig de Pujades, Barcelona',

    /* WhatsApp */
    'whatsapp.message': 'Hola, m\'agradaria fer una reserva a FLORA.',
    'whatsapp.aria':    'Reservar via WhatsApp',

    /* Misc */
    'backtop.aria': 'Tornar amunt',
    'skip.nav':     'Anar al contingut principal',

    /* Menu — tabs */
    'menu.tab.cafe':   'CAFÈ',
    'menu.tab.dulces': 'DOLÇOS',

    /* Menu — sub-category headings */
    'menu.cat.cafe':       'CAFÈ · TÈS · INFUSIONS',
    'menu.cat.cold':       'BEGUDES',
    'menu.cat.dulces':     'DOLÇOS CASOLANS',
    'menu.cat.zumos':      'SUCS NATURALS',
    'menu.cat.tostadas':   'TORRADES',
    'menu.cat.sandwiches': 'SANDVITXOS',
    'menu.cat.benedictos': 'OUS BENEDICTS',
    'menu.cat.especial':   'ESPECIAL D\'HIVERN',
    'menu.cat.tapas':      'TAPES',
    'menu.cat.ensaladas':  'AMANIDES',
    'menu.cat.extras':     'EXTRES',
    'menu.cat.vinos':      'VINS',
    'menu.cat.tintos':     'NEGRES',
    'menu.cat.blancos':    'BLANCS',
    'menu.cat.rosado':     'ROSAT',
    'menu.cat.cava':       'CAVA',
    'menu.cat.cervezas':   'CERVESES',
    'menu.cat.barril':     'BARRIL',
    'menu.cat.botellas':   'AMPOLLES',
    'menu.cat.ogham':      'LATES OGHAM — Artesanals, sense gluten',
    'menu.cat.aperitivos': 'APERITIUS',
    'menu.cat.cocktails':  'CÒCTELS',

    /* Menu — notes */
    'menu.note.cafe.addons': 'Llet de civada / soja / sense lactosa +0.20 · Vainilla / caramel +1',
    'menu.note.sandwiches':  'Acompanyats de patates rústiques, amb moniatos +1',
    'menu.note.benedictos':  'De 9.30h a 16.00h — Dos ous escolfats sobre english muffin coberts de salsa holandesa i acompanyats de patates rústiques i amanida, amb moniatos +1',

    /* Menu — CAFÈ */
    'menu.item.cafe.solo':            'Cafè sol',
    'menu.item.cafe.cortado':         'Tallat',
    'menu.item.cafe.conleche':        'Cafè amb llet',
    'menu.item.cafe.latte':           'Latte',
    'menu.item.cafe.americano':       'Americano',
    'menu.item.cafe.cappuccino':      'Cappuccino',
    'menu.item.cafe.carajillo':       'Carajillo',
    'menu.item.cafe.carajillo.desc':  'Baileys · Whiskey · Ron',
    'menu.item.cafe.iced':            'Iced Latte',
    'menu.item.cafe.doble':           'Espresso doble',
    'menu.item.cafe.flatwhite':       'Flat White',
    'menu.item.cafe.chai':            'Chai Latte',
    'menu.item.cafe.dirtychai':       'Dirty Chai Latte',
    'menu.item.cafe.matcha':          'Matcha Latte',
    'menu.item.cafe.chocolate':       'Xocolata calenta',
    'menu.item.cafe.te':              'Tes i infusions',
    'menu.item.cafe.te.desc':         'Camamilla · Earl Grey floral · Te verd · Rooibos tropical · Te vermell · Poleiol menta',
    'menu.item.agua':                 'Aigua',
    'menu.item.agua.gas':             'Aigua amb gas',
    'menu.item.fontdor':              'Aigua Font d&rsquo;Or',
    'menu.item.vichy':                'Vichy Catalán',
    'menu.item.refrescos':            'Ginger Beer · Lemonade · Fanta · Pomelo · Fuze Tea · Aquarius · Cacaolat',

    /* Menu — DOLÇOS */
    'menu.item.granola':               'Granola casolana',
    'menu.item.granola.desc':          'Amb iogurt natural, granola casolana, fruites de temporada i mel',
    'menu.item.zanahoria':             'Pastís de pastanaga',
    'menu.item.zanahoria.desc':        'Glacejat amb granola casolana',
    'menu.item.banana':                'Banana bread',
    'menu.item.banana.desc':           'Amb dolç de llet i banana caramel·litzada',
    'menu.item.brownie':               'Brownie',
    'menu.item.brownie.desc':          'Amb gelat de vainilla i fruites de temporada',
    'menu.item.cookie':                'Chocolate chunk cookie XL',
    'menu.item.croissant.dulce':       'Croissant dolç',
    'menu.item.croissant.dulce.desc':  'Amb nutella o dolç de llet',
    'menu.item.limonada':              'Llimonada casolana',
    'menu.item.naranja':               'Taronja',
    'menu.item.fresa':                 'Maduixa i plàtan',
    'menu.item.fresa.desc':            '45cl · Amb llet o suc de taronja +1',
    'menu.item.verde':                 'Verd',
    'menu.item.verde.desc':            '45cl · Poma, cogombre i api',
    'menu.item.vitamina':              'Vitamina',
    'menu.item.vitamina.desc':         '45cl · Taronja, pastanaga i gingebre',

    /* Menu — BRUNCH */
    'menu.item.toast.aguacate':        'Torrada d\'alvocat',
    'menu.item.toast.aguacate.desc':   'Alvocat, tomàquet cherry, formatge feta i ciboulette · +dos ous escolfats o salmó +3',
    'menu.item.toast.setas':           'Torrada amb mix de bolets',
    'menu.item.toast.setas.desc':      'Mix de bolets en reducció de salsa de soja i alvocat',
    'menu.item.toast.burrata':         'Torrada de burrata',
    'menu.item.toast.burrata.desc':    'Burrata de búfala, tomàquet, alfàbrega i crema balsàmica',
    'menu.item.toast.serrano':         'Torrada de pernil serrà',
    'menu.item.toast.serrano.desc':    'Pernil serrà, formatge crema, ruca, tomàquet cherry i pesto',
    'menu.item.bikini':                'Bikini',
    'menu.item.bikini.desc':           'Pernil dolç i doble formatge edam',
    'menu.item.flora.croissant':       'Flora croissant',
    'menu.item.flora.croissant.desc':  'Pernil dolç, formatge edam, ruca, alvocat i tomàquet cherry',
    'menu.item.bagel':                 'Bagel de salmó',
    'menu.item.bagel.desc':            'Bagel de llavors amb salmó fumat, alvocat, ruca, formatge crema d\'anet i tàperes',
    'menu.item.brioche':               'Brioche de pollastre',
    'menu.item.brioche.desc':          'Pa brioche amb pollastre al forn, formatge fos, bacon, ceba caramel·litzada, ruca, tomàquet i maionesa rosa casolana',
    'menu.item.grilled':               'Triple grilled cheese',
    'menu.item.grilled.desc':          'Pa rústic amb formatge edam, brie i formatge blau',
    'menu.item.benedict.salmon':       'Salmó',
    'menu.item.benedict.serrano':      'Pernil serrà',
    'menu.item.benedict.aguacate':     'Alvocat',
    'menu.item.sopa':                  'Sopa de tomàquet rostit',
    'menu.item.sopa.desc':             'Servit amb bikini de formatge',

    /* Menu — TAPES */
    'menu.item.olivas':                'Olives',
    'menu.item.frutos':                'Fruits secs',
    'menu.item.pan.tomate':            'Pa amb tomàquet',
    'menu.item.bravas':                'Patates braves rústiques',
    'menu.item.boniatos':              'Moniatos',
    'menu.item.dips':                  'Plat de tres dips',
    'menu.item.dips.desc':             'Hummus de remolatxa, guacamole i tzatziki servits amb crudités i pa de coca',
    'menu.item.nachos':                'Nachos',
    'menu.item.nachos.desc':           'Tortilles de blat de moro, formatge cheddar, guacamole, iogurt, jalapeños i pico de gallo · amb pollastre rostit +2.5',
    'menu.item.empanadas':             'Empanades',
    'menu.item.empanadas.desc':        'Carn · Formatge i ceba · Espinac',
    'menu.item.quesos':                'Taula de formatges',
    'menu.item.quesos.desc':           'Brie, Roquefort, Manchego i Edam amb raïm rostit, fruites de temporada, nous i pa torrat',
    'menu.item.ensalada.cabra':        'Cabra',
    'menu.item.ensalada.cabra.desc':   'Ruca i espinacs amb formatge de cabra, moniato rostit, ceba caramel·litzada, poma, nous, panses i crema balsàmica',
    'menu.item.ensalada.pollo':        'Pollastre',
    'menu.item.ensalada.pollo.desc':   'Mâroûn, pollastre al forn, alvocat, tomàquet cherry, mozzarella, festucs i vinagreta de mostassa i mel',
    'menu.item.ensalada.burrata':      'Burrata de búfala',
    'menu.item.ensalada.burrata.desc': 'Ruca i espinacs amb burrata de búfala, raïm rostit, carbassó, festucs, menta i crema balsàmica',
    'menu.item.extra.aguacate':        'Alvocat',
    'menu.item.extra.bacon':           'Bacon',
    'menu.item.extra.salmon':          'Salmó',
    'menu.item.extra.feta':            'Formatge feta',
    'menu.item.extra.pollo':           'Pollastre',
    'menu.item.extra.burrata':         'Burrata',
    'menu.item.extra.serrano':         'Pernil Serrà',
    'menu.item.extra.setas':           'Bolets',

    /* Menu — BEGUDES */
    'menu.item.vino.caliente':              'Vi Calent Glögg',
    'menu.item.vino.particular.tinto':      'Particular',
    'menu.item.vino.particular.tinto.desc': 'Cariñena · Garnatxa',
    'menu.item.vino.fulanito':              'Fulanito',
    'menu.item.vino.particular.blanco':     'Particular',
    'menu.item.vino.afortunado':            'Afortunado',
    'menu.item.vino.particular.rosado':     'Particular',
    'menu.item.vino.particular.rosado.desc':'Cariñena · Garnatxa',
    'menu.item.cava.terra':                 'Terra terrae',
    'menu.item.cava.terra.desc':            'Brut ecològic',
    'menu.item.moritz7':                    'Moritz 7',
    'menu.item.radler':                     'Radler clara',
    'menu.item.epidor':                     'Epidor triple malta',
    'menu.item.aigua.moritz':               'Aigua de Moritz',
    'menu.item.sinalcohol':                 'Sense alcohol',
    'menu.item.corona':                     'Corona',
    'menu.item.ambar':                      'Ambar',
    'menu.item.singluten':                  'Sense gluten',
    'menu.item.ogham.pilsen':               'Pilsen',
    'menu.item.ogham.red':                  'Red Ale',
    'menu.item.ogham.ipa':                  'IPA',
    'menu.item.spritz':                     'Spritz',
    'menu.item.sangria':                    'Sangria',
    'menu.item.sangria.cava':               'Sangria Cava',
    'menu.item.mimosa':                     'Mimosa',
    'menu.item.mimosa.desc':                'Copa / 1l',
    'menu.item.vermut.cinzano':             'Vermut Cinzano',
    'menu.item.vermut1757':                 'Vermut 1757 Reserva',
    'menu.item.americano.bev':              'Americano',
    'menu.item.americano.bev.desc':         'Campari, vermut, soda',
    'menu.item.caipirinha':                 'Caipirinha',
    'menu.item.caipirinha.desc':            'Cachaça, llima, sucre',
    'menu.item.mojito':                     'Mojito',
    'menu.item.mojito.desc':                'Ron, llimona, sucre, menta, soda',
    'menu.item.moscow':                     'Moscow Mule',
    'menu.item.moscow.desc':                'Vodka, llimona, ginger beer',
    'menu.item.darkstormy':                 'Dark &amp; Stormy',
    'menu.item.darkstormy.desc':            'Ron, ginger beer',
    'menu.item.paloma':                     'Paloma',
    'menu.item.paloma.desc':                'Tequila, llimona, pomelo',
    'menu.item.negroni':                    'Negroni',
    'menu.item.negroni.desc':               'Gin, Campari, vermut',
    'menu.item.espmartini':                 'Espresso Martini',
    'menu.item.espmartini.desc':            'Vodka, licor de cafè, vainilla, espresso',
    'menu.item.devilsmarg':                 'Devil&rsquo;s Margarita',
    'menu.item.devilsmarg.desc':            'Tequila, triple sec, llimona, vi negre sec',
    'menu.item.fernet':                     'Fernet cola',
    'menu.item.gin':                        'Gin',
    'menu.item.ron':                        'Ron',
    'menu.item.whiskey':                    'Whisky',
    'menu.item.vodka':                      'Vodka',
    'menu.item.tequila':                    'Tequila / Mezcal',
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
    'nav.logo.aria':   'FLORA — Home',

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
    'cookie.text':        'We use cookies to analyse traffic and improve your experience.',
    'cookie.accept':      'Accept All',
    'cookie.necessary':   'Necessary Only',
    'cookie.banner.aria': 'Cookie consent',

    /* Find us — map */
    'find.map.aria': 'Map of FLORA Cafè at Passeig de Pujades, Barcelona',

    /* WhatsApp */
    'whatsapp.message': 'Hello, I\'d like to make a reservation at FLORA.',
    'whatsapp.aria':    'Reserve via WhatsApp',

    /* Misc */
    'backtop.aria': 'Back to top',
    'skip.nav':     'Skip to main content',

    /* Menu — tabs */
    'menu.tab.cafe':   'COFFEE',
    'menu.tab.dulces': 'SWEET',

    /* Menu — sub-category headings */
    'menu.cat.cafe':       'COFFEE · TEA · INFUSIONS',
    'menu.cat.cold':       'DRINKS',
    'menu.cat.dulces':     'HOMEMADE SWEETS',
    'menu.cat.zumos':      'FRESH JUICES',
    'menu.cat.tostadas':   'TOASTS',
    'menu.cat.sandwiches': 'SANDWICHES',
    'menu.cat.benedictos': 'EGGS BENEDICT',
    'menu.cat.especial':   'WINTER SPECIAL',
    'menu.cat.tapas':      'TAPAS',
    'menu.cat.ensaladas':  'SALADS',
    'menu.cat.extras':     'EXTRAS',
    'menu.cat.vinos':      'WINES',
    'menu.cat.tintos':     'RED WINES',
    'menu.cat.blancos':    'WHITE WINES',
    'menu.cat.rosado':     'ROSÉ',
    'menu.cat.cava':       'CAVA',
    'menu.cat.cervezas':   'BEERS',
    'menu.cat.barril':     'DRAUGHT',
    'menu.cat.botellas':   'BOTTLES',
    'menu.cat.ogham':      'OGHAM CANS — Craft, gluten-free',
    'menu.cat.aperitivos': 'APERITIFS',
    'menu.cat.cocktails':  'COCKTAILS',

    /* Menu — notes */
    'menu.note.cafe.addons': 'Oat / soy / lactose-free milk +0.20 · Vanilla / caramel syrup +1',
    'menu.note.sandwiches':  'Served with rustic potatoes, sweet potatoes +1',
    'menu.note.benedictos':  'From 9.30am to 4pm — Two poached eggs on English muffin with hollandaise sauce, served with rustic potatoes and salad, sweet potatoes +1',

    /* Menu — COFFEE */
    'menu.item.cafe.solo':            'Espresso',
    'menu.item.cafe.cortado':         'Cortado',
    'menu.item.cafe.conleche':        'White coffee',
    'menu.item.cafe.latte':           'Latte',
    'menu.item.cafe.americano':       'Americano',
    'menu.item.cafe.cappuccino':      'Cappuccino',
    'menu.item.cafe.carajillo':       'Carajillo',
    'menu.item.cafe.carajillo.desc':  'Baileys · Whiskey · Rum',
    'menu.item.cafe.iced':            'Iced Latte',
    'menu.item.cafe.doble':           'Double espresso',
    'menu.item.cafe.flatwhite':       'Flat White',
    'menu.item.cafe.chai':            'Chai Latte',
    'menu.item.cafe.dirtychai':       'Dirty Chai Latte',
    'menu.item.cafe.matcha':          'Matcha Latte',
    'menu.item.cafe.chocolate':       'Hot chocolate',
    'menu.item.cafe.te':              'Teas &amp; infusions',
    'menu.item.cafe.te.desc':         'Chamomile · Floral Earl Grey · Green tea · Tropical Rooibos · Red tea · Pennyroyal mint',
    'menu.item.agua':                 'Still water',
    'menu.item.agua.gas':             'Sparkling water',
    'menu.item.fontdor':              'Font d&rsquo;Or water',
    'menu.item.vichy':                'Vichy Catalán',
    'menu.item.refrescos':            'Ginger Beer · Lemonade · Fanta · Pomelo · Fuze Tea · Aquarius · Cacaolat',

    /* Menu — SWEET */
    'menu.item.granola':               'Homemade granola',
    'menu.item.granola.desc':          'With natural yoghurt, homemade granola, seasonal fruit and honey',
    'menu.item.zanahoria':             'Carrot cake',
    'menu.item.zanahoria.desc':        'Glazed with homemade granola',
    'menu.item.banana':                'Banana bread',
    'menu.item.banana.desc':           'With dulce de leche and caramelised banana',
    'menu.item.brownie':               'Brownie',
    'menu.item.brownie.desc':          'With vanilla ice cream and seasonal fruit',
    'menu.item.cookie':                'Chocolate chunk cookie XL',
    'menu.item.croissant.dulce':       'Sweet croissant',
    'menu.item.croissant.dulce.desc':  'With Nutella or dulce de leche',
    'menu.item.limonada':              'Homemade lemonade',
    'menu.item.naranja':               'Orange juice',
    'menu.item.fresa':                 'Strawberry &amp; banana',
    'menu.item.fresa.desc':            '45cl · With milk or orange juice +1',
    'menu.item.verde':                 'Green',
    'menu.item.verde.desc':            '45cl · Apple, cucumber and celery',
    'menu.item.vitamina':              'Vitamin',
    'menu.item.vitamina.desc':         '45cl · Orange, carrot and ginger',

    /* Menu — BRUNCH */
    'menu.item.toast.aguacate':        'Avocado toast',
    'menu.item.toast.aguacate.desc':   'Avocado, cherry tomato, feta and chives · +two poached eggs or salmon +3',
    'menu.item.toast.setas':           'Mushroom toast',
    'menu.item.toast.setas.desc':      'Mushroom mix in soy sauce reduction with avocado',
    'menu.item.toast.burrata':         'Burrata toast',
    'menu.item.toast.burrata.desc':    'Buffalo burrata, tomato, basil and balsamic cream',
    'menu.item.toast.serrano':         'Serrano ham toast',
    'menu.item.toast.serrano.desc':    'Serrano ham, cream cheese, rocket, cherry tomato and pesto',
    'menu.item.bikini':                'Grilled sandwich',
    'menu.item.bikini.desc':           'York ham and double edam cheese',
    'menu.item.flora.croissant':       'Flora croissant',
    'menu.item.flora.croissant.desc':  'York ham, edam cheese, rocket, avocado and cherry tomato',
    'menu.item.bagel':                 'Salmon bagel',
    'menu.item.bagel.desc':            'Seeded bagel with smoked salmon, avocado, rocket, dill cream cheese and capers',
    'menu.item.brioche':               'Chicken brioche',
    'menu.item.brioche.desc':          'Brioche with roasted chicken, melted cheese, bacon, caramelised onion, rocket, tomato and house pink mayo',
    'menu.item.grilled':               'Triple grilled cheese',
    'menu.item.grilled.desc':          'Rustic bread with edam, brie and blue cheese',
    'menu.item.benedict.salmon':       'Salmon',
    'menu.item.benedict.serrano':      'Serrano ham',
    'menu.item.benedict.aguacate':     'Avocado',
    'menu.item.sopa':                  'Roasted tomato soup',
    'menu.item.sopa.desc':             'Served with cheese grilled sandwich',

    /* Menu — TAPAS */
    'menu.item.olivas':                'Olives',
    'menu.item.frutos':                'Mixed nuts',
    'menu.item.pan.tomate':            'Bread with tomato',
    'menu.item.bravas':                'Rustic patatas bravas',
    'menu.item.boniatos':              'Sweet potatoes',
    'menu.item.dips':                  'Three dips plate',
    'menu.item.dips.desc':             'Beetroot hummus, guacamole and tzatziki served with crudités and flatbread',
    'menu.item.nachos':                'Nachos',
    'menu.item.nachos.desc':           'Corn tortillas, cheddar, guacamole, yoghurt, jalapeños and pico de gallo · with roast chicken +2.5',
    'menu.item.empanadas':             'Empanadas',
    'menu.item.empanadas.desc':        'Beef · Cheese and onion · Spinach',
    'menu.item.quesos':                'Cheese board',
    'menu.item.quesos.desc':           'Brie, Roquefort, Manchego and Edam with roasted grapes, seasonal fruit, walnuts and toasted bread',
    'menu.item.ensalada.cabra':        'Goat\'s cheese',
    'menu.item.ensalada.cabra.desc':   'Rocket and spinach with goat\'s cheese, roasted sweet potato, caramelised onion, apple, walnuts, raisins and balsamic cream',
    'menu.item.ensalada.pollo':        'Chicken',
    'menu.item.ensalada.pollo.desc':   'Mâroûn, roasted chicken, avocado, cherry tomato, mozzarella, pistachios and honey mustard dressing',
    'menu.item.ensalada.burrata':      'Buffalo burrata',
    'menu.item.ensalada.burrata.desc': 'Rocket and spinach with buffalo burrata, roasted grapes, courgette, pistachios, mint and balsamic cream',
    'menu.item.extra.aguacate':        'Avocado',
    'menu.item.extra.bacon':           'Bacon',
    'menu.item.extra.salmon':          'Salmon',
    'menu.item.extra.feta':            'Feta',
    'menu.item.extra.pollo':           'Chicken',
    'menu.item.extra.burrata':         'Burrata',
    'menu.item.extra.serrano':         'Serrano ham',
    'menu.item.extra.setas':           'Mushrooms',

    /* Menu — DRINKS */
    'menu.item.vino.caliente':              'Hot wine Glögg',
    'menu.item.vino.particular.tinto':      'Particular',
    'menu.item.vino.particular.tinto.desc': 'Cariñena · Garnacha',
    'menu.item.vino.fulanito':              'Fulanito',
    'menu.item.vino.particular.blanco':     'Particular',
    'menu.item.vino.afortunado':            'Afortunado',
    'menu.item.vino.particular.rosado':     'Particular',
    'menu.item.vino.particular.rosado.desc':'Cariñena · Garnacha',
    'menu.item.cava.terra':                 'Terra terrae',
    'menu.item.cava.terra.desc':            'Organic brut',
    'menu.item.moritz7':                    'Moritz 7',
    'menu.item.radler':                     'Radler',
    'menu.item.epidor':                     'Epidor triple malt',
    'menu.item.aigua.moritz':               'Moritz non-alcoholic',
    'menu.item.sinalcohol':                 'Non-alcoholic',
    'menu.item.corona':                     'Corona',
    'menu.item.ambar':                      'Ambar',
    'menu.item.singluten':                  'Gluten-free',
    'menu.item.ogham.pilsen':               'Pilsen',
    'menu.item.ogham.red':                  'Red Ale',
    'menu.item.ogham.ipa':                  'IPA',
    'menu.item.spritz':                     'Spritz',
    'menu.item.sangria':                    'Sangria',
    'menu.item.sangria.cava':               'Cava sangria',
    'menu.item.mimosa':                     'Mimosa',
    'menu.item.mimosa.desc':                'Glass / 1l',
    'menu.item.vermut.cinzano':             'Cinzano vermouth',
    'menu.item.vermut1757':                 '1757 Reserva vermouth',
    'menu.item.americano.bev':              'Americano',
    'menu.item.americano.bev.desc':         'Campari, vermouth, soda',
    'menu.item.caipirinha':                 'Caipirinha',
    'menu.item.caipirinha.desc':            'Cachaça, lime, sugar',
    'menu.item.mojito':                     'Mojito',
    'menu.item.mojito.desc':                'Rum, lemon, sugar, mint, soda',
    'menu.item.moscow':                     'Moscow Mule',
    'menu.item.moscow.desc':                'Vodka, lemon, ginger beer',
    'menu.item.darkstormy':                 'Dark &amp; Stormy',
    'menu.item.darkstormy.desc':            'Rum, ginger beer',
    'menu.item.paloma':                     'Paloma',
    'menu.item.paloma.desc':                'Tequila, lemon, grapefruit',
    'menu.item.negroni':                    'Negroni',
    'menu.item.negroni.desc':               'Gin, Campari, vermouth',
    'menu.item.espmartini':                 'Espresso Martini',
    'menu.item.espmartini.desc':            'Vodka, coffee liqueur, vanilla, espresso',
    'menu.item.devilsmarg':                 'Devil&rsquo;s Margarita',
    'menu.item.devilsmarg.desc':            'Tequila, triple sec, lemon, dry red wine',
    'menu.item.fernet':                     'Fernet cola',
    'menu.item.gin':                        'Gin',
    'menu.item.ron':                        'Rum',
    'menu.item.whiskey':                    'Whiskey',
    'menu.item.vodka':                      'Vodka',
    'menu.item.tequila':                    'Tequila / Mezcal',
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
