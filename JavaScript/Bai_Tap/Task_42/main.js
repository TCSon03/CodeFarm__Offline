const form = document.getElementById("form-students");
const inputName = document.getElementById("inputName");
const inputMath = document.getElementById("inputMath");
const inputEnglish = document.getElementById("inputEnglish");
const inputScience = document.getElementById("inputScience");
const errorName = document.getElementById("errorName");
const errorMath = document.getElementById("errorMath");
const errorEnglish = document.getElementById("errorEnglish");
const errorScience = document.getElementById("errorScience");
const error = document.getElementsByClassName("error");
const btn_add = document.getElementById("btn_add");
const btn_edit = document.getElementById("btn_edit");

// search
const inputSearch = document.getElementById('searchName')

const todoStudents = document.getElementById("todo-students");

// const data = [
//   {
//     id: 1,
//     name: "Toro",
//     math: 8,
//     english: 7,
//     science: 6,
//   },
//   {
//     id: 2,
//     name: "Ly Tieu Long",
//     math: 4,
//     english: 3,
//     science: 5,
//   },
//   {
//     id: 3,
//     name: "Donal Trump",
//     math: 9,
//     english: 9,
//     science: 10,
//   },
// ];

function ranDom(length) {
  const characters =
    "qwertyuiopasdfghjklzxcvbnm1234567890QWERRTYUIOPASDFGHJKLZXCVBNM";
  let id = "st - ";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }
  return id;
}

function average(student) {
  return ((+student.math + +student.english + +student.science) / 3).toFixed(2);
}

function academic(student) {
  const avg = parseFloat(average(student));
  if (avg >= 8) {
    return "giỏi";
  } else if (avg >= 6.5) {
    return "khá";
  } else if (avg >= 5) {
    return "trung bình";
  } else {
    return "yếu";
  }
}

function getData() {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}
function handleLocal(todo) {
  localStorage.setItem("todos", JSON.stringify(todo));
}

function renderValue(dataStudents) {
  console.log(dataStudents);

  todoStudents.innerHTML = "";
  dataStudents.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.math}</td>
                <td>${element.english}</td>
                <td>${element.science}</td>
                <td>${average(element)}</td>
                <td>${academic(element)}</td>
                <td>
                    <button onclick="deleteTodo('${element.id}')">Xóa</button>
                    <button onclick="updateTodo('${element.id}')">Sửa</button>
                </td>
            `;
    todoStudents.appendChild(tr);
  });
}

function addStudent(e) {
  e.preventDefault();
  const name = inputName.value.trim();
  const math = inputMath.value.trim();
  const english = inputEnglish.value.trim();
  const science = inputScience.value.trim();

  if (name === "") {
    errorName.innerHTML = "Vui long nhap du lieu";
    return;
  } else if (name.length < 5) {
    errorName.innerHTML = "Name it nhat 5 ki tu";
    return;
  } else {
    errorName.innerHTML = "";
  }

  if (isNaN(parseFloat(math)) || math === "") {
    errorMath.innerHTML = "Nhap dung du lieu";
    return;
  } else if (parseFloat(math) < 0 || parseFloat(math) > 10) {
    errorMath.innerHTML = "Diem phai >= 0 va <= 10";
    return;
  } else {
    errorMath.innerHTML = "";
  }

  if (isNaN(parseFloat(english)) || english === "") {
    errorEnglish.innerHTML = "Nhap dung du lieu";
    return;
  } else if (parseFloat(english) < 0 || parseFloat(english) > 10) {
    errorEnglish.innerHTML = "Diem phai >= 0 va <= 10";
    return;
  } else {
    errorEnglish.innerHTML = "";
  }

  if (isNaN(parseFloat(science)) || science === "") {
    errorScience.innerHTML = "Nhap dung du lieu";
    return;
  } else if (parseFloat(science) < 0 || parseFloat(science) > 10) {
    errorScience.innerHTML = "Diem phai >= 0 va <= 10";
    return;
  } else {
    errorScience.innerHTML = "";
  }

  const student = {
    id: ranDom(4),
    name: name,
    math: math,
    english: english,
    science: science,
  };
  const newStudent = [...getData(), student];

  handleLocal(newStudent);
  renderValue(newStudent);
  form.reset();
}

function deleteTodo(id) {
  const students = getData();
  const student = students.filter((element) => element.id !== id);
  handleLocal(student);
  renderValue(student, alert("Xoa hoc sinh thanh cong"));
}

function updateTodo(id) {
  btn_add.style.display = "none";
  btn_edit.style.display = "block";

  const dataStudents = getData();
  const student = dataStudents.find((element) => element.id === id);

  inputName.value = student.name;
  inputMath.value = student.math;
  inputEnglish.value = student.english;
  inputScience.value = student.science;

  btn_edit.onclick = function (e) {
    e.preventDefault();

    // Lấy giá trị mới
    const name = inputName.value.trim();
    const math = inputMath.value.trim();
    const english = inputEnglish.value.trim();
    const science = inputScience.value.trim();

    const updatedStudents = dataStudents.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name,
          math,
          english,
          science,
        };
      }
      return item;
    });

    handleLocal(updatedStudents);
    renderValue(updatedStudents);

    form.reset();
    btn_add.style.display = "block";
    btn_edit.style.display = "none";
    btn_edit.onclick = null;
  };
}

function searchStudent(){
  const searchStudent = getData()
  let search = inputSearch.value.trim()
  
  let student = searchStudent.filter(value => {
    return value.name.toLowerCase().includes(search.toLowerCase())
  })
  renderValue(student)
}

function filterStudent(){
   
}

form.addEventListener("submit", addStudent);
renderValue(getData());
