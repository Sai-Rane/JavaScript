// https://www.youtube.com/watch?v=9ksqBa8_txM

//Objects Methods
console.log("hello");

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Peter",
//   birthYear: 1990,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calculateAge: function (birthYear) {
//     return 2010 - birthYear;
//   },
// };
// console.log(jonas);
// console.log(jonas.calculateAge(jonas.birthYear));

// the this keyword-example is shown below
// this refers to current context

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Peter",
//   birthYear: 1990,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   //   calculateAge: function (birthYear) {
//   //     return 2010 - birthYear;
//   //   },
//   calculateAge: function () {
//     console.log(this);
//     return 2010 - this.birthYear;
//   },
// };
// console.log(jonas.calculateAge());

//-------------------------------------------------------------------

//Challenge
//Jonas is a 46 year old teacher and he has a drivers license

const jonas = {
  firstName: "Jonas",
  lastName: "Peter",
  birthYear: 1990,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  getSummary: function () {
    console.log("getSummary", this); //here you will get the whole jonas object
    return `${this.firstName} is a 46 year old ${this.job} and he has ${
      this.hasDriversLicense ? "a" : "not got a"
    } drivers license`;
  },
};
console.log(jonas.getSummary());

console.log("this", this);

// You cannot acccess this keyword inside function, when you are running your JS code using node environment
// example is shown below
function chai() {
  console.log(this);
}
chai();

console.log("2" > 1); //true
console.log(null > 0); //false
