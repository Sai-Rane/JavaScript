console.log("hello");

// async function
// Async function return a promise

//Normal function
// function bell() {
//   return "bell";
// }
// const b = bell();
// console.log(b);

//Async function - Write async keyword wuth the function
async function bell() {
  console.log("Inside bell function");
  return "bell";
}
console.log("Before calling bell function");
const b = bell();
console.log("After calling bell function");
console.log(b);
console.log("Last line of code");
