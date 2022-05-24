//we'll use closures to create three buttons. Each button will represent a different color and we'll change the background color of the document body to the color value. Using a closure, create a function called change color that accepts a color value. When the button is clicked, the closure should be invoked and the body background color should be updated.
// function makeBodyBlue() {
//   document.body.style.background = "#0f62fe";
// }
// function makeBodyGreen() {
//   document.body.style.background = "#42be65";
// }
// function makeBodyPink() {
//   document.body.style.background = "#ff7eb6";
// }
// document.querySelector(`#blue`).addEventListener("click", makeBodyBlue);
// document.querySelector(`#green`).addEventListener("click", makeBodyGreen);
// document.querySelector(`#pink`).addEventListener("click", makeBodyPink);
function changeColor(color) {
    return function () {
        document.body.style.background = color;
    };
}
const bgColorBlue = changeColor("#0f62fe");
const bgColorGreen = changeColor("#42be65");
const bgColorPink = changeColor("#ff7eb6");
document.querySelector(`#blue`).addEventListener("click", bgColorBlue);
document.querySelector(`#green`).addEventListener("click", bgColorGreen);
document.querySelector(`#pink`).addEventListener("click", bgColorPink);