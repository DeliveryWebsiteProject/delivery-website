import CartItemWrapper from '../../models/CartItemWrapper';
import Order from "../../models/Order";
import OrderItem from '../../models/OrderItem';

export interface OrderRepository {
  findAll(): Promise<Order[]>
  findOrderItems(ref_order: string): Promise<CartItemWrapper[]>
  createOrder(order: Order): Promise<Order>
  updateOrder(id: string, data: Order): Promise<Order>
}