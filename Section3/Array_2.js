console.log("hello");
//Array Methods
const friends = ["Michael", "Steven", "Peter"];
console.log("friends array", friends);

//Push method-Adds Element to the end of array
friends.push("John");
console.log("push", friends);

//unshift method-Adds element to beginning of array
friends.unshift("Jonas");
console.log("unshift", friends);

//pop-removes last element of array
friends.pop();
console.log("pop", friends);

//shift-removes first element of array
friends.shift();
console.log("shift", friends);

//indexOf-Tells index of an element
console.log("indexOf", friends.indexOf("Steven"));

//includes-It returns True or false.True if the element is present in the array and false if it is not there
const val = friends.includes("Bob");
console.log("includes", val);
console.log("includes", friends.includes("Michael"));
