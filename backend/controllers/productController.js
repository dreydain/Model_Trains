import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all Products
//@route Get /api/products
//@access Public
const getAllProducts = (req, res) => {
    Product.find({})
        .then((products) => {
            console.log(products)
            res.json(products)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });

}


//@desc Fetch One Product
//@route Get /api/products/:id
//@access Public
const getOneProduct = (req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
        console.log(product)
        res.json(product)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    });
    
}

//@desc Create product
//@route Post /api/product/new
//@access Public
const createProduct = (req, res) => {
    const product = new Product(req.body)
    console.log(product);
    product.save()
        .then((product) => {
            console.log("successfully created product");
            res.json({ message: "Successfully created product!", product: product })
        })
        .catch((err) => {
            console.log("product creation failed", err);
            res.json(err)
        })
}

//@desc Update Product
//@route Put /api/products/:id
//@access Public
const updateProduct = (req, res) => {
    console.log("inside update");
    console.log(req.params.id);
    console.log(req.body);
    //res.json("inside update");
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true, 
        runValidators:true
    })
        .then((updatedProduct) => {
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//@desc Delete Product
//@route  Delete /api/Products/:id
//@access Private/admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        await product.remove()
        res.json({message:'product removed' })
    } else {
        res.status(404)
        throw new Error('product not found')
    }

})




export {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}