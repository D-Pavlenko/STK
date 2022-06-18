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

// Swiper Doctors

const swiperDoctors = new Swiper('.doctors-swiper', {
    spaceBetween: 20,

    loop: true,
    speed: 600,

    slidesPerView: 4,


    breakpoints: {
        1330: {
            slidesPerView: 4,
        },

        1200: {
            slidesPerView: 3.45,
        },

        1150: {
            slidesPerView: 3.25,
        },

        992: {
            slidesPerView: 2.8,
        },

        910: {
            slidesPerView: 2.7,
        },

        840: {
            slidesPerView: 2.5,
        },


        790: {
            slidesPerView: 2.3,
        },

        750: {
            slidesPerView: 2.2,
        },

        670: {
            slidesPerView: 2,
        },

        630: {
            slidesPerView: 1.85,
        },

        580: {
            slidesPerView: 1.65,
        },

        550: {
            slidesPerView: 1.55,
        },

        520: {
            slidesPerView: 1.35,
        },

        490: {
            slidesPerView: 1.45,
        },

        460: {
            slidesPerView: 1.35,
            spaceBetween: 15,
        },

        430: {
            slidesPerView: 1.25,
        },

        375: {
            slidesPerView: 1.25,
        },

        360: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },

        340: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },

        300: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },

    navigation: {
        prevEl: '.doctors__button-prev',
        nextEl: '.doctors__button-next'
    },

    pagination: {
        el: '.doctors__swiper-pagination',
        clickable: true,
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

// Swiper Diplomas

const swiperDiplomas = new Swiper('.diplomas-swiper', {
    spaceBetween: 20,

    loop: true,
    speed: 600,

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
    speed: 600,

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

// Price Section

const tabItems = Array.from(document.querySelectorAll('.price__services'))
const contentItems = Array.from(document.querySelectorAll('.tab-content'))

const clearActiveClass = (element, className = 'is-active') => {
    element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {

        if (item.classList.contains('is-active')) return

        clearActiveClass(tabItems)
        clearActiveClass(contentItems)

        setActiveClass(tabItems, index)
        setActiveClass(contentItems, index)
    })
}

tabItems.forEach(checkoutTabs)

// SVG Color

import $ from 'jquery';

$("img.img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});


// Swiper Feedback

const swiperFeedback = new Swiper('.feedback-swiper', {
    spaceBetween: 20,

    loop: true,
    speed: 600,

    slidesPerView: 2,

    breakpoints: {
        661: {
            slidesPerView: 2,
        },

        660: {
            slidesPerView: 1,
        },

        280: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: '.feedback-swiper-pagination ',
        clickable: true,
    },

    navigation: {
        prevEl: '.feedback-button-prev',
        nextEl: '.feedback-button-next',
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

// Read More

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".feedback-slide__text");

readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Читать полностью") {
        readMoreBtn.innerText = "Свернуть";
    } else {
        readMoreBtn.innerText = "Читать полностью";
    }
});

// Swiper Video Feedback

const swiperVideoFeedback = new Swiper('.video__feedback-swiper', {
    spaceBetween: 20,

    loop: true,
    speed: 600,

    slidesPerView: 2,

    breakpoints: {
        661: {
            slidesPerView: 2,
        },

        660: {
            slidesPerView: 1,
        },

        280: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: '.video__feedback-swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.video__feedback-button-prev',
        nextEl: '.video__feedback-button-next',
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

// Swiper Photogallery

const swiperPhotogallery = new Swiper('.photogallery-swiper', {
    spaceBetween: 0,

    loop: true,
    speed: 600,

    slidesPerView: 1,

    navigation: {
        prevEl: '.photogallery__button-prev',
        nextEl: '.photogallery__button-next'
    },

    pagination: {
        el: '.photogallery__swiper-pagination',
        clickable: true,
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

// Accordion

document.querySelectorAll('.accordion_item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion_item__active')) {
            parent.classList.remove('accordion_item__active')
        }
        else {
            document
                .querySelectorAll('.accordion_item')
                .forEach((child) => child.classList.remove('accordion_item__active'))
            parent.classList.add('accordion_item__active')
        }
    })
)

// Map

let center = [53.19416657445425, 50.14532429095446]

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16,
    })

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/contacts/geo.png',
        iconImageSize: [47, 58],
        iconImageOffset: [300, -150],
    })

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark);
}

ymaps.ready(init);