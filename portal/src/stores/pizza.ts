import { defineStore } from 'pinia'
import { Pizza } from '@/models'
import { PizzaService } from '@/services'
import PhotoService from "@/services/PhotoService"

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
    async addPizza(pizza: Pizza, files?: File[],) {
      if (files) {
        if (files.length > 0) {
          const formData = new FormData()

          formData.append('photo', files[0])

          const data = await PhotoService.addPhoto(formData)

          pizza.ref_photo = data?.id;
        }
      }

      await PizzaService.addPizza(pizza)
    },
    async editPizza(pizza: Pizza) {
      await PizzaService.updatePizza(pizza)
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