let input = prompt("Nhập các số vào mảng, (Ví dụ: 1,2,3,4,3,2,1)");
let arrayNumber;
if (input === null || input.trim() === "") {
  document.write("Cần nhập đúng dữ liệu");
} else {
  arrayNumber = input.split(",").map(Number);
  document.write("Mảng của bạn: " + arrayNumber);
  function checkSymmetricalArr(arr) {
    // Xử lý logic
    if (arr.length === 1) {
      return "Mảng có 1 phần tử, không kiểm tra được.";
    }
    for (let s = 0; s < arr.length / 2; s++) {
      if (arr[s] !== arr[arr.length - 1 - s]) {
        return false;
      }
    }
    return true;
  }
  const result = checkSymmetricalArr(arrayNumber);
  document.write("<br>" + "Mảng của bạn: " + result + " đối xứng");
}
