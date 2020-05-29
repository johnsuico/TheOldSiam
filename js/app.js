const navSlide = () => {
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelector('.menu-links');

    // Toggle Nav
    menu.addEventListener('click', () => {
        menuLinks.classList.toggle('nav-active');
    });
}

navSlide();