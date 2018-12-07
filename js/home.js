document.addEventListener("DOMContentLoaded", function () {
    let btnHomeExplore = document.querySelector('.home-sildebar-btn');
    let homeExplore = document.querySelector('.home-explore');
    let home = document.querySelector('.home');
    let closeHomeExplore = document.querySelector('#btn-home-explore-close');
    let openExplore = document.querySelector('#btn-open-explore');

    btnHomeExplore.addEventListener('click', function () {
        homeExplore.classList.toggle('active');
        home.classList.toggle('active');
    });

    closeHomeExplore.addEventListener('click', function () {
        homeExplore.classList.toggle('active');
        home.classList.toggle('active');
    });

    openExplore.addEventListener('click', function () {
        homeExplore.classList.toggle('active');
        home.classList.toggle('active');
    });


    let sliderImages = document.querySelectorAll(".slide"),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right"),
        current = 0;

    // Clear all images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }

    // Init slider
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
    }

    // Show prev
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = "block";
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        current++;
    }

    // Left arrow click
    arrowLeft.addEventListener("click", function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Right arrow click
    arrowRight.addEventListener("click", function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });

    startSlide();

    
}, false);