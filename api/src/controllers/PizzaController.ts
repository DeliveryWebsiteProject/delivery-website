import { Request, Response } from "express";
import { Ingredient, Pizza, PizzaMapping } from "../models";
import PizzaRepositoryTransaction from "../repositories/pizza/PizzaRepositoryTransaction";

export default class PizzaController {
  public static async findAll(req: Request, res: Response): Promise<Response<Pizza[]>> {
    const pizzas = await new PizzaRepositoryTransaction().findAll();

    return res.json(pizzas);
  }

  public static async add(req: Request, res: Response): Promise<any> {
    const { ingredients } = req.body;

    const pizza = await new PizzaRepositoryTransaction().add(req.body);

    const mappings: PizzaMapping[] = [];

    // ingredients.forEach((ingredient: Ingredient) => mappings.push({ 'ref_pizza': pizza.id, 'ref_ingredient': ingredient.id } as PizzaMapping));

    // await new PizzaMappingRepositoryTransaction().add(mappings);

    return res.json(pizza);
  }

  public static async getById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    const pizza = await new PizzaRepositoryTransaction().getById(id);

    return res.json(pizza);
  }

  public static async update(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    const pizza = await new PizzaRepositoryTransaction().update(id, req.body);

    return res.json(pizza)
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await new PizzaRepositoryTransaction().delete(id)

    res.status(200).end();
  }
}