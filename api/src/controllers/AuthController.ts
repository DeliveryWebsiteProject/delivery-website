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

    // SecretKey tem q estar no arquivo .env
    // TODO: Criar o arquivo e a variavel e trocar 
    const token = jwt.sign(Object.assign(user, { password: null }), 'secretKey', { expiresIn: '1d' });

    const jsonUser = Object.assign(user, { password: null, token: token });

    return res.json(jsonUser)
  }
}

export default new AuthController()