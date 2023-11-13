import { Router } from "express";
import ItemController from "../controllers/ItemController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import itemMiddleware from "../middlewares/item/itemMiddleware";

const itemRoutes = Router();

itemRoutes.get('/items', authMiddleware, ItemController.findAll);
itemRoutes.get('/items/:id', authMiddleware, ItemController.getById);
itemRoutes.get('/items/cart/:ref_cart', authMiddleware, ItemController.getByCartId);
itemRoutes.post('/items', authMiddleware, itemMiddleware, ItemController.add);
itemRoutes.put('/items/:id', authMiddleware, itemMiddleware, ItemController.update);
itemRoutes.put('/items/:id', authMiddleware, itemMiddleware, ItemController.delete);

export default itemRoutes;
