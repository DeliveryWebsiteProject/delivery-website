import { Router } from 'express'

import userRoutes from "./routes/UserRouter"
import pizzaRoutes from './routes/PizzaRoutes';
import authenticationRoute from "./routes/AuthenticationRoutes"
import errorMiddleware from "./middlewares/error/errorMiddleware";
import photoRoutes from "./routes/PhotoRoutes";
import cartRoutes from "./routes/CartRoutes";
import itemRoutes from "./routes/ItemRoutes";
import settingsRoutes from './routes/SettingsRoutes';

const routes = Router();

routes.use(userRoutes);
routes.use(pizzaRoutes);
routes.use(photoRoutes);
routes.use(cartRoutes);
routes.use(itemRoutes);
routes.use(authenticationRoute);
routes.use(errorMiddleware);
routes.use(settingsRoutes);

export default routes;