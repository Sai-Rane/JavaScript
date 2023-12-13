//Now let's see how async await is different from normal way(which is using .then method) of handling promises

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});

//Resolving Promise using .then method
function getData() {
  //Here JS engine will not wait for Promise to be resolved.. and Good Morning will be logged first to the console and then after 5 seconds Promise resolved value will be printed. This is what happens when we resolve Promise using the .then method

  p.then((res) => console.log("res-----", res));
  console.log("Good Morning");
}
getData();

// await keyword can only be used inside async function
// You will use the await keyword in front of Promise as shown below
async function handlePromise() {
  const val = await p;
  //Here the JS engine will wait for 5 seconds for the Promise to get resolve and then it will move to next line. So basically our JS engine was waiting for promise to get resolve
  console.log("Good Night");
  console.log("val-----", val);
}

handlePromise();
