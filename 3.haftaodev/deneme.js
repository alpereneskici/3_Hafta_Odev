var express = require('express');
var app = express();
var fs = require("fs");

const middleware = function (req, res, next) {
    console.log("Post iseği için istek gönderildi");
    next();
  };  

app.get('/listUsers', function (req, res) {
    res.send( "Merhaba, GET isteği attınız" );
    });

app.post('/addUser',middleware, function (req, res) {
    res.send( "Merhaba, POST isteği attınız" );
    });

app.delete('/deleteUser', function (req, res) {      
      res.send("Merhaba, DELETE isteği attınız ");
   });

app.put('/addPut', function (req, res) {
    res.send( "Merhaba, PUT isteği attınız" );
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})