import { NextFunction, Request, Response } from "express";
import ApiError from "../../utils/ApiError";
import { HttpStatus } from "../../utils/HttpStatus";
import { PizzaMappingRepositoryTransaction } from "../../repositories/pizzaMapping/PizzaMappingRepositoryTransaction";

export default async function ingredientDeleteMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  let { id } = req.params;

  const hasIngredients = await new PizzaMappingRepositoryTransaction().hasIngredientMapping(id);

  if (hasIngredients) {
    return next(new ApiError("Ingrediente não pode ser deletado, pois contêm pizzas associadas", HttpStatus.BAD_REQUEST));
  }

  next();
}