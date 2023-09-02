import { RowDataPacket } from "mysql2"

export enum State {
  ACTIVE,
  INACTIVE
}

interface Ingredient extends RowDataPacket {
  id: string,
  name: string,
  state: State
}

export default Ingredient
