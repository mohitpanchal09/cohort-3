import React from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../../../recoil/src/store/atoms/CountAtom'

function Counter() {
    const count = useRecoilValue(countAtom)
  return (
    <div>{count}</div>
  )
}

export default Counter