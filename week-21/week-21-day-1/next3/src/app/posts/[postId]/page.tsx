import axios from 'axios'
import React from 'react'

type Props = {params:{postId:string}}

async function page({params}: Props) {
    const postId = (await params).postId
    const res = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)).data
    
  return (
    <div>
        <h1>{res.title}</h1>
        <p>{res.body}</p>
    </div>
  )
}

export default page