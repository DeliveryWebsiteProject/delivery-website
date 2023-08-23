import { RowDataPacket } from "mysql2"

interface Ingredient extends RowDataPacket {
  id: Number
  name: string
}

export default Ingredient
