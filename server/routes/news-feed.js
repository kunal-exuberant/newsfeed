var express = require('express');
var router = express.Router();
var http = require("http");

/* GET users listing. */
router.get('/', function(req, res, next) {

  var options = {
    host: 'www.quipmate.com',
    port: 80,
    path: '/ajax/write.php?action=new_feed&start=0',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  var server_request = http.request(options, function(server_response){

    console.log(server_response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(server_response.headers));
    server_response.setEncoding('utf8');

    server_response.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      res.send(chunk);
    });

  });

  server_request.on('error', function(err) {
    res.send('error: ' + err.message);
  });

  server_request.end();

  //res.send('respond with a news feed resource from enable disable');
});

module.exports = router;
