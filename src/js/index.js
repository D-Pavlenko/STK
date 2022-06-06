const navBtn = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.header_nav__mobile');
const navHamburger = document.querySelector('.hamburger');
const body = document.body;
const navLink = document.querySelectorAll('.header_nav__mobile-list-item');

navHamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav()
})

mobileNav.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    navHamburger.classList.remove('open');
    mobileNav.classList.remove('header_nav__active');
    body.classList.remove('no-scroll');
}

function toggleMobileNav() {
    navHamburger.classList.toggle('open');
    mobileNav.classList.toggle('header_nav__active');
    body.classList.toggle('no-scroll');
}

// Swiper Diplomas

const swiperDiplomas = new Swiper('.diplomas-swiper', {
    spaceBetween: 20,

    loop: true,
    speed: 1400,

    slidesPerView: 6,

    breakpoints: {
        1330: {
            slidesPerView: 6,
        },

        1080: {
            slidesPerView: 5,
        },

        992: {
            slidesPerView: 4,
        },

        645: {
            slidesPerView: 3,
        },

        576: {
            slidesPerView: 2.5,
        },

        420: {
            slidesPerView: 2,
        },

        375: {
            slidesPerView: 1.65,
        },

        320: {
            slidesPerView: 1.5,
        },

        280: {
            slidesPerView: 1.3,
        },
    },

    pagination: {
        el: '.diplomas-swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.diplomas-button-prev',
        nextEl: '.diplomas-button-next'
    },

    mousewheel: {
        invert: false
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});

// Swiper Tools 

const swiperTools = new Swiper('.tools-swiper', {

    slidesPerView: 1,
    spaceBetween: 20,

    loop: true,
    speed: 1400,

    pagination: {
        el: '.tools-swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.tools-button-prev',
        nextEl: '.tools-button-next'
    },

    mousewheel: {
        invert: false
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});