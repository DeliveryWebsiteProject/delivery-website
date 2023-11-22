import { defineStore } from 'pinia';
import { Item, Pizza } from '@/models';
import { CartService, ItemService } from "@/services";
import { useCartItemStore, useSessionStore } from "@/stores";

export const useCartStore = defineStore('cart', {
  state: () => ({
    itemsQuantity: 0,
  }),
  getters: {
    getItemsQuantity(): number {
      return this.itemsQuantity;
    }
  },
  actions: {
    async addCartItem(pizza: Pizza) {
      const cartItem = {
        ref_pizza: pizza.id,
        quantity: 1,
      } as Item;

      await useCartItemStore().fetchCartItems();

      const items = useCartItemStore().cartItems;

      let quantity = items.filter((i: Item) => i.ref_pizza === pizza.id)[0].quantity ?? 0;

      let item = null;

      if (quantity == 0) {
        item = await ItemService.addItem(cartItem);
      } else {
        cartItem.id = items.find((i: Item) => i.ref_pizza === pizza.id)?.id ?? '';
        cartItem.quantity = ++quantity;

        item = await ItemService.updateItem(cartItem);
      }

      if (item) {
        const session = useSessionStore();

        let userId = session.getActualUser?.id

        if (userId) {
          let cart = await CartService.addCart({ ref_user: userId!, ref_item: item.id })

          if (cart) {
            await useCartItemStore().fetchCartItems();
            await this.fetchCart();
          }
        }
      }
    },

    async fetchCart() {
      const session = useSessionStore();

      let userId = session.getActualUser?.id

      if (userId) {
        this.itemsQuantity = await CartService.countItems(userId) ?? 0;
      } else {
        this.itemsQuantity = 0;
      }
    }
  }
})