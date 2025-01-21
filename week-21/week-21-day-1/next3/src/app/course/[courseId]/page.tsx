import React from 'react'

type Props = {params:{
    courseId:string
}}

async function page({params}: Props) {
    const courseId = (await params).courseId
  return (
    <div>detail page of {courseId}</div>
  )
}

export default page