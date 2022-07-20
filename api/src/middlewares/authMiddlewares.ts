import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    // Trocar o secretKey para a variavel no .env
    const data = jwt.verify(token, 'secretKey');

    if (data) {
      next()
    } else {
      res.sendStatus(401)
    }
  } catch {
    return res.sendStatus(401)
  }
}