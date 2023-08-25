import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await UserRepository.findAll();

    return res.json(users)
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await UserRepository.store(req.body);

    return res.json(user)
  }
}

export default new UserController()