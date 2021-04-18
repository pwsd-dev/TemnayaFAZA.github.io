function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");
    // otherId.classList.toggle("hidden");
    // otherId.querySelector('.inner').classList.toggle('active');
    const basketBtn = document.getElementById("basketBtn")
    basketBtn.classList.toggle("active");
}

function openBasket() {
    const basketBtn = document.getElementById("basketBtn")
    basketBtn.classList.toggle("active");
    const basketInner = document.getElementById("basketInner")
    basketInner.classList.toggle("active");
}


$(function () {
    $('.nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + $(this).data('id')).addClass('selected').siblings().removeClass('selected');
    });
});

$(function () {
    $('.nav-shop-article li').on('click', function () {
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
    draggable: false,
    vertical: true

});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});





