document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const nav = document.querySelector('.floating-nav');
    const navLinks = document.querySelectorAll('.nav-links a'); // Select all navigation links

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            console.log("Toggled active class:", nav.classList.contains('active')); // Debug log
        });
    } else {
        console.log("Hamburger icon not found!");
    }

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            console.log("Menu closed on link click"); // Debug log
        });
    });
});
