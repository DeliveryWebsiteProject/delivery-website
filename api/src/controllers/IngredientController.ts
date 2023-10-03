import { Response } from "express";
import { Ingredient } from "../models";
import { IngredientRepositoryTransaction } from "../repositories/ingredient/IngredientRepositoryTransaction";
import ApiError from "../utils/ApiError";
import { HttpStatus } from "../utils/HttpStatus";

export default class IngredientController {
  public static async index(req: any, res: any): Promise<Response<Ingredient[]>> {
    const ingredients = await new IngredientRepositoryTransaction().findAll();

    return res.json(ingredients);
  }

  public static async add(req: any, res: any): Promise<Response<Ingredient>> {
    const ingredient = await new IngredientRepositoryTransaction().add(req.body);

    return res.json(ingredient);
  }

  public static async getById(req: any, res: any): Promise<Response<Ingredient>> {
    const { id } = req.params;

    const ingredient = await new IngredientRepositoryTransaction().getById(id);

    return res.json(ingredient);
  }

  public static async update(req: any, res: any): Promise<Response<Ingredient>> {
    const ingredient = await new IngredientRepositoryTransaction().update(req.body);

    return res.json(ingredient);
  }

  public static async delete(req: any, res: any): Promise<Response<Ingredient>> {
    const { id } = req.params;

    await new IngredientRepositoryTransaction().delete(id);

    return res.status(HttpStatus.OK).end();
  }
}