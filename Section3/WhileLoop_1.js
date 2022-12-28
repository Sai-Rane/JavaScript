console.log("hello");
//Math.random function gives you a decimal number between 0 and 1.
//To remove the decimal use the trunc function
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end");
  }
}
