import Database from "../../database";
import crypto from 'crypto';
import Ingredient from "../../models/Ingredient";
import { IngredientRepository } from "./IngredientRepository";

export class IngredientRepositoryTransaction implements IngredientRepository {
  async findAll(): Promise<Ingredient[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Ingredient[]>('SELECT * FROM ingredient');

    conn.end()

    return rows;
  }

  async add(data: Ingredient): Promise<Ingredient> {
    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute('INSERT INTO ingredient (id, name) VALUES (?, ?)', [data.id, data.name]);

    conn.end();

    return data;
  }

  async update(data: Ingredient): Promise<Ingredient> {
    const conn = await Database.getInstance().connect();

    await conn.execute('UPDATE ingredient SET name = ? WHERE id = ?', [data.name, data.id]);

    conn.end();

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Ingredient[]>('DELETE FROM ingredient WHERE id = ?', [id]);

    conn.end();
  }

  async getById(id: string): Promise<Ingredient> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Ingredient[]>('SELECT * FROM ingredient WHERE id = ?', [id]);

    conn.end()

    return rows[0] ?? undefined;
  }
}