document.addEventListener("DOMContentLoaded", function(){
    let btnHomeExplore = document.querySelector('.home-sildebar-btn');
    let homeExplore = document.querySelector('.home-explore');
    let home = document.querySelector('.home');
    let closeHomeExplore = document.querySelector('#btn-home-explore-close');
    let openExplore = document.querySelector('#btn-open-explore');

    btnHomeExplore.addEventListener('click', function(){
        homeExplore.classList.toggle('active');
        home.classList.toggle('active');
    });

    closeHomeExplore.addEventListener('click', function(){
        homeExplore.classList.toggle('active');
        home.classList.toggle('active');
    });

    openExplore.addEventListener('click', function(){
        homeExplore.classList.toggle('active');
        home.classList.toggle('active');
    });    
}, false);