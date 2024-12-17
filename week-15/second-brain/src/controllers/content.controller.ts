import { Request, Response } from "express";
import { addContent, getContent } from "../managers/content.manager";

export const addContentController = async(req:Request,res:Response)=>{
    try{
        const response = await addContent(req.body)
    }catch(err){
        console.log('err',err)
        res.status(500).send({message:"Internal sever error"})
    }
}

export const getContentController = async(req:Request,res:Response)=>{
    try{
        //@ts-ignore
        const response = await getContent(req.userId)
        res.status(200).send(response)
    }catch(err){
        res.status(500).send({message:"Internal server error"})
    }
}