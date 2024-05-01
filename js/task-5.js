const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector("span.color");

button.addEventListener("click", function() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});