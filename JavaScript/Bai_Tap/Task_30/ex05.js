// Input
const users = [
  { fullname: "Hoang Thi K", age: 20, address: "LangSon" },
  { fullname: "Le Thi X", age: 22, address: "BacGiang" },
  { fullname: "Le Van Y", age: 21, address: "HaNoi" },
  { fullname: "Hoang Duc F", age: 22, address: "HaNoi" },
  { fullname: "Tran Duc B", age: 32, address: "LangSon" },
  { fullname: "Tran Duc B", age: 32, address: "LangSon" },
  { fullname: "Tran Thi E", age: 32, address: "LangSon" },
  { fullname: "Nguyen Ngoc V", age: 32, address: "LangSon" },
  { fullname: "Nguyen Minh E", age: 32, address: "LangSon" },
  { fullname: "Nguyen Duc H", age: 32, address: "LangSon" },
];
function sortedUsers(arrayUser) {
  // Logic bài toán và trả về kết quả
  return arrayUser.sort((a, b) => {
    const last = a.fullname.split(" ");
    // console.log(last);
    const lastStr = last[last.length - 1];
    // console.log(lastStr);
    const firt = b.fullname.split(" ");
    const firtStr = firt[firt.length - 1];

  });
}
// Test
console.log(sortedUsers(users));
// console.log(Array.prototype.pop);
