import { RowDataPacket } from "mysql2";

export interface Photo extends RowDataPacket {
  id: string,
  path: string
}