const parent = document.querySelector(".parent");
console.log("parent", parent);
console.log("parent.children", parent.children); // this returns a html collection
console.log("parent.children", parent.children[1]); // <div class="day">Tues</div>
console.log("parent.children", parent.children[1].innerHTML); // Tues

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML); // Mon Tues Weds Thurs
}
console.log(parent.firstElementChild); // <div class="day">Mon</div>
console.log(parent.lastElementChild); // <div class="day">Thurs</div>

document.getElementById("btn").addEventListener("click", function () {
  console.log("click");
});

const dayOne = document.querySelector(".day");
console.log("dayOne", dayOne); // <div class="day">Mon</div>
console.log("dayOne.parentElement", dayOne.parentElement);
console.log("dayOne.nextElementSibling", dayOne.nextElementSibling); // <div class="day">Tues</div>

console.log("NODES: ", parent.childNodes); // this returns a node list

//Creating new element
const div = document.createElement("div"); // this will create a div
console.log(div);
div.className = "main"; //giving classname to div
div.id = "myId"; //giving id to div
div.style.backgroundColor = "blue";
// div.innerText = "CHAI";
const addText = document.createTextNode("CHAI");

//Appending element
div.appendChild(addText);
document.body.appendChild(div);
