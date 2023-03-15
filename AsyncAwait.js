console.log("hello");
// Axios

// Youtube link
// https://www.youtube.com/watch?v=Gl-vOU7ZU9A

// Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations
// It is an upgraded version of Javascript fetch method.Async function return a promise
// Using fetch method we call API, after which we get a response. Then we convert that response(string data) in JSON format.
// If we use AXIOS the data that we get after hitting API is by default a JSON data.

// syntax:
// axios.get("API to hit").then((response)=>{console.log(response.data)})

// axios.get("API to hit").then((response)=>{console.log(response.data)}).catch((error)=>{console.log(error)})

//Normal function
// function bell() {
//   return "bell";
// }
// const b = bell();
// console.log(b);

//Async function - Write async keyword wuth the function
async function bell() {
  console.log("Inside bell function");
  return "bell";
}
console.log("Before calling bell function");
const b = bell();
console.log("After calling bell function");
console.log(b);
console.log("Last line of code");
