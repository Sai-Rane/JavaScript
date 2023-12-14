//Promise - It is like a object which will have some data
//Promise returns PromiseState and PromiseResult
// PromiseResult will store whatever data Promise will return
// PromiseState will tell us the state of promise whether it is Pending,Rejected or Fulfilled
// Promise is an object which represents eventual completion of an async operation
const apiURl = "https://api.github.com/users/Sai-Rane";

const data = fetch(apiURl);
console.log("data", data);

data.then(function (data) {
  console.log("data", data); //here you will get the data in the callback
});
