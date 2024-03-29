//making api call using fetch method

const apiURL = "https://api.github.com/users/Sai-Rane";
async function handlePromise() {
  //Now the fetch will return a Promise, so let's write await in front of it
  const data = await fetch(apiURL);
  console.log("data", data);
  const jsonValue = await data.json();
  console.log("jsonValue", jsonValue);
}

handlePromise();
