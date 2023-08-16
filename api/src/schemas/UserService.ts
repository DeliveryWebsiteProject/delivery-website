// import { Schema, model } from "mongoose";
// import User from "../models/User";

import { ResultSetHeader } from "mysql2";
import Database from "../database";
import User from "../models/User";
import bcrypt from 'bcryptjs';
import ApiError from "../utils/ApiError";
import { HttpStatus } from "../utils/HttpStatus";

// const UserSchema = new Schema({
//   email: String,
//   firstName: String,
//   lastName: String,
//   password: String,
// }, { timestamps: true })

// UserSchema.pre('save', async function save(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password as string, salt);
//     return next();
//   }
//   catch (err: any) {
//     return next(err);
//   }
// })

// UserSchema.methods.validatePassword = async function validatePassword(data: string) {
//   return bcrypt.compare(data, this.password);
// };

// export default model<User>('User', UserSchema)

export default class UserService {

  public static async store(user: User): Promise<User> {
    if (!user.name || !user.password || !user.phone || !user.role || !user.state) throw new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST)

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const conn = await Database.getInstance().connect();

    const [rows] = await conn.execute(
      'INSERT INTO users (name, password, phone, address, role, state) values ( ?, ?, ?, ?, ?, ?)',
      [user.name, user.password, user.phone, user.address, user.role, user.state]);

    const { insertId } = rows as ResultSetHeader;

    user.id = insertId;

    conn.end()

    return user;
  }
}

