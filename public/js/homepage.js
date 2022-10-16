var apiKEY = "5cc75edc2db54263894fdbab5dc2b00b"

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