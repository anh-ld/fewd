const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

let port = 3000;
let jokes = [
  {
    id: 1,
    joke: "Chuck Norris round-house kicked micheal jackson and he turned from black to white"
  },
  {
    id: 2,
    joke: "Chuck Norris can kick his way out of a black hole's Schwartzchild radius."
  },
  {
    id: 3,
    joke: "When Chuck Norris hunts any type of game bird, he doesnt need a shotgun. He prefers to throw handfuls of gravel instead."
  }
];

app.get('/quotes', (req, res) => {
  res.json(jokes);
})

app.get('/quotes/:id', (req, res) => {
  let id = req.params.id;
  let resJoke = jokes.filter((item) => {
    return item.id == id;
  })
  res.json(resJoke);
})

app.post('/quotes', (req, res) => {
  jokes.push({id: jokes.length + 1, joke: req.body.joke});
  res.json(req.body)
})

app.listen(port, () => {
  console.log("App is listening on port " + port);
})