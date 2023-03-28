

const Admin=async(req,res,next)=>{
    if(req.user.isAdmin === false) return res.status(403).send('Access Denide ')
    next()
}

export default Admin;