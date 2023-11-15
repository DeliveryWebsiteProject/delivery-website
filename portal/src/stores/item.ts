import { Item } from "@/models";
import { ItemService } from "@/services";
import { defineStore } from 'pinia';
import { useSessionStore } from "./session";

export const useCartItemStore = defineStore('item', {
  state: () => ({
    cartItems: [] as Item[],
  }),
  getters: {
    getCartItems(): Item[] {
      return this.cartItems;
    }
  },
  actions: {
    async fetchCartItems() {
      let userId = useSessionStore().actualUser?.id;

      if (userId) {
        this.cartItems = await ItemService.getItemsByUser(userId) ?? [];
      }
    }
  }
});