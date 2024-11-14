$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

// Top News Slider
$('.tn-slider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    speed:2000,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true
});