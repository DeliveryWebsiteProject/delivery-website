
import { Settings } from "../../models";
import Database from "../../database";
import SettingsRepository from "./SettingsRepository";

export default class SettingsRepositoryTransaction implements SettingsRepository {
  async getSettings(): Promise<Settings[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<Settings[]>('SELECT * FROM settings');

    conn.end()

    return rows;
  }

  async create(data: Settings): Promise<Settings> {
    Object.assign(data, {
      cellphone: data.cellphone.replace(/\W/g, ''),
      phone: data.phone.replace(/\W/g, ''),
    });

    const conn = await Database.getInstance().connect();

    await conn.execute(
      'INSERT INTO settings (days, begin, end, state) values ( ?, ?, ?, ? )',
      [data.days, data.begin, data.end, data.state]);

    conn.end();

    return data;
  }

  async update(data: Settings): Promise<Settings> {
    Object.assign(data, {
      cellphone: data.cellphone.replace(/\W/g, ''),
      phone: data.phone.replace(/\W/g, ''),
    });

    const conn = await Database.getInstance().connect();

    await conn.execute<Settings[]>(
      'UPDATE settings SET days = ?, begin = ?, end = ?, state = ?, cellphone = ?, phone = ?, facebook = ?, instagram = ?',
      [data.days, data.begin, data.end, data.state, data.cellphone, data.phone, data.facebook, data.instagram]);

    conn.end();

    return data;
  }
}