// about.js — page logic for About Us

document.addEventListener('DOMContentLoaded', () => {
  initStatsCounter();
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