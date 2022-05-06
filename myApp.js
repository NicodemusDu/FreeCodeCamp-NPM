let express = require('express');
let app = express();


app.use('/', function(){
  console.log('Hello World');
});

module.exports = app;

