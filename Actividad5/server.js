var app         = require('express')();
var http        = require('http').Server(app);
var bodyParser  = require('body-parser');
var io          = require('socket.io')(http);

var options = {
  root: __dirname + '/public/'
};

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// req = request, res = response
app.get('/', function(req, res){
  res.sendFile('index.html',options);
});

app.post('/reporte', function(req, res){
  console.log(req.body.reporte);
  res.send('ok');
  io.sockets.emit('from server', req.body.reporte);
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
