// const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];
// // console.log(arrNumber);
// const newArrNumber = [];
// for (let i = arrNumber.length - 1; i >= 0; i--) {
//   const item = arrNumber[i];
//   // console.log(arrNumber[i]);
//   if (!!arrNumber[i]) {
//     console.log(arrNumber[i]);
//     if (!newArrNumber.includes(item)) {
//       newArrNumber.push(item);
//     }
//   }
// }
// console.log(newArrNumber)

const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];

function reverseArr(arr) {
  // Xử lý và in ra kết quả
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];
    if (!!item) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    }
  }
  return newArr;
}
const result = reverseArr(arrNumber);
console.log(arrNumber);
console.log(result);
document.writeln("Mảng của bạn: " + arrNumber + "<br>");

document.writeln("Mảng của bạn sau khi đảo: " + result + "<br>"); // [6,5,4,3,2,1]
