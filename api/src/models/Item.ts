import { RowDataPacket } from "mysql2"

interface Item extends RowDataPacket {
  id: string,
  ref_pizza: string,
  ref_cart: string,
  quantity: number
}

export default Item