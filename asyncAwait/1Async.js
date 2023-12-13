// https://www.youtube.com/watch?v=6nv3qy3oNkc&t=1448s
//To make a function async write async keyword before it. Async function will always return a Promise. The promise will either get rejected or fulfilled. Suppose the function is not returning Promise and it is returning a value then the value will be wrapped in a Promise. Async and await combo is used to handle Promises

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
