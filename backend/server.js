import express from 'express' //ModulerJS
//const express = require("express") //CommonJS
import userRoute from './routes/userRoutes.js'
import inventoryRoute from './routes/inventoryRoutes.js'
import authRoute from './routes/authRoute.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoute) //localhost:5000/api/users/
app.use('/api/inventories' , inventoryRoute) //localhost:5000/api/inventories/
app.use('/api/auth', authRoute) //localhost:5000/api/auth/

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb connected");
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on ${process.env.PORT}`)
    })
})