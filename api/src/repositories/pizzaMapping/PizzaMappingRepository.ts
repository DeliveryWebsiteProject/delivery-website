import { PizzaMapping } from "../../models"

export default interface PizzaMappingRepository {
  findAll(): Promise<PizzaMapping[]>
  getByPizzaId(ref_pizza: string): Promise<PizzaMapping[]>
  add(data: PizzaMapping): Promise<PizzaMapping>
  hasIngredientMapping(ingredientId: string): Promise<boolean>
}