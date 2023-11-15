import { Cart } from "@/models";
import service from "./service";

export default {
  async addCart(cart: Cart): Promise<Cart | undefined> {
    return service.post<Cart>(`/carts`, cart);
  },

  async countItems(userId: string): Promise<number | undefined> {
    return service.get<number>(`/carts/${userId}/count`);
  },
}