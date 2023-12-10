import Database from "../../database";
import crypto from 'crypto';
import Order, { Payment, Type } from "../../models/Order";
import { OrderRepository } from "./OrderRepository";
import { State } from "../../models/Item";

export default class OrderRepositoryManager implements OrderRepository {
  async finishOrder(order: Order): Promise<Order> {
    const conn = await Database.getInstance().connect();

    order.id = crypto.randomUUID();

    await conn.execute(
      'INSERT orders SET id = ?, ref_user = ?, total = ?, state = ?, type = ?, payment = ?, created = ?',
      [order.id, order.userId, order.total, order.state, Object.values(Type).indexOf(order.type), Object.values(Payment).indexOf(order.payment), new Date()]);

    for (const item of order.items ?? []) {
      item.orderId = order.id;

      await conn.execute(
        'INSERT orders_items SET ref_order = ?, ref_item = ?',
        [order.id, item.itemId]);

      await conn.execute('UPDATE items SET state = ? WHERE id = ?', [State.DELIVERED, item.itemId]);
    }

    conn.end()

    return order;
  }
}