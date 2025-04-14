const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function countBy(arr, key) {
  return arr.reduce((acc, cur) => {
    console.log("cur: ", cur[key]);
    if (!acc[cur[key]]) {
      acc[cur[key]] = 1;
    } else {
      acc[cur[key]] += 1;
    }
    return acc;
  }, {});
}
console.log(countBy(users, "age"));
console.log(countBy(users, "address"));

// countBy(users, "age");
// // Kết quả: { "20": 1, "21": 1, "22": 2, "32": 1 }

// countBy(users, "address");
// // Kết quả: { "LangSon": 2, "BacGiang": 1, "HaNoi": 2 }
