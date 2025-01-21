"use client"
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(prev=>prev+1)}>Click me {count}</button>
    </div>
  )
}