document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.getElementById("categories");

  const categoriesCount = categoriesList.querySelectorAll("li.item").length;

  console.log("Number of categories:", categoriesCount);

  categoriesList.querySelectorAll("li.item").forEach(function (category) {
    const categoryName = category.querySelector("h2").textContent;

    const categoryElementsCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryName}`);

    console.log(`Elements: ${categoryElementsCount}`);
  });
});
