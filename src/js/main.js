// Header Navigation
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
};

if (isMobile.any()) {
    document.body.classList.add("touch");
    let menuArrows = document.querySelectorAll(".header-nav__arrow");
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener("click", function () {
                menuArrow.parentElement.parentElement.classList.toggle("active");
            });
        }
    }
} else {
    document.body.classList.add("pc");
}

// Header Navigation Arrows
const headerNavSubLinks = document.querySelectorAll(".header-nav__sub-link");

headerNavSubLinks.forEach((headerNavSubLink) => {
    const subLinkNextEl = headerNavSubLink.nextElementSibling;
    if (subLinkNextEl !== null && subLinkNextEl.classList.contains("header-nav__sub-blocks")) {
        headerNavSubLink.classList.add("nav-arrow");
    }
});

// Header Navigation Blocks
const navSpoilerTitles = document.querySelectorAll(".header-nav__sub-link.nav-arrow");
navSpoilerTitles.forEach((navSpoilerTitle) => {
    navSpoilerTitle.addEventListener("click", function (e) {
        e.preventDefault();
        navSpoilerTitle.nextElementSibling.classList.toggle("active");
        navSpoilerTitle.classList.toggle("nav-arrow__active");
    });
});

// Sticky Header
// const headerMid = document.querySelector(".header-mid");
// let headerMidFixed = () => headerMid.classList.contains("fixed");
// let headerMidTop = headerMid.getBoundingClientRect().top;
// let headerMidDocumentTop = headerMidTop + window.scrollY;

// let headerFixed = () => {
//     let scrollCount = document.documentElement.scrollTop;

//     if (scrollCount >= headerMidDocumentTop && !headerMidFixed()) {
//         headerMid.classList.add("fixed");
//     } else if (scrollCount < headerMidDocumentTop && headerMidFixed()) {
//         headerMid.classList.remove("fixed");
//     }
// };

// const mediaQuerySM = window.matchMedia("(min-width: 768px)");
// if (mediaQuerySM.matches) {
//     headerFixed();
//     window.addEventListener("scroll", headerFixed);
// }

// // Header Mobile
// const menuBurgerBtn = document.querySelector(".menu-burger__btn");
// const headerTop = document.querySelector(".header-mid");

// menuBurgerBtn.addEventListener("click", function () {
//     menuBurgerBtn.children[0].classList.toggle("active");
//     headerTop.classList.toggle("header-mid--mobile");
//     document.body.classList.toggle("lock");
// });

// const headerNavList = document.querySelector(".header-nav__list");
// const headerNavItems = headerNavList.children;

// if (!mediaQuerySM.matches) {
//     headerNavList.addEventListener("click", function (e) {
//         if (e.target.classList.contains("header-nav__link")) {
//             menuBurgerBtn.children[0].classList.toggle("active");
//             headerTop.classList.toggle("header-mid--mobile");
//             document.body.classList.toggle("lock");
//         }
//     });
// }

// Slider Swiper for Apartment
const swiper = new Swiper(".main-banner__swiper", {
    // direction: "horizontal",
    // loop: false,
    // autoHeight: false,
    // sliderPerView: 1,
    // spaceBetween: 30,
    // centeredSlides: 1,
    // initialSlide: 0,
    // slidesPerColumn: 1,
    // watchSlidesVisibility: true,
    // touchRation: 1,
    // touchAngle: 45,
    // grabCursor: false,
    // slideToClickedSlide: false,
    // speed: 800,
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },

    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".main-banner__btn--next",
        prevEl: ".main-banner__btn--prev",
    },

    // Mini Slider
    // thumbs: {
    //     swiper: {
    //         el: ".image-mini-slider",
    //         slidesPerView: 3,
    //     },
    // },
});

const swiper2 = new Swiper(".main-banner__content", {
    // direction: "horizontal",
    // loop: false,
    // autoHeight: false,
    // sliderPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    // centeredSlides: 1,
    // initialSlide: 0,
    // slidesPerColumn: 1,
    // watchSlidesVisibility: true,
    // touchRation: 1,
    // touchAngle: 45,
    // grabCursor: false,
    // slideToClickedSlide: false,
    // speed: 800,
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },

    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".main-banner__btn--next",
        prevEl: ".main-banner__btn--prev",
    },

    // Mini Slider
    // thumbs: {
    //     swiper: {
    //         el: ".image-mini-slider",
    //         slidesPerView: 3,
    //     },
    // },
});

const swiper3 = new Swiper(".pressroom-content__right", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    pagination: {
        el: ".pressroom-right-card__pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            allowTouchMove: false,
        }
    }
});

const headerMenuDesktopItems = document.querySelectorAll('.header-menu__desktop-item--link');

console.log(headerMenuDesktopItems);
headerMenuDesktopItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        headerMenuDesktopItems.forEach((item2) => {
            if (item2.classList.contains('active')) {
                item2.classList.remove('active');
            }
        });
        item.classList.add('active');
    })
})