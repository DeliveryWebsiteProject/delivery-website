import CartItemWrapper from '../models/CartItemWrapper';
import Order from "../models/Order";
import OrderItem from '../models/OrderItem';
import OrderRepositoryTransaction from "../repositories/order/OrderRepositoryTransaction";
import { Request, Response } from "express";

export default class OrderController {
  public static async findAll(req: Request, res: Response): Promise<Response<Order[]>> {
    const orders = await new OrderRepositoryTransaction().findAll();

    return res.json(orders);
  }

  public static async findOrderItems(req: Request, res: Response): Promise<Response<CartItemWrapper[]>> {
    const { id } = req.params

    const items = await new OrderRepositoryTransaction().findOrderItems(id);

    return res.json(items);
  }

  public static async createOrder(req: Request, res: Response): Promise<Response<Order>> {
    const order = await new OrderRepositoryTransaction().createOrder(req.body);

    return res.json(order);
  }

  public static async updateOrder(req: Request, res: Response): Promise<Response<Order>> {
    const { id } = req.params;

    const order = await new OrderRepositoryTransaction().updateOrder(id, req.body);

    return res.json(order);
  }
}