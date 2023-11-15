import { NextFunction, Request, Response } from "express";
import Item from "../../models/Item";
import { HttpStatus } from "../../utils/HttpStatus";
import ApiError from "../../utils/ApiError";

export default async function pizzaMiddleware(req: Request, res: Response, next: NextFunction) {
  const value = req.body as any;

  if (value) {
    let { quantity, ref_pizza } = value as Item;

    if (quantity <= 0) return next(new ApiError('Quantidade inválida', HttpStatus.BAD_REQUEST));

    if (!ref_pizza) return next(new ApiError('Valores inválidos', HttpStatus.BAD_REQUEST))

    next();
  } else {
    return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
  }
}