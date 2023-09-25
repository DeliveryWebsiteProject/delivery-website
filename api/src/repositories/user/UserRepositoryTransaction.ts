
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { User } from "../../models";
import Database from "../../database";
import { Role, State } from "../../models/User";
import UserRepository from "./UserRepository";

export default class UserRepositoryTransaction implements UserRepository {
  async findAll(): Promise<User[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<User[]>('SELECT * FROM users where state = ?', [State.ACTIVE]);

    conn.end()

    return rows;
  }

  async store(data: User): Promise<User> {
    Object.assign(data, {
      cpf: data.cpf.replace(/\W/g, ''),
      phone: data.phone.replace(/\W/g, ''),
      address: data.address ?? null,
      role: data.role ?? Role.USER,
      state: data.state ?? State.ACTIVE
    });

    const salt = await bcrypt.genSalt(10);

    data.password = await bcrypt.hash(data.password, salt);

    const conn = await Database.getInstance().connect();

    data.id = crypto.randomUUID();

    await conn.execute(
      'INSERT INTO users (id, cpf, name, password, phone, address, role, state) values ( ?, ?, ?, ?, ?, ?, ?, ?)',
      [data.id, data.cpf, data.name, data.password, data.phone, data.address, data.role, data.state]);

    conn.end()

    return data;
  }

  async getUserByCpf(cpf: string): Promise<User> {
    const conn = await Database.getInstance().connect();

    let user: User | undefined = undefined;

    let [rows] = await conn.execute<User[]>(
      'SELECT * FROM users WHERE cpf = ?', [cpf]);

    conn.end()

    user = rows[0];

    return user;
  }

  async getUserById(id: string): Promise<User> {
    const conn = await Database.getInstance().connect();

    let user: User | undefined = undefined;

    let [rows] = await conn.execute<User[]>(
      'SELECT * FROM users WHERE id = ?', [id]);

    conn.end();

    user = rows[0];

    return user;
  }

  async update(id: string, data: User): Promise<User> {
    Object.assign(data, {
      phone: data.phone.replace(/\W/g, ''),
      address: data.address ?? null,
    });

    const conn = await Database.getInstance().connect();

    await conn.execute<User[]>(
      'UPDATE users SET name = ?, phone = ?, address = ? WHERE id = ?',
      [data.name, data.phone, data.address, id]);

    conn.end();

    data = await this.getUserById(id);

    return data;
  }

  async delete(id: string): Promise<void> {
    const conn = await Database.getInstance().connect();

    await conn.execute(
      'UPDATE users SET state = ? WHERE id = ?', [State.INACTIVE, id]);

    conn.end();
  }
}

