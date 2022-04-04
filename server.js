const express = require('express');
const ws = require('ws');

const app = express();
const wsServer = new ws.Server({ noServer: true });
const port = 8000;

// <== HTTP ==>

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

// <== WebSocket ==>

wsServer.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.send('ehllo');
        console.log(message.toString());
    });
});

const server = app.listen(port, (e) => {
    if (e) console.log('> [HTTP] Error: ', e);
    console.log('> [HTTP] server listening on http://localhost:' + port);
});

server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, (socket) => {
        wsServer.emit('connection', socket, request);
    });
});