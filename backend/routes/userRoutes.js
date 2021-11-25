import express from 'express'
const router = express.Router()
import {
    getAllUsers, 
    getOneUser,
    createUser,
    updateUser
} from '../controllers/userController.js'

//get all Users
router.route('/').get(getAllUsers)
 //get one User   
router.route('/:id').get(getOneUser)
router.route('/:id/edit').put(updateUser)
// Create User
router.route('/new').post(createUser)

    
export default router