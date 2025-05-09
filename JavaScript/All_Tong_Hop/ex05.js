const rs1 = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
  console.log(rs1);
  
