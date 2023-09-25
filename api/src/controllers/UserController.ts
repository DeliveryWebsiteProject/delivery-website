import { Request, Response } from "express";
import { User } from "../models";
import jwt from 'jsonwebtoken'
import UserRepositoryTransaction from "../repositories/user/UserRepositoryTransaction";

class UserController {
  public async index(req: Request, res: Response): Promise<Response<User[]>> {
    const users = await new UserRepositoryTransaction().findAll();

    return res.json(users)
  }

  public async add(req: Request, res: Response): Promise<Response<User>> {
    const user = await new UserRepositoryTransaction().store(req.body);

    return res.json(user)
  }

  public async getUserById(req: Request, res: Response): Promise<Response<User>> {
    const { id } = req.params;

    const user = await new UserRepositoryTransaction().getUserById(id);

    return res.json(user)
  }

  public async update(req: Request, res: Response): Promise<Response<User>> {
    const { id } = req.params;

    const user = await new UserRepositoryTransaction().update(id, req.body);

    const expirationTime = new Date(Date.now() + 1 * 60 * 60 * 1000).getTime() // 1 Hour

    const token = jwt.sign(Object.assign(user, { password: null, exp: expirationTime }), (process.env.JWT_SECRET_KEY ?? '').toString());

    const jsonUser = Object.assign(user, { password: null, token: token });

    return res.json(jsonUser)
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await new UserRepositoryTransaction().delete(id);

    res.status(200).end();
  }
}

export default new UserController()