const header = document.querySelector('.page-header');
const burger = header.querySelector('.burger');
const menu = header.querySelector('.main-nav');

const FULL_HEIGHT_PAGE = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

let scrolledFlag = false;
let menuOpen = false;

const toggleMenu = () => {
    burger.classList.toggle('burger-menu-off');
    burger.classList.toggle('burger-menu-on');

    menu.classList.toggle('site-navigation--off');
    menu.classList.toggle('site-navigation--on');

    menu.classList.contains('site-navigation--on') ? header.classList.add('page-header--dark') : header.classList.remove('page-header--dark');
    menuOpen = !menuOpen;

    scrolledFlag ? header.classList.add('page-header--dark') : '';
};

const changeHeaderColor = () => {
    const SCROLLED = window.scrollY || document.documentElement.scrollTop;

    if (!menuOpen) {
        SCROLLED > header.offsetHeight ? header.classList.add('page-header--dark') : header.classList.remove('page-header--dark');
        scrolledFlag = SCROLLED > header.offsetHeight;
    }
};

burger.addEventListener('click', toggleMenu);

window.addEventListener('scroll', () => changeHeaderColor());

changeHeaderColor();