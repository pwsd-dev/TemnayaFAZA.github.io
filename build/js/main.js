function openBlock() {
    const someId = document.getElementById("someId");
    const otherId = document.getElementById("other");
    const shopToggle = document.getElementById("shopToggle");
    someId.classList.toggle("active");
    otherId.classList.toggle("active");
    shopToggle.classList.toggle("active");
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
