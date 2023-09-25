import { Request, Response } from "express";
import { User } from "../models";
import UserRepositoryTransaction from "../repositories/user/UserRepositoryTransaction";

class UserController {
  public async index(req: Request, res: Response): Promise<Response<User[]>> {
    const users = await new UserRepositoryTransaction().findAll();

    return res.json(users)
  }

  public async store(req: Request, res: Response): Promise<Response<User>> {
    const user = await new UserRepositoryTransaction().store(req.body);

    return res.json(user)
  }

  public async getUserById(req: Request, res: Response): Promise<Response<User>> {
    const { id } = req.params;

    const user = await new UserRepositoryTransaction().getUserById(id);

    return res.json(user)
  }

  public async updateUser(req: Request, res: Response): Promise<Response<User>> {
    const { id } = req.params;

    const user = await new UserRepositoryTransaction().updateUser(id, req.body);

    return res.json(user);
  }
}

export default new UserController()