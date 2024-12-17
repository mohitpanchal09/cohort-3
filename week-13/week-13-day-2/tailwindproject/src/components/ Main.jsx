import React from 'react'
import bgImg from '../assets/demo.jpeg'

export default function  Main() {
  return (
    <div className='flex flex-col w-full h-screen'> 
        <img src={bgImg} alt="" className='w-full h-2/6'/>
        <div className='flex gap-x-8 justify-center'>
            <div className='rounded shadow-lg h-[300px] w-[150px]'>hi</div>
            <div className='rounded shadow-lg h-[400px] w-[400px]'></div>
            <div className='rounded shadow-lg h-[400px] w-[400px]'></div>
        </div>
    </div>
  )
}
