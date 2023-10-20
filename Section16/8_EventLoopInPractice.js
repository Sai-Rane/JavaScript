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
