//Now lets see the modern way of making AJAX calls. For this we use the Fetch API. the Fetch function returns a promise

//Older way of making API call
// const request = new XMLHttpRequest();
//syntax: request.open("TYPE OF REQUEST","STRING CONTAINING THE URL")
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// Endpoint is just another name for URL
// request.send();

const request = fetch("https://restcountries.com/v3.1/name/portugal");
console.log("request", request); //fetch function will return a promise here

//What is promise - A container for an asynchronous delivered value OR A container for a future value(Example of future value is response coming from a AJAX/API call)

// Before doing any API call the state of Promise will be Pending. After doing the API call, the promise will either be fulfilled or rejected.
//Fulfilled Promise means we have got the data after making an API call
//Rejected Promise means there is an error while fetching data
