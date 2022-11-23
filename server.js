console.log("scripted loaded");

let express = require("express"); //load express module

let app = express(); //create a web application: active express and put it in the variable app

let port = 3000;

let server = app.listen(port); //tell express to wait for the input from the port 3000

app.use(express.static("public"));//subfunction of express that make run the folder "public"

console.log("running server on http://localhost:"+port);

let serverSocket = require("socket.io"); //load socket module

let io = serverSocket(server); //io is the connection point between the two server service

io.on("connection", newConnection);

function newConnection(newSocket){
  console.log(newSocket);
}