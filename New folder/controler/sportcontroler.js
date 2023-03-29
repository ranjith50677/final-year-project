import mongoose from "mongoose"
import Sports from "../model/sport.js"
// import User from "../model/user.js"


export const sportsReg = async (req, res) => {
    let userId=req.query.userId
    let Name = req.body.Name
    let exSports = await Sports.findOne({ Name:Name,userId })
    if (exSports) {
        return res.status(400).json({ message: "Sports is Already Exist !" })
    }
    else {
            let register = new Sports({
                userId:userId,
                sportCode:req.body.sportCode,
                Name: req.body.Name,
                Email: req.body.Email,
                Phone: req.body.Phone,
                Department: req.body.Department,
                year: req.body.year,
            })
            try {
                await register.save({})
                res.status(201).json({ message: "Sport Added..."})
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        
    }
}

export const getByid=async(req,res)=>{
    let id = req.query.id;
    console.log(id);
    try{
        const view = await Sports.find({ userId: id })
        console.log(view);
        res.status(200).json({ data:view  });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getAll=async(req,res)=>{
    let id = req.query.id;
    console.log(id);
    try{
        const view = await Sports.find({ userId: id })
        console.log(view);
        res.status(200).json({ data:view  });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}