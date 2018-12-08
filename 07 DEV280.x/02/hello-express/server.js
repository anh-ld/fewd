const express = require('express');
const app = express();

let port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World! This is an Express app!");
})

app.listen(port, () => {
  console.log("Express app is listening on port " + port);
})