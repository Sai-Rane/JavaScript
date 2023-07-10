//Calculate the ages of the years given and store it in the ages Array
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2035 - years[i]);
}
console.log(ages);

//Continue and break statement
const jonasArray = [
  "Jonas",
  "Peter",
  2010 - 2005,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];
//continue
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log("continue statement", jonasArray[i], typeof jonasArray[i]);
}

//break
for (let i = 0; jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log("break statement", jonasArray[i], typeof jonasArray[i]);
}
