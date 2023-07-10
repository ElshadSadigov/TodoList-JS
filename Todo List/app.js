let todos = [];

document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let todoInput = document.getElementById("todo-input");
    let todoText = todoInput.value.trim();

    if (todoText !== "") {
        let todo = {
            id: Date.now(),
            text: todoText
        };
        todos.push(todo);

        updateList();

        todoInput.value = "";
    }
});

function updateList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";



    todos.forEach(function (todo) {
        let li = document.createElement("li");
        li.innerHTML = todo.text;

        let listBtns = document.createElement("div")


        let editButton = document.createElement("i");
        editButton.className = "fa-regular fa-pen-to-square"
        editButton.addEventListener("click", function () {
            editTodo(todo);
        });


        let deleteButton = document.createElement("i");
        deleteButton.className = "fa-solid fa-trash";
        deleteButton.addEventListener("click", function () {
            deleteTodo(todo);
        });
    
        listBtns.appendChild(editButton)
        listBtns.appendChild(deleteButton)
        li.appendChild(listBtns);
        todoList.appendChild(li);
    });
}


function editTodo(todo) {
    let editText = prompt("Enter the new todo text:", todo.text);
    if (editText !== null && editText.trim() !== "") {
        todo.text = editText.trim();
        updateList();
    }
}

function deleteTodo(todo) {
    let index = todos.indexOf(todo);
    if (index !== -1) {
        todos.splice(index, 1);
        updateList();
    }
}



