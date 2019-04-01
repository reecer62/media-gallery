/* Global variables */
var slideIdx = 0;
var intervalID = null;

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
function showSlides(n, isAuto) {
    if (!isAuto) { // If slide was manually clicked clear interval
        intervalManager(false)
    }
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
    if (!isAuto) {
        intervalManager(true, 4000) // Reset the interval
    }
}

/* Autoslide manager function */
function intervalManager(flag, time) {
    if (flag) {
        intervalID = setInterval(() => showSlides(slideIdx+=1, true), time);
    } else {
        clearInterval(intervalID);
    }
}

// Initially show the first slide
showSlides(slideIdx, true);
intervalManager(true, 4000)
