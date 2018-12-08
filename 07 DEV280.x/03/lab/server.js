const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
let db = new sqlite3.Database('myDatabase.db');
let port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send("Get request received at '/' ");
});

app.get('/quotes', function(req, res){
  if(req.query.year){
      db.all('SELECT * FROM quotes WHERE year = ?', [req.query.year], function(err, rows){
          if(err){
              res.send(err.message);
          }
          else{
              console.log("Return a list of quotes from the year: " + req.query.year);
              res.json(rows);
          }
      });
  }
  else{
      db.all('SELECT * FROM quotes', function processRows(err, rows){
          if(err){
              res.send(err.message);
          }
          else{
              for( var i = 0; i < rows.length; i++){
                  console.log(rows[i].quote);
              }
              res.json(rows);
          }
      });
  }
});

app.get('/quotes/:id', function(req, res){
  console.log("return quote with the ID: " + req.params.id);
  db.get('SELECT * FROM quotes WHERE rowid = ?', [req.params.id], function(err, row){
      if(err){
          console.log(err.message);
      }
      else{
          res.json(row);
      }
  });
});

app.post('/quotes', function(req, res){
  console.log("Insert a new quote: " + req.body.quote);
  db.run('INSERT INTO quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], function(err){
      if(err){
          console.log(err.message);
      }
      else{
          res.send('Inserted quote with id: ' + this.lastID);
      }
  });
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
})