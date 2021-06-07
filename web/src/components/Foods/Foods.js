import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodsCell'

const DELETE_FOOD_MUTATION = gql`
  mutation DeleteFoodMutation($id: Int!) {
    deleteFood(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const FoodsList = ({ foods }) => {
  const [deleteFood] = useMutation(DELETE_FOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Food deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete food ' + id + '?')) {
      deleteFood({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Imgurl</th>
            <th>Stock</th>
            <th>Pack size</th>
            <th>Serving size</th>
            <th>Calories</th>
            <th>Total fat</th>
            <th>Sodium</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Price</th>
            <th>Category</th>
            <th>Regular</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{truncate(food.id)}</td>
              <td>{truncate(food.name)}</td>
              <td>{truncate(food.imgurl)}</td>
              <td>{truncate(food.stock)}</td>
              <td>{truncate(food.packSize)}</td>
              <td>{truncate(food.servingSize)}</td>
              <td>{truncate(food.calories)}</td>
              <td>{truncate(food.totalFat)}</td>
              <td>{truncate(food.sodium)}</td>
              <td>{truncate(food.protein)}</td>
              <td>{truncate(food.carbs)}</td>
              <td>{truncate(food.price)}</td>
              <td>{truncate(food.category)}</td>
              <td>{checkboxInputTag(food.regular)}</td>
              <td>{timeTag(food.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.food({ id: food.id })}
                    title={'Show food ' + food.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFood({ id: food.id })}
                    title={'Edit food ' + food.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete food ' + food.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(food.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FoodsList
