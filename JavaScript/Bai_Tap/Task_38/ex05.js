let question = document.querySelectorAll(".accordion-question");
question.forEach((item) => {
  console.log(item);

  item.addEventListener("click", () => {
    let answer = item.nextElementSibling;
    answer.classList.toggle("active");
  });
});

// const q = document.querySelectorAll(".accordion-question");
// console.log(q);
// q.forEach((q) => {
//   q.addEventListener("click", () => {
//     const a = q.nextElementSibling;
//     a.classList.toggle("active");
//   });
// });
