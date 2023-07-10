const flight = "LH123";
const jonas = {
  name: "Jonas Martin",
  passport: 24564787,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH230";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24564787) {
    alert("Checked In");
  } else {
    alert("Wrong Passport");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000); //generating a random passport number
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

//JS does not have passing by Refrence only passing by Value
