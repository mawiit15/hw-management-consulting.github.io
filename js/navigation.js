/* =========================================================
   Navigation
   - Mobiles Menü öffnen/schließen
   - Kopfbereich beim Scrollen hervorheben
   - Aktuellen Abschnitt in der Navigation markieren
   ========================================================= */

(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  /* ---------- Mobiles Menü ---------- */
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Menü nach Klick auf einen Link schließen
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    // Menü mit der Escape-Taste schließen
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  /* ---------- Kopfbereich beim Scrollen ---------- */
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Aktiven Abschnitt markieren ---------- */
  const links = nav ? Array.from(nav.querySelectorAll('a[href*="#"]')) : [];
  const sections = links
    .map(function (link) { return document.getElementById(link.hash.slice(1)); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle('is-active', link.hash === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
