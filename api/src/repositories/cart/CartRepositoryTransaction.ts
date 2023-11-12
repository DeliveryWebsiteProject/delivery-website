import { RowDataPacket } from "mysql2";
import Database from "../../database";
import { Cart } from "../../models";
import CartRepository from "./CartRepository";

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

  async add(data: Cart): Promise<Cart> {
    const conn = await Database.getInstance().connect();

    await conn.execute(`INSERT INTO carts (ref_user, ref_item) values (?, ?)`, [data.ref_user, data.ref_item]);

    conn.end();

    return data;
  }

  async hasItemMapping(ref_item: string): Promise<boolean> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<RowDataPacket[]>('SELECT count(*) as maps FROM carts WHERE ref_item = ?', [ref_item]);

    conn.end();

    return rows[0].maps > 0;
  }
}