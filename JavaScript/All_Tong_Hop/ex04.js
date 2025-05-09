const result = fetch("https://dummyjson.com/products");
console.log(result);
console.log(Promise);

const myFetch = new Promise((resolve, reject) => {
  resolve("thanh cong");
});
console.log(myFetch);

myFetch

  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("ket thuc");
  });
