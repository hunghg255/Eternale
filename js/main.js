document.addEventListener("DOMContentLoaded", function () {
    let btnHomeExplore = document.querySelector('.home-sildebar-btn');
    let homeExplore = document.querySelector('.home-explore');
    let home = document.querySelector('.home');
    let closeHomeExplore = document.querySelector('#btn-home-explore-close');
    let openExplore = document.querySelector('#btn-open-explore');
    let contentHome2 = document.querySelector('.slide-content-main2');
    let btnHome6Contact = document.querySelector('.btn-contact');
    let formHome6Contact = document.querySelector('.home6-register');
    let prevSlide = document.querySelector('.swiper-button-prev');
    let nextSlide = document.querySelector('.swiper-button-next');
    let menuItem = document.querySelectorAll('.menu-item');


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

    btnHome6Contact.addEventListener('click', function () {
        formHome6Contact.classList.toggle('active');
    });

    nextSlide.addEventListener('click', function () {
        menu();
    });
    prevSlide.addEventListener('click', function () {
        menu();
    });

    setInterval(()=> {
        menu();
    }, 1);

    function menu() {
        let slideActive = document.querySelector('.swiper-slide-active');
        document.querySelector('.menu-item.active').classList.remove('active');
        for (x of menuItem) {       
            if (x.id === slideActive.id) {
                x.classList.add('active');
            }
        }
    }

}, false);