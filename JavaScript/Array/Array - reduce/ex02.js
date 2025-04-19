const animals = [
  "dog",
  "dong",
  "thang",
  "hoang",
  "son",
  "huan",
  "thang",
  "dong",
  "cuong",
  "toan",
  "hoang",
  "dong",
  "dong",
];

function countAnimals(arr) {
  return arr.reduce((acc, cur) => {
    // console.log(acc);
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
});
}
console.log(countAnimals(animals));
