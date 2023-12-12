import { Router } from "express";
import authMiddleware from "../middlewares/auth/authMiddleware";
import OrderController from "../controllers/OrderController";

const orderRoutes = Router();

orderRoutes.get('/orders', authMiddleware, OrderController.findAll);
orderRoutes.get('/orders/:id', authMiddleware, OrderController.findOrderItems);
orderRoutes.post('/orders', authMiddleware, OrderController.createOrder);
orderRoutes.put('/orders/:id', authMiddleware, OrderController.updateOrder);

export default orderRoutes;