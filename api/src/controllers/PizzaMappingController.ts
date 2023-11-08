import { Request, Response } from "express";
import { PizzaMapping } from "../models";
import { PizzaMappingRepositoryTransaction } from "../repositories/pizzaMapping/PizzaMappingRepositoryTransaction"

export default class PizzaMappingController {
  public static async findAll(req: Request, res: Response): Promise<Response<PizzaMapping[]>> {
    const mappings = await new PizzaMappingRepositoryTransaction().findAll();

    return res.json(mappings);
  }

  public static async getByPizzaId(req: Request, res: Response): Promise<Response<PizzaMapping[]>> {
    const { ref_pizza } = req.params

    const mapping = await new PizzaMappingRepositoryTransaction().getByPizzaId(ref_pizza)

    return res.json(mapping)
  }

  public static async add(req: Request, res: Response): Promise<Response<PizzaMapping>> {
    const mapping = await new PizzaMappingRepositoryTransaction().add(req.body);

    return res.json(mapping);
  }
}