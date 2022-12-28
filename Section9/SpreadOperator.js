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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your Delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

//Using spread operator
const newAr = [1, 2, arr];
console.log(newAr);
const newArr = [1, 2, ...arr];
console.log("Using Spread Operator", newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Sandwich"];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//What are Iterables
//they are things like all array,string,maps or sets but not object
//We can use a spread operator on Iterables

const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);

//Real world Example
const ingredients = [
  // prompt("Lets make pasta! Ingredient 1?"),
  // prompt("Lets make pasta! Ingredient 2?"),
  // prompt("Lets make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, founder: "PC" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
