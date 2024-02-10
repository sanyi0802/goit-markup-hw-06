document.addEventListener("DOMContentLoaded", function () {
  const validationInput = document.getElementById("validation-input");

  function checkInputLength() {
    const requiredLength = parseInt(
      validationInput.getAttribute("data-length"),
      10
    );
    const inputValue = validationInput.value.trim().length;

    validationInput.classList.remove("valid", "invalid");

    if (inputValue === requiredLength) {
      validationInput.classList.add("valid");
    } else {
      validationInput.classList.add("invalid");
    }
  }

  validationInput.addEventListener("blur", checkInputLength);
});
