function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");
    // otherId.classList.toggle("hidden");
    // otherId.querySelector('.inner').classList.toggle('active');

}


$(function () {
    $('.nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + $(this).data('id')).addClass('selected').siblings().removeClass('selected');
    });
});

$(document).ready(function () {
    $("#burgerBtn").click(function () {
        if ($("#other").hasClass('active')) {
            $("#other").fadeOut();
            $("#other").toggleClass('active');
        } else {

            $("#other").fadeIn();
            $("#other").toggleClass('active');
        }
    });

    // - fixme
    //     $("#burgerBtn").click(function () {
    //         $("#other").fadeOut();
    //     });
});


$(document).ready(function () {
    $('.shop-article-slider').slick({
        // arrows: false,
        // // dots: true,
        // slidesToShow: 1,
        // // autoplay: true,
        // // infinite: true,
        // // speed: 1000,
        // adaptiveHeight: false,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        // // easing: 'ease',
        // draggale: true,
        // swipe: true,
        // touchTreshold: 20,
        // touchMove: false,
        // fade: true,
        // // prevArrow: document.querySelector('#prevArrow'),
        // // nextArrow: document.querySelector('#nextArrow'),
        // asNavFor: '.shop-article-nav'
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.shop-article-nav'
    });

});

$('.shop-article-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.shop-article-slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    vertical: true

});
