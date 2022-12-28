//Maps - Map is a DS which is used to map values to keys. Just like an object data is stored in key value pair
//Differenece between maps and Objects is that..
//In maps the keys can have any type whereas in Objects the keys are basically always String

//Let's create a restaurant map here

const rest = new Map();
//To fill the Map with element we use the set method

rest.set("name", "Classic italiano");
rest.set(1, "Firenze Italy");
console.log(rest.set(2, "Lisbon, Portugal")); //Map(3) {'name' => 'Classic italiano', 1 => 'Firenze Italy', 2 => 'Lisbon, Portugal'}
console.log(rest); //Map(3) {'name' => 'Classic italiano', 1 => 'Firenze Italy', 2 => 'Lisbon, Portugal'}

rest
  .set("categories", ["Italaian", "Pizzeria"])
  .set("open", 10)
  .set(true, "We are Open")
  .set("close", 23);
console.log(rest); //{'name' => 'Classic italiano', 1 => 'Firenze Italy', 2 => 'Lisbon, Portugal', 'categories' => Array(2), 'open' => 10, …}

//In order to get data from Map we use get method as shown below
//Just pass the name of the key in the get method
console.log(rest.get("name")); //Classic italiano
console.log(rest.get(true)); //We are Open

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //We are Open

//We can also check whether a Map has certain key or not using has method

console.log(rest.has("categories")); //true

//Deleting
rest.delete("name");
console.log(rest);

//Size
console.log(rest.size); //6

//Using Array as a key

rest.set([1, 2], "Test");
console.log(rest);
