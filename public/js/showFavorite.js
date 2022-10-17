const renderFavoriteList = () => {
        fetch('/api/favorites')
        .then(function (response) {
            return response.json();
        })
    
        .then(function (data) {
       
            for (let i = 0; i < data.length; i++) {
                const favListEl = document.querySelector('#favorite-list');
                
                const sectionEl = document.createElement('tr');
                favListEl.append(sectionEl); 
                
                const favoriteName = document.createElement('td');
                favoriteName.innerHTML = data[i].recipe_name;
                sectionEl.append(favoriteName);
             
            }
      
        });
  };
  

renderFavoriteList(); 


























// let activeNote = {};

// const getNotes = () =>
//     fetch('/api/favorites', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     var favListEl = $("#fav-list");
//     let favoriteList = 
//         JSON.parse(window.localStorage.getItem("favorite-list")) || [];
     
        
//         for (let i = 0; i < favoriteList.length; i++) {
       
//             var bookCardEl = $(`<div class="card center-align" style="background-image: url('./Assets/Images/display-book-bg.jpg')">`);
    
//             var bookTitleEl = $('<h2>');
//             bookTitleEl.attr('class', 'card-title');
//             bookTitleEl.text(favoriteList[i].title);
//             bookCardEl.append(bookTitleEl);
    
//             var bookBodyEl = $('<p>');
//             bookBodyEl.attr('class', 'card-content');
//             bookBodyEl.text(favoriteList[i].author)
//             bookTitleEl.append(bookBodyEl);
    
          
    
//             var bookReadbtn = $('<a>');
//             bookReadbtn.attr('href', "favoriteList[i].url");
//             bookReadbtn.attr('target', 'blank')
//             bookReadbtn.text("Read it Now!")
//             bookTitleEl.append(bookReadbtn);
    
//             favListEl.append(bookCardEl);
//         }
    
    