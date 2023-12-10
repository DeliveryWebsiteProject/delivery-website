import Order from "../../models/Order";

export interface OrderRepository {
  finishOrder: (order: Order) => Promise<Order>
}