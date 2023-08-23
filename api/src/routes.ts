import { Router } from 'express'

import authMiddleware from "./middlewares/authMiddlewares"

import AuthController from './controllers/AuthController'
import userRoutes from "./routes/UserRouter"

const routes = Router()

routes.use(userRoutes)
routes.post('/auth', AuthController.authenticate)

export default routes