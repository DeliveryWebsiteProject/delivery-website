import Database from "../../database";
import crypto from 'crypto';
import { Item } from "../../models"
import { ItemRepository } from "./ItemRepository";

export class ItemRepositoryTransaction implements ItemRepository {
  async findAll(): Promise<Item[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Item[]>('SELECT * FROM items');

    conn.end()

    return rows;
  }

  async getById(id: string): Promise<Item> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Item[]>('SELECT * FROM items WHERE id = ?', [id]);

    conn.end()

    return rows[0] ?? undefined;
  }

  async getByCartId(ref_card: string): Promise<Item> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Item[]>('SELECT * FROM items WHERE ref_cart = ?', [ref_card]);

    conn.end()

    return rows[0] ?? undefined;
  }

  async add(data: Item): Promise<Item> {
    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute('INSERT INTO items (id, ref_pizza, ref_cart, quantity) VALUES (?, ?, ?, ?)',
      [data.id, data.ref_pizza, data.ref_cart, data.quantity]
    );

    conn.end();

    return data;
  }

  async update(id: string, data: Item): Promise<Item> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Item[]>('UPDATE pizzas SET quantity = ? WHERE id = ?', [data.quantity, id]);

    conn.end();

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Item[]>('DELETE FROM items WHERE id = ?', [id]);

    conn.end();
  }
}