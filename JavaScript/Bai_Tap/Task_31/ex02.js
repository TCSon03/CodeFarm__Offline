// Input

const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"]; // 8

function countTotalWords(arr) {
  return arr.reduce((acc, cur) => {
    // console.log(cur.split(" "));
    let accNew = cur.split(" ");
    // console.log(accNew.length);

    return acc += accNew.length;
  }, 0);
}
// Test
console.log(countTotalWords(arrayWords));
