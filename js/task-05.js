document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  function updateNameOutput() {
    const inputValue = nameInput.value.trim();

    nameOutput.textContent = inputValue !== "" ? inputValue : "Anonymous";
  }

  nameInput.addEventListener("input", updateNameOutput);
});
