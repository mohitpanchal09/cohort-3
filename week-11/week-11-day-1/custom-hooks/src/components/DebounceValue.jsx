import React, { useEffect, useState } from 'react'

const useDebounce = (value,delay)=>{
    const [debouncedValue,setDebouncedValue] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value)
        },delay)

        return ()=>{
            clearTimeout(handler)
        }
    },[value,delay])
    return debouncedValue
}

export default function DebounceValue() {
    const [inputVal,setInputVal] = useState("")
    const debouncedVal = useDebounce(inputVal,200)

    useEffect(()=>{
        console.log('input changed');
    },[debouncedVal])

  return (
   <input onChange={(e)=>setInputVal(e.target.val)}/>
  )
}
