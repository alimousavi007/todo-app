const form = document.querySelector("#add-todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskText = input.value.trim();
    if(taskText !==""){
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("todo-item");
        todoList.appendChild(listItem);
        input.value = "";
    }
})