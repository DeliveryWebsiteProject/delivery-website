
enum Role {
  USER,
  ADMIN
}

enum State {
  ACTIVE,
  INACTIVE
}

interface User {
  id: Number
  name: string
  password: string
  phone: string
  address?: string
  role: Role
  state: State
}

export default User