// grabs the hamburger button and nav links from the DOM
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// listens for a click on hamburger, toggles 'open' class on nav
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// closes nav when any link is clicked (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// highlights the current page's nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.querySelectorAll('a:not(.btn-adopt)').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});