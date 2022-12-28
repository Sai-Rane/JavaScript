console.log("hello");
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //This will give you last element of Array

//Only primitive values are immutable

//You can also mutate (change) the Array
friends[2] = "John";
console.log(friends);

//Example 2
const firstName = "John";
const jonas = [firstName, "Peter", 2010 - 2005, "teacher", friends];
console.log("jonas array", jonas);
