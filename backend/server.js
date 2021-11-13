import express from 'express'
import dotenv from 'dotenv'
//import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/mongoose.config.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)

// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))