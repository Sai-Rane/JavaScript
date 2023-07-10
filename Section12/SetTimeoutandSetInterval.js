//Timers in JS
//2 types of Timers - SetTimeout and SetInterval
//SetTimeout just runs once after a defined time and SetInterval keeps running forever until we stop it
//SetTimeout receives a callback function
//1 sec =1000 millisec
setTimeout(() => console.log("Here is your pizza 🍕"), 3000);
//The above function gets executed after 3 sec
console.log("waiting...");

//We can also pass arguments in setTimeout function after the delay as shown below
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  "spinach",
  "olive"
);

//You can also stop the timer as shown below
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
if (ingredients.includes("spinach")) {
  clearTimeout(pizzaTimer);
}

//setInterval
//It is used when, suppose after every 2 or every 5 sec you want to execute a certain function
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
