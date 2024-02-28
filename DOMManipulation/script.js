const title = document.getElementById("title");
console.log(title); //<h1 id="title" class="heading">DOM Manipulation</h1>
console.log(title.className); //heading

title.style.background = "yellow";
console.log(title.textContent); //DOM Manipulation DOM Object
console.log(title.innerHTML); //DOM Manipulation <span>DOM Object</span>
console.log(title.innerText); //DOM Manipulation DOM Object

console.log(document.querySelector("h1")); //<h1 id="title" class="heading" style="background: yellow;">…</h1>
console.log(document.querySelector(".heading"));
console.log(document.querySelector("#title"));

const tempLiList = document.querySelectorAll("li");
console.log(tempLiList); //NodeList(3) [li, li, li]

tempLiList[0].style.color = "blue";

const myH1 = document.querySelectorAll("h1");
console.log(myH1); //NodeList [h1#title.heading]

tempLiList.forEach((ele) =>
  console.log("tempLiList elements", (ele.style.background = "lightblue"))
);

const listClasses = document.getElementsByClassName("list-item");
console.log(listClasses); //HTMLCollection(3) [li.list-item, li.list-item, li.list-item]

//To convert HTMLCollection in Array we use the Array.from method
const convertedArray = Array.from(listClasses);
console.log(convertedArray); // (3) [li.list-item, li.list-item, li.list-item]

convertedArray.forEach((val) => (val.style.color = "black"));
