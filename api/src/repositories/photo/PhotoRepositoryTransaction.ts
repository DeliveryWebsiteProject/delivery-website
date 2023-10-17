import Database from "../../database";
import crypto from 'crypto';
import { PhotoRepository } from "./PhotoRepository";
import { Photo } from "../../models/Photo";

export default class PhotoRepositoryTransaction implements PhotoRepository {
  async add(path: string): Promise<Photo> {
    const conn = await Database.getInstance().connect();

    const id = crypto.randomUUID();

    await conn.execute(
      'INSERT INTO photos (id, path) values ( ?, ? )',
      [id, path]);

    conn.end()

    return { id, path } as Photo;
  }

  async getPhotoById(id: string): Promise<Photo | undefined> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Photo[]>('SELECT * FROM photos WHERE id = ?', [id]);

    conn.end();

    return rows[0] ?? undefined;
  }
}