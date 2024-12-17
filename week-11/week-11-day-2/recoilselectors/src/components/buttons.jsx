import React from 'react'
import { countAtom } from '../../../recoil/src/store/atoms/CountAtom'
import {useSetRecoilState} from 'recoil'

export default function Buttons() {
    const setCount = useSetRecoilState(countAtom)
  return (
    <div>
        <button onClick={()=>setCount(c=>c+2)}>Increase</button>
        <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
    </div>
  )
}
