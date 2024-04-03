import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    roll:{
        type:Number,
        required:true
    },
    subject:{
        type:String
    }
})

const person =  mongoose.model("users", userSchema)

export default person;