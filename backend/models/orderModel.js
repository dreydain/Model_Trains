import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    paint: {type: Number},
    quantity: {type: Number},
    complete: {type: Number},
    mold: {type: Number},
    cast: {type: Number},
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

export default Order