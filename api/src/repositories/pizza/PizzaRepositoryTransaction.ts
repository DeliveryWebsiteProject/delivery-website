import crypto from 'crypto';
import { Pizza } from "../../models";
import { State } from "../../models/Pizza";
import Database from "../../database";
import PizzaRepository from "./PizzaRepository";

export default class PizzaRepositoryTransaction implements PizzaRepository {
  async findAll(): Promise<Pizza[]> {
    const conn = await Database.getInstance().connect();

    // const [rows] = await conn.execute<Pizza[]>('SELECT pizzas.*, photos.path FROM pizzas inner join photos on photos.id = pizzas.ref_photo where state = ?', [State.ACTIVE]);
    const [rows] = await conn.execute<Pizza[]>('SELECT * FROM pizzas WHERE state = ?', [State.ACTIVE]);

    conn.end()

    return rows;
  }

  async getById(id: string): Promise<Pizza> {
    const conn = await Database.getInstance().connect();

    let pizza: Pizza | undefined = undefined;

    let [rows] = await conn.execute<Pizza[]>(
      'SELECT * FROM pizzas WHERE id = ?', [id]);

    conn.end();

    pizza = rows[0];

    return pizza;
  }

  async add(data: Pizza): Promise<Pizza> {
    Object.assign(data, { ref_photo: data.ref_photo ?? '', state: data.state ?? State.ACTIVE });

    data.id = crypto.randomUUID();

    const conn = await Database.getInstance().connect();

    await conn.execute(
      'INSERT INTO pizzas (id, ref_photo, name, price, category, state) values ( ?, ?, ?, ?, ?, ? )',
      [data.id, data.ref_photo, data.name, data.price, data.category, data.state]);

    conn.end()

    return data;
  }

  async update(id: string, data: Pizza): Promise<Pizza> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Pizza[]>(
      'UPDATE pizzas SET name = ?, price = ?, category = ?, ref_photo = ?, state = ? WHERE id = ?',
      [data.name, data.price, data.category, data.ref_photo, data.state, id]);

    conn.end();

    data = await this.getById(id);

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute(
      'UPDATE pizzas SET state = ? WHERE id = ?', [State.INACTIVE, id]);

    conn.end();
  }
}