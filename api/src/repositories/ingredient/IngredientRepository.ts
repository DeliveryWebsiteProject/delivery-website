import { Ingredient } from "../../models"

export interface IngredientRepository {
  findAll(): Promise<Ingredient[]>
  store(data: Ingredient): Promise<Ingredient>
  update(data: Ingredient): Promise<Ingredient>
  delete(id: string): Promise<Ingredient>
  show(id: string): Promise<Ingredient>
}