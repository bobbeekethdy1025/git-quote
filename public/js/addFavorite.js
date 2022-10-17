var $favBtn = $("#add-favorite-btn");
var favSection = $("#favoriteRecipes");
var favoriteHistory = [];


$favBtn.on('click', postNewFavorite);

function postNewFavorite(event) {
    event.preventDefault();
    const $card = $("#current-recipe-card");
    const rId = $card.attr('data-recipe-id');
    const rTitle = $card.attr('data-recipe-title');
    const newFavorite = {
        recipe_id: rId,
        recipe_name: rTitle,
    };
    var favs = document.createElement("button");
    favs.classList.add("button");
    favs.setAttribute("data-open", "exampleModal1")
    favs.innerHTML = newFavorite.recipe_name
    favSection.append(favs)
    console.log(newFavorite)
    fetch('/api/favorites', {
        method: "POST",
        body: JSON.stringify(newFavorite),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
        .then(response => {
            console.log('Favorite post request success')
        })

//     favoriteHistory.push(newFavorite.recipe_name);

//     document.localStorage.setItem("favoriteItem", JSON.stringify(favoriteHistory));
 }

// var showFavoriteList = function () {
//     if (localStorage.length > 0) {
//         favoriteHistory = JSON.parse(localStorage.getItem("favoriteItem"));

//         for (var x = 0; x < 10; x++) {
//             var favs = document.createElement("button");
//             favs.classList.add("button");
//             favs.setAttribute("data-open", "exampleModal1")
//             favs.innerHTML = favoriteHistory[x]
//             favSection.append(favs)
//         }
//     }
// }

// showFavoriteList(); 