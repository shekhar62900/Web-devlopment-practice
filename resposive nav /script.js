// Dark Mode Toggle
const toggleSwitch = document.getElementById('mode-toggle');
toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});