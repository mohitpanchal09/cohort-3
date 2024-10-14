const express = require('express')
const mongoose = require('mongoose')
const {z} = require('zod')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const {UserModel,TodoModel} = require('./db')
const saltRounds = 10;
mongoose.connect("mongodb+srv://mohitpanchal09:mohitpanchal09@cluster0.qfvcg.mongodb.net/todo").then(()=>{
    console.log('db connected')
})

app.use(express.json())

app.post('/signup',  async(req,res)=>{

    //check the password has one uppercase one lower and one special case

    const requiredBody = z.object({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string().min(3).max(100)
    })

    const parsedData = requiredBody.safeParse(req.body)

    if(parsedData.success){
        bcrypt.hash(req.body.password,saltRounds,async (err,hash)=>{
            if(err){
                res.status(500).send({message:"error in generating the hash"})
            }else{
                await UserModel.create({
                    email:req.body.email,
                    password:hash,
                    name:req.body.name,
                })
                res.json({"message":"you  have been signed up"})
            }
    
        })
    }else{
        res.json({message:parsedData.error})
    }

   
    
    
})

app.post('/signin',async (req,res)=>{
    try{
        const user = await UserModel.findOne({
            email:req.body.email
        })
        console.log('user',user)
        if(user){
            const passwordMatch =await bcrypt.compare(req.body.password,user.password)
            console.log('compare',passwordMatch)
            if(passwordMatch){
                const token = jwt.sign({
                    userId:user._id.toString()
                },"sec")
                res.json({
                    token:token
                })
            }else{
                res.json({message:"password wrong"})
            }
    
        }else{
            res.status(403).json({
                message:"You are not registerd"
            })
        }
    }catch(err){
        console.log("err",err)
        res.json({
            message:"something happend",
            error:err
        })
    }
   
})

app.post('/todo',auth,async(req,res)=>{
   await TodoModel.create({
        desc:req.body.desc,
        done:req.body.done,
        userId:req.userId
    })
    res.status(200).json({message:"Todo added"})
})

app.get('/todos',auth,async(req,res)=>{
   const data = await TodoModel.find({
        userId:req.userId
    })
    res.json(200).send({data:data})
})

function auth(req,res,next){
    const token = req.headers.token
    const decode = jwt.verify(token,"sec")
    if(decode){
        req.userId= decode.userId
        next()
    }else{
        res.status(403).json({message:"Incorrect credentials"})
    }
}

app.listen(8080,()=>{
    console.log('server is running at 8080')
})