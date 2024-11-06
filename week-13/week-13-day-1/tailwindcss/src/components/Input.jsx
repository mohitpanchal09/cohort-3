import React from 'react'

export default function Input({type,placeholder}) {
  return (
    <input type={type} placeholder={placeholder} className='w-3/12 rounded-lg p-2 bg-blue-800 text-gray-400'/>
  )
}
