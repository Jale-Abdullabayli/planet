$(document).ready(function () {
    AOS.init({
        duration: 1000
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]
    })
    $('.owl-carousel').owlCarousel();

    distance = $(window).height();
    scrollTop = $('.callToAction').offset().top - distance;
    $(window).scroll(function (event) {
        if ($(window).scrollTop() >= scrollTop) {
            scrol = $(window).scrollTop() - $('.callToAction').offset().top;
            $('.callToActionImg').css("transform", "translateX(" + (scrol * 0.6) + "px)")
        }
    })
});