// Toggle menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Toggle search box
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchBox.focus();
});

// Toggle dark mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
});



document.addEventListener('DOMContentLoaded', function() {
    // Get all like buttons
    const likeButtons = document.querySelectorAll('.like-button');

    // Add click event to each button
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle 'liked' class
            this.classList.toggle('liked');

            // Toggle icon style
            const icon = this.querySelector('i');
            if (this.classList.contains('liked')) {
                icon.classList.remove('far'); // Remove regular
                icon.classList.add('fas'); // Add solid
            } else {
                icon.classList.remove('fas'); // Remove solid
                icon.classList.add('far'); // Add regular
            }
        });
    });
});