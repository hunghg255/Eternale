document.addEventListener("DOMContentLoaded", function () {
    let btnHomeExplore = document.querySelector('.home-slidebar-btn');
    let homeExplore = document.querySelector('.home-explore');
    let home = document.querySelector('.home');
    let closeHomeExplore = document.querySelector('#btn-home-explore-close');
    let openExplore = document.querySelector('#btn-open-explore');
    let contentHome2 = document.querySelector('.slide-content-main2');
    let prevSlide = document.querySelector('.swiper-button-prev');
    let nextSlide = document.querySelector('.swiper-button-next');
    let menuItem = document.querySelectorAll('.menu-item');
    // Added slide number
    let currentSlide = document.querySelector('.swiper-pagination-current');
    console.log(currentSlide.innerHTML);


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

    let liTags = document.getElementsByTagName('li');

            for (let index in liTags) {
                if (parseInt(liTags[index].innerHTML) >= 1 && parseInt(liTags[index].innerHTML) <= 20 && liTags[index].parentElement.parentElement.classList.value.indexOf('main--book--center--content--calendar1') > -1) {

                    liTags[index].classList.add('main--book--center--content--calendar--days__unavailable');
                }
            }

    nextSlide.addEventListener('click', function () {
        menu();
    });
    prevSlide.addEventListener('click', function () {
        menu();
    });

    setInterval(()=> {
        menu();
    }, 100);

    function menu() {
        let slideActive = document.querySelector('.swiper-slide-active');
        document.querySelector('.menu-item.active').classList.remove('active');
        for (x of menuItem) {       
            if (x.id === slideActive.id) {
                x.classList.add('active');
            }
        }
    }
    // move tab================================


}, false);
