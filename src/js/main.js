function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");
    // otherId.classList.toggle("hidden");
    // otherId.querySelector('.inner').classList.toggle('active');

}


$(function () {
    $('ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('id')).addClass('selected').siblings().removeClass('selected');
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
