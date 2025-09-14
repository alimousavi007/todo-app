const form = document.querySelector("#add-todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
// آرایه ای بعنوان "منبع حقیقت" برای ذخیره کارها
let todos = [];

import { renderTodos } from "./modules/ui.js";

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskText = input.value.trim();
    if(taskText !==""){
        const newTodo = {
            id: Date.now(),
            text: taskText ,
            completed: false
        };
        todos.push(newTodo);
        input.value = "";
        renderTodos(todos, todoList);
    }
});
todoList.addEventListener("click", (e)=>{
    const target = e.target;
    //پیدا کردن آی دی تسکی که روش کلیک شده
    const parentLi = target.closest(".todo-item");
    if(!parentLi) return;
    const todoId = Number(parentLi.getAttribute("data-id"));

    //اگر روی دکمه completed کلیک شد
    if(target.classList.contains("complete-btn")) {
        // پیدا کردن تسک در آرایه و تغییر وضعیت completed آن
        todos = todos.map(todo => todo.id === todoId ? {...todo,completed: !todo.completed} : todo); // ...todo: یعنی "یک کپی کامل از آبجکت todo فعلی بساز." (این کار با spread syntax انجام می‌شود).
        renderTodos(todos,todoList);
    }
    // اگر روی دکمه "حذف" کلیک شد
    if(target.classList.contains("delete-btn")){
        todos = todos.filter(todo=> todo.id !== todoId);
        renderTodos(todos,todoList);
    }

});