import Database from "../../database";
import crypto from 'crypto';
import Ingredient, { State } from "../../models/Ingredient";
import { IngredientRepository } from "./IngredientRepository";

export class IngredientRepositoryTransaction implements IngredientRepository {
  async findAll(): Promise<Ingredient[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Ingredient[]>('SELECT * FROM ingredient WHERE state = ?', [State.ACTIVE]);

    conn.end()

    return rows;
  }

  async add(data: Ingredient): Promise<Ingredient> {
    Object.assign(data, { state: data.state ?? State.ACTIVE });

    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute('INSERT INTO ingredient (id, name, state) VALUES (?, ?, ?)', [data.id, data.name, data.state]);

    conn.end();

    return data;
  }

  async update(data: Ingredient): Promise<Ingredient> {
    const conn = await Database.getInstance().connect();

    await conn.execute('UPDATE ingredient SET name = ?, state = ? WHERE id = ?', [data.name, data.state, data.id]);

    conn.end();

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Ingredient[]>('UPDATE ingredient SET state = ? WHERE id = ?', [State.INACTIVE, id]);

    conn.end();
  }

  async getById(id: string): Promise<Ingredient> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Ingredient[]>('SELECT * FROM ingredient WHERE state = ? AND id = ?', [State.ACTIVE, id]);

    conn.end()

    return rows[0] ?? undefined;
  }
}