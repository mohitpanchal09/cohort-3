import axios from 'axios'
import React from 'react'

async function page() {
    const getTodos = await axios.get('https://dummyjson.com/todos')
    const todo = getTodos.data
  return (
    <div className='text-white'>
        {todo.todos.map((t:any)=><div>{t.todo}</div>)}
    </div>
  )
}

export default page