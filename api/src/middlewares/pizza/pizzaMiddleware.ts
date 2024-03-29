import { NextFunction, Request, Response } from "express";
import Pizza, { Category } from "../../models/Pizza";
import { HttpStatus } from "../../utils/HttpStatus";
import ApiError from "../../utils/ApiError";

export default async function pizzaMiddleware(
    req: Request, res: Response, next: NextFunction
) {
    const value = req.body as any;

    if (value) {
        let { name, price, category, description } = value as Pizza;

        if (!name || !price || !Object.values(Category).at(category) || !description) return next(new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST))

        if (name.length > 20) return next(new ApiError('Nome deve ter no máximo 20 caracteres', HttpStatus.BAD_REQUEST));

        next();
    } else {
        return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
    }

}