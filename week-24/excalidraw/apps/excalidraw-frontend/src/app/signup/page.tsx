import React from 'react'
import AuthPage from '../../../component/AuthPage'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <AuthPage isSignIn={false}/>
    </div>
  )
}

export default page