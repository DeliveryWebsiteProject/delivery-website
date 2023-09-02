import { Router } from "express";
import PizzaController from "../controllers/PizzaController";

const pizzaRoutes = Router();

pizzaRoutes.get('/pizzas', PizzaController.index);
pizzaRoutes.get('/pizzas/:id', PizzaController.show);
pizzaRoutes.post('/pizzas', PizzaController.store);
pizzaRoutes.put('/pizzas/:id', PizzaController.update);
pizzaRoutes.delete('/pizzas/:id', PizzaController.delete);

export default pizzaRoutes;
