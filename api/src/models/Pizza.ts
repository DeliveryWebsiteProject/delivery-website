import { RowDataPacket } from "mysql2"
import Ingredient from "./Ingredient"

export enum Category {
  SALTY,
  SWEET
}

export enum State {
  ACTIVE,
  INACTIVE
}

interface Pizza extends RowDataPacket {
  id: string,
  name: string,
  price: Number,
  category: Category,
  photo: string,
  state: State,
  ingredients?: Ingredient[],
}

export default Pizza
