import OrderItem from "./OrderItem";

export enum State {
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
  id: String;
  userId: String;
  total: number;
  createdAt: Date;
  state: State;
  type: Type;
  payment: Payment;
  items?: OrderItem[];
}