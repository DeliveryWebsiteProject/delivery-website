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
  ref_photo: string,
  name: string,
  price: Number,
  category: Category,
  state: State,
  ingredients?: Ingredient[],
}

export default Pizza
