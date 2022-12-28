// addEventListener is a method.
// It accepts 2 arguments as shown below
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no number in the input field
    document.querySelector(".message").textContent = "No Number ⛔";
  } else if (guess === secretNumber) {
    document.body.style.backgroundColor = "red";
    console.log(
      (document.querySelector(".message").textContent = "Correct Number")
    );
    document.querySelector(".highscore").textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else if (guess < secretNumber) {
    console.log("guess", guess);
    if (Number(score) > 0) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  }
});
