import { Router } from "express";
import MessagesController from "../controllers/MessagesController";
import authMiddleware from "../middlewares/auth/authMiddleware";

const messagesRoutes = Router();

messagesRoutes.get('/messages', MessagesController.getMessages)
messagesRoutes.post('/messages', authMiddleware, MessagesController.create);
messagesRoutes.put('/messages', authMiddleware, MessagesController.update);
messagesRoutes.post('/messages/:id', authMiddleware, MessagesController.sendMessage);

export default messagesRoutes;