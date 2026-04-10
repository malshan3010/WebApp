import express from 'express' //ModulerJS
//const express = require("express") //CommonJS
import userRoute from './routes/userRoutes.js'
import inventoryRoute from './routes/inventoryRoutes.js'
import mongoose from 'mongoose'

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb+srv://malshan:1234@cluster0.0pz3yfu.mongodb.net/?appName=Cluster0"

app.use(express.json());

app.use('/api/users', userRoute) //localhost:5000/api/users/
app.use('/api/inventories' , inventoryRoute) //localhost:5000/api/inventories/


mongoose.connect(MONGO_URI).then(()=>{
    console.log("Mongodb connected");
    app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`)
    })
})
