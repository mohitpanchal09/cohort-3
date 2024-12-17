import React from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../../../recoil/src/store/atoms/CountAtom'
import { isEvenSelector } from '../selectors/isEvenSelector'

export default function IsEven() {
    const isEven = useRecoilValue(isEvenSelector)
   
  return (
    <div>{isEven ?"even":"odd"}</div>
  )
}
