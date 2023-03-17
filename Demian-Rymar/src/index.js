// Watchers for scss and html files
import "./index.scss";
// import "./scripts/watchers/_pages"

// Import modules
// import { calcSumNumbers, calcSubtractNumbers } from "./scripts/modules/calc";
// import { Elements } from "./scripts/modules/elements";

// Import methods
// import { includeHTML } from "./scripts/methods/_includeComponents";

// Bisiness logic
document.addEventListener('DOMContentLoaded', () => {

    

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 60,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next-slide',
            prevEl: '.prev-slide',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },

            1000: {
                slidesPerView: 2,
                spaceBetween: 60,
                slidesPerGroup: 2,
            },
        }
    });
});


