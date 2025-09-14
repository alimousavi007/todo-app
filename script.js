const form = document.querySelector("#add-todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
// آرایه ای بعنوان "منبع حقیقت" برای ذخیره کارها
let todos = [];

// تابعی برای رندر کردن کارها
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo)=>{
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        // یک دیتا اتریبیوت برای نگهداری آی دی تسک اضافه کن
        listItem.setAttribute('data-id', todo.id);
        // اگر تسک کامل شده بود کلاس completed را اضافه کن
        if (todo.completed) {
            listItem.classList.add("completed");
        }
        // ساختار داخلی li
        listItem.innerHTML = `
         <span>${todo.text}</span>
         <div>
         <button class="delete-btn">×</button>
         <button class="complete-btn">✓</button>
        </div>
    `;
    todoList.append(listItem);
    })
}
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
        renderTodos();
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
        todos = todos.map(todo => todo.id === todoId ? {...todo,completed: !todo.completed} : todo);
        renderTodos();
    }
    // اگر روی دکمه "حذف" کلیک شد
    if(target.classList.contains("delete-btn")){
        todos = todos.filter(todo=> todo.id !== todoId);
        renderTodos();
    }

});