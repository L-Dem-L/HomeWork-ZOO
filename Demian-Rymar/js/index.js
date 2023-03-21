document.addEventListener('DOMContentLoaded', () => {
    sliderVisitors();
    animalsSlide();
    tabsAnimals();
    newsSlide();
});


function animalsSlide() {
    const swiper = new Swiper('.swiper-container2', {
        // Optional parameters
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 90,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
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
                slidesPerView: 6,
                spaceBetween: 60,
                slidesPerGroup: 2,
            },
        }
    });
};

function newsSlide() {
    const swiper = new Swiper('.swiper-container3', {
        // Optional parameters
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 90,
        centeredSlides: true,
        loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
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
                slidesPerView: 4.1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },
        }
    });
};

function tabsAnimals() {
    const TABS = document.querySelectorAll('.tabs-items');
    const CONTENT = document.querySelectorAll('.swiper-container2');

    TABS.forEach((tab) => {
        tab.addEventListener('click', () => {
            TABS.forEach((tab) => {
                tab.classList.remove('selected');
            })
            tab.classList.add('selected');
            // get data-atribute
            const DATA_ATRIBUTE = tab.getAttribute('data-products');
            CONTENT.forEach((item) => {
                item.classList.add('d-none');
                if (item.getAttribute('data-products') == DATA_ATRIBUTE) {
                    item.classList.remove('d-none');
                }
            });
        })
    })
};

function sliderVisitors() {
    const myswiper = new Swiper('.swiper1', {
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
};
