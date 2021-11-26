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

// //@desc Update Product
// //@route Put /api/products/:id
// //@access Public
// const updateProduct = (req, res) => {
//     console.log("inside update");
//     console.log(req.params.id);
//     console.log(req.body);
//     //res.json("inside update");
//     Product.findByIdAndUpdate(req.params.id, req.body, {
//         new:true, 
//         runValidators:true
//     })
//         .then((updatedProduct) => {
//             console.log(updatedProduct);
//             res.json(updatedProduct);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         });
// }

//@desc Update user profile
//@route  PUT /api/users/profile
//@access Private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        product.number = req.body.number || product.number
        product.name = req.body.name || product.name
        product.brand = req.body.brand || product.brand
        product.category = req.body.category || product.category
        product.stock = req.body.stock || product.stock
        product.price = req.body.price || product.price
        product.description = req.body.description || product.description
        product.image = req.body.image || product.image
        product.user = req.body.user || product.user
        if(req.body.password) {
            product.password = req.body.password
        }

        const updatedProduct = await product.save()

        res.json({
            _id: updatedProduct._id,
            number: updatedProduct.number,
            name: updatedProduct.name,
            brand: updatedProduct.brand,
            category: updatedProduct.category,
            stock: updatedProduct.stock,
            price: updatedProduct.price,
            description: updatedProduct.description,
            image: updatedProduct.image,
            user: updatedProduct.user
        })

    }
})

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