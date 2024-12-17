import express from 'express'
import { userMiddleware } from '../middleware'
import { addContentController, getContentController } from '../controllers/content.controller'
const contentRouter = express.Router()

contentRouter.post('/',userMiddleware,addContentController)
contentRouter.get('/',userMiddleware,getContentController)

export default contentRouter;