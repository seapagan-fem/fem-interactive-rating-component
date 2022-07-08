console.log("JavaScript loaded.");

// this will store the current selected rating
let choice = 0;

const beforeEl = document.getElementById("before");
const afterEl = document.getElementById("after");

// get all the rating buttons into an HTMLCollection
const ratingButtons = document.getElementsByClassName("rating-button");

// this function will be called on each click of a rating button.
const ratingClick = (e) => {
  let newChoice = Number(e.target.id);
  if (newChoice !== choice) {
    choice !== 0
      ? document
          .getElementById(String(choice))
          .classList.toggle("rating-selected")
      : null;
    choice = newChoice;
    e.target.classList.toggle("rating-selected");
  }
};

// handle clicking the 'submit' button
const submitClick = (e) => {
  console.log(`Submit has been clicked and choice is ${choice}`);
  beforeEl.classList.add("hide-me");
  afterEl.classList.remove("hide-me");
};

// set a click handler for each of the rating buttons.
Array.from(ratingButtons).forEach((element) => {
  element.addEventListener("click", ratingClick);
});

// set a click handler on the submit button
document.getElementById("submit").addEventListener("click", submitClick);
