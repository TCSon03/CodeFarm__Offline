// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
];

function removeDuplicate(valFruits) {
  if (!Array.isArray(valFruits)) {
    return;
  }
  const initialValue = [];
  const sumWithInitial = valFruits.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      return [...accumulator, currentValue];
    }
    return accumulator;
  }, initialValue);
  return sumWithInitial;
}

// Output:
const result = removeDuplicate(fruits);

document.writeln("Mảng sau khi xóa trùng : ", result);
console.log("Mảng sau khi xóa trùng : ", result);

// const result = [...new Set(fruits)]
// console.log(result);


