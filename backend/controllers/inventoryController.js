import Inventory from "../models/Inventory.js";

export const getAllInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find();
        res.status(200).json({
            success: true,
            data: inventories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        });
    }           
}

export const createInventory = async (req, res) => {
    try {
        const { name, quantity, price, description } = req.body;
        const inventoryData = { name, quantity, price, description };
        const inventory = await Inventory.create(inventoryData);    
        
        res.status(201).json({
            success: true,
            data: inventory,
            message: "Inventory created"
        });
    }   catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        });
    }
}

export const updateInventory = async (req, res) => {
    try {
        const { name, quantity, price, description } = req.body;
        const inventoryData = { name, quantity, price, description };
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, inventoryData, { new: true });
        
        res.status(201).json({
            success: true,
            data: inventory,
            message: "Inventory updated"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        });
    }
}

export const deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: inventory,
            message: "Inventory deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        });
    }
}

export const getInventoryById = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);

        if(!inventory){
            res.status(404).json({
                success: false,
                message: "Inventory not found"
            });
        }
        res.status(200).json({
            success: true,
            data: inventory
        });
    }catch(error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        });
    }

}


