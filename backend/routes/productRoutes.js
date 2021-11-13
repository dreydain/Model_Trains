import express from 'express'
const router = express.Router()
import {
    getAllProducts, 
    getOneProduct, 
    
} from '../controllers/productController.js'

//get all products
router.route('/').get(getAllProducts)
 //get one product   
router.route('/:id').get(getOneProduct)
    
export default router