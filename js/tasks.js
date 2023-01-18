const inputTask = document.getElementById('input-task');
const buttonTask = document.getElementById('button-add');
const assignedTasks = document.getElementById('assigned-tasks');

buttonTask.addEventListener('click', function(e) {
    return addTask();
});



let assignedTasksList = document.getElementById('assigned-tasks').children;

console.log(assignedTasksList);

let checkTask = (e) => {
    let checkMark = e.target;
    let inputEdit = e.target.parentElement.childNodes[1];
    if(checkMark.innerText === 'radio_button_unchecked') {
        checkMark.innerText = "check_circle";
        checkMark.classList.add('active');
        inputEdit.classList.add('line-through');
    } else {
        checkMark.innerText = "radio_button_unchecked";
        checkMark.classList.remove('active'); 
        inputEdit.classList.remove('line-through');
    }

} 

let removeTask = (e) => {
    e.target.parentElement.remove();
} 

// Function to edit task
let editTask = (e) => {
    let inputEdit = e.target.parentElement.childNodes[1];
    let currentButton = e.target;

    if (currentButton.innerText === 'Save') {
        inputEdit.value =  inputEdit.value;
        e.target.innerText = 'Edit';
        inputEdit.setAttribute('readonly', true);
    } else {
        inputEdit.removeAttribute('readonly', true);
        inputEdit.focus();
        e.target.innerText = 'Save';
    }

} 


function addTask() {

    if (inputTask.value !== '') {

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'task');

    // Creates check button
    let checkButton = document.createElement('button');
    checkButton.setAttribute('class', 'check');
    checkButton.classList.add('material-symbols-outlined')    
    checkButton.innerText = 'radio_button_unchecked';

    checkButton.addEventListener('click', (e) => checkTask(e));

    newDiv.appendChild(checkButton);

    
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('class', 'task-input');
    newInput.setAttribute('readonly', true);
    newInput.value = inputTask.value;
    
    newDiv.appendChild(newInput);
    // Creates edit button
    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit');
    editButton.classList.add('material-symbols-outlined')    
    editButton.innerText = 'edit';

    editButton.addEventListener('click', (e) => editTask(e));

    newDiv.appendChild(editButton);
    
    // Creates delete button
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.classList.add('material-symbols-outlined')
    deleteButton.innerText = 'delete';

    deleteButton.addEventListener('click', (e) => removeTask(e));

    newDiv.appendChild(deleteButton);



    assignedTasks.appendChild(newDiv);
    inputTask.value = '';
    } else {
      return  console.log('Add text');
    }

}