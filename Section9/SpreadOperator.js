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
console.log(newBadArr); //(5) [1, 2, 7, 8, 9]
console.log(arr);
//Using spread operator
const newAr = [1, 2, arr];
console.log(newAr); //(3) [1, 2, Array(3)]
const newArr = [1, 2, ...arr];
console.log("Using Spread Operator", newArr); //(5) [1, 2, 7, 8, 9]
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Sandwich"];
console.log(newMenu); //(4) ['Pizza', 'Pasta', 'Risotto', 'Sandwich']

//Copy Array
const mainMenuCopy = [restaurant.mainMenu];
console.log(mainMenuCopy); //(3) ['Pizza', 'Pasta', 'Risotto']

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); //(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//What are Iterables
//they are things like all array,string,maps or sets but not object
//We can use a spread operator on Iterables

const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters); //(7) ['J', 'o', 'n', 'a', 's', '', 'S.']

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
