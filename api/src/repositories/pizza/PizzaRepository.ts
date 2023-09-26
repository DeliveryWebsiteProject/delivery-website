import { Pizza } from "../../models"

export default interface PizzaRepository {
  findAll(): Promise<Pizza[]>
  store(data: Pizza): Promise<Pizza>
  update(id: string, data: Pizza): Promise<Pizza>
  delete(id: string): Promise<void>
  show(id: string): Promise<Pizza>
}