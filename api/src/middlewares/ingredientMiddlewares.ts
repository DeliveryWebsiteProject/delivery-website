import { NextFunction, Request, Response } from "express";
import { Ingredient } from "../models";
import ApiError from "../utils/ApiError";
import { HttpStatus } from "../utils/HttpStatus";

export default async function ingredientMiddlewares(
    req: Request, res: Response, next: NextFunction
) {
    const value = req.body as any;

    if (value) {
        let { name } = value as Ingredient;

        if (name.length > 30) return next(new ApiError('Nome do ingrediente deve ter no máximo 30 caracteres', HttpStatus.BAD_REQUEST));

        next();
    } else {
        return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
    }

}