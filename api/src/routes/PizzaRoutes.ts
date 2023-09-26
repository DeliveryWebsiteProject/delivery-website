import { Router } from "express";
import PizzaController from "../controllers/PizzaController";
import pizzaAddMiddlewares from "../middlewares/pizzaAddMiddlewares";

const pizzaRoutes = Router();

pizzaRoutes.get('/pizzas', PizzaController.index);
pizzaRoutes.get('/pizzas/:id', PizzaController.show);
pizzaRoutes.post('/pizzas', pizzaAddMiddlewares, PizzaController.add);
pizzaRoutes.put('/pizzas/:id', PizzaController.update);
pizzaRoutes.delete('/pizzas/:id', PizzaController.delete);

export default pizzaRoutes;
