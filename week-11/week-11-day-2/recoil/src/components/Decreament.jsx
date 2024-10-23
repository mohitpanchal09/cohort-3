import React from 'react'
import { useSetRecoilState } from 'recoil'
import { countAtom } from '../store/atoms/CountAtom'

export default function Decreament() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <button onClick={()=>setCount(c=>c-1)}>Decreament</button>
  )
}
