var preform = document.querySelector(".form-title");
var form = document.querySelector(".form-index");
var hidden = document.querySelector(".form-index");
//preform.addEventListener("click", function (event) {
//    event.preventDefault();
//    form.classList.add("animated-form");
//});
preform.addEventListener("click", function (event) {
    if (form.classList.contains("animated-form")) {
        form.classList.remove("animated-form");
    } else {
        form.classList.add("animated-form");
    }
});