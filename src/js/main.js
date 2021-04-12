function openBlock() {
    const someId = document.getElementById("someId");
    const otherId = document.getElementById("other");
    someId.classList.toggle("active");
    otherId.classList.toggle("active");

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

// $(document).ready(function () {
//     $("#someId").click(function () {
//         $("#other").fadeIn();
//     });
// - fixme
//     $("#someId").click(function () {
//         $("#other").fadeOut();
//     });
// });
