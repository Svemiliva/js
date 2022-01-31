let addToDoButton= document.getElementById ("addToDo");
let toDoContainer= document.getElementById ("toDoContainer");
let inputField= document.getElementById ("inputField");

addToDoButton.addEventListener ("click", function(){
    var paragraf= document.createElement ("p");
    paragraf.classList.add("paragraf-styling");
    paragraf.innerText= inputField.value;
    toDoContainer.appendChild (paragraf);
    inputField.value= "";
    paragraf.addEventListener ("click", function () {
        paragraf.style.textDecoration= "line-through"
    })
    paragraf.addEventListener ("dblclick", function () {
        toDoContainer.removeChild(paragraf);
    })
})