import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import ApiError from "../../utils/ApiError";
import { HttpStatus } from "../../utils/HttpStatus";

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return next(new ApiError('Token inválido', HttpStatus.UNAUTHORIZED));
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, (process.env.JWT_SECRET_KEY ?? '').toString());

    if (data) {
      next();
    } else {
      return next(new ApiError('Token inválido', HttpStatus.UNAUTHORIZED));
    }
  } catch {
    next(new ApiError('Token inválido', HttpStatus.UNAUTHORIZED));
  }
}