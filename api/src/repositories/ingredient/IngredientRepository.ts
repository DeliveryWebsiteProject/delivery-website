import { Ingredient } from "../../models"

export interface IngredientRepository {
  findAll(): Promise<Ingredient[]>
  add(data: Ingredient): Promise<Ingredient>
  update(data: Ingredient): Promise<Ingredient>
  delete(id: string): Promise<void>
  getById(id: string): Promise<Ingredient>
}