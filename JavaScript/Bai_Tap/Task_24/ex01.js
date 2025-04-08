const number = [4, 2, 7, 6, 5, 8, 2, 1];
document.writeln("Mảng ban đầu: " + number + "<br>")
function sortArrNumber(arr) {
  // Xử lý và in ra kết quả
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let t = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = t;
      }
    }
  }
  return arr;
}

const result = sortArrNumber(number);
document.writeln("Mảng sau khi sắp xếp: " + result);