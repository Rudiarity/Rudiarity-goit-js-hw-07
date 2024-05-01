function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const buttonDestroy = document.querySelector("[data-destroy]");
buttonDestroy.classList.add("destroy-btn");
buttonDestroy.addEventListener('mouseover', () => {
  buttonDestroy.style.backgroundColor = '#FF7070';
});

buttonDestroy.addEventListener('mouseout', () => {
  buttonDestroy.style.backgroundColor = '';
});

const buttonCreate = document.querySelector("[data-create]");
const input = document.querySelector("input[type='number']");

buttonCreate.addEventListener('click', () => {
    const numberOfBoxes = input.value;
    let html = '';
    for (let i = 0; i < numberOfBoxes; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        html += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    }
    document.getElementById('boxes').innerHTML = html;
    input.value = '';
});

const boxesContainer = document.getElementById('boxes');

buttonDestroy.addEventListener('click', () => {
    boxesContainer.innerHTML = '';
});