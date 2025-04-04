// function findAnima(animails) {
//   if (Array.isArray) {
//     const result = animails.find((value, index) => {
//       //   console.log(value, index);
//       return value === "viruss";
//     });
//     console.log(result);
//   }
// }
// findAnima(animails);

// function findIndexAnimal(animails) {
//   if (Array.isArray) {
//     const result = animails.findIndex((value, index, arr) => {
//       return value === "viruss";
//     });
//     console.log(result)
//   }
// }
// findIndexAnimal(animails)
const animails = ["dog", "cat", "mouse", "viruss", "dom dom"];

// function findIndexAnimal(animals){
//     return Array.isArray(animals) && animals.findIndex((item) => item === "viruss")
// }
// console.log( findIndexAnimal(animails))

// // function findLastIndexAnimal

Array.prototype.find2 = function (callback, thisArg) {
  const newThis = [...this];
};
animails.find2();
