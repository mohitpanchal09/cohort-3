import React from 'react'
import { useCountContext } from '../contexts/countcontext'

export default function Count() {
    const {count} = useCountContext()
  return (
    <div>{count}</div>
  )
}
