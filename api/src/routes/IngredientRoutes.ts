import { Router } from "express";
import IngredientController from "../controllers/IngredientController";
import authMiddleware from "../middlewares/authMiddlewares";
import ingredientMiddlewares from "../middlewares/ingredientMiddlewares";

const ingredientRoutes = Router();

ingredientRoutes.get('/ingredients', authMiddleware, IngredientController.index);
ingredientRoutes.get('/ingredients/:id', authMiddleware, IngredientController.getById);
ingredientRoutes.post('/ingredients', authMiddleware, ingredientMiddlewares, IngredientController.add);
ingredientRoutes.put('/ingredients/:id', authMiddleware, ingredientMiddlewares, IngredientController.update);
ingredientRoutes.delete('/ingredients/:id', authMiddleware, IngredientController.delete);

export default ingredientRoutes;