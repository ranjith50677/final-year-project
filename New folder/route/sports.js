import express from "express";
import { getByid, sportsReg } from "../controler/sportcontroler.js";
import auth from "../midelware/auth.js";
import Admin from "../midelware/authz.js";



const router = express.Router();

router.post("/sportsreg",sportsReg)
router.get("/getbyid",[auth,Admin],getByid)




export default router;
