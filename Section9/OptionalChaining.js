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
// A property exists if it is not null and not undefined

//example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  // const open = restaurant.openingHours[day]?.open;
  // console.log(open);
  console.log(`On ${day},we open at ${open}`);
}

//Using optional chaining on Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); //Method does not exist
console.log(restaurant.order?.(0, 1)); //undefined
console.log(restaurant.order(0, 1)); //Uncaught TypeError: restaurant.order is not a function

//Using optional chaining on arrays
const users = [{ name: "Jonas", email: "jonasgmail.com" }];
console.log(users[0]?.name ?? "user array empty"); //Jonas

// const myMap = new Map();
// myMap.set("foo", { name: "baz", desc: "inga" });
// console.log(myMap);

// const nameBar = myMap.get("bar")?.name;
// console.log(nameBar);

const user = {
  name: "John",
  age: 21,
  address: {
    street: "Main street",
    city: "NY",
    state: "AV",
    zip: 100,
  },
};
// console.log("user.address.color.stay", user.address.color.stay); //This will give you error
console.log("user.address.color.stay", user.address?.color?.stay); //This will give you undefined
console.log("user.address.city is", user.address?.city); //NY
// console.log("user.address.city is", user.addresss.city); //This will give you error. to avoid this error use Optional chaining as shown below
console.log("user.address.city is", user.addresss?.city); //undefined

const arr = [
  {
    name: "John",
    age: 30,
  },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 30 },
];
console.log(arr[0].name); //John
console.log(arr[3]?.name); //undefined
