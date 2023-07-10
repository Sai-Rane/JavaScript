//Looping through Arrays

// const jonasArray = [
//   "Jonas",
//   "Peter",
//   2010 - 2005,
//   "Teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

//---------------------------------------------------------------
// New Example:
// Storing types in Another Array

const jonasArray = [
  "Jonas",
  "Peter",
  2010 - 2005,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  //   types[i] = typeof jonasArray[i];
  //Use above line for pushing or use the push method as shown below
  types.push(typeof jonasArray[i]);
}
console.log(types);
