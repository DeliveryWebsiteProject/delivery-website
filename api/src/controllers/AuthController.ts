import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthController {
  public async authenticate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    // const user = await UserSchema.findOne({ email: email })

    // if (!user) {
    //   return res.sendStatus(401)
    // }

    // const isValidPassword = bcrypt.compare(password, user.password);

    // if (!isValidPassword) {
    //   return res.sendStatus(401)
    // }

    // // SecretKey tem q estar no arquivo .env
    // // TODO: Criar o arquivo e a variavel e trocar 
    // const token = jwt.sign({
    //   id: user.id,
    //   email: user.email,
    //   password: user.password,
    //   firstName: user.firstName,
    //   lastName: user.lastName
    // }, 'secretKey', { expiresIn: '1d' })

    // const jsonUser = {
    //   id: user.id,
    //   email: user.email,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   token: token,
    // }

    return res.json('jsonUser')
  }
}

export default new AuthController()