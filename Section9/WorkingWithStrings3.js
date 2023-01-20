//Split function - Allows us to split a String into multiple parts

console.log("a+very+nice+string".split("+")); //(4) ['a', 'very', 'nice', 'string']  after split the result is an array

const [firstName, lastName] = "Jonas Martin".split(" "); //Destructuring
console.log(firstName, lastName);

//join
const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); //Mr Jonas MARTIN

const capitalize = function (name) {
  const names = name.split(" ");
  console.log("names", names); //(4) ['jessica', 'ann', 'smith', 'davis']
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));

    //Another approach is shown below
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalize("jessica ann smith davis");
capitalize("jonas martin");

//Padding a String

const message = "Go to gate 23!";
console.log(message.length);
console.log(message.padStart(25, "+")); //25 indicates the length i.e How big you want the String to be  +++++++++++Go to gate 23!

console.log("Jonas".padStart(10, "+")); //+++++Jonas

console.log("Jonas".padStart(10, "+").padEnd(15, "+")); //+++++Jonas+++++

const maskCreditCard = function (number) {
  const str = number + ""; //Converting number to string. We are basically adding a string to number which will result in giving us a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(1426526637363672637));
console.log(maskCreditCard("353637373733"));

//Repeat method - Allows us to repeat the same string multiple times
const message2 = "Bad Weather...All Departures Delayed.. ";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInLine(5);
planesInLine(2);
