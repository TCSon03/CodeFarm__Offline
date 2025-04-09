const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  return arr.reduce((acc, cur) => {
    // console.log(cur);
    const keyValue = cur[key];
    // console.log(keyValue);
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(cur);
    // console.log(arr);
    return acc;
  }, {});
}
console.log(groupBy(users, "age"));

// console.log(groupBy(users, "age"));
