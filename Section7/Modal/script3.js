"use strict";

//KEY PRESS EVENT

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".show-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal); //querySelectorAll will give you NodeList
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  console.log("close");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal); //writing function
}
btnCloseModal.addEventListener("click", closeModal); //writing function

//There are 3 types of events for the keyboard
//key down,key press and key up
document.addEventListener("keydown", function (e) {
  //We get a event when we press a keydown
  console.log("key pressed");
  console.log(e);
  console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});
