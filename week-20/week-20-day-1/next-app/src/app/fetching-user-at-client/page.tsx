"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function page() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/users')
        .then(async(data)=>{
            console.log('dataisssss',data)
            setUsers(data.data)
        })
    },[])
  return (
    <div>{users.map(user=><div>{JSON.stringify(user)}</div>)}</div>
  )
}

export default page