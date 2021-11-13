import express from 'express'
const router = express.Router()
import {
    getAllUsers, 
    getOneUser, 
    
} from '../controllers/userController.js'

//get all Users
router.route('/').get(getAllUsers)
 //get one User   
router.route('/:id').get(getOneUser)
    
export default router