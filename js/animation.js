var preform = document.querySelector(".form-title");
var form = document.querySelector(".form-index");
var hidden = document.querySelector(".form-index");
var dateon = document.querySelector("[name=arrival]");
var dateoff = document.querySelector("[name=departure]")
preform.addEventListener("click", function (event) {
    if (form.classList.contains("animated-form")) {
        form.classList.remove("animated-form");
    } else {
        form.classList.add("animated-form");
    }
});
form.addEventListener("submit", function (event) {
    if (!dateon.value || !dateoff.value) {
        event.preventDefault();
        form.classList.add("form-error");
    }
});