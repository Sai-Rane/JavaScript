//async function - A function which will keep running in the background while performing the code that's inside it. After performing the code it returns a Promise.
//Async function always returns a promise
//Inside async function we can have more than one await statements
//Add async keyword before function to make function as async
//Start by creating a special kind of function which is async function
//await is used to await a result from Promise
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);

  const data = await res.json();
  console.log(data);
};
whereAmI("portugal");
