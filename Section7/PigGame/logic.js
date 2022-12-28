//Selecting Elements
const score0El = document.querySelector("#score--0");
document.getElementById("score--0");
const score1El = document.getElementById("score--1");
console.log(score0El, score1El);
const diceEl = document.querySelector(".dice");

//Starting Elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden"); //this will hide the dice image
