console.log("hello");
const jonas = {
  firstName: "Jonas",
  lastName: "Peter",
  age: 2010 - 2005,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

//Ways to get property from object
// By the dot operator
console.log(jonas.lastName);

//By the bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//-----------------------------------------------------------------

//prompt function-It returns a String

const intrestedIn = prompt(
  "What do you want to know about Jonas?Choose between firstName,lastName,age,job and friends"
);
// console.log(jonas.intrestedIn); This will give error(It will give you an undefined value) because jonas object does not have any property as intrestedIn
console.log(jonas[intrestedIn]);

if (jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName,age,job and friends"
  );
}

//--------------------------------------------------------------------------

//Challenge
//Jonas has 3 friends and his best friend is Michael

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);

jonas.age = 10;
console.log("age added", jonas);
