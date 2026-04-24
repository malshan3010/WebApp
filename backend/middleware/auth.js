import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protect = async (req,res) =>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({
                success: false,
                message: "Access denied"
            })
        }

        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
console.log(decode)
        const user =  await User.findById(decode.id).select("-password")
        if(!user){
            return res.status(404).json({
                success: false,
                message: " User not found"
            })
        }
console.log(user)
        req.user = user;
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Authentication error'
        })
    }
}

export const verifyRole = (req, res) =>{
    if(req.user.role != "admin"){
        return res.status(403).json({
            success: false,
            message: "Admin only route. Access denied"
        })
    }
}