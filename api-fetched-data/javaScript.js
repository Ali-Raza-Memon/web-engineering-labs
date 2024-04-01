document.addEventListener("DOMContentLoaded",function(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => displayTodoList(data))
    .then(error => console.error("Error in fetching :",error));
})

function displayTodoList(todos) {
    const todoListContainer = document.getElementById("todo-list");

    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} >
            <label>${todo.title}</label>
        `;
        todoListContainer.appendChild(todoItem);
    });
}


function displayTodoList(todos){
    const todoListContainer = document.getElementById("todo-list");
    
    todos.forEach(todo=>{
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-list");
        todoItem.innerHTML =`
        <input type="checkbox" ${todo.completed ? 'checked' : ''} >
        
        `
    })
}