import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket(){
    const [socket,setSocket] = useState<WebSocket>()
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5pa2V0IiwidXNlcklkIjoiYmJmZTZkYjgtYWE1OS00MjZhLWFiZDAtMDY5ZTg2NjYwZTBmIiwiaWF0IjoxNzQwNzI2NTk4fQ.4GW5FD3LL6ZzMJeyKKRQ6gaUthe9uK2-YVVfJgfmsOA`)
        ws.onopen=()=>{
            setLoading(false)
            setSocket(ws)
        }
    },[])
    return {
        socket,loading
    }
}