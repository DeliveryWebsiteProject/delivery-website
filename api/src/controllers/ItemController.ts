import { Request, Response } from "express";
import { Item } from "../models";
import { ItemRepositoryTransaction } from '../repositories/item/ItemRepositoryTransaction';

export default class ItemController {
  public static async findAll(req: Request, res: Response): Promise<Response<Item[]>> {
    const items = await new ItemRepositoryTransaction().findAll();

    return res.json(items);
  }

  public static async getById(req: Request, res: Response): Promise<Response<Item>> {
    const { id } = req.params;

    const item = await new ItemRepositoryTransaction().getById(id);

    return res.json(item);
  }

  public static async getByCartId(req: Request, res: Response): Promise<Response<Item>> {
    const { ref_cart } = req.params;

    const item = await new ItemRepositoryTransaction().getByCartId(ref_cart);

    return res.json(item);
  }

  public static async add(req: Request, res: Response): Promise<any> {
    const item = await new ItemRepositoryTransaction().add(req.body);

    return res.json(item);
  }

  public static async update(req: Request, res: Response): Promise<Response<Item>> {
    const { id } = req.params;

    const item = await new ItemRepositoryTransaction().update(id, req.body);

    return res.json(item)
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    let itemRepo = new ItemRepositoryTransaction();

    const item = await itemRepo.getById(id);

    await itemRepo.delete(item.id);

    res.status(200).end();
  }
}