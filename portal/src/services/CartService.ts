import { Cart, CartItemWrapper } from "@/models";
import service from "./service";

export default {
  async addCart(cart: Cart): Promise<Cart | undefined> {
    return await service.post<Cart>(`/carts`, cart);
  },

  async countItems(userId: string): Promise<number | undefined> {
    return await service.get<number>(`/carts/${userId}/count`);
  },

  async deleteCart(userId: string, itemId: string): Promise<Cart | undefined> {
    return await service.delete<Cart>(`/carts/${userId}/${itemId}`);
  },

  async getCartItemsWrapper(userId: string): Promise<CartItemWrapper[] | undefined> {
    return await service.get<CartItemWrapper[]>(`/carts/${userId}/items`);
  }
}