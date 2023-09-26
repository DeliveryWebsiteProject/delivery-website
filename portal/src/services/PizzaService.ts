import { Pizza } from '@/models'
import service from './service'

export default {
  async getPizzaById(data: string): Promise<Pizza | undefined> {
    return service.get<Pizza>(`/pizzas/${data}`)
  },

  async getPizzas(): Promise<Pizza[] | undefined> {
    return service.get<Pizza[]>('/pizzas');
  },

  async addPizza(data: Pizza): Promise<Pizza | undefined> {
    return service.post<Pizza>('/pizzas', data)
  },

  async updatePizza(data: Pizza): Promise<Pizza | undefined> {
    return service.put<Pizza>(`/pizzas/${data.id}`, data)
  },

  async deletePizza(id: string): Promise<Pizza | undefined> {
    return service.delete<Pizza>(`/pizzas/${id}`)
  }
}