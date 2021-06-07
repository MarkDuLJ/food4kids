export const schema = gql`
  type Food {
    id: Int!
    name: String!
    imgurl: String
    stock: Int!
    packSize: Int!
    servingSize: Int!
    calories: Float!
    totalFat: Float!
    sodium: Float!
    protein: Float!
    carbs: Float!
    price: Float!
    category: Category!
    regular: Boolean!
    createdAt: DateTime!
  }

  enum Category {
    Fruit
    Snack
    CanMeat
    CanVeg
    Veg
    Grains
    Drink
  }

  type Query {
    foods: [Food!]!
    food(id: Int!): Food
  }

  input CreateFoodInput {
    name: String!
    imgurl: String
    stock: Int!
    packSize: Int!
    servingSize: Int!
    calories: Float!
    totalFat: Float!
    sodium: Float!
    protein: Float!
    carbs: Float!
    price: Float!
    category: Category!
    regular: Boolean!
  }

  input UpdateFoodInput {
    name: String
    imgurl: String
    stock: Int
    packSize: Int
    servingSize: Int
    calories: Float
    totalFat: Float
    sodium: Float
    protein: Float
    carbs: Float
    price: Float
    category: Category
    regular: Boolean
  }

  type Mutation {
    createFood(input: CreateFoodInput!): Food!
    updateFood(id: Int!, input: UpdateFoodInput!): Food!
    deleteFood(id: Int!): Food!
  }
`
