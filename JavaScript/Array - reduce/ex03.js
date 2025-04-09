const animals = [
  "cat  ",
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

function logAnimals(arr) {
  return arr.reduce((acc, cur) => {
    const is = acc.findIndex((item) => item === cur);
    if (is === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
console.log(logAnimals(animals));
