import { Router } from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddlewares";
import userValidationMiddlewares from "../middlewares/userValidationMiddlewares";

const userRoutes = Router();

userRoutes.get('/users', authMiddleware, UserController.index)
userRoutes.post("/users/create", userValidationMiddlewares, UserController.store);
userRoutes.get("/users/:id", UserController.getUserById);

export default userRoutes;