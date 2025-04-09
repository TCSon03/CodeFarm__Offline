// const fruits = [
//   "apple",
//   "banana",
//   "kiwi",
//   "kiwi",
//   "banana",
//   "orange",
//   "apple",
//   "kiwi",
//   undefined,
//   undefined,
//   null,
//   null,
//   NaN,
//   NaN,
// ];

function removeDuplicate(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  const initialValue = {};
  const sumWithInitial = arr.reduce((accumulator, currentValue) => {
    console.log("accumulator", accumulator);

    if (!accumulator.includes(currentValue)) {
      return { ...accumulator, currentValue };
    }
    return accumulator;
  }, initialValue);
  return sumWithInitial;
}
const result = removeDuplicate(fruits);
console.log(result);

// const fruits = [
//   "apple",
//   "banana",
//   "kiwi",
//   "kiwi",
//   "banana",
//   "orange",
//   "apple",
//   "kiwi",
// ];

// function countElement(arr) {
//   // Xử lý và in ra kết quả
//   const newObject = {};

//   for (let i = 0; i < arr.length; i++) {
//     const fruit = arr[i];
//     if (newObject[fruit]) {
//       newObject[fruit]++;
//     } else {
//       newObject[fruit] = 1;
//     }
//   }
//   return newObject;
// }

// const result = countElement(fruits);
// console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }
