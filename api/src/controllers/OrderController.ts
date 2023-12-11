import Order from "../models/Order";
import OrderRepositoryManager from "../repositories/order/OrderRepositoryManager";
import { Request, Response } from "express";

export default class OrderController {
  public static async finishOrder(req: Request, res: Response): Promise<Response<Order>> {
    const order = await new OrderRepositoryManager().finishOrder(req.body);

    return res.json(order);
  }
}