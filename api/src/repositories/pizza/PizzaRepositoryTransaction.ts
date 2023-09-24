import crypto from 'crypto';
import { Pizza } from "../../models";
import { State } from "../../models/Pizza";
import Database from "../../database";
import PizzaRepository from "./PizzaRepository";

export default class PizzaRepositoryTransaction implements PizzaRepository {
  async findAll(): Promise<Pizza[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Pizza[]>('SELECT * FROM pizzas where state = ?', [State.ACTIVE]);

    conn.end()

    return rows;
  }

  async store(data: Pizza): Promise<Pizza> {
    Object.assign(data, { state: data.state ?? State.ACTIVE });

    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute(
      'INSERT INTO pizzas (id, name, price, category, state) values ( ?, ?, ?, ?, ?, ? )',
      [data.id, data.name, data.price, data.category, data.state]);

    conn.end()

    return data;
  }

  update(data: Pizza): Promise<Pizza> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute(
      `UPDATE pizzas SET state = ${State.INACTIVE} WHERE id = ${id}`
    )

    conn.end()
  }

  show(id: number): Promise<Pizza> {
    throw new Error("Method not implemented.");
  }
}