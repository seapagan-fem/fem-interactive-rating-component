console.log("JavaScript loaded.");

let choice = 0;

// get all the rating buttons into an HTMLCollection
const ratingButtons = document.getElementsByClassName("rating-button");

// this function will be called on each click of a rating button
const ratingClick = (e) => {
  console.log(`rating button ${e.target.id} was Clicked!`);
  choice = Number(e.target.id);
  console.log(choice);
};

// handle clicking the 'submit' button
const submitClick = (e) => {
  console.log(`Submit has been clicked and choice is ${choice}`);
};

// set a click handler for each of the rating buttons.
Array.from(ratingButtons).forEach((element) => {
  element.addEventListener("click", ratingClick);
});

// set a click handler on the submit button
document.getElementById("submit").addEventListener("click", submitClick);
