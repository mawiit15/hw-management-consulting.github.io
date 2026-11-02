/* =========================================================
   Effekte
   - Aktuelles Jahr im Fußbereich
   - Sanftes Einblenden von Elementen beim Scrollen
   ========================================================= */

(function () {
  /* ---------- Jahr im Copyright ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Einblenden beim Scrollen ----------
     Welche Elemente eingeblendet werden, steht in REVEAL_SELECTOR.
     Zum Abschalten einfach die Zeile leeren: const REVEAL_SELECTOR = ''; */
  const REVEAL_SELECTOR = '.section-head, .intro-grid > div, .banner, .card, .about-media, .about-text';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!REVEAL_SELECTOR || reduceMotion || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  elements.forEach(function (el) { el.classList.add('reveal'); });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  elements.forEach(function (el) { observer.observe(el); });
})();
