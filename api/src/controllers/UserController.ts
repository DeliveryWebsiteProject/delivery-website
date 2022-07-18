import { Request, Response } from "express";
import UserSchema from '../schemas/UserSchema'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await UserSchema.find()

    return res.json(users)
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await UserSchema.create(req.body)

    return res.json(user)
  }
}

export default new UserController()