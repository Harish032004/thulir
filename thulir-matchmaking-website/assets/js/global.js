(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const panel = document.querySelector('.mobile-panel');
  const close = document.querySelector('.mobile-close');
  const links = document.querySelectorAll('.mobile-links a');
  let lastFocused = null;

  const focusables = () => panel ? [...panel.querySelectorAll('a[href],button:not([disabled])')] : [];

  const setMenu = (open) => {
    if (!toggle || !menu) return;
    if (open) lastFocused = document.activeElement;
    toggle.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    if (open) setTimeout(() => (close || focusables()[0])?.focus(), 80);
    else lastFocused?.focus?.();
  };

  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  close?.addEventListener('click', () => setMenu(false));
  menu?.addEventListener('click', (event) => { if (event.target === menu) setMenu(false); });
  links.forEach(link => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 1020) setMenu(false); });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.classList.contains('is-open')) setMenu(false);
    if (event.key !== 'Tab' || !menu?.classList.contains('is-open')) return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .1, rootMargin: '0px 0px -30px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
})();
