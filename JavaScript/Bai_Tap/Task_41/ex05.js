// Sử lý logic
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";
let editingIndex = -1;

const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const errorMessage = document.getElementById("errorMessage");
const actionButton = document.getElementById("actionButton");

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";
  let filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");

    const statusSpan = document.createElement("span");
    statusSpan.className =
      "status " + (todo.completed ? "completed" : "active");
    statusSpan.textContent = todo.completed ? "✔" : "⏳";
    statusSpan.onclick = () => toggleComplete(index);

    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = todo.text;
    textSpan.onclick = () => toggleComplete(index);

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "Sửa";
    editBtn.onclick = () => editTodo(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Xóa";
    deleteBtn.onclick = () => deleteTodo(index);

    li.appendChild(statusSpan);
    li.appendChild(textSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";

  if (editingIndex !== -1) {
    todos[editingIndex].text = text;
    editingIndex = -1;
    actionButton.textContent = "Thêm";
  } else {
    todos.push({ text, completed: false });
  }

  todoInput.value = "";
  saveToLocalStorage();
  renderTodos();
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveToLocalStorage();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveToLocalStorage();
  renderTodos();
}

function editTodo(index) {
  todoInput.value = todos[index].text;
  editingIndex = index;
  actionButton.textContent = "Lưu";
}

function filterTodos(type) {
  filter = type;
  document.querySelectorAll(".filter-section button").forEach((btn) => {
    btn.classList.remove("active");
  });
  const activeBtn = document.querySelector(
    `.filter-section button[onclick="filterTodos('${type}')"]`
  );
  activeBtn.classList.add("active");
  renderTodos();
}

renderTodos();
