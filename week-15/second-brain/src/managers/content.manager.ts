import { Content } from "../models/Content"
import { Link } from "../models/Link"
import { random } from "../utils"

export const addContent = async(data:any)=>{
    try {
        const {link,type,title,tags,userId} = data
        await Content.create({
            link:link,
            type:type,
            title:title,
            tags:tags,
            userId:userId
        })
        return {status:200,message:"Content has been added successfully"}
    } catch (error) {
        console.log('err ',error)
        return {status:500,message:"Internal server error"}
    }
}

export const getContent = async(userId:number | string) =>{
    try{
        const response = await Content.find({userId})
        if(response.length>0){
            return {status:200,message:"Data fetched successfully", data :[]}
        }
        return {status:404,message:"Data not found"}
    }catch(err){
        console.log('err ',err)
        return {status:500, message:"Internal server error"}
    }
}

export const deleteContent = async(data:any)=>{
    try{
        const contentId = data.contentId
        const existingContent = await Content.findById(contentId)
        if(!existingContent){
            return {status:404,message:"content does not exist"}
        }
        Content.findByIdAndDelete(contentId)
        return {status:200,message:"content deleted successfully"}
    }catch(err){
        console.log('err',err)
        return {status:500,message:"Internal server error"}
    }
}

export const shareContent = async(share:boolean,userId:number | string)=>{
    try{
        if(share){
            Link.create({
                hash:random(10),
                userId: userId
            })
        }else{
            Link.deleteOne({userId:userId})
        }
        return {status:200,message:"Updated sharable link"}
    }catch(err){
        console.log('err ',err)
        return {status:500,message:"Internal server error"}
    }
}

export const getSharedContent = async(hash:string)=>{
    try{
        
    }catch(err){
        console.log('err ',err)
    }
}