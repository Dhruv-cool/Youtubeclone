import  express  from "express";
import mongoose from "mongoose";
import dontenv from "dotenv"
import cors from 'cors';
import bodyParser from "body-parser";
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import path from 'path'
dontenv.config()
const app=express()
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use(bodyParser.json())
 app.use('/user',userRoutes)
 app.use('/video',videoRoutes)

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server running on the PORT ${PORT}`)
})

const DB_URL= process.env.CONNECTION_URL
mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Mongoose Database Connected")
}).catch((error)=>{
    console.log(error)
})