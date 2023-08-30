import { PizzaMapping } from "../../models"

export default interface PizzaMappingRepository {
  store(data: PizzaMapping[]): Promise<PizzaMapping[]>
}