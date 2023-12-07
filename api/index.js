import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config.js'
import bodyParser from 'body-parser'

import authRouter from './api_routers/auth_route.js'

const app = express()
const PORT = process.env.PORT || 5000

// middlewares 
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
// error middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

// database connection string
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err, err.message)
})

// api routes
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))