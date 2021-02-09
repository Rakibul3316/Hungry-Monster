const serchBtn = document.getElementById("searchBtn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipeCloseBtn");

// event listenrs
serchBtn.addEventListener("click", getMealList);

// get meal list that match with the ingredient

function getMealList() {
  let searchInputTxt = document.getElementById("searchInput").value.trim();
  console.log(searchInputTxt);
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                        <div class="col-xl-4">
                            <div class="meal-item" data-id="${meal.idMeal}">
                                <div class="meal-img">
                                    <img src="${meal.strMealThumb}" alt="" />
                                </div>
                                <div class="meal-name">
                                    <h3>${meal.strMeal}</h3>
                                </div>
                            </div>
                        </div>`;
        });
      } else {
        html = "Sorry, we didn't find may meal.";
        mealList.classList.add("notFound");
      }
      mealList.innerHTML = html;
    });
}
