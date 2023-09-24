import { Pizza } from "../../models"

export default interface PizzaRepository {
  findAll(): Promise<Pizza[]>
  store(data: Pizza): Promise<Pizza>
  update(data: Pizza): Promise<Pizza>
  delete(id: number): Promise<void>
  show(id: number): Promise<Pizza>
}