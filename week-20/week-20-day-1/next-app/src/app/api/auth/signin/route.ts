import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const prismaClient  = new PrismaClient()
export async function POST(req:NextRequest){
    try{
        const data = await req.json()
        const res = await prismaClient.user.findFirst({
            where:{
                username:data.username
            }
        })
        if(!res){
            return NextResponse.json({msg:"User does not exist"})
        }
        if(res.password!==data.password){
            return NextResponse.json({msg:"Wrong credentials"})
        }


    }catch(err){
        return NextResponse.json({msg:"Error signing in",status:500})
    }
}