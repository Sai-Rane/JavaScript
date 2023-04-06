// Axios

// Youtube link
// https://www.youtube.com/watch?v=Gl-vOU7ZU9A

// Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations
// It is an upgraded version of Javascript fetch method
// Using fetch method we call API, after which we get a response. Then we convert that response(string data) in JSON format.
// If we use AXIOS the data that we get after hitting API is by default a JSON data.

// syntax:
// axios.get("API to hit(URL)").then((response)=>{console.log(response.data)})  // .then provides a callback function

// axios.get("API to hit(URL)").then((response)=>{console.log(response.data)}).catch((error)=>{console.log(error)})

// ------------------------------------------------------------------------------------------------------
// async function
// Async function return a promise

// example:

// //Normal function
// function bell(){
// 	return "bell"
// }

// const b=bell()
// console.log(b)

// //Async function
// async function bell(){
// 	return "bell"
// }

// console.log("Before calling Bell")

// const b=bell()

// console.log("After calling Bell")
// console.log(b)

// ----------------------------------------------------

// Promise
// -Pending
// -Resolve
// -Reject

// ----------------------------------------------------
// What is an API
// 	An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.

// Who is Client
// 	Clients are users who want to access information from the web. The client can be a person or a software system that uses the API. For example, developers can write programs that access weather data from a weather system. Or you can access the same data from your browser when you visit the weather website directly.

// What are Resources
// 	Resources are the information that different applications provide to their clients. Resources can be images, videos, text, numbers, or any type of data. The machine that gives the resource to the client is also called the server. Organizations use APIs to share resources and provide web services while maintaining security, control, and authentication. In addition, APIs help them to determine which clients get access to specific internal resources.

// REST API
// RESTful API is an interface that two computer systems use to exchange information securely over the internet.

// How does the REST APIs work?
// The basic function of a RESTful API is the same as browsing the internet. The client contacts the server by using the API when it requires a resource. API developers explain how the client should use the REST API in the server application API documentation. These are the general steps for any REST API call:

// 	The client sends a request to the server. The client follows the API documentation to format the request in a way that the server understands.
// 	The server authenticates the client and confirms that the client has the right to make that request.
// 	The server receives the request and processes it internally.
// 	The server returns a response to the client. The response contains information that tells the client whether the request was successful. The response also includes any information that the client requested.
// 	The REST API request and response details vary slightly depending on how the API developers design the API.
