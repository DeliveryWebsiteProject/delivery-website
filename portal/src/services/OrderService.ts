import { Order, CartItemWrapper } from "@/models";
import service from "./service";

export default {
  async getOrders(): Promise<Order[] | undefined> {
    return service.get<Order[]>('/orders');
  },
  async getOrderItems(id: string): Promise<CartItemWrapper[] | undefined> {
    return service.get<CartItemWrapper[]>(`/orders/${id}`);
  },
  async createOrder(order: Order): Promise<Order | undefined> {
    return service.post<Order>('/orders', order);
  },
  async updateOrder(order: Order): Promise<Order | undefined> {
    return service.put<Order>(`/orders/${order.id}`, order);
  },
}