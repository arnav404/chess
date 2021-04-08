const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const socketio = require('socket.io')
const io = socketio(server);

const router = require('./router')

var numOfPlayers = 0;

app.use(router);

io.on('connection', (socket) => {
    console.log('Connected')
    socket.emit('conn', numOfPlayers)
    numOfPlayers++;

    socket.on('board', ( board, whoseMove ) => {
        console.log("board sent")
        io.sockets.emit('boardBack', {board: board, whoseMove: whoseMove})
    })

    socket.on('disconnect', () => {
        numOfPlayers--;
        console.log('Disconnected')
    })
})

const PORT = 5555 || process.env.PORT
server.listen(PORT, () => console.log(`Server running on ${PORT}`));