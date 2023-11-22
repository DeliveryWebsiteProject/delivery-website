export enum Category {
  SALTY,
  SWEET
}

export enum State {
  ACTIVE,
  INACTIVE
}

interface Pizza {
  id?: string,
  ref_photo?: string,
  path?: string,
  name: string,
  price: number,
  category: Category,
  state: State,
  description: string,
  requests?: number
}

export default Pizza