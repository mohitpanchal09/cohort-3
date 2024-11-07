import React from 'react'
import NavItem from './NavItem'
import { IoHome,IoSettings } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Button from './Button';

export default function SideBar() {
  return (
    <div className='flex'>
        <div className='h-screen w-24 md:w-96   transition-all duration-500 shadow-lg flex flex-col gap-y-10 items-center dark:shadow-gray-600'>
        <div className='transition-all duration-500 w-4/5 flex justify-center md:justify-between items-center rounded-lg   p-3 mt-10'><Button/> <CgProfile className='text-2xl cursor-pointer'/></div>
            <NavItem icon={<IoHome/>} item='Home'/>
            <NavItem icon={<FaChartBar/>} item='Trends'/>
            <NavItem icon={<RiGalleryFill/>} item='Gallery'/>
            <NavItem icon={<IoSettings/>} item='Settings'/>
        </div>
        <div className='w-full h-screen'>

        </div>
    </div>
  )
}
