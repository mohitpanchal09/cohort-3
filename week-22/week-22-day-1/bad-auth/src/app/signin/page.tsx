"use client"
import React, { useState } from 'react'
import axios from 'axios'

type Props = {}

function page({}: Props) {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const handleClick = async ()=>{
        try{
            const res = await axios.post('http://localhost:3000/api/signin',{username,password})
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
        }catch(err){
            console.log('err',err)
        }
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col gap-y-5 border-gray-500 border-2 rounded-lg w-1/2 m-auto'>
        <h1 className='text-center'>Sign In</h1>
        
        <input type="text" name="username" id="" className='h-10 w-1/2  m-auto p-2 rounded-lg' placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" name="password" id="" className='h-10  w-1/2 m-auto p-2 rounded-lg' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className='bg-gray-500 w-1/2 rounded-lg m-auto mb-2' onClick={handleClick}>Sign In</button>
        </div>
    </div>
  )
}

export default page