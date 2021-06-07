import Food from 'src/components/Food'

export const QUERY = gql`
  query FIND_FOOD_BY_ID($id: Int!) {
    food: food(id: $id) {
      id
      name
      imgurl
      stock
      packSize
      servingSize
      calories
      totalFat
      sodium
      protein
      carbs
      price
      category
      regular
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Food not found</div>

export const Success = ({ food }) => {
  return <Food food={food} />
}
