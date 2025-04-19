// const arr = [1, 2, 3, 4, 5, 6, 10];

// const checkEven = arr.some((item) => item % 2 === 0);

// console.log(checkEven)

const students = [
  { id: 1, name: "Son", gender: "male" },
  { id: 2, name: "Cuong", gender: "female" },
  { id: 3, name: "Tu", gender: "orther" },
];

// const checkStudents = students.some((item) => item.gender === "female");
const checkStudents = students.every((item) => item.gender === "female");
console.log(checkStudents);


