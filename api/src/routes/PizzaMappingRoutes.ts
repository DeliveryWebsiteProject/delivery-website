import { Router } from "express";
import authMiddleware from "../middlewares/auth/authMiddleware";
import PizzaMappingController from '../controllers/PizzaMappingController';

const pizzaMappingRoutes = Router();

pizzaMappingRoutes.get('/pizzaMap', PizzaMappingController.findAll);
pizzaMappingRoutes.get('/pizzaMap/:ref_pizza', authMiddleware, PizzaMappingController.getByPizzaId);
pizzaMappingRoutes.post('/pizzaMap', authMiddleware, PizzaMappingController.add);

export default pizzaMappingRoutes;
