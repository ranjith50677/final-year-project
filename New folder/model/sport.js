import mongoose from "mongoose";


const data= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    sportCode:{
        type:String,
        required:true
     },
    Name:{
       type:String,
       required:true
    }, 
    Email:{
       type:String,
    }, 
    Department:{
       type:String,
       required:true
    }, 
    Phone:{
       type:Number,
    }, 
    year:{
       type:String,
       required:true
    }, 

    
})

const Sports=mongoose.model('Sports',data)
export default Sports;