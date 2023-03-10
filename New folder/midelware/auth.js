import jwt from 'jsonwebtoken'
import User from '../model/user.js';

const auth=async(req,res,next)=>{
    const token=req.header('hrms-auth-token')
    if(!token) return res.status(401).send('Access Denide no token provide')
    try {
        const decoded=jwt.verify(token,process.env.JWT);
        req.user = decoded
        let found= await User.findById({_id:req.user.id}) 
        req.user={...req.user,isAdmin:found.isAdmin} 
        next();
    } catch (error) {
        res.send("invalid token")
    }
}

export default auth