import { Request, Response } from "express"
import { signIn,signUp } from "../managers/auth.manager"

export const signUpController = async(req:Request,res:Response)=>{
    try{
        const data = req.body
        const response = await signUp(data)
        res.status(200).send(response)
    }catch(err){
        console.log('err ',err)
    }
}

export const signInController = async(req:Request,res:Response)=>{
    try{
        const data = req.body
        const response = await signIn(data)
        res.status(200).send(response)
    }catch(err){
        res.status(500).send({message:"Internal server error"})
    }
}