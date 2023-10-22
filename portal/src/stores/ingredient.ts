import { defineStore } from 'pinia'
import { Ingredient } from '@/models'
import { IngredientService } from '@/services'

export const useIngredientStore = defineStore('ingredient', {
  state: () => ({
    ingredients: [] as Ingredient[],
    selectedIngredient: undefined as Ingredient | undefined
  }),
  getters: {
    getIngredients(state) {
      return state.ingredients
    },
    getSelectedIngredient(state) {
      return state.selectedIngredient
    }
  },
  actions: {
    setSelectedIngredient(ingredient: Ingredient) {
      this.selectedIngredient = ingredient
    },
    clearSelectedIngredient() {
      this.selectedIngredient = undefined
    },
    async addIngredient(ingredient: Ingredient) {
      await IngredientService.addIngredient(ingredient)
    },
    async editIngredient(ingredient: Ingredient) {
      await IngredientService.updateIngredient(ingredient)
    },
    async deleteIngredient() {
      const ingredient = this.selectedIngredient

      if (ingredient && ingredient.id) {
        await IngredientService.deleteIngredient(ingredient.id)
      }

      this.fetch()
    },
    async fetch() {
      const ingredients = await IngredientService.getIngredients()

      if (ingredients) {
        this.ingredients = ingredients
      }
    }
  }
})