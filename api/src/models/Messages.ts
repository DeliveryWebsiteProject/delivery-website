import { RowDataPacket } from "mysql2"

interface Messages extends RowDataPacket {
  welcome: string,
  start: string,
  finish: string,
}

export default Messages
