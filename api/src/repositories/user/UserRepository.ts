import { User } from "../../models"

export default interface UserRepository {
  findAll(): Promise<User[]>
  getUserByCpf(cpf: string): Promise<User>
  add(data: User): Promise<User>
  update(id: string, data: User): Promise<User>
  delete(id: string): Promise<void>
}