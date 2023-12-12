import { RowDataPacket } from "mysql2"

interface OrderItem extends RowDataPacket {
  ref_order: string;
  ref_item: string;
}

export default OrderItem