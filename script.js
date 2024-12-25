document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const nav = document.querySelector('.floating-nav');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            console.log("Toggled active class:", nav.classList.contains('active')); // Debug log
        });
    } else {
        console.log("Hamburger icon not found!");
    }
});
