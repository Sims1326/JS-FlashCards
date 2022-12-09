export const createCard = (text) => {
  const div = document.createElement("div");
  const h2_question = document.createElement("h2");
  const h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.className = "flashcard-front";
  h2_answer.className = "flashcard-back";

  h2_question.innerHTML = text.theQuestion;
  h2_answer.innerHTML = text.theAnswer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  flashcards.appendChild(div);

  div.addEventListener("click", () => {
    div.classList.toggle("flipped");
  });
};
