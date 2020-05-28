// const 
var navSlide = () => {
    // const menu = document.querySelector('.nav-link');
    var menu = document.querySelector('.nav-link');
    // const menuLinks = document.querySelector('.menu-links');
    var menuLinks = document.querySelector('.menu-links');

    // Toggle Nav
    menu.addEventListener('click', () => {
        menuLinks.classList.toggle('nav-active');
    });
    menu.addEventListener('touched', () => {
        menuLinks.classList.toggle('nav-active'); 
    });
}

navSlide();