import { RowDataPacket } from "mysql2"

interface Ingredient extends RowDataPacket {
  id: string,
  name: string,
}

export default Ingredient
