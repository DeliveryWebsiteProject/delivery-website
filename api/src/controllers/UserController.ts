import { Request, Response } from "express";
import UserService from "../schemas/UserService";
import ApiError from "../utils/ApiError";

class UserController {
  // public async index(req: Request, res: Response): Promise<Response> {
  //   const users = await UserSchema.find()

  //   return res.json(users)
  // }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserService.store(req.body);

      return res.json(user)
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).send({ error: err.message })
      } else {
        return res.status(500).send({ error: 'Registration failed' })
      }
    }
  }
}

export default new UserController()