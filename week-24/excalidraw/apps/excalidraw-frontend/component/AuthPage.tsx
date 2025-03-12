"use client"
import Link from 'next/link'
import React from 'react'

type Props = {
    isSignIn: boolean
}

function AuthPage({ isSignIn }: Props) {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-gray-900'>
            <div className='p-6 bg-gray-800 shadow-lg rounded-lg w-96 flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold text-gray-200 text-center'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
                <input 
                    type="text" 
                    placeholder='Email' 
                    className='w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
                <button 
                    className='w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg cursor-pointer  transition-all'
                    onClick={() => { }}
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p className='text-sm text-center text-gray-400'>
                    {isSignIn ? "Don't have an account? " : "Already have an account? "}
                    <span className='text-purple-500 cursor-pointer hover:underline'>
                        {isSignIn ? <Link href={`/signup`}>Sign Up</Link> : <Link href={`/signin`}>Sign In</Link>}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AuthPage;