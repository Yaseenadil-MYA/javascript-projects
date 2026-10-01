let todolist = [];
let editIndex = -1;

function addTodo() {
    const inputElement = document.querySelector("#Todo-input");
    const dateElement = document.querySelector("#todo-date");
    const addButton = document.querySelector("#add-btn");
    const cancelButton = document.querySelector("#cancel-btn");

    const todoItems = inputElement.value.trim();
    const todoDate = dateElement.value;

    if (!todoItems) {
        alert("Please enter a todo item.");
        return;
    }

    if (editIndex >= 0) {
        todolist[editIndex] = { items: todoItems, duedate: todoDate };
        editIndex = -1;
        addButton.textContent = "Add";
        cancelButton.hidden = true;
    } else {
        todolist.push({ items: todoItems, duedate: todoDate });
    }

    inputElement.value = "";
    dateElement.value = "";
    displyitems();
}

function editTodo(index) {
    const inputElement = document.querySelector("#Todo-input");
    const dateElement = document.querySelector("#todo-date");
    const addButton = document.querySelector("#add-btn");
    const cancelButton = document.querySelector("#cancel-btn");

    const { items, duedate } = todolist[index];
    inputElement.value = items;
    dateElement.value = duedate;
    editIndex = index;
    addButton.textContent = "Update";
    cancelButton.hidden = false;
}

function cancelEdit() {
    const inputElement = document.querySelector("#Todo-input");
    const dateElement = document.querySelector("#todo-date");
    const addButton = document.querySelector("#add-btn");
    const cancelButton = document.querySelector("#cancel-btn");

    inputElement.value = "";
    dateElement.value = "";
    editIndex = -1;
    addButton.textContent = "Add";
    cancelButton.hidden = true;
}

function displyitems() {
    const containerElement = document.querySelector(".todo-continer");
    let newHtml = "";

    for (let i = 0; i < todolist.length; i++) {
        const { items, duedate } = todolist[i];
        newHtml += `
        <div class="todo-item">
            <div>
                <span class="todo-text">${items}</span>
                <span class="todo-date">${duedate || "No due date"}</span>
            </div>
            <div class="todo-actions">
                <button class="edit-btn" onclick="editTodo(${i});">Update</button>
                <button class="delete-btn" onclick="deleteTodo(${i});">Delete</button>
            </div>
        </div>
        `;
    }

    containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
    todolist.splice(index, 1);
    if (index === editIndex) {
        cancelEdit();
    }
    displyitems();
}
