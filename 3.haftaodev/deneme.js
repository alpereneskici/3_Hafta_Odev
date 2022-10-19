var express = require('express');
var app = express();
var fs = require("fs");

const middleware = function (req, res, next) {
    console.log("Post iseği için istek gönderildi");
    next();
  };  

app.get('/hello', function (req, res) {
    res.send( "Merhaba, GET isteği attınız" );
    });

app.post('/hello',middleware, function (req, res) {
    res.send( "Merhaba, POST isteği attınız" );
    });

app.delete('/hello', function (req, res) {      
      res.send("Merhaba, DELETE isteği attınız ");
   });

app.put('/hello', function (req, res) {
    res.send( "Merhaba, PUT isteği attınız" );
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})