// The Bind Method

//CallandApplyMethods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book:function(){}  //Old Syntax
  //New syntax is shown below
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode} ${flightNum}`, name });
  },
};

// const age = "21"
// const detail = {
//   age
// }

lufthansa.book(239, "Jonas Martin");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; // In this line we are creating a copy of the book function and assigning it to book

// book(23, "Sarah Williams"); This does not work

// The solution to this is the 3 function methods which are call, apply and bind

//A function is really just an object and Objects have methods and therefore functions can have methods too. Call method is one of them
//The first argument in the call method is what we want the this keyword to point to
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 200, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss",
  iataCode: "LX",
  bookings: [],
};

//Apply Method - Apply method is same as call method the only difference is that apply does not receive a list of arguments after the this keyword..instead it takes the array of arguments
//The apply method is not widely used in modern JS
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//The Bind method

const bookEW = book.bind(eurowings); //bind does not call the book function .It will return a new function instead
bookEW(20, "Steven Williams");
console.log(eurowings);

const bookLF = book.bind(lufthansa);
bookLF(10, "Steven");
console.log(lufthansa);

const bookEW20 = book.bind(eurowings, 20);
bookEW20("Jonas");
bookEW20("Steve");
