const navSlide = () => {
    const menu = document.querySelector('.nav-link');
    const menuLinks = document.querySelector('.menu-links');

    // Toggle Nav
    menu.addEventListener('click', () => {
        menuLinks.classList.toggle('nav-active');
    });
}

// const navSlide = function() {
//     const menu = document.querySelector('.nav-link');
//     const menuLinks = document.querySelector('.menu-links');

//     // Toggle Nav
//     menu.addEventListener('click', () => {
//         menuLinks.classList.toggle('nav-active');
//     });
// }

navSlide();