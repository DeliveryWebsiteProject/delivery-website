import Database from "../../database";
import crypto from 'crypto';
import { Cart, Item } from "../../models"
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

  async getByUserId(userId: string): Promise<Item[]> {
    const conn = await Database.getInstance().connect();

    const [carts] = await conn.execute<Cart[]>('SELECT * FROM carts WHERE ref_user = ?', [userId]);

    const itemsId = carts.map(cart => cart.ref_item);

    let items: Item[] = [];

    if (itemsId.length > 0) {
      const values = itemsId.map(() => '?').join(',');

      [items] = await conn.execute<Item[]>(`SELECT * FROM items WHERE id IN (${values})`, [...itemsId]);
    }

    conn.end();

    return items;
  }

  async add(data: Item): Promise<Item> {
    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute('INSERT INTO items (id, ref_pizza, quantity) VALUES (?, ?, ?)',
      [data.id, data.ref_pizza, data.quantity]
    );

    conn.end();

    return data;
  }

  async update(id: string, data: Item): Promise<Item> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Item[]>('UPDATE items SET quantity = ?, ref_pizza = ? WHERE id = ?',
      [data.quantity, data.ref_pizza, id]
    );

    conn.end();

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Item[]>('DELETE FROM items WHERE id = ?', [id]);

    conn.end();
  }
}