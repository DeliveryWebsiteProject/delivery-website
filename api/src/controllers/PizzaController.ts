import { Request, Response } from "express";
import { Pizza } from "../models";
import PizzaRepositoryTransaction from "../repositories/pizza/PizzaRepositoryTransaction";
import PhotoRepositoryTransaction from "../repositories/photo/PhotoRepositoryTransaction";

export default class PizzaController {
  public static async findAll(req: Request, res: Response): Promise<Response<Pizza[]>> {
    const pizzas = await new PizzaRepositoryTransaction().findAll();

    return res.json(pizzas);
  }

  public static async add(req: Request, res: Response): Promise<any> {
    const pizza = await new PizzaRepositoryTransaction().add(req.body);

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

    let pizzaRepo = new PizzaRepositoryTransaction();
    let photoRepo = new PhotoRepositoryTransaction();

    const pizza = await pizzaRepo.getById(id);

    await pizzaRepo.delete(pizza.id);

    const photo = await photoRepo.getPhotoById(pizza.ref_photo ?? '');

    if (photo) {
      await photoRepo.delete(photo);
    }

    res.status(200).end();
  }
}