import { Router } from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddlewares";
import userAddMiddlewares from "../middlewares/userAddMiddlewares";
import userUpdateMiddlewares from "../middlewares/userUpdateMiddlewares";

const userRoutes = Router();

userRoutes.get('/users', authMiddleware, UserController.index)
userRoutes.post("/users/create", userAddMiddlewares, UserController.store);
userRoutes.get("/users/:id", UserController.getUserById);
userRoutes.put("/users/:id", userUpdateMiddlewares, UserController.updateUser);

export default userRoutes;