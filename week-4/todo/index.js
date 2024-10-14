const express = require('express')
const todo = require('./todo.json')
const app = express()
const fs = require('fs')


app.get('/',(req,res)=>{
    console.log(todo)
    res.send('hello')
})

app.post('/',(req,res)=>{
    todo.push()
})

app.delete('/',(req,res)=>{

})

app.listen(8080,()=>{
    console.log('server connected...')
})