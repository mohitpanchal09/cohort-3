import React from 'react'

export default function NavItem({item,icon}) {
  return (
    <div className='transition-all duration-500 w-4/5 flex justify-center md:justify-between items-center rounded-lg  p-3 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer'>
        <div className='hidden md:block'>{item}</div>
        <div>{icon}</div>
    </div>
  )
}
