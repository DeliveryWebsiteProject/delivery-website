import { Router } from "express";

const ingredientRoutes = Router();

ingredientRoutes.get('/ingredients', IngredientController.index);
ingredientRoutes.get('/ingredients/:id', IngredientController.show);
ingredientRoutes.post('/ingredients', IngredientController.store);
ingredientRoutes.put('/ingredients/:id', IngredientController.update);
ingredientRoutes.delete('/ingredients/:id', IngredientController.delete);

export default ingredientRoutes;