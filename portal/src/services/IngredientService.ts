import { Ingredient } from '@/models'
import service from '@/services/service'

export default {
  async getIngredientById(data: string): Promise<Ingredient | undefined> {
    return service.get<Ingredient>(`/ingredients/${data}`)
  },

  async getIngredients(): Promise<Ingredient[] | undefined> {
    return service.get<Ingredient[]>('/ingredients');
  },

  async addIngredient(data: Ingredient): Promise<Ingredient | undefined> {
    return service.post<Ingredient>('/ingredients', data)
  },

  async updateIngredient(data: Ingredient): Promise<Ingredient | undefined> {
    return service.put<Ingredient>(`/ingredients/${data.id}`, data)
  },

  async deleteIngredient(id: string): Promise<Ingredient | undefined> {
    return service.delete<Ingredient>(`/ingredients/${id}`)
  }
}