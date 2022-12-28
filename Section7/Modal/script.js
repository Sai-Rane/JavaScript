"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".show-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //querySelectorAll will give you NodeList
console.log(btnsOpenModal); //querySelectorAll will give you NodeList

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
