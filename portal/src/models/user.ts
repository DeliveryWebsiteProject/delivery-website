export enum Role {
  USER,
  ADMIN
}

export enum State {
  ACTIVE,
  INACTIVE
}

interface User {
  id?: string
  cpf?: string
  name?: string
  token?: string
  password?: string
  phone?: string
  address?: string
  role?: Role
  state?: State
}

export default User