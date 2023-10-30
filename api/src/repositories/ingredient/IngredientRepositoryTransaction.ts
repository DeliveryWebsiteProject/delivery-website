import Database from "../../database";
import crypto from 'crypto';
import Ingredient from "../../models/Ingredient";
import { IngredientRepository } from "./IngredientRepository";

export class IngredientRepositoryTransaction implements IngredientRepository {
  async findAll(): Promise<Ingredient[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Ingredient[]>('SELECT * FROM ingredients');

    conn.end()

    return rows;
  }

  async getById(id: string): Promise<Ingredient> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Ingredient[]>('SELECT * FROM ingredients WHERE id = ?', [id]);

    conn.end()

    return rows[0] ?? undefined;
  }

  async add(data: Ingredient): Promise<Ingredient> {
    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute('INSERT INTO ingredients (id, name) VALUES (?, ?)', [data.id, data.name]);

    conn.end();

    return data;
  }

  async update(id: string, data: Ingredient): Promise<Ingredient> {
    const conn = await Database.getInstance().connect();

    await conn.execute('UPDATE ingredients SET name = ? WHERE id = ?', [data.name, id]);

    conn.end();

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Ingredient[]>('DELETE FROM ingredients WHERE id = ?', [id]);

    conn.end();
  }
}