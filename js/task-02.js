document.addEventListener("DOMContentLoaded", function () {
  const ingredientsList = document.getElementById("ingredients");

  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
  ];

  ingredients.forEach(function (ingredient) {
    const liElement = document.createElement("li");

    liElement.textContent = ingredient;

    liElement.classList.add("item");

    ingredientsList.appendChild(liElement);
  });
});
