import { NextFunction, Request, Response } from "express";
import Cart from "../../models/Cart";
import { HttpStatus } from "../../utils/HttpStatus";
import ApiError from "../../utils/ApiError";

export default async function pizzaMiddleware(req: Request, res: Response, next: NextFunction) {
  const value = req.body as any;

  if (value) {
    let { ref_user, ref_item } = value as Cart;

    if (!ref_user) return next(new ApiError('Usuário não encontrado', HttpStatus.BAD_REQUEST))

    if (!ref_item) return next(new ApiError('Item não encontrado', HttpStatus.BAD_REQUEST))

    next();
  } else {
    return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
  }
}