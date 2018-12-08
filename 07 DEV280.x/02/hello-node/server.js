let http = require('http');
let port = 3000;

let reqHandler = (req, res) => {
  console.log("New request to: " +  req.url);
  res.end("Hello World");
}

let server = http.createServer(reqHandler);

server.listen(port, () => {
  console.log("Listening on port " + port);
})