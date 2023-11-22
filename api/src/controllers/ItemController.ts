import { Request, Response } from "express";
import { Item } from "../models";
import { ItemRepositoryTransaction } from '../repositories/item/ItemRepositoryTransaction';

export default class ItemController {
  private static itemRepo = new ItemRepositoryTransaction();

  public static async findAll(req: Request, res: Response): Promise<Response<Item[]>> {
    const items = await ItemController.itemRepo.findAll();

    return res.json(items);
  }

  public static async getById(req: Request, res: Response): Promise<Response<Item>> {
    const { id } = req.params;

    const item = await ItemController.itemRepo.getById(id);

    return res.json(item);
  }

  public static async getItemsByUserId(req: Request, res: Response): Promise<Response<Item[]>> {
    const { userId } = req.params;

    const item = await ItemController.itemRepo.getByUserId(userId);

    return res.json(item);
  }

  public static async add(req: Request, res: Response): Promise<any> {
    const item = await ItemController.itemRepo.add(req.body);

    return res.json(item);
  }

  public static async update(req: Request, res: Response): Promise<Response<Item>> {
    const { id } = req.params;

    const item = await ItemController.itemRepo.update(id, req.body);

    return res.json(item)
  }

  public static async delete(req: Request, res: Response): Promise<Response<Item>> {
    const { id } = req.params;

    const item = await ItemController.itemRepo.getById(id);

    await ItemController.itemRepo.delete(item.id);

    return res.json(item);
  }
}