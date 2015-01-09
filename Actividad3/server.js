var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var options = {
  root: __dirname + '/public/'
};

// req = request, res = response
app.get('/', function(req, res){
  res.sendFile('index.html',options);
});

io.on('connection', function(socket){

  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('from server', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
