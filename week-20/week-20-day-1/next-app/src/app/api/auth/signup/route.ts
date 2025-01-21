import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/lib/db";
export async function POST(req:NextRequest){
    try{
        const data = await req.json()
        const user = await prismaClient.user.findFirst({
            where:{
                username:data.username
            }
        }
       )
       if(user){
        return NextResponse.json({msg:"User already exists"})
       }
        await prismaClient.user.create({
            data:{
                username:data.username,password:data.password
            }
        })
        return NextResponse.json({msg:"you have signed up"})
    }catch(err){
        return NextResponse.json({msg:"Error creating the user",status:500})
    }

}