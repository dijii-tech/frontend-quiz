document.addEventListener("DOMContentLoaded", function () {
    const opacitySlider = document.getElementById("opacity-slider");
    const displayCheckbox = document.getElementById("display-check");
    const background = document.getElementById("background");
    opacitySlider.addEventListener("input", function () {
        background.style.opacity = parseFloat(opacitySlider.value) / 100;
    });
    displayCheckbox.addEventListener("change", function () {
        background.style.display = displayCheckbox.checked ? "block" : "none";
    });
});
