// var apiKEY = "6e1b887e124643e7bde60adaa7389a66"

// var URL = "https://api.spoonacular.com/recipes/random?apiKey=" + apiKEY;

// fetch(URL)
// .then(function (response) {
//     return response.json();
// })

// .then(function (data) {
//     var item = data.recipes; 
    
//     var slideOneEl = $('.orbit-image_one');
//     slideOneEl.attr('src',`https://spoonacular.com/recipeImages/${item.id}-556x370.jpg`)
     
//     var slideOneTagEl = $('.orbit-caption_one');
//     slideOneTagEl.text(item.title);
// }); 

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  var options = {
    'method': 'POST',
    'url': 'https://api.spoonacular.com/recipes/random?apiKey=',
    'headers': {
      'X-API-KEY': 'E6xwOg2BY4RbmiJogfyegrt746r7te',
      'Content-Type': 'application/json'
    }
  };
  const result = await axios(options);
  // You can print/use 'result' here.