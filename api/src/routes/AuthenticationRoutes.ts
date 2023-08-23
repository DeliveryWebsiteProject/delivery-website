import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authenticationRoute = Router();

authenticationRoute.post('/auth', AuthController.authenticate)

export default authenticationRoute;