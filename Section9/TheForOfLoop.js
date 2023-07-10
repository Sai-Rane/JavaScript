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
//It is used to lop over the array
// The for of loop also provides current element and index of the element
//syntax for this is : for(const [i,ele] of menu.entries())
for (const item of menu) console.log(item);
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

for (const item of menu.entries()) console.log(item); //This gives you elements with index
// [0, 'Focaccia']
// [1, 'Bruschetta']
// [2, 'Garlic Bread']
// [3, 'Caprese Salad']
// [4, 'Pizza']
// [5, 'Pasta']
// [6, 'Risotto']

for (const a of restaurant.mainMenu) console.log(a);
