import express from 'express';
import authRouter from "./auth.routes"
import contentRouter from './content.routes';

const createRoutes = (app:express.Application)=>{
    app.use('/auth',authRouter)
    app.use('/content',contentRouter)
}

export default createRoutes