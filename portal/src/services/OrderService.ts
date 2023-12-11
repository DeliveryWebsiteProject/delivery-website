import { Order } from "@/models";
import service from "./service";

export default {
  async finishOrder(order: Order): Promise<Order | undefined> {
    console.log(order);
    return service.post<Order>('/orders', order);
  }
}