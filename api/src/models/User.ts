import { Document } from "mongoose"

interface User extends Document {
  email?: string
  firstName?: string
  lastName?: string
}

export default User