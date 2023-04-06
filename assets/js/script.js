function randomDrink() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php"
fetch(requestUrl)
.then(function (response) {
    return response.json();
}).then(function(data) {
    cocktailName(data);
})

}

var cocktailButton = document.querySelector("#cocktailButton")

cocktailButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.location.assign('./drink.html')
})

var randomCocktailButton = document.querySelector("#luckyCocktail")

randomCocktailButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.location.assign('./drink.html')
})

var mealButton = document.querySelector("#mealbutton")

mealButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.location.assign('./food.html')
})

var randomMealButton = document.querySelector("#luckyMeal")

randomMealButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.location.assign('./food.html')
})



// function cocktailName(data) {

//     for (var i = 0; i < data.drinks.length; i++) {
//         var drink= data.drinks[i];
//         var drinkName = drink.strDrink;

//         var drinkList = document.createElement("button");
//         drinkList.textContent = drinkName;
//         results.appendChild(drinkList);

//         drinkList.addEventListener("click", function(event) {
//           event.preventDefault;
//           createRecipebyName (data);
//           // console.log(data);
          
//         }); 
//     };
// }
