import mongoose from 'mongoose'

const workorderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    number: {
        type: String,
        required: true
    },
    rush: {
        type: Boolean,
        required: true,
        default: false
    },
    orderDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    shipped: {type: Date},

    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId, 
                required: true,
                ref: 'Product'
            },
            quantity: {type: Number, required: true},
            complete: {type: Number},
            mold: {type: Number},
            cast: {type: Number},
            paint: {type: Number},
        }
    ],

}, {timeStamps: true})

const Workorder = mongoose.model('Workorder', workorderSchema)

export default Workorder