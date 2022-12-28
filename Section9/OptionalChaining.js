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

console.log(restaurant.openingHours.mon); //this will give you undefined

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); //11

//With optional chaining
//if a certain property does not exist it will give undefined immediately
console.log(restaurant.openingHours.mon?.open); //undefined
// if the property before the question mark exists then only it goes further
//a property exists if it is not null and not undefined

//example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day},we open at ${open}`);
}

//Using optional chaining on Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

//Using optional chaining on arrays
const users = [{ name: "Jonas", email: "jonasgmail.com" }];
console.log(users[0]?.name ?? "user array empty");
