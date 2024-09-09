todoList = JSON.parse(localStorage.getItem('items')) || [];

displayItems();

function addTodo(){
    let inputElement = document.querySelector('.todo-input');       
    let todoItem = inputElement.value;                //It took user's value (written inside input area) in todoItem (variable.)

    let dateElement = document.querySelector('.todo-date'); 
    let todoDate = dateElement.value;

    if (todoItem === ''){
        alert("Please enter to-do and a date.")         //If input area is empty, return this.
    } else{
        todoList.push({item: todoItem, duedate: todoDate});
        inputElement.value = '';
        dateElement.value = '';                         // After pushing values, input area should be empty.

        displayItems();
    }
}

function displayItems(){
    let containerElement = document.querySelector('#todo-container');

    let newHTML = '';

    for (let i = 0; i < todoList.length; i++){

        let {item, duedate} = todoList[i];

        newHTML += `
        <div class="addedItems">
            <div class="item-container">
                <span>${item}</span>
            </div>
            <div class="date-container">
                <span>${duedate}</span>
            </div>
            <button class="deleteButton" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        </div>
        `;
    }

    localStorage.setItem('items', JSON.stringify(todoList));
    containerElement.innerHTML = newHTML;
}
