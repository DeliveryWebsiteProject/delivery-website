import { RowDataPacket } from "mysql2"

export enum State {
  OPEN,
  CLOSE
}

interface Settings extends RowDataPacket {
  days: string,
  begin: string,
  end: string,
  state: State,
  phone: string,
  instagram: string,
}

export default Settings