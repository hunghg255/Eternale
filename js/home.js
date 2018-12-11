document.addEventListener("DOMContentLoaded", function () {
    let btnHomeExplore = document.querySelector('.home-sildebar-btn');
    let homeExplore = document.querySelector('.home-explore');
    let home = document.querySelector('.home');
    let closeHomeExplore = document.querySelector('#btn-home-explore-close');
    let openExplore = document.querySelector('#btn-open-explore');
    let contentHome2 = document.querySelector('.slide-content-main2');
    let arrowLeft = document.querySelector("#arrow-left");
    let arrowRight = document.querySelector("#arrow-right");
    let count = document.querySelector('#counter');
    let btnHome6Contact = document.querySelector('.btn-contact');
    let formHome6Contact = document.querySelector('.home6-register');


    btnHomeExplore.addEventListener('click', function () {
        home.classList.toggle('active');
        contentHome2.classList.toggle('active');
        if (homeExplore.style.maxHeight) {
            homeExplore.style.maxHeight = null;
        } else {
            homeExplore.style.maxHeight = homeExplore.scrollHeight + "px";
        }
    });

    closeHomeExplore.addEventListener('click', function () {
        home.classList.toggle('active');
        contentHome2.classList.toggle('active');
        if (homeExplore.style.maxHeight) {
            homeExplore.style.maxHeight = null;
        } else {
            homeExplore.style.maxHeight = homeExplore.scrollHeight + "px";
        }
    });

    openExplore.addEventListener('click', function () {
        home.classList.toggle('active');

        if (homeExplore.style.maxHeight) {
            homeExplore.style.maxHeight = null;
        } else {
            homeExplore.style.maxHeight = homeExplore.scrollHeight + "px";
        }
    });

    arrowRight.addEventListener('click', function () {
        NextSilde();
    });


    arrowLeft.addEventListener('click', function () {
        PrevSlide();
    });

    function NextSilde() {
        let slideCurrent = document.querySelector(".slide.active");
        let nextSlide = slideCurrent.nextElementSibling;

        if (nextSlide) {
            slideCurrent.classList.add('hidden');
            slideCurrent.classList.remove('active');
            nextSlide.classList.add('active');
            count.innerHTML = (parseInt(count.textContent) + 1).toString();;
        } else {
            return;
        }
    }

    function PrevSlide() {
        let slideCurrent = document.querySelector(".slide.active");
        let prevSlide = slideCurrent.previousElementSibling;
        let nextSlide = slideCurrent.nextElementSibling;

        if (prevSlide) {
            prevSlide.classList.add("active");
            prevSlide.classList.remove("hidden");
            slideCurrent.classList.remove("active");
            count.innerHTML = (parseInt(count.textContent) - 1).toString();
        } else {
            return;
        }
    }

    btnHome6Contact.addEventListener('click', function () {
        formHome6Contact.classList.toggle('active');
    });

}, false);