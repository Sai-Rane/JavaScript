console.log("hello");
//Map is another method to loop over Arrays
//map is similar to the for each loop
//Map creates a brand new array based on the original array
//Map method also has access to 3 parameters. 1st is the element of array, 2nd is the index of array and 3rd is the whole array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("movements", movements);

const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
// console.log("movementsUSD", movementsUSD);

//Another syntax of writing the map function is with Arrow function as shown below

const movementsUSD = movements.map((e) => e * euroToUsd);
console.log(movementsUSD);

const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdraw ${mov}`;
  }
});
console.log("movementsDescription", movementsDescription);

// "Movement 1: You deposited 200"
// "Movement 2: You deposited 450"
// "Movement 3: You withdraw -400"
// "Movement 4: You deposited 3000"
// "Movement 5: You withdraw -650"
// "Movement 6: You withdraw -130"
// "Movement 7: You deposited 70"
// "Movement 8: You deposited 1300"
