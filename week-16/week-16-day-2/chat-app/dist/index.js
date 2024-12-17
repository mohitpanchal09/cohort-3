"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// let sockets :WebSocket[] = []
let sockets = [];
wss.on('connection', (socket) => {
    console.log('user connected..');
    socket.send('Hi, you have connected to the socket');
    socket.on('message', (msg) => {
        //@ts-ignore
        const parsedMessage = JSON.parse(msg);
        if (parsedMessage.type === 'join') {
            sockets.push({ socket, room: parsedMessage.payload.roomId });
            socket.send('you have joined the room');
        }
        if (parsedMessage.type == 'chat') {
            let currentUserRoom = null;
            for (let i = 0; i < sockets.length; i++) {
                if (sockets[i].socket == socket) {
                    currentUserRoom = sockets[i].room;
                }
            }
            for (let i = 0; i < sockets.length; i++) {
                for (let i = 0; i < sockets.length; i++) {
                    if (sockets[i].room == currentUserRoom) {
                        sockets[i].socket.send(parsedMessage.payload.message);
                    }
                }
            }
        }
    });
    // sockets.push(socket)
    // socket.on('message',(e)=>{
    //     console.log(e.toString())
    //     for(let item of sockets){
    //         item.send(`sent from server : ${e}`)
    //     }
    // })
    // socket.on('disconnect',()=>{
    //     const allSockets = sockets.filter((item)=>item!=socket)
    //     sockets= allSockets;
    // })
});
