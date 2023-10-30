import { Pizza } from "../../models"

export default interface PizzaRepository {
  findAll(): Promise<Pizza[]>
  getById(id: string): Promise<Pizza>
  add(data: Pizza): Promise<Pizza>
  update(id: string, data: Pizza): Promise<Pizza>
  delete(id: string): Promise<void>
}