// const array = [10, 1, 2, 3, 4, 9, -1, 1000];

// const result = array.filter((value, index, arr) => value < 5);

// console.log(result);

const students = [
  { id: 1, name: "Trương Công Sơn", age: 22 },
  { id: 2, name: "Nguyễn Thạc Huy", age: 20 },
  { id: 3, name: "Trần Duy Đông", age: 9000000000 },
];

function filterStudents(students){
    const result = students.filter((value, index, arr) => value.age <= 30)
    return result;
}
console.log(filterStudents(students))

