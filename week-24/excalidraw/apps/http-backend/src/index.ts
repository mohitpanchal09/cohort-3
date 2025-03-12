import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import {JWT_SEC} from "@repo/backend-configs/index"
import {prismaClient} from "@repo/db/client"
import { middleware } from './middleware';
import {CreateRoomSchema} from "@repo/common/types"

const app = express()

app.use(cors())
app.use(express.json())

app.get('/chats/:roomId',async (req:Request,res:Response)=>{
    try{
        console.log('234')
        const {roomId} = req.params
        const messages = await prismaClient.chat.findMany({
            where:{
                roomId:Number(roomId)
            },
            orderBy:{

            }
        })
        console.log("🚀 ~ app.get ~ messages:", messages)
        res.status(200).json({messages})
    }catch(err){

    }
})

app.get('/room/:slug',async (req:Request,res:Response)=>{
    try{
        const {slug} = req.params
        const room = await prismaClient.room.findFirst({
            where:{
                slug
            }
        })
        res.status(200).json({room})
    }catch(err){

    }
})

app.post('/signup',async(req:Request,res:Response)=>{
    try{
        const {email,password,name} = req.body
        await prismaClient.user.create({
            data:{
                email,password,name
            }
        })
        res.json({status:200,msg:"You have been signed up!"})
    }catch(err){
        console.log("🚀 ~ app.post ~ err:", err)
        res.status(500).json({msg:"something went wrong",data:{},error:err})
    }
})

app.post('/signin',async (req:Request,res:Response)=>{
    try{
        const {email,password} = req.body
        const user = await prismaClient.user.findUnique({where:{
            email:email
        }})
        if(!user){
            res.json({status:404,msg:"User does not exist"})
        }
        
        const checkPassword = user?.password == password
        if(!checkPassword){
            
        res.status(403).json({ msg:"Wrong credentials",status:403
        })
        }
        const token = jwt.sign({name:user?.name,userId:user?.id},JWT_SEC)
        res.status(200).json({ msg:"Signed In successfully",status:200,user:{
            name:user?.name,email:user?.email
        },token:token})
        
    }catch(err){
        console.log("🚀 ~ app.post ~ err:", err)
        res.status(500).json({msg:"something went wrong",data:{},error:err})
    }
})

app.post('/room',middleware,async(req:Request,res:Response)=>{
    try{
        const parsedData = CreateRoomSchema.safeParse(req.body)
        if(!parsedData.success){
            res.json({message:"Invalid inputs"})
        }
        //@ts-ignorexw
        const userId = req.userId
        await prismaClient.room.create({
            data:{
                slug:req.body.name,
                adminId:userId
            }
        })
        res.status(200).json({
            status:200,msg:"Room created successfully!"
        })
    }catch(err){
        console.log("🚀 ~ app.post ~ catch:", err)
        res.status(500).json({
            status:500,msg:"Error creating room",err:err
        })
    }
})

app.listen(3001,()=>{
    console.log('http-backend is running at 3001')
})