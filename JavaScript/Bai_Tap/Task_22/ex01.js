const arrayNumber = [1, 2, 3, 4, 3, 4, 1];
let boolean = false;

for (let i = 0; i < arrayNumber.length / 2; i++) {
  //   console.log(arrayNumber[arrayNumber.length - 1 - i]);
  if (arrayNumber[i] === arrayNumber[arrayNumber.length - 1 - i]) {
    boolean = true;
  } else {
    boolean = false;
    break;
  }
}
console.log(boolean);

// const result = checkSymmetricalArr(arrayNumber);
// console.log(result);
