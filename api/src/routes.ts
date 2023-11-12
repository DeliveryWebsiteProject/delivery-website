import { Router } from 'express'

import userRoutes from "./routes/UserRouter"
import pizzaRoutes from './routes/PizzaRoutes';
import authenticationRoute from "./routes/AuthenticationRoutes"
import errorMiddleware from "./middlewares/error/errorMiddleware";
import photoRoutes from "./routes/PhotoRoutes";

const routes = Router();

routes.use(userRoutes);
routes.use(pizzaRoutes);
routes.use(photoRoutes);
routes.use(authenticationRoute);
routes.use(errorMiddleware);

export default routes;