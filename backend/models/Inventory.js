import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
        },
        quantity : {
            type : Number,
            require : true,
        },
        price : {
            type : Number,
            require : true,
        },
        description : {
            type : String,
        },
    },{timestamps: true}
)

export default mongoose.model("Inventory", inventorySchema)