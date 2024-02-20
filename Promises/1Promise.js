// Promise - It is like a object which will have some data
// Promise returns PromiseState and PromiseResult
// PromiseResult will store whatever data Promise will return
// PromiseState will tell us the state of promise whether it is Pending,Rejected or Fulfilled
// Promise is an object which represents eventual completion of an async operation

// https://www.youtube.com/watch?v=ap-6PPAuK1Y
// https://www.youtube.com/watch?v=6nv3qy3oNkc

const apiURL = "https://api.github.com/users/Sai-Rane";

const data = fetch(apiURL); //the fetch function returns a Promise
console.log("data", data);

data.then(function (data) {
  console.log("data", data); //here you will get the data in the callback
});
