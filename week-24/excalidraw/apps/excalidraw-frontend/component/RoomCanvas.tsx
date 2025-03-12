"use client"
import { WS_URL } from '@/app/config'
import React, { useEffect, useState } from 'react'
import Canvas from './Canvas'

type Props = {
    roomId:string
}

export default function RoomCanvas({roomId}: Props) {
    const [socket,setSocket] = useState<WebSocket | null>(null)
    console.log("🚀 ~ RoomCanvas ~ socket:", socket)

    useEffect(()=>{
        const ws = new WebSocket(WS_URL)
        ws.onopen=()=>{
            setSocket(ws)
            ws.send(JSON.stringify({
                type:"join_room",
                roomId:roomId
            }))
        }
        return () => {
            ws.close(); // Ensure the socket is properly closed when the component unmounts
        };
    },[])
    if(!socket){
        
        return <div>Connecting to the server...</div>
    }
  return (
    <Canvas roomId={roomId} socket={socket}/>
  )
}