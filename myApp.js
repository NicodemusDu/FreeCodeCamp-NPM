let express = require('express');
let app = express();

app.use('/public', express.static(__dirname+'/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/views/index.html');
  console.log('Hello Express');
});

app.get('/json', function(req, res){
  res.send({"message": "Hello json"});
  console.log('get /json');
});

module.exports = app;

