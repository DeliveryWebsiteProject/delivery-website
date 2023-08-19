enum Category {
  SALTY,
  SWEET
}

enum State {
  ACTIVE,
  INACTIVE
}

interface Pizza {
  id: Number
  name: string
  price: Number
  category: Category
  photo: string
  state: State
}

export default Pizza
