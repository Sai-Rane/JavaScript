// Closures is a mystical feature of Javascript functions
//We don't create Closures manually like we create an array

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
