// import express, { Router } from "express";
import express from "express";
import {adminreg, deleteUser, getall, getUserById, login, reg, updateUser,profile} from "../controler/controler.js" ;
import auth from "../midelware/auth.js";
import Admin from "../midelware/authz.js";


// import auth from "../midelware/auth";


const router = express.Router();
router.post("/Reg",reg)
router.post("/Admin",adminreg)
router.get("/profile",auth,profile)
router.post("/login",login)
router.get("/getAll",[auth,Admin],getall)
router.get("/getby/:id",getUserById)
router.delete("/delete",[auth,Admin],deleteUser)
router.put("/update",updateUser)


export default router;
