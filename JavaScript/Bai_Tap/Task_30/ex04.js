// input
// Gợi ý dùng forEach hoặc reduce
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  // Logic bài toán và trả về ết quả
  return array.reduce((acc, cur) => {
    console.log(cur.split(":"));
    let [key,value] = cur.split(":")
    console.log(key);
    acc[key] = value
    return acc;
  }, {});
}
//Test

console.log(convertArrayToObject(arrayString));
// { name: 'John', age: '30', city: 'NY' }
