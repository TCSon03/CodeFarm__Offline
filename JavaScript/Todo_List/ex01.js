const todoInput = document.getElementById("todoInput");
const actionButton = document.getElementById("actionButton");
const errorMessage = document.getElementById("errorMessage");
const todoList = document.getElementById("todoList");

// Hàm tạo id random
function generateRandomID(length) {
  let characters =
    "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "todo-";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }
  return id;
}

// Hàm lấy dữ liệu từ localStorage
function getData() {
  // dữ liệu lấy từ Local về "todos" tên Key của dữ liệu muốn láy nếu không có gì kết quả là null. Nếu là null thì lấy mảng rỗng để thay thế. "[]" la một chuỗi JSON đại diện cho một mảng rỗng
  // JSON.parse(...): dùng để chuyển đổi chuỗi JSON thành mảng js thật sự
  return JSON.parse(localStorage.getItem("todos") || "[]");
}

// lưu todos vào local dưới dạng JSON
function handleLocal(todo) {
  localStorage.setItem("todos", JSON.stringify(todo));
}

// lưu giá trị từ local vào một biến
let todoUI = getData();

function renderUI(dataList) {
  // Kiểm tra kiểu dữ liệu
  // nếu không phải là array
  if (!Array.isArray(dataList)) {
    // Thông báo lỗi ra màn hình dựa theo css có sẵn
    errorMessage.style.display = "block";
    //thông báo lỗi ra màn hình bằng innerHTML
    errorMessage.innerHTML = "Sai dinh dang du lieu";
  }

  // nếu chưa có dữ liệu trong array
  if (dataList.length === 0) {
    // thông báo "khong co du lieu" đây là đoạn text khi chưa có dữ liệu không phải lỗi
    todoList.innerHTML = "khong co du lieu";
  }
  todoList.innerHTML = ``;
  // hiển thị dữ liệu ra màn hình
  dataList.forEach((todo) => {
    // tạo ra li bằng thao tác DOM
    const li = document.createElement("li");
    // gán cho li một cái class có tên tự đặt
    li.className = `todo-item`;
    // trong li tạo ra thẻ span và lấy ra tên công việc từ dataList in vào trong thẻ span
    li.innerHTML = `<span class="task-text">${todo.title}</span>`;
    // thêm phần tử li vào danh sách của todoList
    todoList.appendChild(li);
  });
}
// Hàm thêm dữ liệu
function addTodo() {
  todoUI = getData();
  // tạo biến value đê hứng giá trị người dùng nhập vào ô input(có xóa khoảng trắng start và end bằng trim)
  const value = todoInput.value.trim();
  const todo = {
    id: generateRandomID(3),
    title: value,
  };
  handleLocal([...todoUI, todo]);
  renderUI(todoUI);
}
// Sự kiện submit dữ liệu thông qua hàm addTodo
actionButton.addEventListener("submit", addTodo);
renderUI(todoUI);
