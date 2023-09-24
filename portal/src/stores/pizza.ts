import { defineStore } from 'pinia'
import { Pizza } from '@/models'
import { PizzaService } from '@/services'

export const usePizzaStore = defineStore('pizza', {
  state: () => ({
    pizzas: [] as Pizza[],
    selectedPizza: undefined as Pizza | undefined
  }),
  getters: {
    getPizzas(state) {
      return state.pizzas
    },
    getSelectedPizza(state) {
      return state.selectedPizza
    }
  },
  actions: {
    setSelectedPizza(pizza: Pizza) {
      this.selectedPizza = pizza
    },
    clearSelectedPizza() {
      this.selectedPizza = undefined
    },
    async addPizza(pizza: Pizza) {
      await PizzaService.addPizza(pizza)
    },
    async editPizza() {
      const pizza = this.selectedPizza

      if (pizza) {
        await PizzaService.updatePizza(pizza)
      }
    },
    async deletePizza() {
      const pizza = this.selectedPizza

      if (pizza && pizza.id) {
        await PizzaService.deletePizza(pizza.id)
      }

      this.fetch()
    },
    async fetch() {
      const pizzas = await PizzaService.getPizzas()

      if (pizzas) {
        this.pizzas = pizzas
      }
    }
  }
})