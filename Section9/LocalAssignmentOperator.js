const restaurant1 = {
  name: "Capri",
  numGuests: 20,
};
const restaurant2 = {
  name: "LA Piazza",
  owner: "Rossi",
};

// restaurant2.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant1.numGuests || 10;

restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;
console.log(restaurant1); //{name: "Capri", numGuests: 20}
console.log(restaurant2); //{name: 'LA Piazza', owner: 'Rossi', numGuests: 10}
