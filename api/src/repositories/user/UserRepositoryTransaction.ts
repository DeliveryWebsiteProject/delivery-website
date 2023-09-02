
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { User } from "../../models";
import Database from "../../database";
import { Role, State } from "../../models/User";
import UserRepository from "./UserRepository";

export default class UserRepositoryTransaction implements UserRepository {
  async findAll(): Promise<User[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<User[]>('SELECT * FROM users');

    conn.end()

    return rows;
  }

  async store(data: User): Promise<User> {
    Object.assign(data, { address: data.address ?? null, role: data.role ?? Role.USER, state: data.state ?? State.ACTIVE });

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
}

