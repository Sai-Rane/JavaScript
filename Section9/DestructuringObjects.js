//Destructing objects
//To destructure Objects we use curly braces
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
    console.log(obj); //{"time": "08:00","address": "T Road"}
  },
};

//variables you are passing inside curly braces should match the properties(key) of the object
const { starterMenu, openingHours } = restaurant;
console.log(starterMenu, openingHours);

//If you want to change the property name of objects then we can write it as shown below
const { name: restaurantName, categories: restaurantCategories } = restaurant;
console.log(restaurantName, restaurantCategories);

//lets set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starterMenu);

//Mutating Variables
let a = 10;
let b = 11;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //23 7

//lets now destructure nested objects
const {
  fri: { open, close },
} = openingHours;
console.log("Nested Objects", open, close); //11 23

restaurant.orderDelivery({ time: "08:00", address: "T Road" });
