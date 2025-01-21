import Link from 'next/link'
import React from 'react'

type Props = {}

async function page({}: Props) {
    const arr = [1]
    for(let i=2;i<=50;i++){
        arr.push(i)
    }
  return (
    <>
    <div>All the courses will be listed here</div>
   <ul>{arr.map((item)=><Link href={`/course/${item}`} key={item}><li>{item}</li></Link>)}</ul> 
    </>
  )
}

export default page