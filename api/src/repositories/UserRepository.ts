
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import Database from "../database";
import User, { Role, State } from "../models/User";

export default class UserRepository {
  public static async findOne(cpf: string): Promise<User | undefined> {
    const conn = await Database.getInstance().connect();

    let user: User | undefined = undefined;

    let [rows] = await conn.execute<User[]>(
      'SELECT * FROM users WHERE cpf = ?', [cpf]);

    conn.end()

    user = rows[0];

    return user;
  }

  public static async store(user: User): Promise<User> {
    Object.assign(user, { address: user.address ?? null, role: user.role ?? Role.USER, state: user.state ?? State.ACTIVE });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    const conn = await Database.getInstance().connect();

    user.id = crypto.randomUUID();

    await conn.execute(
      'INSERT INTO users (id, cpf, name, password, phone, address, role, state) values ( ?, ?, ?, ?, ?, ?, ?, ?)',
      [user.id, user.cpf, user.name, user.password, user.phone, user.address, user.role, user.state]);

    conn.end()

    return user;
  }

  public static async findAll(): Promise<User[]> {
    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute<User[]>('SELECT * FROM users');

    conn.end()

    return rows;
  }
}

