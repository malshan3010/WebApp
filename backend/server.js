import express from 'express' //ModulerJS
//const express = require("express") //CommonJS
import userRoute from './routes/userRoutes.js'
import mongoose from 'mongoose'

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb+srv://woofy:12345@cluster-woofy.90gy9h3.mongodb.net/?appName=Cluster-woofy"

app.use(express.json());

app.use('/api/users', userRoute) //localhost:5000/api/users/

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Mongodb connected");
    app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`)
    })
})
