console.log("Hello");

// Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean
// In JavaScript there are 5 falsy values as shown below
// 0, undefined,'',null,NaN

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("john"));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should save");
}
