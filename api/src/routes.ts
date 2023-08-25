import { Router } from 'express'

import userRoutes from "./routes/UserRouter"
import authenticationRoute from "./routes/AuthenticationRoutes"
import erroMiddlewares from "./middlewares/errorMiddleware";

const routes = Router();

routes.use(userRoutes);
routes.use(authenticationRoute);
routes.use(erroMiddlewares);

export default routes;