// "use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 199
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum, //Enhanced Object literal syntax
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH210", 2);
