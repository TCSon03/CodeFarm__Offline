// const arr = [1,2,3,4,5]
// const result = arr.reduce((a,b,c,d) => {
//     console.table({a,b,c,d})
// })

const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr1 = arr.reduce((acc, cur) => {
//   return acc * cur;
// }, {});
// console.log(arr1);

function factorial(arr) {
  return arr.reduce((acc, cur, index, arr) => {
    return acc * cur;
  });
}
console.log(factorial(arr));
// console.log(Array.from({ length: 7 }, (_, i) => i + 1));
