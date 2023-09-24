import { Router } from 'express'

import userRoutes from "./routes/UserRouter"
import pizzaRoutes from './routes/PizzaRoutes';
import authenticationRoute from "./routes/AuthenticationRoutes"
import erroMiddlewares from "./middlewares/errorMiddleware";

const routes = Router();

routes.use(userRoutes);
routes.use(pizzaRoutes);
routes.use(authenticationRoute);
routes.use(erroMiddlewares);

export default routes;