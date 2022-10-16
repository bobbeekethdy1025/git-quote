const noteBody = document.querySelector('#note-body'); 
const noteInput = document.querySelector('#note-input'); 
const noteBtn = document.querySelector("#notes-btn");

// add eventlistener to save recipe info and notes under the recipe id
// put all saved info into food_db-recipe table
// on click for favorites, it will render all info/notes from single id onto page

function appendNote(){
    let input = noteInput.nodeValue
    let listEl = document.createElement("li")
    listEl.append(input);
    noteBody.append(li);
}

noteBtn.addEventListener('click', appendNote);
const saveRecipe = async () => {
    const recipeName = document.querySelector('#recipe-name') 
  
      const response = await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({ recipeName }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    
  };

  document
  .querySelector('#save-fav')
  .addEventListener('click', saveRecipe);

