import Database from "../../database";
import { PizzaMapping } from "../../models";
import PizzaMappingRepository from "./PizzaMappingRepository";

export default class PizzaMappingRepositoryTransaction implements PizzaMappingRepository {
  async store(data: PizzaMapping[]): Promise<PizzaMapping[]> {
    const conn = await Database.getInstance().connect();

    let values = '';

    for (let i = 0; i < data.length; i++) {
      values += '(?, ?)';

      if (i !== data.length - 1) {
        values += ', ';
      }
    }

    await conn.execute(
      `INSERT INTO pizza_mapping (ref_pizza, ref_ingredient) values ( ${values} )`,
      data);

    conn.end();

    return data;
  }
}