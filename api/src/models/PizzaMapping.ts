import { RowDataPacket } from "mysql2"

interface PizzaMapping extends RowDataPacket {
  ref_pizza: Number
  ref_ingr: Number
}

export default PizzaMapping
