import React from 'react'
import { useCount } from '../contexts/CountContext'

function Count() {
    const {count} = useCount()
  return (
    <span>{count}</span>
  )
}

export default Count