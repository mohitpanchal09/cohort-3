import React, { useRef, useState } from 'react'

export default function OtpSection() {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()
  const refs = Array(6).fill()
  return (
    <div className='flex space-x-1'>
      <OtpInput reference={ref1} onDone={(e)=>{ref2.current.focus()}} onBack={(e)=>{ref1.current.focus()}}/>
      <OtpInput reference={ref2} onDone={(e)=>{ref3.current.focus()}} onBack={(e)=>{ref1.current.focus()}}/>
      <OtpInput reference={ref3} onDone={(e)=>{ref4.current.focus()}} onBack={(e)=>{ref2.current.focus()}}/>
      <OtpInput reference={ref4} onDone={(e)=>{ref5.current.focus()}} onBack={(e)=>{ref3.current.focus()}}/>
      <OtpInput reference={ref5} onDone={(e)=>{ref6.current.focus()}} onBack={(e)=>{ref4.current.focus()}}/>
      <OtpInput reference={ref6} onDone={(e)=>{ref6.current.focus()}} onBack={(e)=>{ref5.current.focus()}}/>
    </div>
  )
}


export function OtpInput({reference,onDone,onBack}){
  const [inputValue,setInputValue] = useState('')
  return <input ref={reference} value={inputValue} onChange={(e)=>{
    const val = e.target.value
    if(val!=="" && !isNaN(val)){
      setInputValue(val)
      onDone()
      
    }
    if(val==""){
      setInputValue(val)
      onBack()
    } 
  }} className='w-[40px] h-[50px] rounded-lg p-2 bg-blue-800 text-gray-400'/>
}