const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navLinks.classList.toggle('open', open);
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}));
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(b => {
    const active = b === button;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));
document.querySelector('#year').textContent = String(new Date().getFullYear());
// A placeholder email should not open an invalid recipient. Configure it before launch.
document.querySelectorAll('[data-placeholder-email]').forEach(link => link.addEventListener('click', event => {
  if (link.href.includes('YOUR_EMAIL')) {
    event.preventDefault();
    alert('Setup required: replace YOUR_EMAIL@example.com with your real professional email address in index.html.');
  }
}));


