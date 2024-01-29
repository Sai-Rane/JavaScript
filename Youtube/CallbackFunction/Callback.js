//www.youtube.com/watch?v=z-H8S83jJec&list=PLhzIaPMgkbxDxVcH-M-JFM73PY1R_i2mK&index=43
//different methods of writing function are shown below

//method 1
function name() {
  console.log("hello");
}
name();

//method 2 using anonymous function
const tim = function () {
  console.log("tim");
};
tim();

const square = (num) => num * num;
console.log(square(2));

//method 3 using arrow function
const tam = () => {
  console.log("tam");
};
tam();

// ---------------------------------------------------------------

//Now let's see callback function

// Passing one function as parameter to another function
const calculate = (a, b, operation) => {
  return operation(a, b);
};

//method 1
const addition = calculate(2, 3, function (num1, num2) {
  return num1 + num2;
});
console.log("addition", addition);

//method 2
const subtraction = (a, b) => a - b;

const subResult = calculate(10, 5, subtraction); //argument
console.log("subResult", subResult);

//method 3
function multiply(a, b) {
  //a and b are parameters
  return a * b;
}

const mulResult = calculate(2, 3, multiply);
console.log("mulResult", mulResult);
