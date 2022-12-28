//Selecting Elements
const score0El = document.querySelector("#score--0");
document.getElementById("score--0");
const score1El = document.getElementById("score--1");
console.log(score0El, score1El);
const diceEl = document.querySelector(".dice");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//Starting Elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden"); //this will hide the dice image

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
{
  /* <p class="current-score" id="current--0">0</p> */
}

const current1El = document.getElementById("current--1");
console.log(btnNew);
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1. If true,switch to next player
  if (dice !== 1) {
    //Add dice to current score
    // currentScore = currentScore + dice;
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Swith to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active"); //Toggle method will add the class if it is not there and if it is there it will remove it
    player1El.classList.toggle("player--active");
  }
});
