"use client"
import { initDraw } from '@/app/draw'
import React, { useEffect, useRef, useState } from 'react'
import { Toolbar } from './Toolbar'
import { Game } from '@/app/draw/Game'

type Props = {
    roomId:string,
    socket:WebSocket
}

type Shape = "circle" | "rect" | "pencil"

export default function Canvas({roomId,socket}:Props) {
  const [selectedTool,setSelectedTool] = useState<Shape>("rect")
  const [game,setGame] = useState<Game>()
  useEffect(()=>{
    game?.setTool(selectedTool)
  },[selectedTool,game])

      const canvasRef = useRef<HTMLCanvasElement>(null);
      useEffect(() => {
        if (canvasRef.current) {
          const canvas = canvasRef.current
          const g = new Game(canvas,roomId,socket)
          setGame(g)
          return ()=>{
            g.destroy()
          }
        }
      }, [canvasRef]);
  return (
    <div>
      <canvas ref={canvasRef} height={window.innerHeight} width={window.innerWidth}></canvas>
      <Toolbar selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
    </div>
  )
}