const inputTask = document.getElementById("input-task");
const buttonTask = document.getElementById("button-add");
const assignedTasks = document.getElementById("assigned-tasks");
const form = document.getElementById("form");

let tasks = [];
let clicks = [];

(function () {
    tasks = JSON.parse(localStorage.getItem('task')) || [];
    clicks = JSON.parse(localStorage.getItem('click')) || [];
    render(); 
})();


// Saves list to local Storage
function saveToLocalStorage() {
    localStorage.setItem("task", JSON.stringify(tasks));
    localStorage.setItem("click", JSON.stringify(clicks));
    render();
}


// Adding tasks 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = inputTask.value;
    const click = 'radio_button_unchecked';
    if (task) {
        console.log(task);
        tasks.push(task);
        console.log(click);
        clicks.push(click);
        saveToLocalStorage()

    }

} );

// Delete items from local storage
function removeTask(e, index) {
        console.log('There is the problem' + index);
        tasks.splice(index, 1);
        clicks.splice(index, 1);
        saveToLocalStorage();
        e.target.parentElement.remove();
}

// Edit items from local storage
function saveEditTask(index, number, newValue) {
    tasks.splice(index, number, newValue);
    saveToLocalStorage();
    console.log('Saved the new Value')
}


// Edit Task list
let editTask = (e, index) => {
    let inputEdit = e.target.parentElement.childNodes[1];
    let currentButton = e.target;
  
    if (currentButton.innerText === "Save") {
      inputEdit.value = inputEdit.value;
      let newValue = inputEdit.value;
      e.target.innerText = "Edit";
      inputEdit.setAttribute("readonly", true);
      console.log('Salvar e a primeira')
      saveEditTask(index, 1, newValue);

    } else {
      inputEdit.removeAttribute("readonly", true);
      inputEdit.focus();
      e.target.innerText = "Save";
      console.log('Salvar e a segunda')
    }

  };

// Check the tasks as marked
let checkTask = (e, index) => {
    let checkMark = e.target;
    let inputEdit = e.target.parentElement.childNodes[1];
    if (checkMark.innerText === "radio_button_unchecked") {
      checkMark.innerText = "check_circle";
      checkMark.classList.add("active");
      inputEdit.classList.add("line-through");
      clicks.splice(index, 1, 'check_circle');
      localStorage.setItem("click", JSON.stringify(clicks));
      localStorage.setItem("task", JSON.stringify(tasks));
    } else {
      checkMark.innerText = "radio_button_unchecked";
      checkMark.classList.remove("active");
      inputEdit.classList.remove("line-through");
      clicks.splice(index, 1, 'radio_button_unchecked');
      localStorage.setItem("click", JSON.stringify(clicks));
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  };
  


function render() {
    assignedTasks.innerHTML = "";
    tasks.forEach((task, index) => {
        // Adding items
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "task");
      
        // Creates check button
        let checkButton = document.createElement("button");
        checkButton.setAttribute("class", "check");
        checkButton.classList.add("material-symbols-outlined");

        if(clicks[index] === 'check_circle'){
            checkButton.innerText = clicks[index];
            checkButton.classList.add("active");
        } else {
            checkButton.innerText = "radio_button_unchecked";
        }

        checkButton.addEventListener("click", (e) => checkTask(e, index));
      
        newDiv.appendChild(checkButton);
      
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("class", "task-input");
        if(clicks[index] === 'check_circle') {
            newInput.classList.add("line-through");
        } 
        newInput.setAttribute("readonly", true);
        newInput.value = task;
      
        newDiv.appendChild(newInput);
        // Creates edit button
        let editButton = document.createElement("button");
        editButton.setAttribute("class", "edit");
        editButton.classList.add("material-symbols-outlined");
        editButton.innerText = "edit";
      
        editButton.addEventListener("click", (e) => editTask(e, index));
      
        newDiv.appendChild(editButton);
      
        // Creates delete button
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.classList.add("material-symbols-outlined");
        deleteButton.innerText = "delete";
      
        deleteButton.addEventListener("click", (e) => removeTask(e, index));
      
        newDiv.appendChild(deleteButton);
      
        assignedTasks.appendChild(newDiv);
        inputTask.value = "";
    });

}