const arr = [
  { id: 1, fullname: "Nguyen Anh Huy", age: 32 },
  { id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
  { id: 3, fullname: "Hoang Thanh Huy", age: 30 },
  { id: 4, fullname: "Lê Đạt", age: 30 },
  { id: 5, fullname: "Lê Duy Đạt", age: 30 },
  { id: 6, fullname: "Huy Quốc", age: 30 },
];

function sortName(arr) {
  // const result = arr.filter((item) => {
  //   let arrOfName = item.fullname.split(" ");
  //   // console.log(arrOfName);
  //   let firstName = arrOfName[arrOfName.length - 1];
  //   console.log(firstName);
  // });
  // return result
  let mainName = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].fullname);
    mainName.push(arr[i].fullname);
  }
  console.log(mainName);
  mainName.sort((a, b) => b > a);
  console.log(mainName);
}
sortName(arr);
