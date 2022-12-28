//Nullish Collascing Operator ??
const restaurant = {
  name: "Hilltop",
  numGuests: undefined,
};

const guests = restaurant.numGuests || 10;
console.log(guests); //5

//Nullish: Nullish values are undefined and null.It does not include 0 or a ""
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
