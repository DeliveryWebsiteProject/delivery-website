import { RowDataPacket } from "mysql2"

interface PizzaMapping extends RowDataPacket {
  ref_pizza: string,
  ref_ingredient: string,
}

export default PizzaMapping
