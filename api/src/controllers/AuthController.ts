import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserRepository from "../repositories/UserRepository";

class AuthController {
  public async authenticate(req: Request, res: Response): Promise<Response> {
    const { cpf, password } = req.body;

    const user = await UserRepository.findOne(cpf);

    if (!user) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign(Object.assign(user, { password: null }), (process.env.JWT_SECRET_KEY ?? '').toString(), { expiresIn: '1d' });

    const jsonUser = Object.assign(user, { password: null, token: token });

    return res.json(jsonUser)
  }
}

export default new AuthController()