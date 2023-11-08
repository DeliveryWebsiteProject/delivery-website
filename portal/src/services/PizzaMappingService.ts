import { PizzaMapping } from '@/models'
import service from '@/services/service'

export default {
  async getPizzaMaps(): Promise<PizzaMapping[] | undefined> {
    return service.get<PizzaMapping[]>('/pizzaMap');
  },

  async getByPizzaId(ref_pizza: string): Promise<PizzaMapping[] | undefined> {
    return service.get<PizzaMapping[]>(`/pizzaMap/${ref_pizza}`)
  },

  async addPizzaMap(data: PizzaMapping): Promise<PizzaMapping | undefined> {
    return service.post<PizzaMapping>('/pizzaMap', data)
  },

  // async updatePizza(data: PizzaMapping): Promise<PizzaMapping | undefined> {
  //   return service.put<PizzaMapping>(`/pizzas/${data.id}`, data)
  // },

  // async deletePizza(id: string): Promise<PizzaMapping | undefined> {
  //   return service.delete<PizzaMapping>(`/pizzas/${id}`)
  // }
}