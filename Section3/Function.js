// Function is a piece of code which can be reused in our code
function logger() {
  console.log("hello");
}
// This is called as Invoking/Calling/Running the function
logger();
logger();

//apple and mango are parameters
function fruitProcessor(apple, mango) {
  console.log(apple, mango);
  const juice = `Juice with ${apple} apples and ${mango} mangoes`;
  console.log(juice);
}
// In the below line, 2 and 5 are arguments
fruitProcessor(2, 5);

// OR
// function fruitProcessor(apple, mango) {
//   console.log(apple, mango);
//   const juice = `Juice with ${apple} apples and ${mango} mangoes`;
//   return juice; The return statement returns the result of the function
// }
// const order = fruitProcessor(2, 5);
// console.log(order);

fruitProcessor(1, 2);

// The Number() function
// The Number() function converts String into Number
const num = Number("24");
console.log(num);
