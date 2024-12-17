import mongoose, { model } from "mongoose";

const tagSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true}
})

export const Tag = model("tagSchema",tagSchema)