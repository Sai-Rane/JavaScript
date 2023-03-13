console.log("hello");
//Map is another method to loop over Arrays
//map is similar to the for each loop
//Map creates a brand new array based on the original array
//Map method also has access to 3 parameters. 1st is the element of array, 2nd is the index of array and 3rd is the whole array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("movements", movements);

const euroToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log("movementsUSD", movementsUSD);

//for of loop
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log("movementsUSDfor", movementsUSDfor);

const a = movements.map((e) => {
  return e * 2;
});
console.log("a", a);
