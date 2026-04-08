import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type:String,
            required:true,
        },
        faculty:{
            type:String,
            enum:["computing", "engineering", "business", "nursing"]
        },
        password:{
            type:String,
            reqired:true,
        },
        role:{
            type:String,
            enum: ["user", "student", "admin"],
            default: "user"
        }
    },{timestamps: true}
)

export default mongoose.model("User", userSchema)