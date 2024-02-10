document.addEventListener("DOMContentLoaded", function () {
  const controlsDiv = document.getElementById("controls");
  const inputNumber = controlsDiv.querySelector("input");
  const createButton = controlsDiv.querySelector("[data-create]");
  const destroyButton = controlsDiv.querySelector("[data-destroy]");
  const boxesDiv = document.getElementById("boxes");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    destroyBoxes();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      const boxSize = 30 + i * 10;
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = "";
  }

  createButton.addEventListener("click", function () {
    const amount = parseInt(inputNumber.value);
    createBoxes(amount);
  });

  destroyButton.addEventListener("click", destroyBoxes);
});
