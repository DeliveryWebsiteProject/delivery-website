import { Router } from "express";
import ItemController from "../controllers/ItemController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import itemMiddleware from "../middlewares/item/itemMiddleware";

const itemRoutes = Router();

itemRoutes.get('/items', authMiddleware, ItemController.findAll);
itemRoutes.get('/items/:id', authMiddleware, ItemController.getById);
itemRoutes.post('/items', authMiddleware, itemMiddleware, ItemController.add);
itemRoutes.get('/items/user/:userId', authMiddleware, ItemController.getItemsByUserId);
itemRoutes.put('/items/:id', authMiddleware, itemMiddleware, ItemController.update);
itemRoutes.put('/items/:id', authMiddleware, itemMiddleware, ItemController.delete);

export default itemRoutes;
