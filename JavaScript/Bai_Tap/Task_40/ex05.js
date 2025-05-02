const question = document.getElementsByClassName("accordion-question");
const answer = document.getElementsByClassName("accordion-answer");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    for (let j = 0; j < answer.length; j++) {
      if (i !== j) {
        answer[j].classList.remove("active");
      }
    }
    answer[i].classList.toggle("active");
  });
}
