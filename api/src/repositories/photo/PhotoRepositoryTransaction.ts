import Database from "../../database";
import crypto from 'crypto';
import { PhotoRepository } from "./PhotoRepository";

export default class PhotoRepositoryTransaction implements PhotoRepository {
  async add(path: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    const id = crypto.randomUUID();

    await conn.execute(
      'INSERT INTO photos (id, path) values ( ?, ? )',
      [id, path]);

    conn.end()
  }
}