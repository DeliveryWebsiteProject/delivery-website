import { defineStore } from 'pinia'
import { PizzaMapping } from '@/models'
import { PizzaMappingService } from '@/services'

export const usePizzaMappingStore = defineStore('pizzaMapping', {
  state: () => ({
    pizzasMap: [] as PizzaMapping[],
    selectedPizzaMap: [] as PizzaMapping[]
  }),
  getters: {
    getPizzasMap(state) {
      return state.pizzasMap
    },
    getSelectedPizzaMap(state) {
      return state.selectedPizzaMap
    }
  },
  actions: {
    async setSelectedPizzaMap(ref_pizza: string | undefined) {
      if (ref_pizza) {
        const mappings = await PizzaMappingService.getByPizzaId(ref_pizza);

        if (mappings) {
          this.selectedPizzaMap = mappings
        }
      }
    },
    async addPizzaMap(pizzaMap: PizzaMapping) {
      return PizzaMappingService.addPizzaMap(pizzaMap)
    },
    async fetch() {
      const pizzasMap = await PizzaMappingService.getPizzaMaps()

      if (pizzasMap) {
        this.pizzasMap = pizzasMap
      }
    }
  }
})