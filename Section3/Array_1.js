console.log("hello");
const calculateAge = function (birthYear) {
  return 2010 - birthYear;
};
const years = [1990, 1995, 2000, 2002, 2005];
const age1 = calculateAge(years[0]);
console.log(age1);
const age2 = calculateAge(years[1]);
console.log(age2);

const ages = [calculateAge(years[0]), calculateAge(years[1])];
console.log(ages);
