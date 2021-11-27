import express from 'express'
const router = express.Router()
import {
    getAllWorkorders, 
    getOneWorkorder,
    createWorkorder,
    updateWorkorder,
    deleteWorkorder, 
    
} from '../controllers/workorderController.js'

//get all workorders
router.route('/').get(getAllWorkorders)
 //get one workorder   
router.route('/:id').get(getOneWorkorder)
// Create Workorder
router.route('/new').post(createWorkorder)
//update Workorder
router.route('/:id').put(updateWorkorder)
//delete workorder
router.route('/:id').delete(deleteWorkorder)
    
export default router