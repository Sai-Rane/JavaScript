//We create a new promise using a promise constructor
//The Promise has an executor function
const lotteryPromise = new Promise(function (resolve, reject) {
  //   const a = Math.random();
  //   console.log(a);
  if (Math.random() >= 0.5) {
    //in order to set the promise as resolved we use the resolve function
    resolve("You Won💰");
  } else {
    reject("You lost your money");
  }
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
