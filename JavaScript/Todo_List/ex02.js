const todoInput = document.getElementById("todoInput");
const actionButtom = document.getElementById("actionButton");
const errorMessage = document.getElementById("errorMessage");
const todoList = document.getElementById("todoList");

function getData() {
  const data = JSON.parse(localStorage.getItem("todos") || "[]");
  return data;
}
function handleData(todo) {
  localStorage.setItem("todos", JSON.stringify(todo));
}
let todoUI = getData();

function renderUI(dataList) {
  if (!Array.isArray(dataList)) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Sai dinh dang";
  }
  if (dataList.length === 0) {
    console.log(dataList.lenght);
    todoList.innerHTML = "Khong co du lieu";
  }
  dataList.forEach((element) => {
    const li = document.createElement("li");
    li.className = `todo-item`;
    li.innerHTML = `<span class="task-text">${element.title}</span>`;
    todoList.appendChild(li);
  });
}

function addTodo(){
    
}
renderUI(todoUI);
