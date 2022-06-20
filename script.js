let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
})
