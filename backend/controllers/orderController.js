import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all Orders
//@route Get /api/orders
//@access Public
const getAllOrders = (req, res) => {
    Order.find({})
        .then((orders) => {
            console.log(orders)
            res.json(orders)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });

}


//@desc Fetch One Order
//@route Get /api/orders/:id
//@access Public
const getOneOrder = (req, res) => {
    Order.findById(req.params.id)
    .then((order) => {
        console.log(order)
        res.json(order)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    });
    
}

//@desc Create order
//@route Post /api/order/new
//@access Public
const createOrder = (req, res) => {
    const order = new Order(req.body)
    console.log(order);
    order.save()
        .then((order) => {
            console.log("successfully created order");
            res.json({ message: "Successfully created order!", order: order })
        })
        .catch((err) => {
            console.log("product creation failed", err);
            res.json(err)
        })
}


//@desc Update Order
//@route  PUT /api/orders/:id
//@access Private
const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        order.product = req.body.product || order.product
        order.quantity = req.body.quantity || order.quantity
        order.mold = req.body.mold || order.mold
        order.cast = req.body.cast || order.cast
        order.paint = req.body.paint || order.paint
        order.complete = req.body.complete || order.complete
        

        const updatedOrder = await order.save()

        res.json({
            _id: updatedOrder._id,
            product: updatedOrder.product,
            quantity: updatedOrder.quantity,
            mold: updatedOrder.mold,
            cast: updatedOrder.cast,
            paint: updatedOrder.paint,
            complete: updatedOrder.complete,
        })
    }
})

//@desc Delete Order
//@route  Delete /api/Orders/:id
//@access Private/admin
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    
    if(order) {
        await order.remove()
        res.json({message:'order removed' })
    } else {
        res.status(404)
        throw new Error('order not found')
    }

})




export {
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder
}