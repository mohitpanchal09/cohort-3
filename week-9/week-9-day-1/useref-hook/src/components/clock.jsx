import React, { useState,useRef } from 'react'

const Clock = () => {
  const [currentTime,setCurrentTime] = useState(0)
  const timer = useRef()

  const startClock = ()=>{
    const value = setInterval(()=>{
      setCurrentTime(c=>c+1)
    },1000)
    timer.current = value
  }

  const stopClock =()=>{
    clearInterval(timer.current)
  }

  return (
    <div style={{display:'flex',gap:'50px'}}>

    <h1>{currentTime}</h1>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop Clock</button>
    </div>
  )
}

export default Clock