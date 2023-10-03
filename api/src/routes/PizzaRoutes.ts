import { Router } from "express";
import PizzaController from "../controllers/PizzaController";
import pizzaMiddlewares from "../middlewares/pizzaMiddlewares";
import authMiddleware from "../middlewares/authMiddlewares";

const pizzaRoutes = Router();

pizzaRoutes.get('/pizzas', PizzaController.index);
pizzaRoutes.get('/pizzas/:id', authMiddleware, PizzaController.show);
pizzaRoutes.post('/pizzas', authMiddleware, pizzaMiddlewares, PizzaController.add);
pizzaRoutes.put('/pizzas/:id', authMiddleware, PizzaController.update);
pizzaRoutes.delete('/pizzas/:id', authMiddleware, PizzaController.delete);

export default pizzaRoutes;
