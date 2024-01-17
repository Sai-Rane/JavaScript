// https://www.youtube.com/watch?v=vJEO57B05Sg&t=1804s
// createServer is a function which creates service for you
// createServer is a function which is available in the http module
// createServer takes a function and that function accepts 2 parameters. 1st parameter is something which you received from the Client and the 2nd is something which you want to send to the Client.
// When you have a Client Server Architecture, the Client sends a requests and the Server sends a response.
// To send a response back to the Client, fro that we write, res.write("Welcome back")

var http = require("http"); //mentioning that you require the http module

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //this is how we send header. We mention 2 things there..status code and content type
    res.write("Welcome back");
    res.end();
  })
  .listen(8080); //mentioning port number
