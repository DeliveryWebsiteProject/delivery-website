import OrderItem from "./orderItem";

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

export default interface Order {
  id: string;
  ref_user: string;
  username?: string,
  total: number;
  created: Date;
  state: OrderState;
  type: Type;
  payment: Payment;
  items?: OrderItem[];
  itemsDetails?: string
}