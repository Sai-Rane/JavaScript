//SelectingCreatingandDeletingElements
//If you want to apply CSS styles to entire page we always need to select the documentElement as shown below

console.log(document.documentElement);
//We acn also select head and body separately as shown below
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
//querySelector madhech . and # is used for class and ID respectively

//If you want to select multiple elements use querySelectorAll
const allSections = document.querySelectorAll(".section");
console.log("allSections", allSections);

//Getting element by ID
document.getElementById("section--1");

//Getting elements by TagName
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//Creating and Inserting Elements

//You need to pass a string of tag name
const message = document.createElement("div");
// console.log("message", message);
message.classList.add("cookie-message");
// message.textContent("We use cookies for improved functionality and analytics");
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";
//prepend adds the element as the first child of the header element as shown below
header.prepend(message);
// header.append(message);

header.before(message); //this will add the message before the header element
header.after(message); ////this will add the message after the header element

//Deleting Elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    console.log("remove");
    message.remove();
  });
