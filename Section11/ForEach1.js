console.log("hello");

//for each method - Used to loop over the array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for each method -- The forEach method also requires a callback function //the forEach method also provides current element,index and the whole array
movements.forEach(function (a, index, array) {
  if (a > 0) {
    console.log(`${index}: You deposited ${a}`);
  } else {
    console.log(`${index}: You withdrawed ${Math.abs(a)}`); //Math.abs method is used to remove the negative sign
  }
});

//The for of method also gives access to current index and element of array as shown below

console.log("For of loop");
for (const [i, ele] of movements.entries()) {
  console.log(`${i}: ${ele}`);
}
for (const [i, ele] of movements) {
  console.log(i, ele);
}

// 0: 200
// 1: 450
// 2: -400
// 3: 3000
// 4: -650
// 5: -130
// 6: 70
// 7: 1300
