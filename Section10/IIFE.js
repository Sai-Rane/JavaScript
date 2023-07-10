// Immediately Invoked Function Expressions - IIFE

//A function which gets disappeared after it is called once

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

//IIFE - Wrapping the function in parenthesis so that it will look like an expression
(function () {
  console.log("This will never run again");
})();

//With Arrow Function
(() => console.log("This will never run again"))();

{
  const isPrivate = 10;
  var notPrivate = 20;
}
// console.log(isPrivate); error because const cannot be accessed outside the block
console.log(notPrivate); //20  because var can be accessed outside the block
