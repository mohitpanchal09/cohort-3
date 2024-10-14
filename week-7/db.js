const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String,
    salt:String
})

const Todo = new Schema({
    desc:String,
    done:Boolean,
    userId:ObjectId,

})

const UserModel = mongoose.model("users",User)
const TodoModel = mongoose.model("todos",Todo)

module.exports={
    UserModel,TodoModel
}