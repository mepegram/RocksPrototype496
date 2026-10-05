document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.nav-item').forEach((item) => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');

    if (!link || !dropdown) return;

    link.addEventListener('click', (event) => {
      if (window.innerWidth <= 820) {
        event.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820 && nav) {
      nav.classList.remove('is-open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('open'));
    }
  });
});
