import { Router } from "express";
import PizzaController from "../controllers/PizzaController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import pizzaMiddleware from "../middlewares/pizza/pizzaMiddleware";

const pizzaRoutes = Router();

pizzaRoutes.get('/pizzas', PizzaController.index);
pizzaRoutes.get('/pizzas/:id', authMiddleware, PizzaController.show);
pizzaRoutes.post('/pizzas', authMiddleware, pizzaMiddleware, PizzaController.add);
pizzaRoutes.put('/pizzas/:id', authMiddleware, PizzaController.update);
pizzaRoutes.delete('/pizzas/:id', authMiddleware, PizzaController.delete);

export default pizzaRoutes;
