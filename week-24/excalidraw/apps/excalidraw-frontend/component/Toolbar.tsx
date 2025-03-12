"use client"

import { Circle, Pen, RectangleHorizontal } from 'lucide-react'
import React, { useState } from 'react'

export type Tool = "circle" | "rect" | "pencil"

type Props = {
    selectedTool:Tool,
    setSelectedTool:(x:Tool)=>void
}

export const Toolbar = ({selectedTool,setSelectedTool}: Props) => {

    const handleClick = (val: Tool) => {
        setSelectedTool(val)
    }

    return (
        <div className='fixed bottom-10 right-10 bg-gray-900 rounded-2xl flex items-center justify-center px-4 py-2 gap-5 text-white shadow-lg '>
            <RectangleHorizontal 
                className={`cursor-pointer p-2 rounded-lg transition-all ${selectedTool === 'rect' ? 'bg-gray-600' : 'hover:bg-gray-700'}`} 
                onClick={() => handleClick('rect')} 
                size={40}
            />
            <Circle 
                className={`cursor-pointer p-2 rounded-lg transition-all ${selectedTool === 'circle' ? 'bg-gray-600' : 'hover:bg-gray-700'}`} 
                onClick={() => handleClick('circle')} 
                size={40}
            />
            <Pen 
                className={`cursor-pointer p-2 rounded-lg transition-all ${selectedTool === 'pencil' ? 'bg-gray-600' : 'hover:bg-gray-700'}`} 
                onClick={() => handleClick('pencil')} 
                size={40}
            />
        </div>
    )
}