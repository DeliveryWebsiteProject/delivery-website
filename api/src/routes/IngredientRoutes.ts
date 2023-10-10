import { Router } from "express";
import IngredientController from "../controllers/IngredientController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import ingredientMiddleware from "../middlewares/ingredient/ingredientMiddleware";
import ingredientDeleteMiddleware from "../middlewares/ingredient/ingredientDeleteMiddleware";

const ingredientRoutes = Router();

ingredientRoutes.get('/ingredients', authMiddleware, IngredientController.index);
ingredientRoutes.get('/ingredients/:id', authMiddleware, IngredientController.getById);
ingredientRoutes.post('/ingredients', authMiddleware, ingredientMiddleware, IngredientController.add);
ingredientRoutes.put('/ingredients/:id', authMiddleware, ingredientMiddleware, IngredientController.update);
ingredientRoutes.delete('/ingredients/:id', authMiddleware, ingredientDeleteMiddleware, IngredientController.delete);

export default ingredientRoutes;