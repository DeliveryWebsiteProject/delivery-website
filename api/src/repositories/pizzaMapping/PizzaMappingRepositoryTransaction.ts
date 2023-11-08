import { RowDataPacket } from "mysql2";
import Database from "../../database";
import { PizzaMapping } from "../../models";
import PizzaMappingRepository from "./PizzaMappingRepository";

export class PizzaMappingRepositoryTransaction implements PizzaMappingRepository {
  async findAll(): Promise<PizzaMapping[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<PizzaMapping[]>(`SELECT * FROM pizza_mapping`);

    conn.end();

    return rows;
  }

  async getByPizzaId(pizzaId: string): Promise<PizzaMapping[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<PizzaMapping[]>(`SELECT * FROM pizza_mapping WHERE ref_pizza = '${pizzaId}'`);

    conn.end();

    return rows;
  }

  async add(data: PizzaMapping): Promise<PizzaMapping> {
    const conn = await Database.getInstance().connect();

    await conn.execute(`INSERT INTO pizza_mapping (ref_pizza, ref_ingredient) values ( ?, ? )`, [data.ref_pizza, data.ref_ingredient]);

    conn.end();

    return data;
  }

  async hasIngredientMapping(ingredientId: string): Promise<boolean> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<RowDataPacket[]>('SELECT count(*) as maps FROM pizza_mapping WHERE ref_ingredient = ?', [ingredientId]);

    conn.end();

    return rows[0].maps > 0;
  }
}