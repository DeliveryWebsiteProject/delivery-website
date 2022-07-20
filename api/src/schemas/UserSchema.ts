import { Schema, model } from "mongoose";
import User from "../models/User";
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
}, { timestamps: true })

UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password as string, salt);
    return next();
  }
  catch (err: any) {
    return next(err);
  }
})

UserSchema.methods.validatePassword = async function validatePassword(data: string) {
  return bcrypt.compare(data, this.password);
};

export default model<User>('User', UserSchema)