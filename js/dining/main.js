
document.addEventListener("DOMContentLoaded", function () {
    let btnHomeExplore = document.querySelector('.home-slidebar-btn');
    let homeExplore = document.querySelector('.home-explore');
    let home = document.querySelector('.home');
    let closeHomeExplore = document.querySelector('#btn-home-explore-close');
    let openExplore = document.querySelector('#btn-open-explore');
    btnHomeExplore.addEventListener('click', function () {
        home.classList.toggle('active');

        if (homeExplore.style.maxHeight) {
            homeExplore.style.maxHeight = null;
        } else {
            homeExplore.style.maxHeight = homeExplore.scrollHeight + "px";
        }
    });

    closeHomeExplore.addEventListener('click', function () {
        home.classList.toggle('active');
        
        if (homeExplore.style.maxHeight) {
            homeExplore.style.maxHeight = null;
        } else {
            homeExplore.style.maxHeight = homeExplore.scrollHeight + "px";
        }
    });
});