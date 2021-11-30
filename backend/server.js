import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
//import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/mongoose.config.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import workorderRoutes from './routes/workorderRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/workorders', workorderRoutes)
app.use('/api/orders', orderRoutes)

// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))