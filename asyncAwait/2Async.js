const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

// await keyword can only be used inside async function
// You will use the await keyword in front of Promise as shown below
async function handlePromise() {
  const val = await p;
  console.log("val-----", val);
}

handlePromise();
// const data = getData();
// console.log("data", data);
// data.then((res) => console.log("res", res));
