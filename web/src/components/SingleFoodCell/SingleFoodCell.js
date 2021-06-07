export const QUERY = gql`
  query SingleFoodQuery($id: Int!) {
    food(id: $id) {
      name
      servingSize
      calories
      totalFat
      sodium
      protein
      stock
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ food }) => {
  console.log(food)
  return <div>{JSON.stringify(food)}</div>
}
