const arr1 = [
  { id: 1, name: "Son" },
  { id: 2, name: "Dong" },
];
const str1 = JSON.stringify(arr1);
console.log(str1);
console.log(typeof str1);
console.log(typeof JSON.parse(str1));

const products = [{ id: 1, name: "iphone", price: 2000 }];
localStorage.setItem("products", JSON.stringify(products));

const studentManager = {
  students: [],
  addStudent: function (student) {
    this.students.push(student);
  },
  test1: null,
  test2: undefined,
  test3: NaN,
};

console.log(JSON.stringify(studentManager));

/**
 * JSON: 
 * - khoong xử lý được function
 * - Không lưu thuộc tính 
 */