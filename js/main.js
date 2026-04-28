/* ====================================================
   iPhone Uno Palermo — main.js
   Toda la config editable vive en CONFIG. Cambiá valores
   acá y el sitio se actualiza solo. Más detalles en el
   README.md, sección "Cómo editar lo que cambia seguido".
   ==================================================== */

// ---------- 1. CONFIG ----------
// Editá estos valores para actualizar el sitio.
const CONFIG = {

  // WhatsApp en formato internacional, sin "+", sin espacios, sin guiones.
  // Ejemplo: para +54 9 11 5555-1234 escribí "5491155551234".
  whatsapp: "5491130187297",

  // Mostrado al usuario (formato legible). Lo de arriba va al link wa.me.
  whatsappPretty: "+54 9 11 3018-7297",

  // Dirección física (texto que se ve en pantalla).
  address: "Palermo, CABA · dirección al confirmar turno",

  // URL para abrir en Google Maps cuando el usuario clickea "Cómo llegar".
  // Cuando tengas la dirección final, reemplazá esto por:
  // https://www.google.com/maps/search/?api=1&query=DIRECCION+EXACTA
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Palermo+Buenos+Aires",

  // Horario de atención (texto libre).
  hours: "09:00 / 22:00",

  // Instagram handle (sin @).
  instagram: "iphoneuno_palermo",

  // Catálogo. Precios en USD, valores por unidad según cantidad comprada.
  // x1 = 1 unidad, x5 = comprando 5, x10 = comprando 10.
  catalog: [
    { model: "iPhone 13",      capacity: "128GB",  image: "assets/img/iphone13.jpeg",price: { x1: 370, x5: 340, x10: 320 } },
    { model: "iPhone 13 Pro",  capacity: "128GB",image: "assets/img/iphone13Pro.jpeg", price: { x1: 450, x5: 430, x10: 415 } },
    { model: "iPhone 14",      capacity: "128GB", image: "assets/img/iphone14.jpeg",price: { x1: 420, x5: 400, x10: 380 } },
    { model: "iPhone 14 Pro",  capacity: "128GB", image: "assets/img/iphone14Pro.jpeg",price: { x1: 520, x5: 500, x10: 480 } },
    { model: "iPhone 15",      capacity: "128GB", image: "assets/img/iphone15.png",price: { x1: 510, x5: 500, x10: 480 } },
    { model: "iPhone 16", capacity: "128GB", image: "assets/img/iphone15.png", price: { x1: null, x5: null, x10: null } },
    { model: "iPhone 16 Pro", capacity: "128GB", image: "assets/img/iphone15.png", price: { x1: null, x5: null, x10: null } },
  ],

  // Mensajes pre-armados de WhatsApp por contexto.
  // {model} se reemplaza por el modelo cuando aplica.
  whatsappMessages: {
    default: "Hola, te escribo desde la web de iPhone Uno Palermo.",
    hero:    "Hola, quiero cotizar un iPhone. ¿Qué stock tienen?",
    tradein: "Hola, quiero hacer un trade-in. Te mando fotos y modelo de mi equipo actual.",
    visit:   "Hola, quiero coordinar una visita al local en Palermo.",
    footer:  "Hola, te escribo desde la web.",
    product: "Hola, me interesa el {model}. ¿Tienen stock?",
  },
};

// Tipo de cambio USD → ARS para el toggle "ARS aprox".
// Actualizalo a mano cuando se mueva el blue. Es público y editable a propósito.
const EXCHANGE_RATE = 1200;


// ---------- 2. WhatsApp helpers ----------
function buildWhatsAppUrl(messageKey = "default", vars = {}) {
  let template = CONFIG.whatsappMessages[messageKey] || CONFIG.whatsappMessages.default;
  for (const [key, value] of Object.entries(vars)) {
    template = template.replaceAll(`{${key}}`, value);
  }
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(template)}`;
}

function bindWhatsAppLinks() {
  document.querySelectorAll('[data-wa]').forEach((el) => {
    const key = el.getAttribute('data-wa');
    const model = el.getAttribute('data-model') || '';
    el.href = buildWhatsAppUrl(key, { model });
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}


// ---------- 3. Catálogo ----------
let currentCurrency = 'USD';

function formatPrice(usdAmount, currency) {
  if (currency === 'ARS') {
    const ars = Math.round(usdAmount * EXCHANGE_RATE);
    return new Intl.NumberFormat('es-AR').format(ars);
  }
  return new Intl.NumberFormat('en-US').format(usdAmount);
}

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.catalog.map((item) => `
    <article class="product-card">
      <header class="product-header">

        <div class="product-text">
          <h3 class="product-name">${item.model}</h3>
          <p class="product-capacity">${item.capacity}</p>
        </div>
      
        <div class="product-image-container">
          <img src="${item.image}" alt="${item.model}" class="product-image">
        </div>
      
      </header>
      <div class="price-table" data-prices='${JSON.stringify(item.price)}'>
      ${["x1", "x5", "x10"].map((key) => {
        const value = item.price[key];
        const hasPrice = value !== null && value !== undefined;
    
        return `
          <div class="price-cell">
            <span class="price-label">${key}</span>
            <span class="price-value" data-price="${hasPrice ? value : ""}">
              <span class="price-currency-prefix"></span>
              <span class="price-amount">${hasPrice ? formatPrice(value, 'USD') : "-"}</span>
              <span class="price-currency">${hasPrice ? " USD" : ""}</span>
            </span>
          </div>
        `;
      }).join("")}
    </div>
    
    <a href="#" class="product-cta" data-wa="product" data-model="${item.model} ${item.capacity}">
      Consultar
      <span aria-hidden="true">→</span>
    </a>
    </article>
  `).join('');
}


// ---------- 4. Toggle USD / ARS con animación de números ----------
function animateNumber(el, fromValue, toValue, duration = 600) {
  const start = performance.now();
  const formatter = (n) => new Intl.NumberFormat(currentCurrency === 'ARS' ? 'es-AR' : 'en-US').format(Math.round(n));

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = fromValue + (toValue - fromValue) * eased;
    el.textContent = formatter(value);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function setCurrency(newCurrency) {
  if (newCurrency === currentCurrency) return;
  const previousCurrency = currentCurrency;
  currentCurrency = newCurrency;

  // Toggle UI — el estilo lo maneja CSS vía aria-selected
  document.querySelectorAll('[data-currency]').forEach((btn) => {
    const isSelected = btn.getAttribute('data-currency') === newCurrency;
    btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  });

  // Note de aclaración ARS
  const note = document.getElementById('ars-note');
  if (note) note.classList.toggle('hidden', newCurrency !== 'ARS');

  // Anima cada precio
  document.querySelectorAll('.price-value').forEach((el) => {
    const usd = parseFloat(el.getAttribute('data-price'));
    const fromValue = previousCurrency === 'ARS' ? usd * EXCHANGE_RATE : usd;
    const toValue   = newCurrency === 'ARS' ? usd * EXCHANGE_RATE : usd;
    const amountEl  = el.querySelector('.price-amount');
    const currEl    = el.querySelector('.price-currency');
    const prefixEl  = el.querySelector('.price-currency-prefix');

    if (currEl) currEl.textContent = ` ${newCurrency === 'ARS' ? 'ARS' : 'USD'}`;
    if (prefixEl) prefixEl.textContent = newCurrency === 'ARS' ? '$ ' : '';

    if (amountEl) animateNumber(amountEl, fromValue, toValue);
  });
}

function bindCurrencyToggle() {
  document.querySelectorAll('[data-currency]').forEach((btn) => {
    btn.addEventListener('click', () => setCurrency(btn.getAttribute('data-currency')));
  });
}


// ---------- 5. Datos del negocio en el DOM ----------
function injectBusinessData() {
  const addressEl = document.getElementById('address-line');
  if (addressEl) addressEl.textContent = CONFIG.address;

  const waEl = document.getElementById('whatsapp-line');
  if (waEl) waEl.textContent = CONFIG.whatsappPretty;

  const mapsCta = document.getElementById('maps-cta');
  if (mapsCta) mapsCta.href = CONFIG.mapsUrl;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


// ---------- 6. Nav: comportamiento al scrollear ----------
function bindNavBehavior() {
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');
  if (!nav || !hero) return;

  // Nav sobre hero (Ink) hasta que sale del viewport
  const heroObserver = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('nav-on-dark', entry.isIntersecting && entry.intersectionRatio > 0.4);
  }, { threshold: [0, 0.4, 1] });
  heroObserver.observe(hero);

  // Estado scrolled (con blur Bone) cuando el scroll pasa de 80px
  let lastScrolled = false;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 80;
    if (scrolled !== lastScrolled) {
      nav.classList.toggle('scrolled', scrolled);
      lastScrolled = scrolled;
    }
  }, { passive: true });
}


// ---------- 7. GSAP — reveals al entrar en viewport ----------
function bindReveals() {
  if (!window.gsap || !window.ScrollTrigger) {
    // Fallback sin GSAP: revelar todo de una
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => el.classList.add('is-revealed'),
    });
  });
}


// ---------- 8. Cursor follower ----------
function bindCursorFollower() {
  // Solo en pointer fino
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor-follower';
  document.body.appendChild(cursor);

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    cursor.classList.add('is-active');
  });

  document.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));

  // Lerp suave
  function tick() {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }
  tick();

  // Hover sobre cards y CTAs
  const hoverSelectors = '.product-card, .product-cta, a[data-wa], #nav-cta, #toggle-usd, #toggle-ars, details summary, #maps-cta';
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelectors)) cursor.classList.add('is-hover');
  });
  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelectors)) cursor.classList.remove('is-hover');
  });
}

function bindMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  btn.addEventListener('click', () => {
    btn.classList.toggle('is-open');
    menu.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
  });

  overlay.addEventListener('click', () => {
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
  });
}

// ---------- 9. Init ----------
document.addEventListener('DOMContentLoaded', () => {
  injectBusinessData();
  renderCatalog();
  bindCurrencyToggle();
  bindWhatsAppLinks(); // Después de renderCatalog porque las cards generan más [data-wa]
  bindNavBehavior();
  bindReveals();
  bindCursorFollower();
  bindMobileMenu();
});
