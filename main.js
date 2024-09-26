var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: true, // Allow touch move for more control
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: {
        forceToAxis: true, // Swiping only in the direction of slides (horizontal/vertical)
        sensitivity: 1,    // Adjust sensitivity of the swipe
        thresholdDelta: 100, // Set a higher threshold for the scroll wheel
    },
    keyboard: {
        enabled: true, // Enable keyboard control
        onlyInViewport: true, // Enable it only when the Swiper is in the viewport
    },
    slidesPerView: 1, // Show one slide per view
    speed: 1000,  // Set the speed of the slide transition
    longSwipes: false, // Prevent swiping multiple slides with one action
    freeMode: false, // Disable free scrolling to snap to slides
});

// Function for manual navigation
swiper.sliderMove = function (s, e) {
    console.log(s)
}

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true) // Use Swiper's API to slide to the specific slide with a transition
}

// Add keyboard navigation with slide-lock to prevent multiple swipes
let isSliding = false;
document.addEventListener('keydown', function(event) {
    if (isSliding) return;  // Prevent sliding if already in progress

    if (event.key === 'ArrowLeft') {
        isSliding = true;
        swiper.slidePrev(); // Slide to the previous slide
        setTimeout(() => { isSliding = false; }, 5000); // Prevent double input for 1 second
    }
    if (event.key === 'ArrowRight') {
        isSliding = true;
        swiper.slideNext(); // Slide to the next slide
        setTimeout(() => { isSliding = false; }, 5000); // Prevent double input for 1 second
    }
});
