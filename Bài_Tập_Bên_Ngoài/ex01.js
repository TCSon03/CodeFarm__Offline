/**
 * Bài 1: Tính tổng các số
 * Input: [1, 2, 3, 4, 5]
 * Output: 15
 */

function sumArray(arr) {
  //   console.log(arr);
  return arr.reduce((acc, cur) => {
    // console.log(acc);
    acc += cur;
    return acc;
  }, 0);
}
const number = [1, 2, 3, 4, 5];
console.log(`Bài tập 1: ` + sumArray(number));

// Bài tập 2:
function multiplyArray(arr2) {
  return arr2.reduce((acc, cur) => acc * cur);
}
const numbers = [1, 2, 3, 4];
console.log("Bài tập 2: " + multiplyArray(numbers)); // Output: 24

// Bài tập 3:
function findMax(arr3) {
  // Dùng reduce để tìm số lớn nhất
  return arr3.reduce((acc, cur) => {
    let max = acc;
    if (max < cur) {
      max = cur;
    }
    return max;
  });
}
const number2 = [10, 5, 8, 20, 3];
console.log("Bài tập 3: " + findMax(number2)); // Output: 20

// Bài tập 4:
function concatenateWords(words) {
  // Dùng reduce để nối các từ lại thành câu
  //   let noi = "";
  return words.reduce((acc, cur) => {
    // console.log("acc: " + acc);
    // console.log("cur: " + cur);
    return acc + " " + cur;
  });
  //   return noi;
}
const words = ["Học", "JavaScript", "rất", "vui"];
console.log("Bài tập 4: " + concatenateWords(words)); // Output: "Học JavaScript rất vui"

// let a ="son";
// let b = "dong";
// let c = a + " " + b
// console.log(c);

// Bai tap 5: Đếm số lần xuất hiện của từng phần tử

function countOccurrences(arr) {
  // Trả về object: { phần_tử: số_lần }
  return arr.reduce((acc, cur) => {
    // console.log("acc:" + acc);
    // console.log("cur:" + cur);
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});
}
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log("Bài tập 5: ", countOccurrences(items));
/*
  Output:
  {
    apple: 3,
    banana: 2,
    orange: 1
  }
  */

//   Bài tập 6: Lọc các số chẵn và tính tổng

function sumEvenNumbers(arr) {
  // Kết hợp filter + reduce trong một lần reduce
  return arr.reduce((acc, cur) => {
    console.log("acc:" + acc);
    console.log("cur:" + cur);
    // if()
  }, 0);
}
const numbers3 = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers3)); // Output: 12
