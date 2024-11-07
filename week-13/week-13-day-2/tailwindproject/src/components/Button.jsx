import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Button() {
  return (
    <div className='hidden md:flex items-center gap-x-2 bg-blue-700 text-white rounded-lg px-2 py-1 cursor-pointer'><RiLogoutBoxLine/> Logout</div>
  )
}
