import { createCard } from "./createCard.js";
const createBox = document.querySelector(".create-box");
const saveBtn = document.getElementById("save");
const closeBtn = document.getElementById("close");
const newBtn = document.querySelector("#new-card");
const delBtn = document.querySelector("#delete-card");
const question = document.getElementById("question");
const answer = document.getElementById("answers");
const flashcards = document.getElementById("flashcards");
// Adds localstorage to contentArray if available
let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
// prints any cards in local storage
contentArray.forEach((element) => {
  createCard(element);
});
const closeModule = () => (createBox.style.display = "none");
const openModule = () => (createBox.style.display = "block");
const addFlashCard = () => {
  let flashCardsInfo = {
    theQuestion: question.value,
    theAnswer: answer.value,
  };
  contentArray.push(flashCardsInfo);
  localStorage.setItem("items", JSON.stringify(contentArray));
  createCard(flashCardsInfo);
  question.value = "";
  answer.value = "";
};
const deleteCards = () => {
  flashcards.innerHTML = "";
  localStorage.clear();
};

saveBtn.addEventListener("click", () => addFlashCard());
closeBtn.addEventListener("click", () => closeModule());
newBtn.addEventListener("click", () => openModule());
delBtn.addEventListener("click", () => deleteCards());
