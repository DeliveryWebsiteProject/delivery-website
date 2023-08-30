import { User } from "../../models"

export default interface UserRepository {
  findAll(): Promise<User[]>
  store(data: User): Promise<User>
  getUserByCpf(cpf: string): Promise<User>
}