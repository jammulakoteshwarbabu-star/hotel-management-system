const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('form').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const message = form.querySelector('.form-message');
  if (message) message.textContent = 'Thank you — we’ll be in touch shortly.';
  else { const button = form.querySelector('button'); button.textContent = 'You’re on the list ✓'; }
}));
