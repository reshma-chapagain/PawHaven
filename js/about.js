// about.js — page logic for About Us

document.addEventListener('DOMContentLoaded', () => {
  initStatsCounter();
  initMissionScroll();
  initMobileNav();
});


function initStatsCounter() {
  const statsEl = document.getElementById('stats');
  if (!statsEl) return;

  let done = false;
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || done) return;
    done = true;

    document.querySelectorAll('.num[data-target]').forEach((el, i) => {
      const target = +el.dataset.target;
      setTimeout(() => {
        const t0 = performance.now();
        (function tick(now) {
          const p = Math.min((now - t0) / 1400, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(eased * target).toLocaleString() + '+';
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      }, i * 120);
    });
  }, { threshold: 0.3 }).observe(statsEl);
}


function initMissionScroll() {
  const link = document.querySelector('a[href="#mission"]');
  const target = document.getElementById('mission');
  if (!link || !target) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
}


function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
