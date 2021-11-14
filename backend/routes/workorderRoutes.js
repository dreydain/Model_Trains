import express from 'express'
const router = express.Router()
import {
    getAllWorkorders, 
    getOneWorkorder, 
    
} from '../controllers/workorderController.js'

//get all workorders
router.route('/').get(getAllWorkorders)
 //get one workorder   
router.route('/:id').get(getOneWorkorder)
    
export default router