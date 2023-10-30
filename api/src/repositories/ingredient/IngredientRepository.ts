import { Ingredient } from "../../models"

export interface IngredientRepository {
  findAll(): Promise<Ingredient[]>
  getById(id: string): Promise<Ingredient>
  add(data: Ingredient): Promise<Ingredient>
  update(id: string, data: Ingredient): Promise<Ingredient>
  delete(id: string): Promise<void>
}