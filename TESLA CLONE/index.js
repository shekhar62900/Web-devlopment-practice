document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Search bar animation
    const searchBar = document.querySelector('.search-bar');
    const searchContainer = document.querySelector('.search-container');

    searchBar.addEventListener('focus', () => {
        searchContainer.classList.add('active');
        searchBar.style.width = '250px';
    });

    searchBar.addEventListener('blur', () => {
        if (!searchBar.value) {
            searchContainer.classList.remove('active');
            searchBar.style.width = '200px';
        }
    });

    // Icon click animation
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            icon.classList.add('clicked');
            setTimeout(() => {
                icon.classList.remove('clicked');
            }, 300);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for future JavaScript functionality
    console.log('Product section loaded');
});