const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  // Xử lý và in ra kết quả
  return arr.reduce((acc, cur, index, array) => {
    let age = cur[key];
    console.log(age);
    if(!acc[age]){
      acc[age] = [];
      acc[age].push(cur)
    }
    else{
      acc[age].push(cur)
    }
    return acc
  }, {});
}

// Output:
const result1 = groupBy(users, "age");

console.log(result1);
