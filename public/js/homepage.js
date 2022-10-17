var apiKEY = "fe0f3c9fbbc74ccf8e791d6b424e0e86"

var URL = "https://api.spoonacular.com/recipes/random?apiKey=" + apiKEY;

fetch(URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    var item = data.recipes; 
    
    var slideOneEl = $('.orbit-image_one');
    slideOneEl.attr('src',`https://spoonacular.com/recipeImages/${item.id}-556x370.jpg`)
     
    var slideOneTagEl = $('.orbit-caption_one');
    slideOneTagEl.text(item.title);
}); 