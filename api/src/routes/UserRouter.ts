import { Router } from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import userValidationMiddleware from "../middlewares/user/userValidationMiddleware";
import userUpdateMiddleware from "../middlewares/user/userUpdateMiddleware";

const userRoutes = Router();

userRoutes.get('/users', authMiddleware, UserController.findAll)
userRoutes.post("/users", userValidationMiddleware, UserController.add);
userRoutes.get("/users/:id", UserController.getById);
userRoutes.put("/users/:id", userUpdateMiddleware, UserController.update);
userRoutes.delete("/users/:id", UserController.delete);

export default userRoutes;