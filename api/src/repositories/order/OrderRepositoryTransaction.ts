import crypto from 'crypto';
import { ResultSetHeader } from 'mysql2';
import Database from "../../database";
import CartItemWrapper from '../../models/CartItemWrapper';
import { State } from "../../models/Item";
import Order, { Payment, Type } from "../../models/Order";
import { OrderRepository } from "./OrderRepository";

export default class OrderRepositoryTransaction implements OrderRepository {
  async findAll(): Promise<Order[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Order[]>('SELECT * FROM orders');

    conn.end()

    return rows;
  }

  async getById(id: string): Promise<Order> {
    const conn = await Database.getInstance().connect();

    let user: Order | undefined = undefined;

    let [rows] = await conn.execute<Order[]>(
      'SELECT * FROM orders WHERE id = ?', [id]);

    conn.end();

    user = rows[0];

    return user;
  }

  async findOrderItems(ref_order: string): Promise<CartItemWrapper[]> {
    const conn = await Database.getInstance().connect();

    const [result] = await conn.execute<ResultSetHeader[]>(`SELECT i.id as itemId, i.ref_pizza, i.quantity, i.state, p.* FROM pizzas p INNER JOIN items i ON i.ref_pizza = p.id INNER JOIN carts c ON c.ref_item = i.id WHERE i.id IN ( SELECT oi.ref_item FROM orders_items oi WHERE oi.ref_order = ? )`, [ref_order]);

    conn.end();

    let items = [] as any;

    result.forEach((row: any) => {
      const pizza = {
        id: row['id'],
        name: row['name'],
        description: row['description'],
        price: row['price'],
        ref_photo: row['ref_photo'],
        category: row['category'],
        state: row['state'],
      };

      const cartItem = {
        id: row['itemId'],
        ref_pizza: row['ref_pizza'],
        quantity: row['quantity'],
        state: row['state']
      };

      items.push({ cartItem, pizza });
    });

    return items as CartItemWrapper[];
  }

  async createOrder(order: Order): Promise<Order> {
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

  async updateOrder(id: string, data: Order): Promise<Order> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Order[]>(
      'UPDATE orders SET state = ? WHERE id = ?',
      [data.state, id]);

    conn.end();

    data = await this.getById(id);

    return data;
  }
}