import React, { useState } from 'react'
import { usePrevios } from '../hooks/userPrevious'

export default function PreviousState() {
    const [state,setState] = useState(0)
    const prev = usePrevios(state)
  return (
    <div>
        <div>current state is {state}</div>
        <button onClick={()=>setState(state+1)}>Increase</button>
        <div>Previous State is {prev}</div>
    </div>
  )
}
