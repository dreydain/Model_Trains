import mongoose from 'mongoose'

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

    orders: [],

}, {timeStamps: true})

const Workorder = mongoose.model('Workorder', workorderSchema)

export default Workorder