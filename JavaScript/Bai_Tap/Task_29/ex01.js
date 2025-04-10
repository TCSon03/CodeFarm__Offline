// Input
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 50 },
  { id: 3, name: "Keyboard", price: 150 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "USB Cable", price: 25 },
  { id: 6, name: "Webcam", price: 120 },
  { id: 7, name: "Desk Lamp", price: 80 },
  { id: 8, name: "Headphones", price: 200 },
  { id: 9, name: "Speaker", price: 180 },
  { id: 10, name: "Chair", price: 250 },
];

function filteredProductNames(array, price) {
  // console.log(array);
  // console.log(price);
  let productName = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    // console.log(array[i].price);
    // console.log(price);

    if (array[i].price > price) {
      console.log(array[i]);
      productName.push(array[i].name);
    }
  }
  // console.log(productName);
  return productName;
}
// filteredProductNames(products, 200);
// Output
const result = filteredProductNames(products, 200);
console.log(result); // [ 'Laptop', 'Monitor', ''Headphones, 'Chair' ]
