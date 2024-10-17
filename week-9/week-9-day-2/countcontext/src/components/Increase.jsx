import React from 'react'
import { useCount } from '../contexts/CountContext'

function Increase() {
    const {setCount} = useCount()
  return (
    <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
  )
}

export default Increase