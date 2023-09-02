import { RowDataPacket } from "mysql2"

export enum Role {
  USER,
  ADMIN 
}

export enum State {
  ACTIVE,
  INACTIVE
}

interface User extends RowDataPacket {
  id: string
  cpf: string
  name: string
  password: string
  phone: string
  address?: string
  role: Role
  state: State
}

export default User