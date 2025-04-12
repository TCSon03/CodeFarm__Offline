const listCharacters =
  "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateId(length, prefix) {
  let random = `${prefix}`;

  for (let i = 0; i < length; i++) {
    random += listCharacters[Math.floor(Math.random() * listCharacters.length)];
  }

  return random;
}
console.log(generateId(4, "user - "));
// let string = "hoang";
// console.log(string[0]);
