import { Router } from "express";
import authMiddleware from "../middlewares/auth/authMiddleware";
import OrderController from "../controllers/OrderController";

const orderRoutes = Router();

orderRoutes.post('/orders', authMiddleware, OrderController.finishOrder);

export default orderRoutes;