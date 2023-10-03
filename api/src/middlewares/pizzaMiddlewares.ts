import { NextFunction, Request, Response } from "express";
import { Pizza } from "../models";
import ApiError from "../utils/ApiError";
import { HttpStatus } from "../utils/HttpStatus";
import { Category } from "../models/Pizza";

export default async function pizzaMiddlewares(
    req: Request, res: Response, next: NextFunction
) {
    const value = req.body as any;

    if (value) {
        let { name, price, category } = value as Pizza;

        if (!name || !price || !Object.values(Category).at(category)) return next(new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST))

        if (name.length > 20) return next(new ApiError('Nome deve ter no máximo 20 caracteres', HttpStatus.BAD_REQUEST));

        next();
    } else {
        return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
    }

}