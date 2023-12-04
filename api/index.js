import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import userRouter from './api_routers/userRouter.js'


const app = express()

mongoose.connect('mongodb+srv://fabricenjua:njua1234@real-estate-app.8eain6e.mongodb.net/').then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err, err.message)
})

app.use('/api/user', userRouter)

app.listen(5000, () => console.log('Server is running on port 5000!'))