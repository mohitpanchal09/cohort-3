"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', (socket) => {
    console.log('user connected');
    socket.send('Hi, you have connected to the websocket server');
    socket.on('message', (msg) => {
        if (msg.toString() == 'ping') {
            socket.send('pong');
        }
    });
});
