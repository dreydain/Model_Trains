import express from 'express'
const router = express.Router()
import {
    getAllProducts, 
    getOneProduct, 
    updateProduct,
    
} from '../controllers/productController.js'

//get all products
router.route('/').get(getAllProducts)
 //get one product   
router.route('/:id').get(getOneProduct)
// Update Product
router.route('/:id').put(updateProduct)
    
export default router