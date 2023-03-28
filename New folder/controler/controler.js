import User from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import Sports from '../model/sport.js';
// import book from '../model/book.js';

const saltRounds = 10;
dotenv.config();
export const reg = async (req, res) => {
    let email = req.body.email
    let exUser = await User.findOne({ email: email })
    if (exUser) {
        return res.status(400).json({ message: "email already register" })
    }
    else {
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            let register = new User({
                name:req.body.name,
                email: req.body.email,
                password: hash,
            })
            try {
                let user=await register.save()
                res.status(201).json({ message: "Register success" })
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        })
    }
}

export const adminreg = async (req, res) => {
    let email = req.body.email
    let exUser = await User.findOne({ email: email })
    if (exUser) {
        return res.status(400).json({ message: "email already register" })
    }
    else {
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            let register = new User({
                name:req.body.name,
                email: req.body.email,
                password: hash,
                isAdmin:true
            })
            try {
                let user=await register.save()
                res.status(201).json({ message: "Register success" ,id:user._id})
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        })
    }
}


export const login = async (req, res) => {
    let email = req.body.email
    let foundUser = await User.findOne({ email: email })
    if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ id: foundUser?._id }, process.env.JWT)
                res.header("token", token).json({ message: "login successfully", token: token })
            } else {
                res.status(400).json({ message: "please enter correct password" })
            }
        })
    }else res.status(400).json({ message: "user not found" })
}

export const getall = async (req, res) => {
    try {
        const getUser = await User.find()
        res.status(200).json({ data: getUser })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getUserById = async (req, res) => {
    try {
        const getUser = await User.findById({ _id: req.params.id }).select("-password")
        res.status(200).json({ data: getUser })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true })
        res.status(200).json({ meesage: "Updated successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    let email = req.body.email
    try {
        const user = await User.findOneAndRemove({ email: email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: "User deleted success" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


////book


export const profile = async (req, res) => {
    let obj = {};
    try {
    let Sport = await Sports.find({ userId: req.user.id });
    console.log(Sport);
    obj={...obj,Sport}
    console.log(obj);
    const view = await User.findById({ _id: req.user.id }).select("-password")
    res.status(200).json({ data: obj });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }; 
  


  