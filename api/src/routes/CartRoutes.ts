import { Router } from "express";
import CartController from "../controllers/CartController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import cartMiddleware from "../middlewares/cart/cartMiddleware";

const cartRoutes = Router();

cartRoutes.get('/carts', authMiddleware, CartController.findAll);
cartRoutes.get('/carts/:ref_user', authMiddleware, CartController.getByUserId);
cartRoutes.post('/carts', authMiddleware, cartMiddleware, CartController.add);
cartRoutes.get('/carts/:ref_user/count', authMiddleware, CartController.countItems);
cartRoutes.get('/carts/:ref_user/items', authMiddleware, CartController.getCartItemsWrapper);

export default cartRoutes;
