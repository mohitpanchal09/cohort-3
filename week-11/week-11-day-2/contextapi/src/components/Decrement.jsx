import React from 'react'
import { useCountContext } from '../contexts/countcontext'

export default function Decrement() {
    const {setCount} = useCountContext()
  return (
    <button onClick={()=>setCount((prev)=>prev-1)}>Decrement</button>
  )
}
