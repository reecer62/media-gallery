/* Global variables */
var slideIdx = 0;

/* Toggle navigation bar */
function navToggle() {
    let nav = document.getElementById("main-nav");
    if (!nav.classList.contains('responsive')) {
        nav.classList.add('responsive')
    } else {
        nav.classList.remove('responsive')
    }
}

/* Change slide to display slide n */
function showSlides(n) {
    let slides = document.getElementsByClassName("slide")
    let indicators = document.getElementsByClassName("indicator")
    n >= 0 ? slideIdx = n % slides.length : slideIdx = slides.length-1

    for (let i = 0; i < slides.length; i++) {
        if (i === slideIdx) {
            slides[i].style.display = "block"
            indicators[i].classList.add('active')
        } else {
            slides[i].style.display = "none"
            indicators[i].classList.remove('active')
        }
    }
}

/* Initially show the first slide */
showSlides(slideIdx);