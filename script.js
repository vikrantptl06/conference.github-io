document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburgerMenu');
    const nav = document.querySelector('.floating-nav');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('active');
            console.log("Toggled active class:", nav.classList.contains('active')); // Debug log
        });

        // Close menu when a navigation link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                console.log("Menu closed on link click");
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                nav.classList.remove('active');
            }
        });

        // Close menu on resize (optional)
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
            }
        });
    } else {
        console.log("Hamburger icon not found!");
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.getElementById('hamburgerMenu');
//     const nav = document.querySelector('.floating-nav');
//     const navLinks = document.querySelectorAll('.nav-links'); // Select all navigation links

//     if (hamburger) {
//         hamburger.addEventListener('click', function() {
//             nav.classList.toggle('active');
//             console.log("Toggled active class:", nav.classList.contains('active')); // Debug log
//         });
//     } else {
//         console.log("Hamburger icon not found!");
//     }

//     // Close menu when a navigation link is clicked
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             nav.classList.remove('active');
//             console.log("Menu closed on link click"); // Debug log
//         });
//     });
// });

// document.getElementById('hamburgerMenu').addEventListener('click', function() {
//     document.querySelector('.floating-nav').classList.toggle('active');
// });

// // Close menu when clicking outside
// document.addEventListener('click', function(event) {
//     const nav = document.querySelector('.floating-nav');
//     const isClickInside = nav.contains(event.target);
//     if (!isClickInside && nav.classList.contains('active')) {
//         nav.classList.remove('active');
//     }
// });

// // Close menu on resize (optional)
// window.addEventListener('resize', function() {
//     if (window.innerWidth > 992) {
//         document.querySelector('.floating-nav').classList.remove('active');
//     }
// });

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 4000); // Change slide every 3 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

