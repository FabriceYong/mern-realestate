import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import userRouter from './api_routers/userRouter.js'
import authRouter from './api_routers/auth_route.js'


const app = express()

// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// error middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode ?? 500
    const message = err.message ?? "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

// database connection string
mongoose.connect('mongodb+srv://fabricenjua:njua1234@real-estate-app.8eain6e.mongodb.net/mern-estate?retryWrites=true&w=majority').then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err, err.message)
})

// api routes
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.listen(5000, () => console.log('Server is running on port 5000!'))
