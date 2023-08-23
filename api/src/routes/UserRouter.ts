import { Router } from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddlewares";

const userRoutes = Router();

userRoutes.get('/users', authMiddleware, UserController.index)
userRoutes.post("/users/create", UserController.store);

export default userRoutes;