const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const toggleTheme = document.getElementById("toggle-theme");
const body = document.body;

// Toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dark Mode Toggle
toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleTheme.innerHTML = body.classList.contains("dark") 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});