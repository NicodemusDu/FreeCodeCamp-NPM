let express = require('express');
let app = express();


app.get('/', function(req, res){
  res.sendFile('Hello Express');
  console.log('Hello Express');
});

module.exports = app;

