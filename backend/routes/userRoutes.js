import express from 'express'
const router = express.Router()
import {
    getAllUsers, 
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController.js'

//get all Users
router.route('/').get(getAllUsers)
 //get one User   
router.route('/:id')
    .get(getOneUser)
    .delete(deleteUser)
router.route('/:id/edit').put(updateUser)
// Create User
router.route('/new').post(createUser)

    
export default router