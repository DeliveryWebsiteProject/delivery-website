import { Router } from 'express'

import authMiddleware from "./middlewares/authMiddlewares"

import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'

const routes = Router()

// routes.get('/users', authMiddleware, UserController.index)
routes.post('/users/create', UserController.store)

routes.post('/auth', AuthController.authenticate)

export default routes