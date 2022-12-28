// addEventListener is a method.
// It accepts 2 arguments as shown below
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //when there is no number in the input field
    document.querySelector(".message").textContent = "No Number ⛔";
  } else if (guess === secretNumber) {
    //When player Wins
    document.body.style.backgroundColor = "red";
    console.log(
      (document.querySelector(".message").textContent = "Correct Number")
    );
  } else if (guess > secretNumber) {
    //When guess is Too High
    document.querySelector(".message").textContent = "Too High";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    //When guess is Too Low
    document.querySelector(".message").textContent = "Too Low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
