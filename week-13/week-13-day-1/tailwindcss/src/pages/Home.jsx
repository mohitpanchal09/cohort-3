import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

function Home() {
  return (
    <div className='flex flex-col justify-center text-center h-screen items-center gap-y-10 text-white'>
        <div className='text-blue-300'>
            Webinar.<span className='text-white'>gg</span>
        </div>
        <div>
            verify your age
        </div>
        <div>
            Please confirm your birth date. Your data will not be stored
        </div>
        <Input type="text"  placeholder='Your Birth Year' />
       <Button>Continue</Button>
    </div>
  )
}

export default Home