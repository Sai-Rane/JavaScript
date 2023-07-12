const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //   orderDelivery: function (obj) {
  //     console.log(obj);
  //   },
};

//Looping over property names(keys)
const properties = Object.keys(restaurant.openingHours);
console.log(properties); //(3) ['thu', 'fri', 'sat']
// console.log(`We are open on ${properties.length} days`);
let openStr = `We are open on ${properties.length} days `;
console.log(openStr); //We are open on 3 days

for (const day of properties) {
  // console.log(day);
  openStr += `${day} `;
  // console.log("day", day);
}
console.log(openStr); //We are open on 3 days thu fri sat

//Looping over Property values
const values = Object.values(restaurant.openingHours);
console.log(values);

//To loop over the Entire Object we need Entries. Entries is basically keys and values together

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
