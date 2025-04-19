// Bai tap 1
// const empty = [];
// console.log(empty);

// Bai tap 2, 3,4:

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 12];
// console.log(number.length);
// console.log(number[0]);
// console.log(number[Math.floor(number.length / 2)]);
// console.log(number[number.length - 1]);

// Bài tập 5:
// const MisedDatatypes = [
//   42,
//   "Hello",
//   true,
//   { name: "Alice" },
//   [1, 2, 3],
//   function () {
//     return "I am a function";
//   },
//   null,
// ];
// console.log(MisedDatatypes)
// console.log(MisedDatatypes.length);

// Bài tập 6,7,8,9:
const ITCOMpanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// console.log(ITCOMpanies);
// console.log("Số lượng công ty có trong mảng: " + ITCOMpanies.length);
// console.log("Công ty đầu tiên: " + ITCOMpanies[0]);
// console.log(
//   "Công ty ở giữa: " + ITCOMpanies[Math.floor(ITCOMpanies.length / 2)]
// );
// console.log("Công ty cuối cùng: " + ITCOMpanies[ITCOMpanies.length - 1]);

// Bài tập 10:
// for(let i = 0; i < ITCOMpanies.length; i++){
//   console.log(`Công ty ${i + 1}: ${ITCOMpanies[i]}`)
// }

// Bài tập 11:
// for(let i = 0; i < ITCOMpanies.length; i++){
//   console.log(`Công Ty ${i + 1}: ${ITCOMpanies[i].toUpperCase()}`)
// }

// Bài tập 12:
// console.log(
//   `${ITCOMpanies.slice(0, ITCOMpanies.length - 1).join(", ")} và ${
//     ITCOMpanies[ITCOMpanies.length - 1]
//   } là những công ty CNTT lớn`
// );

// Bài tập 13:

// Bài tập 15,16,17,18,19:
// console.log(ITCOMpanies.sort((a, b) => a.length - b.length));
// console.log(ITCOMpanies.reverse());
// console.log(ITCOMpanies.slice(0, 3));
// console.log(ITCOMpanies.slice(ITCOMpanies.length - 3, ITCOMpanies.length));
// console.log(
//   ITCOMpanies.slice(ITCOMpanies.length / 2, ITCOMpanies.length / 2 + 1)
// ); //Nếu mảng lẻ

// Bải tập 20,21,22,23:
// console.log(ITCOMpanies.shift())
// console.log(ITCOMpanies.pop())
// console.log(ITCOMpanies.splice(Math.floor(ITCOMpanies.length / 2), 1));
ITCOMpanies.splice(0, ITCOMpanies.length);
console.log(ITCOMpanies);
console.log(ITCOMpanies);

// Bài tập level 2

// Bài tập 1
