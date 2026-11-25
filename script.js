(() => { 'use strict';
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const backTop = document.querySelector('[data-back-top]');
  const year = document.querySelector('[data-year]');
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');

  if (year) year.textContent = new Date().getFullYear();

  const portrait = document.querySelector('.portrait-frame');
  const monogram = document.querySelector('.portrait-monogram');
  if (portrait) {
    portrait.style.backgroundImage = 'url("https://storage.googleapis.com/hostinger-agents-public-assets-prod/assets/3575dc03-6c8d-47b7-8d0c-bf4e63c3214c.jpg")';
    portrait.style.backgroundSize = 'cover';
    portrait.style.backgroundPosition = 'center 18%';
    portrait.style.backgroundRepeat = 'no-repeat';
    portrait.setAttribute('role', 'img');
    portrait.setAttribute('aria-label', 'Foto profil Reggia Lovvita Mulyasari');
  }
  if (monogram) monogram.hidden = true;

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
    backTop?.classList.toggle('is-visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('is-open');
  }));

  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) status.textContent = 'Mohon lengkapi nama, email, dan pesan Anda.';
      return;
    }
    if (status) status.textContent = 'Form sudah tervalidasi. Hubungkan endpoint email Anda di script.js sebelum website dipublikasikan sebagai form produksi.';
  });
})();
