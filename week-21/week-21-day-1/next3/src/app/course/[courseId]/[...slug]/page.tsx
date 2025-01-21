import React from 'react'



async function page({params}: {params:{
    courseId:string,slug:string[]
}}) {
    const {courseId} = await params
    const {slug} = await params
  return (
    <div>
        <h1>course is {courseId}</h1>
        <h2>slug is {JSON.stringify(slug)}</h2>
    </div>
  )
}

export default page