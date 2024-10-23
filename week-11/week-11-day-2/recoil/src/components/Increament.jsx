import React from 'react'
import { useSetRecoilState } from 'recoil'
import { countAtom } from '../store/atoms/CountAtom'

export default function Increament() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <button onClick={()=>setCount(count=>count+1)}>Decreament</button>
  )
}
0