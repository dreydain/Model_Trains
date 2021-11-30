import express from 'express'
const router = express.Router()
import {
    getAllOrders, 
    getOneOrder, 
    createOrder,
    updateOrder,
    deleteOrder
    
} from '../controllers/orderController.js'

//get all Orderss
router.route('/').get(getAllOrders)
 //get one Orders   
router.route('/:id').get(getOneOrder)
// delete and update Orders
router.route('/:id')
    .put(updateOrder)
    .delete(deleteOrder)
// Create Orders
router.route('/new').post(createOrder)
    
export default router