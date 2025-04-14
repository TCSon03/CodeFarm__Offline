const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  // Xử lý và in ra kết quả
  return arr.reduce((acc, cur) => {
    // console.log("acc: " + acc);
    // console.log("cur: " + cur[key]);
    // console.log(acc[cur[key]]);

    if (!acc[cur[key]]) {
      acc[cur[key]] = [];
      acc[cur[key]].push(cur)
    }else{
        acc[cur[key]].push(cur)
    }
    return acc;
  }, {});
}

// Output:
const result1 = groupBy(users, "age"); // nhóm theo tuổi

console.log(result1);
const result2 = groupBy(users, "address"); // nhóm theo tuổi

console.log(result2);
