fetch("https://dummyjson.com/products")
  .then((res) => {
    console.log(res);
    console.log(typeof res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));


  console.log(fetch);
  
