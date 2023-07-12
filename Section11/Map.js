console.log("hello");
//Map is another method to loop over Arrays. Map method is used with Arrays
//Map is similar to the for each loop
//Map creates a brand new array based on the original array
//Map method also has access to 3 parameters. 1st is the element of array, 2nd is the index of array and 3rd is the whole array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("movements", movements);

const euroToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log("movementsUSD", movementsUSD); //[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//Using for of loop
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log("movementsUSDfor", movementsUSDfor);

//Using Map with callback
const a = movements.map((e) => {
  return e * 2;
});
console.log("a", a); //[400, 900, -800, 6000, -1300, -260, 140, 2600]
