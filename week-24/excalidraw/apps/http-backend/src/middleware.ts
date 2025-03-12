import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { JWT_SEC } from "@repo/backend-configs/index";

export function middleware(req:Request,res:Response,next:NextFunction){
    const token = req.headers['authorization']
    if(token){
        const decoded = jwt.verify(token,JWT_SEC)
        console.log("🚀 ~ middleware ~ decoded:", decoded)
        if(decoded){
            //@ts-ignore
            req.userId = decoded.userId
            next()
        }else{
            res.status(403).json({
                msg:"unauthorized"
            })
        }
    }else{
        res.status(403).send({
            msg:"send the authorization token"
        })
    }
}