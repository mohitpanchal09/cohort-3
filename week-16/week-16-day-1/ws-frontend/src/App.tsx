import { useEffect, useRef, useState } from "react"


function App() {

  const [socket,setSocket] = useState()
  const inputRef = useRef()

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws)
    ws.onmessage=(e)=>{
      alert(e.data)
    }

  },[])

  const sendMessge=()=>{
    socket.send(inputRef.current.value)
  }

  return (
    <>
      <input type="text" placeholder="..message" ref={inputRef} />
      <button onClick={sendMessge}>send</button>
    </>
  )
}

export default App
