
import bcrypt from 'bcryptjs';
import Database from "../database";
import ApiError from "../utils/ApiError";
import { HttpStatus } from "../utils/HttpStatus";
import User, { Role, State } from "../models/User";
import crypto from 'crypto';
import { RowDataPacket } from "mysql2";

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

    if (!user.name || !user.cpf || !user.password || !user.phone) throw new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST)

    if (user.password.length < 6) throw new ApiError('A senha deve ter no mínimo 6 caracteres', HttpStatus.BAD_REQUEST);

    if (user.cpf.length !== 11 || user.cpf.match(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})^/)) throw new ApiError('CPF inválido', HttpStatus.BAD_REQUEST);

    if (user.phone.length === 11) throw new ApiError('Telefone inválido', HttpStatus.BAD_REQUEST);

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

