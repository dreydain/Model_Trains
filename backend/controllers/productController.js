import Product from '../models/productModel.js'

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




export {
    getAllProducts,
    getOneProduct,
    updateProduct
}