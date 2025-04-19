const users = [
  { id: 1, userName: "hoang", email: "hoang@gmail.com", age: 32 },
  { id: 2, userName: "minh", email: "minh@gmail.com", age: 43 },
  { id: 3, userName: "dong", email: "dong@gmail.com", age: 23 },
  { id: 4, userName: "thang", email: "thang@gmail.com", age: 22 },
  { id: 5, userName: "son", email: "son@gmail.com", age: 22 },
];

function sortUser(users) {
  // let sortName = users.sort((a, b) => a.userName.localeCompare(b.userName));
  // return sortName;

  const userCopy = structuredClone(users);
  userCopy.sort((a, b) => {
    if (a.userName < b.userName) {
      return -1;
    }
  });
  return userCopy
}
console.log(sortUser(users));
