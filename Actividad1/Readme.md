a) Crear archivo package.json en el editor con el siguiente contenido:

```
{
  "name": "socket-chat-example",
  "version": "0.0.1",
  "description": "mi primer aplicacion socket.io",
  "dependencies": {}
}
```

b) instalar el modulo express con:

```
npm install express --save
```
c) Crear un archivo server.js con el siguiente contenido:

```
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hola mundo</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

d) En la consola de node.js, ejecutar el servidor con el siguiente comando>

```
node server.js
```
e) Navegar a http://localhost:3000
