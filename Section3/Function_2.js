console.log("Hello");

//Function Declaration- We can call the function before it is defined
const age1 = calculateAge1(2022);
console.log(age1);
function calculateAge1(birthYear) {
  return 2030 - birthYear;
}

//Anonymous Function-A function without a name is Anonymous function
const calculateAge2 = function (birthYear) {
  return 2030 - birthYear;
};
const age2 = calculateAge2(2010);
console.log(age1, age2);
