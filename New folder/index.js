import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import user from './route/route.js'
import Sport from './route/sports.js'
import dotenv from "dotenv";
import cors from "cors"


dotenv.config()
const app= express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || 2000
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/demo')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB... '+err.message));


app.use("/api/user",user)
app.use("/api/sport",Sport)



app.listen(port,()=>{
    console.log("Server connected to "+ port);

})