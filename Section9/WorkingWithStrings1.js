const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]); //A
console.log(plane[4]); //undefined

console.log("A320".length); //4
console.log(airline.length); //16

//Strings also has methods like Array

//indexOf
console.log(airline.indexOf("T")); //0  This means Strings are also zero based
console.log(airline.indexOf("r")); //6
console.log(airline.lastIndexOf("r")); //10

//You can also search a whole word
console.log(airline.indexOf("Portugal")); //8

//Slice method - It takes 2 parameters, first is starting index and second is ending
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(0, airline.indexOf(" "))); //TAP
console.log(airline.slice(airline.lastIndexOf(" "))); // Portugal

//To extract ast character of String we use -1
console.log(airline.slice(-2)); //al

//Example
const checkMiddleSeat = function (seat) {
  //B and E are Middle Seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got Middle Seat");
  } else {
    console.log("You got Lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Jonas")); //Jonas
console.log(typeof new String("Jonas")); //object
