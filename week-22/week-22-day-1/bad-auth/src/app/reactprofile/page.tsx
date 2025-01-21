"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}

function page({}: Props) {
    const [profile,setProfile] = useState<string>("")
    useEffect(()=>{
        const response = axios.get('http://localhost:3000/api/profile',{
            headers:{
                authorization:localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log('resss',res)
            setProfile(res.data.profile)
        })
    },[])
  return (
    <div>
        {/* <Image src={profile!==""?profile:null} alt='profile'/> */}
    </div>
  )
}

export default page