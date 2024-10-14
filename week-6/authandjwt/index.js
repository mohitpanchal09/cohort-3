const express = require('express')
const jwt = require("jsonwebtoken")
const app = express()
require('dotenv').config()
app.use(express.json())

const users=[]

function generateToken(){
    let token = "";
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
function auth(req,res,next){
    const token = req.headers.token
    if(token){
        jwt.verify(token,process.env.JWT_SEC,(err,decode)=>{
            if(err){
                res.status(401).send({message:"Token invalid"})
            }else{
                console.log('decode',decode)
                req.user=decode.username
                next()
            }
        })
    }else{
        res.send({message:"user not authorised"})
    }
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post('/signup',(req,res,next)=>{
    const username = req.body.username
    const password = req.body.password
    users.push({
        username:username,
        password:password
    })
    res.send({
        message:"You have been signed up"
    })
})
app.post('/signin',(req,res)=>{
    const user=users.find((user)=>user.username==req.body.username && user.password==req.body.password)
    if(user){
        // const token = generateToken()
        token = jwt.sign({username:user.username},process.env.JWT_SEC)
        user.token=token
        console.log(users)
        res.send({token:token})
    }else{
        res.send({message:"token invalid"})
    }

})

app.get('/me',auth,(req,res)=>{
    const token = req.headers.token
    // const user = users.find((user)=>user.token===token)
    const userInfo = jwt.verify(token,process.env.JWT_SEC).username
    const userDetails = users.find((user)=>user.username==userInfo)
    if(userDetails){
        res.send({message:{"username":req.user}})
    }
    else{
        res.send({message:"User not foun"})
    }
})

app.listen(8080,()=>{
    console.log('server running at 8080')
})