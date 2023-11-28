import { RowDataPacket } from "mysql2"

export enum State {
  PENDING,
  ACCEPTED,
  CANCELED,
  DELIVERED
}

interface Item extends RowDataPacket {
  id: string,
  ref_pizza: string,
  quantity: number,
  state: State,
}

export default Item