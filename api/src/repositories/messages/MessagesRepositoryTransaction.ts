
import { Messages } from "../../models";
import Database from "../../database";
import MessagesRepository from "./MessagesRepository";

export default class MessagesRepositoryTransaction implements MessagesRepository {
  async getMessages(): Promise<Messages[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Messages[]>('SELECT * FROM messages');

    conn.end()

    return rows;
  }

  async create(data: Messages): Promise<Messages> {
    const conn = await Database.getInstance().connect();

    await conn.execute(
      'INSERT INTO messages (welcome, start, finish) values ( ?, ?, ? )',
      [data.welcome, data.start, data.finish]);

    conn.end();

    return data;
  }

  async update(data: Messages): Promise<Messages> {
    const conn = await Database.getInstance().connect();

    await conn.execute<Messages[]>(
      'UPDATE messages SET welcome = ?, start = ?, finish = ?',
      [data.welcome, data.start, data.finish]);

    conn.end();

    return data;
  }
}