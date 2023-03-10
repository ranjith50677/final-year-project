import express from "express";
import { sportsReg } from "../controler/sportcontroler.js";



const router = express.Router();

router.post("/sportsreg",sportsReg)




export default router;
