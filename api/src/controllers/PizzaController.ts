import { Request, Response } from "express";
import { Ingredient, Pizza, PizzaMapping } from "../models";
import PizzaRepositoryTransaction from "../repositories/pizza/PizzaRepositoryTransaction";
import PizzaMappingRepositoryTransaction from "../repositories/pizzaMapping/PizzaMappingRepositoryTransaction";

export default class PizzaController {
  public static async index(req: Request, res: Response): Promise<Response<Pizza[]>> {
    const pizzas = await new PizzaRepositoryTransaction().findAll();

    return res.json(pizzas);
  }

  public static async store(req: Request, res: Response): Promise<any> {
    const { ingredients } = req.body;

    const pizza = await new PizzaRepositoryTransaction().store(req.body);

    const mappings: PizzaMapping[] = [];

    ingredients.forEach((ingredient: Ingredient) => mappings.push({ 'ref_pizza': pizza.id, 'ref_ingredient': ingredient.id } as PizzaMapping));

    await new PizzaMappingRepositoryTransaction().store(mappings);

    return res.json(pizza);
  }

  public static async show(req: Request, res: Response): Promise<any> {
    return res.json([]);
  }

  public static async update(req: Request, res: Response): Promise<any> {
    return res.json([]);
  }

  public static async delete(req: Request, res: Response): Promise<any> {
    return res.json([]);
  }
}