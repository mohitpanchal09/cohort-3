import React from 'react'

type Props = {
    placeholder:string,
    type:string,
    onChange:(e:any)=>void
}

export function TextInput({placeholder,type,onChange}: Props) {
  return (
    <input type={type} placeholder={placeholder} style={{border:'none',padding:'20px',borderRadius:'10px'}} onChange={onChange}/>
  )
}

