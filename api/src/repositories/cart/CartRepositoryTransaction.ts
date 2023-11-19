import { ResultSetHeader, RowDataPacket } from "mysql2";
import Database from "../../database";
import { Cart } from "../../models";
import CartRepository from './CartRepository';
import CartItemWrapper from "../../models/CartItemWrapper";

export class CartRepositoryTransaction implements CartRepository {
  async findAll(): Promise<Cart[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Cart[]>(`SELECT * FROM carts`);

    conn.end();

    return rows;
  }

  async getByUserId(ref_user: string): Promise<Cart[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Cart[]>('SELECT * FROM carts WHERE ref_user = ?', [ref_user]);

    conn.end();

    return rows;
  }

  async getByUserIdAndItemId(ref_user: string, ref_item: string): Promise<Cart | undefined> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Cart[]>('SELECT * FROM carts WHERE ref_user = ? AND ref_item = ?', [ref_user, ref_item]);

    conn.end();

    if (rows.length === 0) {
      return undefined;
    }

    return rows[0];
  }

  async add(data: Cart): Promise<Cart> {
    const conn = await Database.getInstance().connect();

    await conn.execute(`INSERT INTO carts (ref_user, ref_item) values (?, ?)`, [data.ref_user, data.ref_item]);

    conn.end();

    return data;
  }

  async countItems(userId: string): Promise<number> {
    const conn = await Database.getInstance().connect();

    const [result] = await conn.execute<RowDataPacket[]>(`SELECT COUNT(*) as itemsCount FROM carts WHERE ref_user = ?`, [userId]);

    conn.end();

    return result[0]['itemsCount'] ?? 0;
  }

  async getCartItemsWrapper(userId: string): Promise<CartItemWrapper[]> {
    const conn = await Database.getInstance().connect();

    const [result] = await conn.execute<ResultSetHeader[]>(`SELECT i.*, p.* FROM pizzas p INNER JOIN items i ON i.ref_pizza = p.id INNER JOIN carts c ON c.ref_item = i.id WHERE c.ref_user = ?`, [userId]);

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
        ref_pizza: row['ref_pizza'],
        quantity: row['quantity'],
      };

      items.push({ cartItem, pizza });
    });

    return items as CartItemWrapper[];
  }
}