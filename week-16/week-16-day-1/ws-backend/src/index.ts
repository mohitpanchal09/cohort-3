import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080})

wss.on('connection',(socket)=>{
    console.log('user connected')
    socket.send('Hi, you have connected to the websocket server')
    socket.on('message',(msg)=>{
        if(msg.toString()=='ping'){
            socket.send('pong')
        }
    })

})