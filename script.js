const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileBtn = document.getElementById('close-mobile');
function closeMobile() {
  if (!mobileMenu) return;
  mobileMenu.classList.add('translate-y-full');
  document.body.style.overflow = '';
  if (burger) burger.setAttribute('aria-expanded', 'false');
}
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-full');
    document.body.style.overflow = 'hidden';
    burger.setAttribute('aria-expanded', 'true');
  });
}
if (closeMobileBtn) closeMobileBtn.addEventListener('click', closeMobile);
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', closeMobile));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobile();
});

const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const heroCalcBtn = document.getElementById('hero-calc-btn');
if (heroCalcBtn) {
  heroCalcBtn.addEventListener('click', e => {
    e.preventDefault();
    const calc = document.getElementById('calculator');
    if (calc) calc.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

const headerCallbackBtn = document.getElementById('header-callback');
if (headerCallbackBtn) {
  headerCallbackBtn.addEventListener('click', e => {
    e.preventDefault();
    const calc = document.getElementById('calculator');
    if (calc) calc.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('#faq-list .faq').forEach(faq => {
  const question = faq.querySelector('.faq-question');
  if (!question) return;
  question.addEventListener('click', () => toggleFaq(faq));
  question.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(faq);
    }
  });
});
function toggleFaq(el) {
  if (el.classList.contains('faq-open')) {
    el.classList.remove('faq-open');
  } else {
    document.querySelectorAll('#faq-list .faq').forEach(f => f.classList.remove('faq-open'));
    el.classList.add('faq-open');
  }
}

document.querySelectorAll('.nav-services').forEach(ns => {
  const btn = ns.querySelector('button');
  if (!btn) return;
  btn.setAttribute('aria-haspopup', 'true');
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', e => {
    e.preventDefault();
    const isOpen = ns.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});
document.addEventListener('click', e => {
  document.querySelectorAll('.nav-services.open').forEach(ns => {
    if (!ns.contains(e.target)) {
      ns.classList.remove('open');
      const b = ns.querySelector('button');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  });
});
