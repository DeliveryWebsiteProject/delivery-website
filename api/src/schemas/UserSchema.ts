import { Schema, model } from "mongoose";
import User from "../models/User";

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, { timestamps: true })

export default model<User>('User', UserSchema)