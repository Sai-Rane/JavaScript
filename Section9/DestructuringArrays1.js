console.log("hello");
//Destructing Arrays
//It is a way of unpacking values from an array or object into separate variables.The original array is not affected
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Earlier we used to retrieve elements like this
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(b);

//With the help of Destructing we can declare all the variables at the same time
// const [x, y, z] = arr;
// console.log("Destructing Array", x, y, z);

// const [first, second] = restaurant.categories;
// console.log("Categories destructing:", first, second);

//this will skip the second value in the categories array
const [pizza, , pizza1] = restaurant.categories;
console.log("Categories destructing:", pizza, pizza1);

console.log(restaurant.order(1, 2));

//lets now destructure it
const [first, second] = restaurant.order(1, 2);
console.log(first, second);
