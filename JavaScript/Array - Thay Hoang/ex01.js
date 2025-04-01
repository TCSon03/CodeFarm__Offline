// const obj1 = { name: "Son", age: 12 };
// const obj2 = { email: "sonsamset@gmail.com" };

// const arr = [1, 2, 3];
// // const fullInfor = { ...obj1, ...obj2, address: "HN", ...arr };
// // console.log(fullInfor);

// const obj3 = {
//   fullname: "Cong Son",
//   email: "son@gmail.com",
//   idol: "Peter",
//   password: "123456s",
//   bios: "Code co",
// };
// const { fullname, idol: honghainhi, ...other } = obj3;

// const copy = { ...obj3 };
// // console.log(copy);

// function sum(...rest) {
//   console.log(rest);
//   let total = 0;
//   for (let i = 0; i < rest.length; i++) {
//     total += rest[i];
//   }
//   return total;
// }
// // console.log(sum(1, 2, 3, 4));

// const people = [
//   { name: "Son", scale: 99 },
//   { name: "Viruss", scale: 8 },
//   { name: "Jack", scale: 55 },
//   { name: "Tung", scale: 8 },
// ];
// function elevatorScale(...people) {
//   let total = 0;
//   for (let i = 0; i < people.length; i++) {
//     total += people[i].scale;
//   }
//   console.log(total);
//   //   if (total < 720) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return total <= 720 // ? true : false;
// }

// console.log(elevatorScale(...people));

// const obj1 = {
//   name: "hoang",
//   infor: {
//     age: 33,
//     sex: "male",
//   },
//   bios: "peter",
//   major: undefined,
//   hello() {
//     console.log("hello");
//   },
// };
// const obj2 = { ...obj1 };
// obj2.bios = "female";

// // console.log("obj1: ", obj1);
// // console.log("obj2: ", obj2);

// const obj4 = Object.assign({}, obj1);
// console.log(obj4);

// const arr1 = [1, 2, , , 3, [4, 5, , , 6, [7, 8, [9]]]];

// const arrFlat1 = arr1.flat();
// const arrFlat2 = arr1.flat(-2)
// const arrFlat3 = arr1.flat(Infinity);

// const arrFlat = myArr.flat(Infinity);
// console.log(arrFlat);
// let max = arrFlat[0];

// for (let i = 0; i < arrFlat.length; i++) {
//   if (max < arrFlat[i]) {
//     max = arrFlat[i];
//   }
// }
// console.log(max);

// function flat(arr, deepth = 1) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i]) && deepth > 0) {
//       array.push(...flat(arr[i], (deepth = arr[i].length)));
//     } else {
//       arr[i] && array.push(arr[i]);
//     }
//   }
//   return array;
// }
// console.log(flat(myArr));

// const myArr = [1, 2, 3, 4];

// function printNumber(n) {
//   if (n < 1) return 0;
//   else {
//     printNumber(n - 1);
//     console.log(n);
//   }
// }
// printNumber(4);
