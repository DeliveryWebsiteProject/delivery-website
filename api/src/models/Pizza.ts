import { RowDataPacket } from "mysql2"

export enum Category {
  SALTY,
  SWEET
}

export enum State {
  ACTIVE,
  INACTIVE
}

interface Pizza extends RowDataPacket {
  id: Number
  name: string
  price: Number
  category: Category
  photo: string
  state: State
}

export default Pizza
