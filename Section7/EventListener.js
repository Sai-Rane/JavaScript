// addEventListener is a method.
// It accepts 2 arguments as shown below
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
});
