import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Otp from './pages/Otp'

function App() {

  return (
    <div className='bg-blue-900'>
     {/* <div className='flex flex-col sm:flex-row space-x-2'>
      <div className='bg-red-500 p-5 rounded-lg text-white'>hello</div>
      <div className='bg-green-500 p-5 rounded-lg text-white'>hello</div>
      <div className='bg-blue-500 p-5 rounded-lg text-white'>hello</div>
     </div> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/otp' element={<Otp/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
