//Reduces all array elements down to a one single value.
//example: Adding all elements of an array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (accumulator, ele, index, arr) {
  return (accumulator += ele);
});
console.log("balance", balance);

//Doing addition  using for of loop
var balance2 = 0;
for (const a of movements) balance2 += a;
console.log("balance2", balance2);
