import { Item } from "@/models";
import { CartService, ItemService } from "@/services";
import { defineStore } from 'pinia';
import { useSessionStore } from "./session";
import { CartItemWrapper } from "@/models";

export const useCartItemStore = defineStore('item', {
  state: () => ({
    cartItems: [] as Item[],
  }),
  getters: {
    getCartItems(): Item[] {
      return this.cartItems;
    },
    async getCartItemsWrapper(): Promise<CartItemWrapper[]> {
      return await CartService.getCartItemsWrapper(useSessionStore().actualUser?.id ?? '') ?? [];
    }
  },
  actions: {
    async fetchCartItems() {
      let userId = useSessionStore().actualUser?.id;

      if (userId) {
        this.cartItems = await ItemService.getItemsByUser(userId) ?? [];
      }
    },
  }
});