import { RowDataPacket } from "mysql2"
import OrderItem from "./OrderItem";

export enum OrderState {
  PENDING,
  IN_PROGRESS,
  COMPLETED,
  CANCELLED
}

export enum Type {
  DELIVERY = 'Delivery',
  PICKUP = 'Balcão'
}

export enum Payment {
  CASH = 'Dinheiro',
  DEBIT_CARD = 'Cartão de débito',
  CREDIT_CARD = 'Cartão de crédito',
  PIX = 'Pix'
}

interface Order extends RowDataPacket {
  id: string;
  ref_user: string;
  total: number;
  created: Date;
  state: OrderState;
  type: Type;
  payment: Payment;
  items?: OrderItem[];
}

export default Order