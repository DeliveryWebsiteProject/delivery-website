import { Request, Response } from "express";
import { Ingredient } from "../models";
import { IngredientRepositoryTransaction } from "../repositories/ingredient/IngredientRepositoryTransaction";
import { HttpStatus } from "../utils/HttpStatus";

export default class IngredientController {
  public static async findAll(req: Request, res: Response): Promise<Response<Ingredient[]>> {
    const ingredients = await new IngredientRepositoryTransaction().findAll();

    return res.json(ingredients);
  }

  public static async getById(req: Request, res: Response): Promise<Response<Ingredient>> {
    const { id } = req.params;

    const ingredient = await new IngredientRepositoryTransaction().getById(id);

    return res.json(ingredient);
  }

  public static async add(req: Request, res: Response): Promise<Response<Ingredient>> {
    const ingredient = await new IngredientRepositoryTransaction().add(req.body);

    return res.json(ingredient);
  }

  public static async update(req: Request, res: Response): Promise<Response<Ingredient>> {
    const { id } = req.params;

    const ingredient = await new IngredientRepositoryTransaction().update(id, req.body);

    return res.json(ingredient);
  }

  public static async delete(req: Request, res: Response): Promise<Response<Ingredient>> {
    const { id } = req.params;

    await new IngredientRepositoryTransaction().delete(id);

    return res.status(HttpStatus.OK).end();
  }
}