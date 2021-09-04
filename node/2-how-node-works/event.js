const EventEmiter = require("events");
const http = require("http");
const myEvent = new EventEmiter();

myEvent.on("sale", (num) => {
  console.log(num);
});

myEvent.on("sale", (num) => {
  console.log("sale event is listening");
});

myEvent.emit("sale", 9);

////////////////////////////////////////////////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("requset is rec");
}); //监听request事件

server.listen(8000, "localhost", () => {
  console.log("server is running");
});
