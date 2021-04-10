function openBlock() {
    const someId = document.getElementById("someId");
    const otherId = document.getElementById("other");

    someId.classList.toggle("active");
    otherId.classList.toggle("active");
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
