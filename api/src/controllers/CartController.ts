import { Request, Response } from "express";
import { Cart } from "../models";
import { CartRepositoryTransaction } from '../repositories/cart/CartRepositoryTransaction';
import CartItemWrapper from "../models/CartItemWrapper";

export default class CartController {
  private static cartRepo = new CartRepositoryTransaction();

  public static async findAll(req: Request, res: Response): Promise<Response<Cart[]>> {
    const carts = await CartController.cartRepo.findAll();

    return res.json(carts);
  }

  public static async getByUserId(req: Request, res: Response): Promise<Response<Cart>> {
    const { ref_user } = req.params;

    const cart = await CartController.cartRepo.getByUserId(ref_user);

    return res.json(cart);
  }

  public static async add(req: Request, res: Response): Promise<Response<Cart | undefined>> {
    const { ref_user, ref_item } = req.body;

    const existingCart = await CartController.cartRepo.getByUserIdAndItemId(ref_user, ref_item);

    if (!existingCart) {
      const cart = await CartController.cartRepo.add(req.body);

      return res.json(cart);
    }

    return res.json(undefined);
  }

  public static async countItems(req: Request, res: Response): Promise<Response<number>> {
    const { ref_user } = req.params;

    const count = await CartController.cartRepo.countItems(ref_user);

    return res.json(count)
  }

  public static async getCartItemsWrapper(req: Request, res: Response): Promise<Response<CartItemWrapper[]>> {
    const { ref_user } = req.params;

    const cartItemsWrapper = await CartController.cartRepo.getCartItemsWrapper(ref_user);

    return res.json(cartItemsWrapper);
  }

  public static async deleteCart(req: Request, res: Response): Promise<Response<Cart>> {
    const { ref_user, ref_item } = req.params;

    let cart = { ref_user, ref_item } as Cart;

    await CartController.cartRepo.deleteCart(cart);

    return res.json(cart);
  }
}