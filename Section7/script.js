"use strict";
console.log(document.querySelector(".message"));
console.log(
  (document.querySelector(".message").textContent = "Correct Number")
);

//Chnaging/Manipulating the element value
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//if we want to get the value of the field use the .value property as shown below
console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
