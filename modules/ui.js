// تابعی برای رندر کردن کارها
export function renderTodos(todos, todoListEelement) {
    todoListEelement.innerHTML = "";
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
    todoListEelement.append(listItem);
    })
}