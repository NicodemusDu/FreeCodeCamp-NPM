let express = require('express');
let app = express();

app.use('/public', express.static(__dirname+'/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/views/index.html');
  console.log('Hello Express');
});

app.get('/json', function(req, res){
  var msg = "Hello json";
  const mySecret = process.env['MESSAGE_STYLE'];
  console.log('get /json mySecret:\t', mySecret);
  if(mySecret==='uppercase'){
    msg = msg.toUpperCase();
  }
  res.send({"message": msg});
});

module.exports = app;

