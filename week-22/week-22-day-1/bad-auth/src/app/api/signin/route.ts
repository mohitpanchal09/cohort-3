import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { json } from "stream/consumers";

export async function POST(req:NextRequest){
    try{
        const body = await req.json()
        const username = body.username
        const password = body.password

        //check in db

        const userId = 1
        const token = jwt.sign({userId},"SECRET")
        return NextResponse.json({token:token,msg:"Signed In"})
    }catch(err){
        return NextResponse.json({msg:"Error while signing in", error:err})
    }
}