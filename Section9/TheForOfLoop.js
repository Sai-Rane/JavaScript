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

  orderDelivery: function (obj) {
    console.log(obj);
  },
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//The for of Loop
for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item); //This gives you elements with index
