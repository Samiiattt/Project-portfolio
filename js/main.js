// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('nav-open', !isOpen);
  });

  // Close the menu when a nav link is clicked (useful for single-page jumps)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-open');
    });
  });

  // Close the menu if the user clicks outside it
  document.addEventListener('click', (e) => {
    const isClickInside = navToggle.contains(e.target) || navLinks.contains(e.target);
    if (!isClickInside && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-open');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-open');
      navToggle.focus();
    }
  });
}