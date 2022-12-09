export const createCard = (text) => {
  const div = document.createElement("div");
  const h2_question = document.createElement("h2");
  const h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.setAttribute(
    "style",
    "padding: 15px 0`; margin-top: 30px; text-align:center; vertical-align: middle"
  );
  h2_answer.setAttribute("style", "text-align:center; display:none; color:red");

  h2_question.innerHTML = text.theQuestion;
  h2_answer.innerHTML = text.theAnswer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("click", () => {
    if (h2_answer.style.display == "none") h2_answer.style.display = "block";
    else h2_answer.style.display = "none";
  });
  flashcards.appendChild(div);
};
