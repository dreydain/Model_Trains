import mongoose from 'mongoose'

// const orderItemsSchema = mongoose.Schema({
//     product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product'
//     },
//     paint: {type: Number},
//     quantity: {type: Number},
//     complete: {type: Number},
//     mold: {type: Number},
//     cast: {type: Number},
// }, {timestamps: true})

const workorderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    number: {
        type: String,
        required: true,
        unique: true
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
    
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    

    shipped: {type: Date},

    orders: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            paint: {type: Number},
            quantity: {type: Number},
            complete: {type: Number},
            mold: {type: Number},
            cast: {type: Number}
        }
    ],

}, {timeStamps: true})

const Workorder = mongoose.model('Workorder', workorderSchema)

export default Workorder