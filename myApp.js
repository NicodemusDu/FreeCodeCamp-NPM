let express = require('express');
let bodyParser = require('body-parser');
let app = express();


app.use('/public', express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();
}, function(req, res){
  res.send({'time': req.time})
});

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

app.get('/:word/echo', function(req, res, next){
  console.log('parameter word:\t', req.params.word);
  res.send({'echo': req.params.word});
});


app.route('/name').get(function(req, res){
  console.log('query:\t', req.query);
  const name = req.query.first + ' ' +req.query.last;
  res.send({'name':name});
});

module.exports = app;

