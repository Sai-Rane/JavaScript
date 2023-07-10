//Sets and Maps are two more Data Structures that were introduced in ES6
//Set - It is a Collection of unique Objects. It does not have Duplicates. Sets are also iterables
//Iterable - Strings,Array,Sets,Maps etc are iterables. we can loop through them using loop
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet); //{'Pasta', 'Pizza', 'Risotto'}  Duplicate items are removed

console.log(new Set("Jonas")); //{'J', 'o', 'n', 'a', 's'}

//We can get size of Set by using .size as shown below
console.log(ordersSet.size); //3

//we can also check whether a certain element is there in a Set or not by .has
console.log(ordersSet.has("Pizza")); //true

console.log(ordersSet.has("Bread")); //false

//we can also add new elements to Set by using .add
console.log(ordersSet.add("Bread")); //{'Pasta', 'Pizza', 'Risotto', 'Bread'}

//we can also delete elements
console.log(ordersSet.delete("Pizza")); //true
console.log(ordersSet.delete("Cheese")); //false

//To delete all elements from a Set use clear
// ordersSet.clear();
console.log(ordersSet); //{size: 0}

for (const order of ordersSet) {
  console.log(order);
}

//Example
const staff = ["Waiter", "Chef", "Waiter", "Chef", "Manager", "Waiter"];
const staffunique = new Set(staff);
console.log(staffunique); //{'Waiter', 'Chef', 'Manager'}  All duplicates are removed

console.log(new Set("JonasMartin").size); //9
