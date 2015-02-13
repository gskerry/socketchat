
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* TEST GET
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
*/

/* non Socket GET
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
*/

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  
  // console.log('a user connected');

  socket.on('chat message', function(msg){
    // console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    // console.log('user disconnected');
  });

});

http.listen(3000, '0.0.0.0', function(){
  console.log('listening on *:3000');
});
