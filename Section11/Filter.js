//Filter method - Filters an array based on a certain condition
//filter also uses a callback function. This method also gets access to current array element, index of the element and the whole array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (a, index, arr) {
  return a > 0;
});
console.log("deposits", deposits);

//Doing the same operation using for of loop
const depositsForOf = [];
for (const a of movements) {
  if (a > 0) depositsForOf.push(a);
}
console.log("depositsForOf", depositsForOf);

const withdraw = movements.filter((ele) => ele < 0); //using callback
console.log("withdraw", withdraw);
