console.log("hello");
setTimeout(() => console.log("0 sec timer"), 0); //After 0 sec the callback of setTimeout will be executed

//Now lets build a promise which resolves immediately
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

console.log("Test end");

//output in console will be in this sequence
// hello
// Test end
// Resolved promise 1  Since the callback of Promise is stored in microtask queue and microtask queue has highest priority over callback queue
// ready

//Another Example
// console.log("hello");
// setTimeout(() => console.log("0 sec timer"), 0); //After 0 sec the callback of setTimeout will be executed

//Now lets build a promise which resolves immediately
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });
// console.log("Test end");

// ------------------------------------------------------------
// Deep Copy and Shallow Copy
// Deep copy means everything will be copied
const person = {
  name: "John",
  age: 30,
  address: {
    city: "Delhi",
    country: "India",
  },
};

// Making shallow copy using Object.assign method
const shallowCopy = Object.assign({}, person);
shallowCopy.address.city = "Mumbai";
shallowCopy.age = 10;
console.log(person.address.city); //Mumbai
console.log(shallowCopy.address.city); //Mumbai
console.log(person.age); //30
console.log(shallowCopy.age); //10

// Deep Copy using JSON.parse and JSON.stringify
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "Pune";
console.log("deepCopy", person.address.city); //Mumbai
console.log("deepCopy", deepCopy.address.city); //Pune

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
arr2[2] = 100;

console.log(arr1); //[1, 2, 3, 4, 5]
console.log(arr2); //[1, 2, 100, 4, 5]

const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr3;
arr4[2] = 100;

console.log(arr3); //[1, 2, 100, 4, 5]
console.log(arr4); //[1, 2, 100, 4, 5]

// ---------------------------------

let obj1 = {
  name: "john",
  gender: "male",
  isLogged: true,
};

let cloneObj = JSON.parse(JSON.stringify(obj1));
console.log(obj1, cloneObj);

// ---------------------------------

const obj = {
  appointment: new Date("2024-01-01"),
  count: new Map([
    ["apple", 2],
    ["banana", 3],
  ]),
};

const objClone = JSON.parse(JSON.stringify(obj));
console.log(obj, objClone);
