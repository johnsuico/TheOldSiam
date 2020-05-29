// const navSlide = () => {
//     const menu = document.querySelector('.nav-link');
//     const menuLinks = document.querySelector('.menu-links');

//     //Toggle Nav
//     menu.addEventListener('click', () => {
//         menuLinks.classList.toggle('nav-active');
//     });
// }

// navSlide();

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const html = document.querySelector('html');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        html.classList.toggle('no-scroll');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });
}

navSlide();