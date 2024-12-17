import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/connection';
import createRoutes from './routes/index.routes';
dotenv.config();
connectDb()
const app = express()


app.use(express.json())

createRoutes(app)

app.listen(process.env.PORT || 8080,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})