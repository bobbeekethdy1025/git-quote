/**
 * We want to add an event listener to the "add-favorite-btn" so that when it is clicked the data regarding the recipe on the page will be packaged in a POST fetch request to some route on my server that will use sequelize to add recipe data and the user data to the favorites model.
 */

// capture the element as a variable so we can attach event listener
var $favBtn = $("#add-favorite-btn");

$favBtn.on('click', postNewFavorite);

function postNewFavorite(event) {
    event.preventDefault();
    //package the data we want to post
    const $card = $("#current-recipe-card");
    const rId = $card.attr('data-recipe-id');
    const rTitle = $card.attr('data-recipe-title');
    const newFavorite = {
        recipe_id : rId,
        recipe_title: rTtitle,
    };
    fetch('/api/favorites', {
        method: "POST",
        body: JSON.stringify(newFavorite),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(response => {
        console.log('favorite post request success')
    })
    
}