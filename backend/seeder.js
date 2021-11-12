import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import connectDB from './config/mongoose.config.js'
import WorkOrder from './models/workOrderModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await WorkOrder.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log('data imported')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await WorkOrder.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('data destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}