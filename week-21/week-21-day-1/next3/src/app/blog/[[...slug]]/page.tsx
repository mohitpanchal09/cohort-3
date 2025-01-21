import React from 'react'

type Props = {params:{slug:string[]}}

function page({params}: Props) {
  return (
    <div>{JSON.stringify(params)}</div>
  )
}

export default page