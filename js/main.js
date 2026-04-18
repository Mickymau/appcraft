/* ============================================
   APP|CRAFT — main.js
   ============================================ */

'use strict';

// --- Nav scroll ---
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Zamknij po kliknięciu w link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- Smooth scroll dla anchor linków ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// --- Reveal on scroll (IntersectionObserver) ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  // Kart procesu nie inicjalizuj tutaj — obsługuje je processObserver
  if (el.classList.contains('process-card')) return;
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  revealObserver.observe(el);
});

// --- Staggered reveal dla kart realizacji ---
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.proj-card');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 120);
      });
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

const grid = document.querySelector('.projects__grid');
if (grid) cardObserver.observe(grid);

// --- Staggered reveal dla kart procesu ---
const processObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.process-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 100);
      });
      processObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

const processGrid = document.querySelector('.process__grid');
if (processGrid) {
  // Ustaw startowy stan przed animacją
  processGrid.querySelectorAll('.process-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
  });
  processObserver.observe(processGrid);
}

// --- Flip animation na statystykach ---
function flipStat(el) {
  const original = el.textContent.trim();
  const parts = original.match(/(\d+|[^\d]+)/g) || [original];

  // Oblicz finalną wysokość linii PRZED modyfikacją
  const lineH = el.getBoundingClientRect().height || 32;

  el.innerHTML = '';
  // Wyrównaj kontener do baseline
  el.style.display = 'flex';
  el.style.alignItems = 'flex-end';

  parts.forEach(part => {
    if (/^\d+$/.test(part)) {
      part.split('').forEach(digit => {
        const wrap = document.createElement('span');
        wrap.style.display = 'inline-block';
        wrap.style.overflow = 'hidden';
        wrap.style.height = lineH + 'px';
        wrap.style.verticalAlign = 'bottom';
        wrap.style.lineHeight = lineH + 'px';

        const inner = document.createElement('span');
        inner.style.display = 'flex';
        inner.style.flexDirection = 'column';

        const steps = 11;
        for (let i = 0; i < steps; i++) {
          const d = document.createElement('span');
          d.style.height = lineH + 'px';
          d.style.lineHeight = lineH + 'px';
          d.style.display = 'block';
          d.style.textAlign = 'center';
          d.textContent = i < steps - 1 ? Math.floor(Math.random() * 10) : digit;
          inner.appendChild(d);
        }

        wrap.appendChild(inner);
        el.appendChild(wrap);

        let step = 0;
        const interval = setInterval(() => {
          step++;
          inner.style.transform = `translateY(-${step * lineH}px)`;
          inner.style.transition = `transform ${step < steps - 1 ? '0.1s' : '0.2s'} ease-in-out`;
          if (step >= steps - 1) clearInterval(interval);
        }, 110);
      });
    } else {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.verticalAlign = 'bottom';
      span.style.lineHeight = lineH + 'px';
      span.textContent = part;
      el.appendChild(span);
    }
  });
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll('[data-flip]');
      stats.forEach((stat, i) => {
        setTimeout(() => flipStat(stat), i * 180);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero__stats');
if (heroStats) statsObserver.observe(heroStats);
