const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const socketio = require('socket.io')
const io = socketio(server);

const router = require('./router')

app.use(router);

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('board', ( board) => {
        io.to(board.room).emit('boardBack', board)
    })
    socket.on('endGame', (board) => {
        io.to(board.room).emit('finishGame', board)
    })

    socket.on('clientJoin', ( roomID ) => {
        socket.join(roomID.roomID);
        if(io.sockets.adapter.rooms.get(roomID.roomID).size === 2 && roomID.roomID !== '') {
            console.log("GAME READY")
            var random = Math.floor(Math.random() * 2);
            var sockets = Array.from(io.sockets.adapter.rooms.get(roomID.roomID))
            var mapOfColors = new Map();
            if(random === 0){
                mapOfColors[sockets[0]] = 'b'
                mapOfColors[sockets[1]] = 'w'
            } else {
                mapOfColors[sockets[0]] = 'w'
                mapOfColors[sockets[1]] = 'b'
            }
            io.to(roomID.roomID).emit('gameReady', mapOfColors)
        }
        console.log(io.sockets.adapter.rooms.get(roomID.roomID))
        console.log("Joined room: "+roomID.roomID)
    })

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})

const PORT = 5555 || process.env.PORT
server.listen(PORT, () => console.log(`Server running on ${PORT}`));