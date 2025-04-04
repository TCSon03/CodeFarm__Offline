// const students = [
//   { id: 1, name: "Trương Công Sơn", age: 22 },
//   { id: 2, name: "Nguyễn Thạc Huy", age: 20 },
//   { id: 3, name: "Trần Duy Đông", age: 9000000000 },
// ];

// function mapStudents(students) {
//   const result = students.map((value, index, arr) => {
//     return 111;
//   });
//   console.log(result);
// }
// mapStudents(students);

const products = [
  { id: 1, name: "tomato", price: 2, quantity: 10 },
  { id: 2, name: "banana", price: 4, quantity: 18 },
];

const productsAmount = products.map((value, index, arr) => {
  return { ...value, sonsamset: value.price * value.quantity };
});
console.log(productsAmount)
