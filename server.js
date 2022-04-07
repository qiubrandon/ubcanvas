const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const socket = require('socket.io')


app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));

});


const server = app.listen(port, () => {
    console.log(`Canvas app listening on port ${port}`)
})
var io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });


  io.sockets.on('connection', (socket) => {
    console.log('Client connected: ' + socket.id)
    socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))
    socket.on('disconnect', () => console.log('Client ' + socket.id + ' has disconnected'))
   })

