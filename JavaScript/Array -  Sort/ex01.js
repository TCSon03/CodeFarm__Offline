// const arr = [1, 8, 2, 4, 3, -1];

// const arr2 = arr.sort((a, b) => a - b);
// console.log(arr);
// console.log(arr2);

const arr3 = [
  { id: 1, name: "product 1", price: 120 },
  { id: 2, name: "product 2", price: 640 },
  { id: 3, name: "product 3", price: 630 },
  { id: 4, name: "product 4", price: 230 },
];

const arr4 = arr3.sort((a, b) => {
    console.log("this array : ", a);

  return a.price - b.price;
});
console.log(arr4);

const arr5 = arr3.sort((a, b) => b.price - a.price);
console.log(arr5);



