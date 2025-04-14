// const students = [
//   { name: "An", score: 85, class: "A" },
//   { name: "Binh", score: 90, class: "B" },
//   { name: "Cuong", score: 88, class: "A" },
//   { name: "Dung", score: 95, class: "B" },
//   { name: "E", score: 80, class: "A" },
// ];
// function groupAndExtract(arr, groupKey, extractKey) {
//   return arr.reduce((acc, cur) => {
//     console.log("cur-class: ", cur[groupKey]);

//     if (!acc[cur[groupKey]]) {
//       acc[cur[groupKey]] = [];
//       acc[cur[groupKey]].push(cur[extractKey]);
//       console.log(acc[cur[groupKey]]);

//     }
//     else{
//         acc[cur[groupKey]].push(cur[extractKey]);
//     }
//     // console.log("cur-name: ", cur[extractKey]);

//     return acc;
//   }, {});
// }

// console.log(groupAndExtract(students, "class", "name"));

// function countOccurrences(arr) {
//   // Trả về object: { phần_tử: số_lần }
//   return arr.reduce((acc, cur) => {
//     if (!acc[cur]) {
//       acc[cur] = 1;
//     } else {
//       acc[cur] += 1;
//     }
//     return acc;
//   }, {});
// }
// const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// console.log(countOccurrences(items));

// function countProductsByCategory(products) {
//   // Trả về object dạng: { category: tổng_số_lượng }
//   return products.reduce((acc, cur) => {
//     console.log(cur.quantity);
//     if (!acc[cur.category]) {
//       acc[cur.category] = cur.quantity;
//     } else {
//       acc[cur.category] += cur.quantity;
//     }

//     return acc;
//   }, {});
// }
// const products = [
//   { name: "iPhone", category: "phone", quantity: 2 },
//   { name: "Samsung", category: "phone", quantity: 3 },
//   { name: "iPad", category: "tablet", quantity: 1 },
//   { name: "Galaxy Tab", category: "tablet", quantity: 2 },
//   { name: "Galaxy Tab", category: "tablet", quantity: 2 },
//   { name: "Galaxy Tab", category: "tablet", quantity: 3 },
// ];
// console.log(countProductsByCategory(products));

// function groupNamesByAge(people) {
//   // Trả về object: { age: [tên, tên, ...] }
//   return people.reduce((acc, cur) => {
//     console.log(cur.age);

//     if (!acc[cur.age]) {
//       // console.log(acc[cur.age]);
//       acc[cur.age] = [];
//       acc[cur.age].push(cur.name)
//       console.log(acc[cur.age]);
//     }
//     else{
//       acc[cur.age].push(cur.name)
//       console.log(acc[cur.age]);

//     }
//     return acc;
//   }, {});
// }
// const people = [
//   { name: "An", age: 20 },
//   { name: "Bình", age: 21 },
//   { name: "Chi", age: 20 },
//   { name: "Dương", age: 22 },
//   { name: "Hà", age: 21 },
// ];
// console.log(groupNamesByAge(people));

function findTopScorer(students) {
  // Trả về object của học sinh có score cao nhất
  return students.reduce((acc, cur) => {
    return cur.score > acc.score ? cur : acc;
  });
}
const students = [
  { name: "An", score: 7 },
  { name: "Bình", score: 8.5 },
  { name: "Chi", score: 9 },
  { name: "Dương", score: 8 },
];
console.log(findTopScorer(students));
