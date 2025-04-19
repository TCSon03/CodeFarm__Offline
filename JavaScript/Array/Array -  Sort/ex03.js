// function sortUser(users) {
//   const userCopy = structuredClone(users);
//   userCopy.sort((a, b) => {
//     if (a.userName < b.userName) {
//       return -1;
//     }
//   });
//   return user;
// }

// const isNumber = [];
// const isString = [];
// const isFalsy = [];
// for (let element in arr) {
//   if (typeof arr[element] === "number" && !isNaN(arr[element])) {
//     isNumber.push(arr[element]);
//   } else if (typeof arr[element] === "string") {
//     isString.push(arr[element]);
//   } else {
//     isFalsy.push(arr[element]);
//   }
// }

// isNumber.sort((a, b) => a - b);
// isString.sort((a, b) => {
// });
// console.log(isNumber);
// console.log(isString);
// console.log(isFalsy);

// const arr = [1, 3, -1, "hoang", "anh", "yen", null, NaN, "", , , 1000];

// function mixSort(arr) {
//   const arrCopy = arr.flat(1);
//   const stringArr = [];
//   const numberArr = [];
//   const falseArr = [];
//   arrCopy.forEach((element) => {
//     if (!element) {
//       falseArr.push(element);
//     } else if (typeof element === "string" && element) {
//       stringArr.push(element);
//     } else {
//       numberArr.push(element);
//     }
//   });
//   return [
//     ...numberArr.sort((a, b) => a - b),
//     ...stringArr.sort((a, b) => a.localeCompare(b)),
//     ...falseArr,
//   ];
// }
// console.log(mixSort(arr));

const arr = [1, 3, -1, 9, 7, 7];
arr.sort((a, b) => {
  // console.log(a);
  console.table({ a: a });
});
console.log(arr);
