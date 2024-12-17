import { Request,Response,NextFunction } from "express"
import jwt from 'jsonwebtoken';
export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const header = req.headers["authorization"]
    const decoded = jwt.verify(header as string,process.env.JWT_SEC!)
    if(decoded){
        //@ts-ignore
        req.userId = decoded.userId
        next()
    }else{
        res.status(403).json({
            message:"You are not logged in "
        })
    }
}