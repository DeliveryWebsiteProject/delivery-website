import { Item } from "@/models";
import { CartService, ItemService } from "@/services";
import { defineStore } from 'pinia';
import { useSessionStore } from "./session";
import { CartItemWrapper } from "@/models";

export const useCartItemStore = defineStore('item', {
  state: () => ({
    cartItems: [] as Item[],
    cartItemsWrapper: [] as CartItemWrapper[]
  }),
  getters: {
    getCartItems(): Item[] {
      return this.cartItems;
    },
    getCartItemsWrapper(): CartItemWrapper[] {
      return this.cartItemsWrapper
    }
  },
  actions: {
    async fetchCartItems() {
      let userId = useSessionStore().actualUser?.id;

      if (userId) {
        this.cartItems = await ItemService.getItemsByUser(userId) ?? [];

        await this.fetchCartItemsWrapper();
      }
    },
    async updateItem(item: Item) {
      await ItemService.updateItem(item);
    },
    async deleteItem(item: Item) {
      let deletedItem = await ItemService.deleteItem(item.id ?? '');

      if (deletedItem) {
        let deletedCart = await CartService.deleteCart(useSessionStore().actualUser?.id ?? '', deletedItem.id ?? '');

        if (deletedCart) {
          return deletedItem;
        }
      }
    },
    async fetchCartItemsWrapper() {
      let userId = useSessionStore().actualUser?.id;

      if (userId) {
        return this.cartItemsWrapper = await CartService.getCartItemsWrapper(userId) ?? [];
      }
    }
  }
});