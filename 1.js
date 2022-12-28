console.log("jonas");
let name = "jonas"; //declaring a variable and assigning a value
console.log(name);
console.log(typeof name);

let a = true;
console.log(a);
console.log(typeof a);

a = "Hello"; //Reassigning is allowed in let keyword
console.log(typeof a);

let year;
console.log(typeof year);

// Reassigning in const keyword is not allowed
const birthYear = 1990;
// birthYear = 1995;  Not allowed

// Also we cannot declare empty const variables..as shown below
const age = "";

// mutable-means we can change

//var keyword
var carName = "honda";
carName = "audi"; //Redeclaration is allowed in var
