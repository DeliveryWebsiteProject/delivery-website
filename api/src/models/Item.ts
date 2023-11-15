import { RowDataPacket } from "mysql2"

interface Item extends RowDataPacket {
  id: string,
  ref_pizza: string,
  quantity: number
}

export default Item