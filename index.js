const flashcards = document.getElementById("flashcards");
const createBox = document.getElementsByClassName("create-box");
const question = document.getElementById("question");
const answer = document.getElementById("answers");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", () => console.log("nope"));

let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
// contentArray.forEach(divMaker);
const divMaker = (text) => {
  const div = document.createElement("div");
  const h2_question = document.createElement("h2");
  const h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.setAttribute(
    "style",
    "border-top:1px solid red; padding: 15px; margin-top: 30px"
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
const addFlashCard = () => {
  let flashCardsInfo = {
    theQuestion: question.value,
    theAnswer: answer.value,
  };
  contentArray.push(flashCardsInfo);
  localStorage.setItem("items", JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";
};

saveBtn.addEventListener("click", () => addFlashCard());
