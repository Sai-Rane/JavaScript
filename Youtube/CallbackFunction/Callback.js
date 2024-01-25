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

//method 3 using arrow function
const tam = () => {
  console.log("tam");
};
tam();

//Now let's see callback function
const calculate = (a, b, operation) => {
  return operation(a, b);
};

const result = calculate(2, 3, function (num1, num2) {
  return num1 + num2;
});
console.log("result", result);
