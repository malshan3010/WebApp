import express from 'express'
import { getAllInventories, createInventory, updateInventory, deleteInventory, getInventoryById } from '../controllers/inventoryController.js';
const router = express.Router()

router.post('/', createInventory);
router.put('/:id', updateInventory);
router.delete('/:id', deleteInventory);
router.get('/', getAllInventories);
router.get('/:id', getInventoryById)

export default router

