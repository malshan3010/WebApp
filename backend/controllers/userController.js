import User from "../models/User.js";

//REST API POST,GET,PUT(PATCH),DELETE

//GraphQL ID->GET(single),PUT,DELETE
//        NonID - > POST,GET(all)

export const  getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const userData = { username, email, password, role };
        const user = await User.create(userData)

        res.status(201).json({
            success: true,
            data: user,
            message: "User created"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        })
    }
}

export const updateUser = async (req,res) => {
    try{
        const { username, email, password, role } = req.body;
        const userData = { username, email, password, role }
        const user = await User.findByIdAndUpdate(req.params.id, userData);

        res.status(201).json({
            success: true,
            data: user,
            message: "User updated"
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        })
    }
}

export const deleteUser = async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            success: true,
            message: "User deleted"
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        })
    }
}

export const getUser = async (req,res) =>{
    try{
        const user = await User.findById(req.params.id);

        if(!user){
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Successfully get the user",
            data: user
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        })
    }
} 