const noteBody = document.querySelector('#note-body'); 
const noteInput = document.querySelector('#note-input'); 
const noteBtn = document.querySelector("#notes-btn");

// add eventlistener to save recipe info and notes under the recipe id
// put all saved info into food_db-recipe table
// on click for favorites, it will render all info/notes from single id onto page

function appendNote(){
    let input = noteInput.ariaValueMax
    let li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
}