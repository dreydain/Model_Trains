import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    phone: {type: String},

    address: {type: String},

    jobTitle: {type: String},

    wage: {type: Number},

    startDate: {
        type: Date,
        required: true
    },

    endDate: {type: Date},

}, {timeStamps: true})

const User = mongoose.model('User', userSchema)

export default User
