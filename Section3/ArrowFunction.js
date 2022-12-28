console.log("hello");

//Anonymous Function
const calculateAge = function (birthYear) {
  return 2030 - birthYear;
};

//Arrow Function
const calculateAge2 = (birthYear) => 2030 - birthYear;
const age = calculateAge2(2020);
console.log(age);

const yearsUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  console.log("age", age);
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(2000));
