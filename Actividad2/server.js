var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var options = {
  root: __dirname + '/public/'
};


app.get('/', function(req, res){
  res.sendFile('index.html',options);
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
