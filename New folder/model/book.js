import mongoose from "mongoose";

const data= new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    authrname:{
       type:String,
    },
    price:{
        type:Number,
    }
})

const Book=mongoose.model('Book',data)
export default Book;