"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".show-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal); //querySelectorAll will give you NodeList

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("click");
    modal.classList.remove("hidden"); //This will remove the class with name hidden
    overlay.classList.remove("hidden");
  });
}
btnCloseModal.addEventListener("click", function () {
  console.log("close");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
