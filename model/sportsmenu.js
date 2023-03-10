import mongoose from "mongoose";


const data= new mongoose.Schema({
   SportsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sports',
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
    
})

const SportsMenu=mongoose.model('SportsMenu',data)
export default SportsMenu;