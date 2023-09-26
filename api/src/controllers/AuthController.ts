import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserRepositoryTransaction from "../repositories/user/UserRepositoryTransaction";
import { State } from '../models/User';

class AuthController {
  public async authenticate(req: Request, res: Response): Promise<Response> {
    let { cpf, password } = req.body;

    cpf = cpf.replace(/\D/g, '');

    const user = await new UserRepositoryTransaction().getUserByCpf(cpf);

    if (!user) {
      return res.sendStatus(401)
    }

    if (user.state === State.INACTIVE) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const expirationTime = new Date(Date.now() + 1 * 60 * 60 * 1000).getTime() // 1 Hour

    const token = jwt.sign(Object.assign(user, { password: null, exp: expirationTime }), (process.env.JWT_SECRET_KEY ?? '').toString());

    const jsonUser = Object.assign(user, { password: null, token: token });

    return res.json(jsonUser)
  }
}

export default new AuthController()