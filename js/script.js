const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

// Auto Slider
// Wait for the page to load
window.addEventListener('load', function () {
    // Get all the slide radio buttons
    var slides = document.querySelectorAll('input[name="slider"]');

    // Set the index of the currently displayed slide
    var currentSlide = 0;

    // Function to move to the next slide
    function nextSlide() {
        // Uncheck the current slide
        slides[currentSlide].checked = false;

        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Check the new slide
        slides[currentSlide].checked = true;
    }

    // Auto slide every 1.5 seconds
    setInterval(nextSlide, 2500);
});

const isMobile = /Android|iPhone/i.test(navigator.userAgent);

const sr = ScrollReveal({
  distance: isMobile ? '85px' : '200px',
  duration: 2000,
  reset: true,
});

// sr.reveal('.home-txt', { delay: 200, origin: 'left' });
// sr.reveal('.home-img', { delay: 200, origin: 'right' });
sr.reveal('.container, .about, .menu, .menu-slider, .contact', { delay: 200, origin: 'bottom' });