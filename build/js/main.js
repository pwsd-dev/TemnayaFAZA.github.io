function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");
    // otherId.classList.toggle("hidden");
    // otherId.querySelector('.inner').classList.toggle('active');

}

function toggleShop() {
    const shopToggleId = document.getElementById("shopToggle");
    shopToggleId.classList.add("technical");
    const innerTechnical = document.getElementById("innerTechnical");
    innerTechnical.classList.add("active");
    const shopToggleMerch = document.getElementById("shopToggleMerch");
    shopToggleMerch.classList.add("merch");
    const innerMerch = document.getElementById("innerMerch");
    innerMerch.classList.add("active");

}

$(document).ready(function () {
    $("#burgerBtn").click(function () {
        if($("#other").hasClass('active')){
            $("#other").fadeOut();
            $("#other").toggleClass('active');
        } else{
       
            $("#other").fadeIn();
            $("#other").toggleClass('active');
        }
    });
   
// - fixme
//     $("#burgerBtn").click(function () {
//         $("#other").fadeOut();
//     });
});
