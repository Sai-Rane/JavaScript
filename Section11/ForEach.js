console.log("hello");

//for each method - Used to loop over the array
//Disadvantage of forEach method is you cannot use break and continue statement with it.If you want to break of a loop you can use for of loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of loop

for (const a of movements) {
  //   console.log(a);
  if (a > 0) {
    console.log(`You deposited ${a}`);
  } else {
    console.log(`You withdrawed ${Math.abs(a)}`); //Math.abs method is used to remove the negative sign
  }
}

console.log("Using for each method");
//for each method -- The for ecah method also requires a callback function
movements.forEach(function (a) {
  if (a > 0) {
    console.log(`You deposited ${a}`);
  } else {
    console.log(`You withdrawed ${Math.abs(a)}`); //Math.abs method is used to remove the negative sign
  }
});
