import mongoose from "mongoose";


const data= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
       type:String,
       required:true
    },
    
    isAdmin:{
        type:Boolean,
        default:false
    }, 
    sportsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sports',
    }
})

const User=mongoose.model('User',data)
export default User;