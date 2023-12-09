import { NextFunction, Request, Response } from "express";
import ApiError from "../../utils/ApiError";
import { Settings } from "../../models";
import { HttpStatus } from "../../utils/HttpStatus";

export default async function settingsMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const value = req.body as any;

  if (value) {
    let { days, begin, end } = value as Settings;

    if (!days || !begin || !end) return next(new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST))

    next();
  } else {
    return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
  }
}