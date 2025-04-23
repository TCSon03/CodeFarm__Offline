const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];
const titleTable = document.getElementById('dataTable');
titleTable.innerHTML = `
  <thead>
      <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
      </tr>
  </thead>
`
const bodyTable = document.createElement('tbody')
titleTable.appendChild(bodyTable)
students.forEach((value) => {
  const log = document.createElement('tr');
  log.innerHTML = `
          <td>${value.id}</th>
          <td>${value.name}</td>
          <td>${value.age}</td>
          <td>${value.city}</td>
  `
  bodyTable.appendChild(log)
})