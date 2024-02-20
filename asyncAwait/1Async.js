// https://www.youtube.com/watch?v=6nv3qy3oNkc&t=1448s
//To make a function async write async keyword before it. Async function will always return a Promise. The promise will either get rejected or fulfilled. Suppose the function is not returning Promise and it is returning a value then the value will be wrapped in a Promise. Async and await combo is used to handle Promises
//async also known as nonblocking code, asynchronous programming provides opportunities for a program to continue running other code while waiting for a long-running task to complete. The time-consuming task is executed in the background while the rest of the code continues to execute.

// https://www.youtube.com/watch?v=ap-6PPAuK1Y
// https://www.youtube.com/watch?v=6nv3qy3oNkc

async function getData() {
  return "Hello";
}

const data = getData();
console.log("data", data);

//Now how do you get the value out of Promise..So for this we use a .then() method
data.then((res) => console.log("Resolved Promise---", res));

//Let's create a new Promise
const p = new Promise((resolve, reject) => {
  resolve("Promise");
});
p.then((res) => console.log("res", res));
