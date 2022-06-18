//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() != 0){ //if user values aren't only spaces
        addBtn.classList.add("active"); //active the add button
    }else{
        addBtn.classList.remove("active"); // unactive the add button 
    }
}

// if user click on the add button 
addBtn.onclick = ()=>{
    let userdata = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if locaStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    listArr.push(userdata); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks(); //calling showtasks function 
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New todo"); //getting localStorage
    if(getLocalStorage == null){ //if locaStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transformiing json string into a js object
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; // passing the length value in pendingNumber
    let newLittag = '';
    listArr.forEach((element, index) => {
        newLittag += `<li> + element + <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLittag; //add new li tag inside ul tag
    inputBox,value = ""; //once task added leave the input field blank
}

//delete task function
function deleteTask(){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); 
    listArr.splice(index, 1) //delete or remove the particular indexed li
    //after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks(); //calling showtasks function 
}