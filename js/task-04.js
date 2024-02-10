document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const counterValueElement = document.getElementById("value");

  let counterValue = 0;

  function updateCounter() {
    counterValueElement.textContent = counterValue;
  }

  decrementButton.addEventListener("click", function () {
    counterValue -= 1;
    updateCounter();
  });

  incrementButton.addEventListener("click", function () {
    counterValue += 1;
    updateCounter();
  });
});
