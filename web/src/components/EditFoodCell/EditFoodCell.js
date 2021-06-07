import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FoodForm from 'src/components/FoodForm'

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
const UPDATE_FOOD_MUTATION = gql`
  mutation UpdateFoodMutation($id: Int!, $input: UpdateFoodInput!) {
    updateFood(id: $id, input: $input) {
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

export const Success = ({ food }) => {
  const [updateFood, { loading, error }] = useMutation(UPDATE_FOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Food updated')
      navigate(routes.foods())
    },
  })

  const onSave = (input, id) => {
    updateFood({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Food {food.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FoodForm food={food} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
