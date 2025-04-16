// let arr = [1, 2, 3, 4, 5];
// // console.log(arr);
// // console.log(arr.length)

// // Duyet qua cac phan tu cua mang
// //  for thuong
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
// }

// // for ...of

// for (let item of arr) {
//   // console.log(item);
// }

// // forEach

// arr.forEach((element) => {
//   // console.log(element);
// });

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element, index, array) =>
//   console.log((array[index] = element * 2))
// );
// console.log(numbers);

// Bài tập
// 1:
// let fruits = ["apple", "banana", "orange", "mango"];

// fruits.forEach((fruit, index) => console.log(index + ": " + fruit));

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + ": " + fruits[i]);
// }

// 2
// let numbers = [1, 2, 3, 4, 10];
// let countNumber = 0;
// for (let i = 0; i < numbers.length; i++) {
//   countNumber += numbers[i];
// }
// console.log(countNumber);

// for(let number of numbers){
//     countNumber += number
// }
// console.log(countNumber);

// numbers.forEach((number, index, array) => (countNumber += number));
// console.log(countNumber);

// 3:
// let nums = [5, 7, 8, 9, 11, 15];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 3 === 0) {
//     console.log(nums[i]);
//     break;
//   }
// }

// for (let num of nums) {
//   //   console.log(num);
//   if (num % 3 === 0) {
//     console.log(num);
//     break;
//   }
// }

// 4:

// let original = [1, 4, 2, 3,10];
// let doubled = [];
// for (let i = 0; i < original.length; i++) {
//   doubled.push(original[i] * 2);
// }
// console.log(doubled);

// for (let ori of original) {
//   doubled.push(ori * 2);
// }
// console.log(doubled);

// original.forEach((value, index, array) => {
//   doubled.push(value * 2);
// });
// console.log(doubled);

// 5:
let numbers = [2, 5,4, 8, 11, 14, 17, 20, 6];
let count = 0;

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         // console.log(numbers[i]);
//         count++;
//     }
// }

// for (let number of numbers) {
//   if (number % 2 === 0) {
//     count++;
//   }
// }

// numbers.forEach((number, index, array) => {
//   if (number % 2 === 0) {
//     count++;
//   }
// });
console.log(count);
