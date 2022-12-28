const airline = "TAP Air Portugal";

console.log(airline.toUpperCase());
console.log("jonas".toUpperCase());

//Fix capitalization in name
const name = "jOnAs";
const nameLower = name.toLowerCase();
console.log(nameLower);
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect); //Jonas

//Example
//Comparing Emails

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //trim will remove the extra spaces
console.log(trimmedEmail); //hello@jonas.io

//Doing everything in a single step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23.Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

//Includes
const plane = "Airbus A320neo";
console.log(plane.includes("A")); //true

//starts with
console.log(plane.startsWith("Air")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus Family");
}

//Example

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed to board the plane");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop some Food and pocket Knife");
checkBaggage("I have clothes and bag");
checkBaggage("I have snacks");
checkBaggage("I have a gun");
