import mongoose from "mongoose";


const data= new mongoose.Schema({
    sportCode:{
        type:String,
        required:true
    },
   sportsName:{
       type:String,
       required:true
    },
    
})

const Sports=mongoose.model('Sports',data)
export default Sports;