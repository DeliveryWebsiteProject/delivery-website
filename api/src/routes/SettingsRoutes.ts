import { Router } from "express";
import SettingsController from "../controllers/SettingsController";
import authMiddleware from "../middlewares/auth/authMiddleware";
import settingsMiddleware from '../middlewares/settings/settingsMiddleware';

const settingsRoutes = Router();

settingsRoutes.get('/settings', SettingsController.getSettings)
settingsRoutes.post('/settings', authMiddleware, settingsMiddleware, SettingsController.create);
settingsRoutes.put('/settings', authMiddleware, settingsMiddleware, SettingsController.update);

export default settingsRoutes;