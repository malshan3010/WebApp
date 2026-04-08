import express from 'express'
import {getAllUsers, createUser, updateUser, deleteUser, getUser} from '../controllers/userController.js'
const router = express.Router()

//localhost:5000
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);
router.get('/:id', getUser)

export default router