import { Request, Response } from "express";
import { Cart } from "../models";
import { CartRepositoryTransaction } from '../repositories/cart/CartRepositoryTransaction';

export default class CartController {
  public static async findAll(req: Request, res: Response): Promise<Response<Cart[]>> {
    const carts = await new CartRepositoryTransaction().findAll();

    return res.json(carts);
  }

  public static async getByUserId(req: Request, res: Response): Promise<Response<Cart>> {
    const { ref_user } = req.params;

    const cart = await new CartRepositoryTransaction().getByUserId(ref_user);

    return res.json(cart);
  }

  public static async add(req: Request, res: Response): Promise<any> {
    const cart = await new CartRepositoryTransaction().add(req.body);

    return res.json(cart);
  }
}